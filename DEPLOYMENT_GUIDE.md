# MSV Landing Page - Deployment Guide

## Pre-Deployment Checklist

- [x] All pages built and tested
- [x] Production build successful (`npm run build`)
- [x] No TypeScript errors
- [x] All images optimized
- [x] SEO metadata configured
- [x] Sitemap.xml generated
- [x] robots.txt configured

## Deployment Steps for Vercel

### Step 1: Prepare Repository

1. Ensure all code is committed to Git
2. Push to GitHub repository

\`\`\`bash
git add .
git commit -m "Initial MSV landing page implementation"
git push origin main
\`\`\`

### Step 2: Connect to Vercel

1. Go to [https://vercel.com/dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js configuration

### Step 3: Configure Build Settings

Vercel will automatically detect these settings:

- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node Version**: 20.x (recommended)

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (usually 1-2 minutes)
3. Your site will be live at `https://your-project-name.vercel.app`

### Step 5: Configure Custom Domain

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add custom domain: `www.dma-msv.com`
4. Vercel will provide DNS configuration instructions

#### DNS Configuration

Add these records to your domain registrar (where you purchased dma-msv.com):

**For root domain (@):**
\`\`\`
Type: A
Name: @
Value: 76.76.21.21
TTL: 3600
\`\`\`

**For www subdomain:**
\`\`\`
Type: CNAME
Name: www
Value: cname.vercel-dns.com
TTL: 3600
\`\`\`

**Note**: DNS propagation can take 24-48 hours, but usually completes within a few hours.

### Step 6: Enable Vercel Analytics (Optional)

1. In project dashboard, navigate to "Analytics"
2. Click "Enable Vercel Analytics"
3. Redeploy your site to activate

## Post-Deployment Tasks

### 1. Submit Sitemap to Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://www.dma-msv.com`
3. Verify ownership (Vercel provides TXT record for verification)
4. Submit sitemap: `https://www.dma-msv.com/sitemap.xml`

### 2. Test All Pages

Visit and verify each page:
- [x] Home: `https://www.dma-msv.com/`
- [x] About: `https://www.dma-msv.com/about`
- [x] Services: `https://www.dma-msv.com/services`
- [x] Team: `https://www.dma-msv.com/team`
- [x] Projects: `https://www.dma-msv.com/projects`
- [x] Contact: `https://www.dma-msv.com/contact`

### 3. Run Lighthouse Audit

1. Open site in Chrome
2. Right-click → Inspect → Lighthouse tab
3. Run audit for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

**Target Scores:**
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### 4. Test Contact Form

1. Fill out contact form
2. Verify form submission (currently logs to console)
3. Consider integrating with email service (Resend, SendGrid, etc.)

### 5. Mobile Responsiveness Check

Test on multiple devices:
- Desktop (1920x1080, 1366x768)
- Tablet (iPad, 768x1024)
- Mobile (iPhone, Android, 375x667)

## Environment Variables (If Needed)

If you add features requiring environment variables:

1. In Vercel Dashboard → "Settings" → "Environment Variables"
2. Add variables:
   - `NEXT_PUBLIC_SITE_URL=https://www.dma-msv.com`
   - `CONTACT_FORM_EMAIL=info@dma-msv.com` (if email integration added)

## Continuous Deployment

Vercel automatically deploys when you push to GitHub:

- **Production**: Pushes to `main` branch → `www.dma-msv.com`
- **Preview**: Pushes to other branches → `branch-name.vercel.app`

## Rollback

If something goes wrong:

1. Go to Vercel Dashboard → "Deployments"
2. Find previous successful deployment
3. Click "..." → "Promote to Production"

## Monitoring

### Analytics
- **Vercel Analytics**: Real-time visitor metrics
- **Google Analytics**: (Optional) Add tracking ID in layout.tsx

### Performance
- **Vercel Speed Insights**: Tracks Core Web Vitals
- **Lighthouse CI**: Automated performance testing

## Support Contacts

### Technical Issues
- Vercel Support: [vercel.com/help](https://vercel.com/help)
- Next.js Docs: [nextjs.org/docs](https://nextjs.org/docs)

### Content Updates
- Contact: info@dma-msv.com
- Repository maintainer: [GitHub username]

## Troubleshooting

### Build Fails
\`\`\`bash
# Test locally first
npm run build

# Check error logs in Vercel Dashboard
# Most common: missing dependencies or TypeScript errors
\`\`\`

### Images Not Loading
- Verify images exist in `/public` folder
- Check Next.js Image component syntax
- Ensure image paths are correct

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records with `dig www.dma-msv.com`
- Check domain registrar's DNS settings

### Contact Form Not Working
- Current implementation logs to console only
- Requires backend integration for actual email sending
- Options: Vercel Serverless Functions, Resend, SendGrid, Formspree

## Future Enhancements

- [ ] Integrate contact form with email service
- [ ] Add blog/news section
- [ ] Create detailed case studies
- [ ] Add language switcher (Vietnamese/English)
- [ ] Implement CMS for easy content updates
- [ ] Add project photo galleries
- [ ] Integrate Google Analytics
- [ ] Add live chat widget

---

**Last Updated**: February 2026
