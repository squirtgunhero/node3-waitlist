import { motion } from 'motion/react';
import { DollarSign, Gauge, Lock, TrendingUp } from 'lucide-react';
import { Toaster } from './components/ui/sonner';
import { ParticleNetwork } from './components/ParticleNetwork';
import { WaitlistForm } from './components/WaitlistForm';
import { BenefitCard } from './components/BenefitCard';
import { HardwareSection } from './components/HardwareSection';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Toaster position="top-center" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#00D9FF]/10 via-black to-[#00FF88]/10" />
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/5 via-transparent to-transparent" />
        <ParticleNetwork />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <motion.h1 
              className="text-5xl md:text-7xl tracking-tight mb-6 cursor-default"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              node<motion.sup 
                className="text-4xl md:text-5xl inline-block"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >3</motion.sup>
            </motion.h1>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-6xl tracking-tight mb-6 max-w-3xl mx-auto bg-gradient-to-r from-white via-[#00D9FF] to-white bg-clip-text text-transparent"
          >
            Turn Your GPU Into Passive Income
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white/60 mb-12 max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed"
          >
            The AI economy is generating billions in compute revenue. Your idle GPU can claim its share. Join the decentralized network turning processing power into wealth.
          </motion.p>
          
          <WaitlistForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-32 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl tracking-tight mb-4">
              Start Earning From Your Hardware
            </h2>
            <p className="text-white/50">
              Put your GPU to work and get rewarded
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitCard
              icon={DollarSign}
              title="Passive Income"
              description="Generate earnings from your unused GPU capacity during downtime"
              delay={0}
            />
            <BenefitCard
              icon={Gauge}
              title="Simple Setup"
              description="Get started in minutes with our lightweight software—no technical expertise required"
              delay={0.1}
            />
            <BenefitCard
              icon={Lock}
              title="Secure Payments"
              description="Automated payouts with enterprise-grade security and transparent reward tracking"
              delay={0.2}
            />
            <BenefitCard
              icon={TrendingUp}
              title="Maximize Returns"
              description="Dynamic pricing ensures you always get competitive rates for your computing power"
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Hardware Section */}
      <HardwareSection />

      {/* Trust Indicators */}
      <section className="relative pt-12 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-white/40 mb-8 tracking-wide uppercase text-sm">
              What You'll Power
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['AI Training', 'Model Inference', '3D Rendering', 'Scientific Computing', 'Video Processing', 'Data Analytics'].map((useCase, index) => (
                <motion.div
                  key={useCase}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    borderColor: 'rgba(0, 217, 255, 0.3)',
                  }}
                  className="px-6 py-3 border border-white/5 rounded-full bg-white/[0.02] text-white/60 hover:text-[#00D9FF] transition-colors cursor-default"
                >
                  {useCase}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto text-center">
          <motion.p 
            className="text-white/40 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            No spam. Unsubscribe anytime.
          </motion.p>
          <motion.p 
            className="text-white/30"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            © 2025 node³. All rights reserved.
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
