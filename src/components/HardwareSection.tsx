import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Zap, Settings, Gauge } from 'lucide-react';
import nodeHardware from 'figma:asset/dbba8d8312b75fc46e340f11a0f90c7b576f74c6.png';

export function HardwareSection() {
  const specs = [
    { icon: Zap, label: 'Plug-and-Play', description: 'Ready to earn out of the box' },
    { icon: Gauge, label: 'Optimized Performance', description: 'Maximum ROI configuration' },
    { icon: Settings, label: 'Pre-Configured', description: 'Zero technical setup' },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden border-y border-white/5">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-[#00D9FF]/10 to-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />
      
      {/* Animated glow orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00D9FF]/30 rounded-full blur-[100px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-[#00D9FF]/20 border border-purple-600/30 text-purple-300 tracking-wider mb-6">
                COMING SOON
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl tracking-tight mb-6"
            >
              Don't Have a GPU? We've Got You Covered.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-white/60 text-lg mb-8 leading-relaxed"
            >
              Node³ hardware arriving soon. Pre-built rigs optimized for maximum earnings with zero technical setup required.
            </motion.p>

            {/* Floating Spec Cards */}
            <div className="space-y-4 mb-8">
              {specs.map((spec, index) => (
                <motion.div
                  key={spec.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="group flex items-start gap-4 p-4 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#00D9FF]/30 hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-gradient-to-br from-purple-600/20 to-[#00D9FF]/20 group-hover:from-purple-600/30 group-hover:to-[#00D9FF]/30 transition-colors">
                    <spec.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white mb-1">{spec.label}</h4>
                    <p className="text-white/50">{spec.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Product Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            {/* Spotlight effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-[#00D9FF]/20 rounded-2xl blur-3xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl"
              whileHover={{ scale: 1.02, rotateY: 5 }}
              transition={{ duration: 0.4 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <img
                src={nodeHardware}
                alt="Node³ Hardware"
                className="w-full h-auto"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              {/* Floating badge */}
              <motion.div
                className="absolute bottom-6 left-6 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <span className="text-white/90">Enterprise-Grade Hardware</span>
              </motion.div>

              {/* Pulsing glow accent */}
              <motion.div
                className="absolute top-0 right-0 w-32 h-32 bg-[#00D9FF]/40 rounded-full blur-3xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
