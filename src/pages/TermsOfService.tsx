import React from "react";
import { motion } from "motion/react";
import { FileText, Scale, AlertCircle, CheckCircle } from "lucide-react";

export default function TermsOfService() {
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
              Terms of <br />
              <span className="text-brand-red">Service</span>.
            </h1>
            <p className="text-brand-dark/60 text-lg leading-relaxed font-medium max-w-2xl">
              Please read these terms of service carefully before using our website or engaging with our services.
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
                    <CheckCircle className="w-5 h-5 text-brand-red" />
                  </span>
                  1. Acceptance of Terms
                </h2>
                <p>
                  By accessing or using our website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-sm">
                    <FileText className="w-5 h-5 text-brand-red" />
                  </span>
                  2. Use License
                </h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials (information or software) on Acier Building Tech's website for personal, non-commercial transitory viewing only.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-sm">
                    <Scale className="w-5 h-5 text-brand-red" />
                  </span>
                  3. Disclaimer
                </h2>
                <p>
                  The materials on Acier Building Tech's website are provided on an 'as is' basis. Acier Building Tech makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-black text-brand-dark uppercase tracking-tighter mb-6 flex items-center gap-4">
                  <span className="w-10 h-10 bg-brand-red/10 flex items-center justify-center rounded-sm">
                    <AlertCircle className="w-5 h-5 text-brand-red" />
                  </span>
                  4. Limitations
                </h2>
                <p>
                  In no event shall Acier Building Tech or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Acier Building Tech's website.
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
