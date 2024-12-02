# Modern Next.js Dashboard Template

A modern, responsive dashboard template built with Next.js 14, Tailwind CSS, and TypeScript.

## Features

- 🎨 Modern UI with dark theme
- ✨ Gradient accents and glass-morphism effects
- 📱 Fully responsive design
- 🎭 Framer Motion animations
- 🎯 Clean component structure
- 🎨 Tailwind CSS styling
- 📝 TypeScript support
- 🧩 Reusable UI components
- 🔄 Loading states and error handling
- 📊 Dashboard layout ready

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Framer Motion
- Radix UI
- Lucide Icons
- Shadcn UI

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/novusweb3/yourx-next-template.git
   cd yourx-next-template
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env.local
   ```
   Then edit `.env.local` with your configuration.

4. Run the development server:
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
├── app/
│   ├── dashboard/       # Dashboard pages
│   ├── globals.css      # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Landing page
├── components/
│   ├── ui/             # Reusable UI components
│   ├── dashboard/      # Dashboard-specific components
│   ├── error-states/   # Error handling components
│   └── loading-states/ # Loading skeletons
├── lib/
│   └── utils/          # Utility functions
└── types/
    └── index.ts        # TypeScript definitions

## Tech Stack

- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn UI, Radix UI
- **Authentication:** NextAuth.js
- **State Management:** Zustand
- **Animations:** Framer Motion
- **Charts:** Recharts
- **Development:** 
  - ESLint
  - Prettier
  - TypeScript
  - Turbopack

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## License

This project is licensed under the MIT License.








