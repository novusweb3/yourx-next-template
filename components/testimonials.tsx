'use client'
import { motion } from 'framer-motion'
import { FiTwitter } from 'react-icons/fi'

const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    handle: "@sarahj_dev",
    content: "This app completely transformed how I understand my X presence. The AI insights are mind-blowing! 🚀",
    gradient: "from-purple-500 to-blue-500"
  },
  {
    name: "Alex Rivera",
    handle: "@arivera_tech",
    content: "The daily insights helped me grow my following by 300%. Absolutely game-changing! 📈",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Mike Chen",
    handle: "@mikechen_ai",
    content: "Best analytics tool I've ever used. The sentiment analysis is incredibly accurate! 💯",
    gradient: "from-cyan-500 to-green-500"
  }
]

function TestimonialCard({ name, handle, content, gradient, index }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="relative group p-6 bg-[#252525] rounded-xl"
    >
      {/* Gradient Border */}
      <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${gradient} opacity-0 
        group-hover:opacity-100 transition-opacity duration-300 p-[1px]`}>
        <div className="h-full w-full bg-[#252525] rounded-xl" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${gradient} mb-4`}>
          <FiTwitter className="w-5 h-5 text-white" />
        </div>
        
        <p className="text-gray-300 mb-4">{content}</p>
        
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className={`text-sm bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {handle}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Testimonials() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">
            Loved by <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              X Community
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See what our users are saying about their experience with X Daily Insight
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
} 