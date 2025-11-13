# Yeaeun Song - Professional ePortfolio

A modern, responsive portfolio website showcasing my work in AI/ML, healthcare technology, and software engineering.

## 🌟 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern Tech Stack**: Built with Next.js 14, React, TypeScript, and Tailwind CSS
- **Multiple Pages**: Home, About, Resume, Career Goals, Projects, Experience, Skills, Gallery, Contact
- **Accessibility Focused**: Clean navigation and semantic HTML
- **Performance Optimized**: Fast loading times and SEO-friendly

## 🚀 Quick Start

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Deployment to Vercel

### Method 1: Deploy with Vercel CLI (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. For production deployment:
```bash
vercel --prod
```

### Method 2: Deploy via GitHub

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure the build settings
6. Click "Deploy"

### Method 3: Deploy via Vercel Dashboard

1. Go to [vercel.com/new](https://vercel.com/new)
2. Upload your project folder (zip file)
3. Vercel will detect Next.js configuration
4. Click "Deploy"

## 🎨 Customization

### Colors

The color scheme uses Georgia Tech colors. To customize, edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#003057',    // Navy Blue
  secondary: '#B3A369',  // Gold
  accent: '#00A3E0',     // Tech Blue
}
```

### Content

All page content is in the `app/` directory:
- `app/page.tsx` - Home page
- `app/about/page.tsx` - About Me
- `app/resume/page.tsx` - Resume
- `app/career-goals/page.tsx` - Career Goals
- `app/projects/page.tsx` - Projects
- `app/experience/page.tsx` - Experience
- `app/skills/page.tsx` - Skills
- `app/gallery/page.tsx` - Gallery
- `app/contact/page.tsx` - Contact

### Adding Images

1. Place images in the `public/` folder
2. Reference them in your code:

```tsx
<img src="/your-image.jpg" alt="Description" />
```

### Adding Your Resume PDF

1. Place your `Resume.pdf` file in the `public/` folder
2. The download link in the Resume page will automatically work

## 📁 Project Structure

```
eportfolio/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── career-goals/      # Career Goals page
│   ├── contact/           # Contact page
│   ├── experience/        # Experience page
│   ├── gallery/           # Gallery page
│   ├── projects/          # Projects page
│   ├── resume/            # Resume page
│   ├── skills/            # Skills page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with navigation
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Navigation.tsx     # Navigation bar
│   └── Footer.tsx         # Footer
├── public/                # Static files
├── package.json           # Dependencies
├── next.config.js         # Next.js configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── README.md             # This file
```

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📝 Build Commands

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## 🔗 Links

- **Portfolio**: [To be deployed]
- **LinkedIn**: [linkedin.com/in/yeaeunsong](https://linkedin.com/in/yeaeunsong)
- **GitHub**: [github.com/yeaeunsong](https://github.com/yeaeunsong)
- **Email**: ysong639@gatech.edu

## 📄 License

This project is created for personal portfolio use.

---

Built with ❤️ by Yeaeun Song
