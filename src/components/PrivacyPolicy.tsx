import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface PrivacyPolicyProps {
  onClose: () => void;
}

export function PrivacyPolicy({ onClose }: PrivacyPolicyProps) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-black/50 border border-white/10 rounded-lg p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/5 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="space-y-6 text-white/70">
            <p className="text-sm text-white/50">
              Last Updated: October 19, 2025
            </p>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>
                When you join our waitlist, we collect your email address. This is the only personal information we collect at this time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p className="mb-2">We use your email address to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Send you updates about node³ platform development</li>
                <li>Notify you when the platform launches</li>
                <li>Share important announcements and features</li>
                <li>Respond to your inquiries</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Data Storage</h2>
              <p>
                Your email address is stored securely using Google Sheets with industry-standard security practices. We implement appropriate technical and organizational measures to protect your personal information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. Data Sharing</h2>
              <p>
                We do not sell, trade, or rent your personal information to third parties. We will never share your email address with anyone without your explicit consent.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Your Rights</h2>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Unsubscribe from our mailing list at any time</li>
                <li>Request deletion of your personal information</li>
                <li>Request a copy of your data</li>
                <li>Update your email address</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Cookies</h2>
              <p>
                Our website does not currently use cookies or tracking technologies beyond what's necessary for basic functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Children's Privacy</h2>
              <p>
                Our service is not intended for users under 18 years of age. We do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last Updated" date at the top of this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or your personal information, please contact us at:
              </p>
              <p className="mt-2">
                <a href="mailto:contactnode3@gmail.com" className="text-[#00D9FF] hover:underline">
                  contactnode3@gmail.com
                </a>
              </p>
            </section>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/50">
                node³ is committed to protecting your privacy and ensuring transparency in how we handle your data.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

