#!/usr/bin/env node

/**
 * Build script for investor package
 * Creates a static HTML export + ZIP archive
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🏗️  Building Investor Package...\n');

// Step 1: Build static export
console.log('1. Building static HTML export...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Static export complete\n');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}

// Step 2: Create investor package directory
console.log('2. Creating investor package...');
const packageDir = path.join(__dirname, '..', 'investor-package');
if (!fs.existsSync(packageDir)) {
  fs.mkdirSync(packageDir, { recursive: true });
}

// Step 3: Copy build files
console.log('3. Copying build files...');
const distDir = path.join(__dirname, '..', 'dist');
const packageDistDir = path.join(packageDir, 'website');

copyDirectory(distDir, packageDistDir);

// Step 4: Create README
console.log('4. Creating README...');
const readmeContent = `# AlgoMock Investor Package

## Contents

- **website/** - Static HTML website (open index.html in any browser)

## Viewing the Website

### Option 1: Open Directly
Navigate to website/index.html and double-click to view in your browser.

### Option 2: Local Server (for best experience)
\`\`\`bash
cd website
npx serve .
# or
python -m http.server 3000
\`\`\`

Then open http://localhost:3000

## Website Sections

- **Hero** - Value proposition with live code preview
- **Analytics Dashboard** - Real-time platform metrics
- **Features** - 8 core product features
- **How It Works** - 3-step process
- **Comparison** - vs ChatGPT & competitors
- **Testimonials** - User reviews with results
- **Pricing** - Free/Pro/Enterprise tiers
- **FAQ** - Common questions
- **Investor Section** - Series A opportunity
- **Financials** - Revenue charts & projections
- **Team** - Founders & advisors

## Key Metrics

- MRR: $224,000
- ARR: $2.7M
- YoY Growth: +2,396%
- Users: 12,500
- Gross Margin: 87%
- LTV:CAC: 19.8x

## Contact

For questions or follow-up:
Email: investors@algomock.ai
`;

fs.writeFileSync(path.join(packageDir, 'README.txt'), readmeContent);

console.log('\n✅ Package created successfully!');
console.log('📁 Location:', path.resolve(packageDir));
console.log('\nNext steps:');
console.log('1. ZIP the investor-package folder');
console.log('2. Send to investors');
console.log('3. They can open website/index.html in any browser');

// Helper function
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}
