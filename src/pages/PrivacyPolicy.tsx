import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Hero */}
      <section className="relative pt-48 pb-24 overflow-hidden bg-white border-b border-brand-dark/5">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-12 bg-brand-red" />
              <span className="text-brand-red uppercase tracking-[0.3em] text-xs font-bold">
                Legal Information
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-brand-dark leading-[0.9] tracking-tighter uppercase mb-8">
              Privacy <br />
              <span className="text-brand-red">Policy</span>.
            </h1>
            <p className="text-brand-dark/60 text-lg leading-relaxed font-medium max-w-2xl">
              At Acier Building Tech, we are committed to protecting your privacy and ensuring the security of your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none text-brand-dark/70 leading-relaxed space-y-12">
              <div>
                <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-sm">
                    <Eye className="w-5 h-5 text-brand-red" />
                  </span>
                  1. Information We Collect
                </h2>
                <p>
                  We collect information that you provide directly to us when you fill out our contact forms, subscribe to our newsletter, or engage with our services. This may include your name, email address, phone number, and project details.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-sm">
                    <ShieldCheck className="w-5 h-5 text-brand-red" />
                  </span>
                  2. How We Use Your Information
                </h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Provide, maintain, and improve our services.</li>
                  <li>Respond to your comments, questions, and requests.</li>
                  <li>Communicate with you about projects, services, and updates.</li>
                  <li>Monitor and analyze trends, usage, and activities in connection with our services.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-sm">
                    <Lock className="w-5 h-5 text-brand-red" />
                  </span>
                  3. Data Security
                </h2>
                <p>
                  We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-sm">
                    <FileText className="w-5 h-5 text-brand-red" />
                  </span>
                  4. Cookies and Tracking
                </h2>
                <p>
                  We use cookies and similar tracking technologies to track the activity on our service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
                </p>
              </div>

              <div className="pt-12 border-t border-brand-dark/5">
                <p className="text-sm font-bold uppercase tracking-widest text-brand-dark/40 italic">
                  Last Updated: April 4, 2026
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
