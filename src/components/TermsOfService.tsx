import { motion } from 'motion/react';
import { X } from 'lucide-react';

interface TermsOfServiceProps {
  onClose: () => void;
}

export function TermsOfService({ onClose }: TermsOfServiceProps) {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto bg-black/50 border border-white/10 rounded-lg p-8"
        >
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Terms of Service</h1>
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
              <h2 className="text-xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
              <p>
                By joining the node³ waitlist, you agree to these Terms of Service. If you do not agree with any part of these terms, please do not join our waitlist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">2. Waitlist Purpose</h2>
              <p>
                The waitlist is intended to notify interested parties about the development and launch of the node³ platform. Joining the waitlist does not guarantee access to the platform or any specific benefits.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">3. Platform Status</h2>
              <p className="mb-2">
                node³ is currently in development. All information provided on this website is subject to change. We make no guarantees regarding:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Platform launch dates or timelines</li>
                <li>Feature availability or functionality</li>
                <li>Earning potential or revenue opportunities</li>
                <li>Hardware requirements or compatibility</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">4. No Financial Advice</h2>
              <p>
                Information about potential earnings, revenue, or income on this website is for illustrative purposes only and does not constitute financial advice. Actual results may vary significantly based on numerous factors including but not limited to: market conditions, hardware specifications, network demand, and individual participation.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">5. Disclaimer of Warranties</h2>
              <p>
                The node³ waitlist and website are provided "as is" without any warranties, express or implied. We do not warrant that the service will be uninterrupted, secure, or error-free.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, node³ shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the waitlist or website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">7. Communications</h2>
              <p>
                By joining the waitlist, you consent to receive email communications from node³ regarding platform updates, announcements, and related information. You may opt out of these communications at any time.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">8. Intellectual Property</h2>
              <p>
                All content on this website, including but not limited to text, graphics, logos, and software, is the property of node³ and is protected by copyright and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">9. Third-Party Services</h2>
              <p>
                We use third-party services (such as Google Sheets) to process and store waitlist information. These services have their own terms and privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">10. Modifications</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the waitlist after changes constitutes acceptance of the modified terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">11. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-3">12. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="mt-2">
                <a href="mailto:contact@node-3.com" className="text-[#00D9FF] hover:underline">
                  contact@node-3.com
                </a>
              </p>
            </section>

            <div className="pt-6 border-t border-white/10">
              <p className="text-sm text-white/50">
                By joining the node³ waitlist, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

