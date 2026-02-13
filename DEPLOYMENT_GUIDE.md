# Deploy AlgoMock to Vercel - Step by Step Guide

## Overview
This guide will walk you through deploying your AlgoMock website to Vercel for free.

---

## 📋 Prerequisites

Before starting, make sure you have:
- [ ] A GitHub account (https://github.com/signup)
- [ ] Your project code ready
- [ ] Git installed on your computer

---

## Step 1: Push Code to GitHub

### 1.1 Initialize Git Repository
```bash
# Navigate to your project folder
cd C:\Users\busin\OneDrive\Desktop\algo_mock

# Initialize git
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - AlgoMock investor website"
```

### 1.2 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `algomock-investor` (or any name you like)
3. Make it **Public** (or Private if you prefer)
4. Click **Create repository**

### 1.3 Push to GitHub
```bash
# Add remote (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/algomock-investor.git

# Push code
git branch -M main
git push -u origin main
```

---

## Step 2: Deploy to Vercel

### Option A: Via Vercel Dashboard (Easiest)

1. **Sign up for Vercel**
   - Go to https://vercel.com/signup
   - Click **Continue with GitHub**
   - Authorize Vercel to access your GitHub

2. **Import Project**
   - Go to https://vercel.com/new
   - Click **Import Git Repository**
   - Find and select your `algomock-investor` repo
   - Click **Import**

3. **Configure Project**
   - Project Name: `algomock-investor` (or customize)
   - Framework Preset: **Next.js** (should auto-detect)
   - Root Directory: `./` (leave as is)
   - Build Command: `next build` (leave as is)
   - Output Directory: (leave empty for Next.js)
   - Install Command: `npm install` (leave as is)

4. **Deploy**
   - Click **Deploy**
   - Wait 2-3 minutes for build to complete
   - Your site will be live at: `https://algomock-investor.vercel.app`

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
cd C:\Users\busin\OneDrive\Desktop\algo_mock
vercel

# Follow prompts:
# ? Set up "~/algo_mock"? [Y/n] → Y
# ? Which scope? [your-username] → Select your account
# ? Link to existing project? [y/N] → N
# ? What's your project name? [algo-mock] → algomock-investor
# ? Which directory is your code located? ./ → Enter

# For production deployment
vercel --prod
```

---

## Step 3: Configure Custom Domain (Optional)

### 3.1 Add Domain in Vercel
1. Go to your project dashboard: https://vercel.com/dashboard
2. Select your `algomock-investor` project
3. Click **Settings** tab
4. Click **Domains** in left sidebar
5. Enter your domain: `investors.algomock.ai`
6. Click **Add**

### 3.2 Configure DNS
At your domain registrar (Namecheap, GoDaddy, Cloudflare, etc.):

**Option A: Using Nameservers (Recommended)**
```
Type: NS
Name: @
Value: ns1.vercel-dns.com

Type: NS
Name: @
Value: ns2.vercel-dns.com
```

**Option B: Using A Record**
```
Type: A
Name: @
Value: 76.76.21.21
```

**Option C: Using CNAME (for subdomains)**
```
Type: CNAME
Name: investors
Value: cname.vercel-dns.com
```

---

## Step 4: Verify Deployment

### Check These URLs Work:
- [ ] `https://algomock-investor.vercel.app/` - Landing page
- [ ] `https://algomock-investor.vercel.app/app` - AI Chat app
- [ ] `https://algomock-investor.vercel.app/marketing` - Marketing page

### Features to Test:
- [ ] Hero section with animated code
- [ ] Analytics dashboard
- [ ] All 8 feature cards
- [ ] Pricing section
- [ ] Investor section
- [ ] Team bios

---

## Step 5: Share with Investors

### Email Template:
```
Subject: AlgoMock Investor Website - Live Demo

Hi [Investor Name],

Our investor website is now live:

🌐 https://algomock-investor.vercel.app

Or if you prefer a custom domain:
🌐 https://investors.algomock.ai (if you set up custom domain)

The site includes:
• Full product demo
• Live metrics & analytics
• Financial projections
• Team backgrounds
• Series A investment details

Let me know if you'd like to schedule a call.

Best,
[Your Name]
```

---

## 🔄 Auto-Deploy on Updates

Vercel automatically redeploys when you push to GitHub:

```bash
# Make changes to your code
cd C:\Users\busin\OneDrive\Desktop\algo_mock

# Edit files...

# Commit and push
git add .
git commit -m "Update: Added new testimonials"
git push

# Vercel will automatically rebuild and deploy!
```

---

## 🛠️ Troubleshooting

### Issue 1: Build Fails
**Solution:**
```bash
# Check if build works locally first
npm run build

# If it works locally but fails on Vercel:
# 1. Check Node version (should be 18+)
# 2. Check for case-sensitive import issues
# 3. Check vercel.json configuration
```

### Issue 2: Images Not Loading
**Solution:**
- Make sure images are in `/public` folder
- Use relative paths: `/images/logo.png`

### Issue 3: 404 Errors on Routes
**Solution:**
- Vercel handles Next.js routing automatically
- Make sure your `next.config.js` doesn't have `trailingSlash: true` conflicts

### Issue 4: Environment Variables
**Solution:**
```bash
# If you need env variables:
# 1. Go to Vercel Dashboard → Project → Settings → Environment Variables
# 2. Add variables there
# 3. Redeploy
```

---

## 📊 Vercel Dashboard Features

Once deployed, you can:
- **Analytics** - See visitor stats
- **Speed Insights** - Performance metrics
- **Logs** - Real-time build and runtime logs
- **Domains** - Manage custom domains
- **Settings** - Environment variables, build settings

---

## 🎉 You're Done!

Your website is now:
- ✅ Hosted on Vercel's global CDN
- ✅ Automatically deployed on git push
- ✅ Free SSL certificate (HTTPS)
- ✅ Auto-scaling (handles any traffic)

**Next Steps:**
1. Share the URL with investors
2. Set up analytics to track visits
3. Consider adding a custom domain for professionalism

---

## 💡 Pro Tips

1. **Use a Custom Domain** - Looks more professional than `.vercel.app`
2. **Enable Analytics** - Vercel has built-in analytics (free tier available)
3. **Preview Deployments** - Every pull request gets its own preview URL
4. **Password Protection** - You can password-protect the site in Vercel settings

---

Need help? Contact:
- Vercel Support: https://vercel.com/support
- Documentation: https://vercel.com/docs
