export type Language = "pinescript" | "mql5";
export type MessageRole = "user" | "ai";
export type StrategyStatus = "active" | "draft";

export interface Strategy {
  id: string;
  name: string;
  lang: Language;
  status: StrategyStatus;
  time: string;
}

export interface Message {
  id: string;
  role: MessageRole;
  content: string;
  code?: string;
  language?: Language;
  timestamp: Date;
}

export interface Template {
  id: string;
  name: string;
  prompt: string;
}

export interface CodeBlockProps {
  code: string;
  language: Language;
  title?: string;
  isValid?: boolean;
}

export interface SidebarProps {
  history: Strategy[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onTemplateClick: (prompt: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export interface ChatContainerProps {
  messages: Message[];
  isTyping: boolean;
  onSuggestionClick: (prompt: string) => void;
}

export interface ChatInputProps {
  onSend: (message: string, language: Language) => void;
  onTemplateClick: (prompt: string) => void;
  disabled?: boolean;
  initialValue?: string;
}
