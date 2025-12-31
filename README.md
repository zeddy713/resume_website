# Resume Website - Data Analyst Portfolio

A professional, minimal resume website built with Next.js, TypeScript, and Tailwind CSS. Designed specifically for Data Analyst / BI Analyst job applications, emphasizing data capabilities, analytical methods, project impact, and business value.

## ✨ Features

- **Static Export Ready**: Generate pure HTML files for local preview or any static hosting
- **Dark Mode**: System-aware theme switching with localStorage persistence
- **Interactive Projects Gallery**: Search, filter by tags, and view detailed project modals
- **Responsive Design**: Mobile-first, works beautifully on all devices
- **SEO Optimized**: Complete metadata, sitemap, and robots.txt
- **Accessible**: Keyboard navigation, focus management, and proper ARIA labels
- **Contact Form**: Integrated with third-party services (Formspree/Web3Forms) with mailto fallback
- **One-Click Deployment**: Ready for Vercel, GitHub Pages, or any static host

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git (for version control)

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd resume-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📦 Available Scripts

### Development

```bash
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm run lint         # Run ESLint
```

### Static Export & Preview

```bash
npm run export       # Build and export static HTML to /out directory
npm run preview:html # Preview exported HTML files locally (uses serve)
```

**Note**: After running `npm run export`, you'll find all static files in the `out/` directory. You can:

- Open `out/index.html` directly in your browser (some features may be limited due to CORS)
- Use `npm run preview:html` for a proper local server preview
- Deploy the entire `out/` folder to any static hosting service

## 🎨 Customization

### Updating Content

All content is centralized in a single file: `src/content/profile.ts`

Simply edit this file to update:

- Personal information (name, email, phone, location)
- Professional summary and about section
- Education history
- Work experience
- Projects (with tags, tools, impact metrics)
- Skills by category
- Social media links

**Example**: To update your email, edit `profile.email` in `src/content/profile.ts`

### Replacing Resume PDF

1. Place your resume PDF file in the `public/` directory
2. Name it `resume.pdf` (or update the filename in `components/hero.tsx`)

The download button in the Hero section will automatically link to `/resume.pdf`.

### Configuring Contact Form

The contact form supports two modes:

1. **Third-party service** (recommended): Use Formspree, Web3Forms, or similar

   - Create an account and get your form endpoint URL
   - Add it to `.env.local`:
     ```
     NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
     ```
   - The form will submit to this endpoint

2. **Mailto fallback**: If no endpoint is configured, clicking "Send Message" opens the user's email client with pre-filled content

### Environment Variables

Create a `.env.local` file (see `.env.example`):

```env
NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
NEXT_PUBLIC_BASE_URL=https://your-domain.vercel.app
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

**Option 1: GitHub Integration (One-Click)**

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"

**Option 2: Vercel CLI**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# For production
vercel --prod
```

### Deploy Static Export

If you prefer static hosting (GitHub Pages, Netlify, etc.):

```bash
# Build static export
npm run export

# The 'out' directory contains all static files
# Upload the entire 'out' directory to your hosting service
```

**Note**: For static exports, ensure your hosting service supports client-side routing or configure redirects.

### GitHub Pages

1. Run `npm run export`
2. Copy the contents of `out/` to a `gh-pages` branch
3. Enable GitHub Pages in repository settings

## 📁 Project Structure

```
resume-website/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Main homepage
│   ├── globals.css        # Global styles
│   └── sitemap.ts         # Sitemap generation
├── components/            # React components
│   ├── navbar.tsx        # Sticky navigation with active section
│   ├── hero.tsx          # Hero section with metrics
│   ├── timeline.tsx      # Education/Experience timeline
│   ├── project-gallery.tsx # Projects with search/filter
│   ├── project-detail-modal.tsx # Project detail modal
│   ├── skill-matrix.tsx  # Skills grouped by category
│   ├── contact-form.tsx  # Contact form with validation
│   ├── footer.tsx        # Footer with links
│   ├── toast.tsx         # Toast notifications
│   └── theme-provider.tsx # Dark mode provider
├── src/
│   └── content/
│       └── profile.ts    # ⭐ ALL CONTENT LIVES HERE
├── lib/
│   └── utils.ts          # Utility functions (cn, etc.)
├── public/               # Static assets
│   ├── resume.pdf        # Your resume (replace this)
│   └── robots.txt        # SEO robots file
├── next.config.ts        # Next.js configuration (static export)
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## 🎯 Design Philosophy

This website follows a **"Quiet Luxury"** design approach:

- **Minimal**: Clean layouts with generous whitespace
- **Professional**: Neutral color palette with subtle accents
- **Data-Focused**: Metrics and impact are prominently displayed
- **Accessible**: High contrast, keyboard navigation, semantic HTML
- **Performance**: Optimized images, lazy loading, minimal JavaScript

## ✅ Acceptance Criteria Checklist

- [x] All sections render correctly with smooth scroll navigation
- [x] Dark mode works without FOUC (Flash of Unstyled Content)
- [x] Projects support search, tag filtering, and detail modals
- [x] Email copy button shows toast notification
- [x] Contact form validates inputs and shows success/error feedback
- [x] Resume PDF download button works
- [x] `npm run export` generates static HTML in `out/` directory
- [x] `npm run preview:html` serves exported files locally
- [x] Ready for Vercel deployment (GitHub integration or CLI)
- [x] All content editable from single `profile.ts` file
- [x] SEO metadata, sitemap, and robots.txt configured
- [x] Keyboard accessible (tab navigation, ESC to close modals)
- [x] Responsive on mobile, tablet, and desktop

## 🔧 Troubleshooting

### Build Errors

- **TypeScript errors**: Ensure all imports use the `@/` alias correctly
- **Module not found**: Run `npm install` to ensure all dependencies are installed
- **Tailwind styles not applying**: Check that `globals.css` imports Tailwind correctly

### Static Export Issues

- **Images not loading**: Ensure images are in `public/` and use relative paths
- **Routes not working**: Static exports require client-side routing; ensure your hosting supports this

### Theme Issues

- **Dark mode flashing**: This is handled by `suppressHydrationWarning` in the HTML tag
- **Theme not persisting**: Check that `next-themes` is properly configured in `layout.tsx`

## 📝 License

This project is open source and available under the MIT License.

## 🙏 Credits

Built with:

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [next-themes](https://github.com/pacocoursey/next-themes) - Dark mode
- [Lucide Icons](https://lucide.dev/) - Icons

---

**Need help?** Open an issue or check the documentation above. For content updates, edit `src/content/profile.ts`.
