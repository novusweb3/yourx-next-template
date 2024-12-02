# AI-Powered Analytics Dashboard
Adrian Birsan https://x.com/adrianbirsan_

A modern web application built with Next.js 13+ that provides AI-powered analytics and insights tracking.

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
│   ├── dashboard/         # Dashboard pages
│   ├── globals.css       
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── components/
│   ├── ui/               # Reusable UI components
│   ├── dashboard/        # Dashboard-specific components
│   ├── error-states/     # Error handling components
│   └── loading-states/   # Loading skeletons
├── lib/
│   └── utils/           # Utility functions
└── types/
    └── index.ts         # TypeScript definitions

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








