import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export function BenefitCard({ icon: Icon, title, description, delay = 0 }: BenefitCardProps) {
  const gradients = [
    'from-[#00D9FF]/20 to-transparent',
    'from-[#00FF88]/20 to-transparent',
    'from-purple-600/20 to-transparent',
    'from-[#00D9FF]/20 via-purple-600/10 to-transparent',
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      whileHover={{ y: -4 }}
      className="group relative p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-[#00D9FF]/30 hover:bg-white/[0.04] hover:shadow-[0_0_30px_rgba(0,217,255,0.1)] transition-all duration-500 rounded-lg overflow-hidden"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${gradients[delay * 10 % gradients.length]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
      <div className="relative flex flex-col items-start gap-4">
        <motion.div 
          className="p-3 rounded-lg bg-gradient-to-br from-[#00D9FF]/10 to-[#00FF88]/10 group-hover:from-[#00D9FF]/20 group-hover:to-[#00FF88]/20 transition-colors duration-300"
          whileHover={{ rotate: [0, -10, 10, -10, 0], transition: { duration: 0.5 } }}
        >
          <Icon className="w-6 h-6 text-white" />
        </motion.div>
        <div>
          <h3 className="text-white mb-2">{title}</h3>
          <p className="text-white/60 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
