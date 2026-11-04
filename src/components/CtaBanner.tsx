import { motion } from 'framer-motion';
import { Zap, MessageCircle, FileDown } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const startProjectUrl = `${personalInfo.whatsapp}?text=${encodeURIComponent(
  "Hi Danish, I saw your projects and I'd like to discuss something similar."
)}`;

export default function CtaBanner() {
  return (
    <section id="start-a-project" className="relative py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-2xl glass-panel glass-shine p-10 lg:p-16 text-center"
        >
          <div className="absolute inset-0 z-0">
            <img
              src="/images/contact-bg.webp"
              alt=""
              loading="lazy"
              className="w-full h-full object-cover opacity-[0.18] dark:opacity-[0.4]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f0f4f8]/60 via-[#f0f4f8]/30 to-[#f0f4f8]/60 dark:from-[#080c12]/70 dark:via-[#080c12]/40 dark:to-[#080c12]/70" />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-sky-500/[0.03] rounded-full blur-[100px]" />

          <div className="relative">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-badge mb-6"
            >
              <Zap className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span className="text-slate-500 dark:text-gray-400 text-sm font-mono">Open to projects &amp; full-time roles</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4 max-w-2xl mx-auto leading-tight">
              Have a project like
              <br />
              <span className="text-sky-600 dark:text-sky-300">these in mind?</span>
            </h2>

            <p className="text-slate-500 dark:text-gray-400 text-lg max-w-xl mx-auto mb-8">
              Tell me what you're building. I'll reply with how I'd approach it and a clear proposal. Hiring for a full-time role? Grab my CV.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={startProjectUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-3.5 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-4 h-4" />
                Start a Project
              </a>
              <a
                href={personalInfo.cv}
                download
                className="flex items-center gap-2 px-8 py-3.5 glass-btn rounded-xl text-slate-700 dark:text-white font-semibold transition-all"
              >
                <FileDown className="w-4 h-4" />
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
