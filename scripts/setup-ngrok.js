#!/usr/bin/env node

/**
 * Setup guide for ngrok - easiest way to share locally
 * Creates a public HTTPS URL that tunnels to your local server
 */

console.log(`
🌐 EASIEST OPTION: Use ngrok for Public URL
═══════════════════════════════════════════════════

ngrok creates a secure HTTPS tunnel to your local server.
Your investors get a URL like: https://abc123.ngrok.io

📥 STEP 1: Install ngrok
─────────────────────────
Option A - Download:
  1. Go to: https://ngrok.com/download
  2. Download for Windows
  3. Extract ngrok.exe to this folder

Option B - npm (if you have Node):
  npm install -g ngrok

🔑 STEP 2: Get Auth Token (FREE)
──────────────────────────────────
  1. Sign up at: https://dashboard.ngrok.com/signup
  2. Get your auth token from: https://dashboard.ngrok.com/get-started/your-authtoken
  3. Run: ngrok config add-authtoken YOUR_TOKEN

🚀 STEP 3: Start Sharing
─────────────────────────
  1. Start your website: npm run dev
  2. In another terminal, run: ngrok http 3000
  3. Copy the HTTPS URL (looks like: https://xxxx.ngrok-free.app)
  4. Send to investors!

✨ BENEFITS:
  • HTTPS URL (secure)
  • Works through firewalls
  • No IP configuration needed
  • Works from anywhere

⚠️  FREE LIMITATIONS:
  • URL changes each time you restart ngrok
  • 1 concurrent tunnel
  • 40 connections/minute
  
  For static URL: Upgrade to paid ($5/month)
`);
