# MSV Landing Page

Static landing page for Mining Services Vietnam (MSV) company profile.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: TailwindCSS 4
- **Language**: TypeScript
- **Font**: Montserrat (Google Fonts)
- **Icons**: Lucide React
- **Hosting**: Vercel

## Project Structure

```
/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with Navigation & Footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── services/          # Services page
│   ├── team/              # Team page
│   ├── projects/          # Projects page
│   ├── contact/           # Contact page
│   └── sitemap.ts         # SEO sitemap
├── components/
│   ├── ui/                # Base UI components (Button, Card, Container)
│   └── sections/          # Page section components
├── data/                  # Static data files (team, services, projects)
├── lib/                   # Utility functions
├── public/                # Static assets
│   ├── team/              # Team member photos
│   └── logos/             # MSV logo variants
├── Context/               # Source content documents
├── References/            # Brand assets
└── THEME.md               # Brand guidelines

## Development

### Install Dependencies

\`\`\`bash
npm install
\`\`\`

### Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

\`\`\`bash
npm run build
\`\`\`

### Run Production Server Locally

\`\`\`bash
npm run start
\`\`\`

### Lint Code

\`\`\`bash
npm run lint
\`\`\`

## Deployment to Vercel

### Option 1: Connect GitHub Repository (Recommended)

1. Push your code to GitHub
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Next.js and configure build settings
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

Follow the prompts to complete deployment.

### Custom Domain Configuration

1. In Vercel Dashboard, go to your project
2. Navigate to "Settings" → "Domains"
3. Add your custom domain: `www.dma-msv.com`
4. Configure DNS records as instructed by Vercel:

\`\`\`
A Record:     @ → 76.76.21.21
CNAME:        www → cname.vercel-dns.com
\`\`\`

## SEO Features

✅ Meta titles and descriptions on all pages  
✅ Open Graph tags for social sharing  
✅ Semantic HTML markup  
✅ Auto-generated sitemap.xml  
✅ robots.txt configuration  
✅ Mobile-responsive design  
✅ Fast load times with Next.js optimizations  
✅ Image optimization with next/image  
✅ Clean URL structure  

## Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| MSV Blue | `#3494BA` | Primary brand, CTAs |
| MSV Dark-2 | `#373545` | Body text |
| MSV Light-2 | `#CEDBE6` | Subtle backgrounds |
| MSV Cyan | `#58B6C0` | Secondary highlights |
| MSV Mint | `#75BDA7` | Success states |
| MSV Green | `#6B9F25` | Links, positive actions |
| MSV Gold | `#D8A337` | Warnings, attention |

## Pages

- **Home** (`/`) - Hero, company overview, services snapshot, projects
- **About** (`/about`) - Company story, vision, capabilities
- **Services** (`/services`) - Detailed service descriptions, delivery models
- **Team** (`/team`) - Leadership profiles with photos
- **Projects** (`/projects`) - Current mining projects
- **Contact** (`/contact`) - Contact form, office information

## Content Sources

Content extracted from:
- `/Context/CompanyOverview.md`
- `/Context/LeadershipAndKeyPersonnel.md`
- `/Context/CoreCompetencies.md`
- `/Context/ServiceDeliveryModel.md`
- `/Context/PresentationExtraction.md`
- `/Context/ContactPage.md`

Brand assets from:
- `/References/Logos/` - MSV logo variants
- `/References/KeyPersonnel/` - Team headshots

## License

© 2025 Mining Services Vietnam JSC. All rights reserved.
