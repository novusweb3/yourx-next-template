import { AuthButton } from '@/components/auth-button'
import './globals.css'
import { ParticlesBackground } from '@/components/particles-background'
import { SmoothScrollLink } from '@/components/smooth-scroll-link'
import { MobileNav } from '@/components/mobile-nav'
import { ScrollToTop } from '@/components/scroll-to-top'
import { PageLoader } from '@/components/page-loader'
import { Toast } from '@/components/ui/toast'
import { Logo } from '@/components/ui/logo'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="bg-[#191919]">
      <body className="min-h-screen bg-[#191919]">
        <ParticlesBackground />
        <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-[#191919]/80 border-b border-gray-800">
          <nav className="w-full h-16 flex items-center justify-between pl-8 pr-4">
            <Logo />
            <AuthButton />
          </nav>
        </header>
        <main className="pt-16 bg-[#191919]">
          {children}
        </main>
        <ScrollToTop />
        <Toast />
      </body>
    </html>
  )
} 