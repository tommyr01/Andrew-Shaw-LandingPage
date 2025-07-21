# Impetus Global Podcast Landing Page

A modern, responsive landing page for the Impetus Global podcast built with Next.js, TypeScript, and Tailwind CSS. Features interactive podcast player, lead capture forms, and analytics tracking.

![Impetus Global Podcast](./public/impetus-logo.svg)

## 🚀 Features

- **Dark Theme Design** - Matches Impetus Global's brand aesthetic
- **Interactive Podcast Player** - Play/pause controls, progress tracking, transcript access
- **Lead Capture System** - Progressive forms with validation and API integration
- **Analytics Tracking** - Event tracking for user interactions and conversions
- **Responsive Design** - Mobile-first approach for all device sizes
- **Performance Optimized** - Fast loading with Next.js optimizations
- **Animated Elements** - Particle effects and smooth transitions

## 🛠 Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Deployment:** Ready for Vercel/Netlify

## 📋 Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/tommyr01/Andrew-Shaw-LandingPage.git
   cd Andrew-Shaw-LandingPage
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the landing page.

## 🏗 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   ├── leads/         # Lead capture endpoints
│   │   └── analytics/     # Analytics tracking
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── hero-section.tsx   # Hero with podcast player
│   └── lead-capture-form.tsx # Lead capture form
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Key Components

### Hero Section
- Animated particle background
- Interactive podcast player
- Call-to-action buttons
- Responsive typography

### Lead Capture Form
- Progressive form fields
- Real-time validation
- API integration
- GDPR consent checkbox

### Success Stories
- Client testimonials
- Star ratings
- Avatar components
- Grid layout

### iDrive Assessment Preview
- Sample question interface
- Interactive radio buttons
- Progress indicators

## 📊 Analytics & Tracking

The landing page includes comprehensive analytics tracking:

- **Page Views** - Track visitor sessions
- **Form Interactions** - Monitor lead capture performance
- **Podcast Engagement** - Track play/pause events
- **CTA Clicks** - Measure conversion points

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add other environment variables as needed
```

### API Integration

The landing page includes mock API endpoints for:
- Lead capture (`/api/leads`)
- Analytics tracking (`/api/analytics/event`)

Replace with your actual backend API endpoints in production.

## 📱 Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎯 Performance Features

- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic code splitting with Next.js
- **CSS-in-JS** - Tailwind CSS for optimized styles
- **Font Loading** - Optimized Google Fonts loading

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Manual Deployment

```bash
npm run build
npm run start
```

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support or questions, please contact:
- Email: support@impetus.global
- Website: [https://impetus.global](https://impetus.global)

## 🏆 Acknowledgments

- Built for Impetus Global
- Designed with performance and accessibility in mind
- Uses modern web development best practices

---

**Note:** This is a demo landing page. Replace mock data and API endpoints with production values before deploying.