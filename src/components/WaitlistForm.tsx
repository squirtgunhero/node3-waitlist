import { useState } from 'react';
import { motion } from 'motion/react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { toast } from 'sonner@2.0.3';
import { CheckCircle2 } from 'lucide-react';
import { trackWaitlistSignup } from '../utils/analytics';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error('Please enter your email');
      return;
    }

    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace YOUR_SCRIPT_URL with your Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || 'YOUR_SCRIPT_URL';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          timestamp: new Date().toISOString(),
        }),
      });

      // Note: no-cors mode doesn't allow reading response, so we assume success
      console.log('Waitlist submission sent:', { email });
      
      // Track the waitlist signup in Google Analytics
      trackWaitlistSignup(email, 'main_form');
      
      setIsSubmitted(true);
      toast.success('Successfully joined the waitlist!');
    } catch (error) {
      console.error('Submission error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center gap-4"
      >
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <CheckCircle2 className="w-16 h-16 text-white" />
          </motion.div>
        </motion.div>
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/90 mb-1">You're on the list!</p>
          <p className="text-white/50">We'll be in touch soon.</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto flex flex-col gap-4"
    >
      <motion.div whileTap={{ scale: 0.995 }}>
        <Input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white/5 border-white/10 text-white placeholder:text-white/30 h-12 px-4 focus:border-white/30 focus:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300"
          disabled={isSubmitting}
        />
      </motion.div>
      <motion.div 
        whileTap={{ scale: 0.98 }}
        className="relative"
      >
        <motion.div
          className="absolute inset-0 rounded-md blur-lg"
          animate={{
            background: [
              'linear-gradient(45deg, #00D9FF, #00FF88)',
              'linear-gradient(45deg, #00FF88, #a855f7)',
              'linear-gradient(45deg, #a855f7, #00D9FF)',
            ],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="relative h-12 bg-white text-black hover:bg-white/90 transition-all duration-300 active:scale-95 w-full"
        >
          {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        </Button>
      </motion.div>
    </motion.form>
  );
}
