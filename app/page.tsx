import { ArrowRight } from 'lucide-react'
import { AnimatedFeatures } from '@/components/animated-features'
import { Features } from '@/components/feature-card'
import { StatsSection } from '@/components/stats-section'
import { Testimonials } from '@/components/testimonials'
import { CTASection } from '@/components/cta-section'
import { HeroButton } from '@/components/hero-button'

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 bg-[#191919] relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-[10px] opacity-50">
            <div className="absolute top-[40%] left-[50%] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute top-[45%] left-[45%] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        <div className="container mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Track Your <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Journey</span> With Daily Insights
              </h1>
              <p className="text-xl text-gray-300">
                Get AI-powered analysis of your daily activity, discover trends, and improve your presence.
              </p>
              <div className="flex gap-4">
                <HeroButton />
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              {['AI Analysis', 'Daily Reports', 'Trend Detection', 'Smart Insights'].map((feature, index) => (
                <div key={index} 
                  className="group bg-[#252525] hover:bg-[#2f2f2f] p-6 rounded-xl transition-all duration-300 
                    hover:shadow-xl hover:scale-[1.02] border border-gray-800 relative overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white relative z-10">{feature}</h3>
                  <p className="text-gray-400 relative z-10">Advanced features powered by AI technology</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Features />
      <StatsSection />
      <Testimonials />
      <CTASection />
    </>
  )
} 