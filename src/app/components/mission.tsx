'use client';
import { Code2, Moon, Sparkles, Zap, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Mission() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse" />
            <span className="uppercase tracking-[3px] text-xs font-medium text-cyan-400">ABOUT ME</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Professional Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="rounded-3xl bg-slate-950/70 border border-white/10 p-8 backdrop-blur-xl group hover:border-cyan-500/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-cyan-500/10 rounded-2xl">
                <Code2 className="w-8 h-8 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">By Day</h3>
                <p className="text-cyan-400 text-sm">Professional Mode Activated</p>
              </div>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Quick learner who thrives on solving complex problems. I specialize in 
              <span className="font-medium text-white"> MLOps, scalable AI infrastructure, data pipelines, and production-grade machine learning systems</span>.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="text-xs px-3 py-1.5 bg-white/10 rounded-full">AI Engineering</span>
              <span className="text-xs px-3 py-1.5 bg-white/10 rounded-full">MLOps</span>
              <span className="text-xs px-3 py-1.5 bg-white/10 rounded-full">DevOps</span>
              <span className="text-xs px-3 py-1.5 bg-white/10 rounded-full">System Design</span>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-sm text-slate-400">
                Currently cooking enterprise software at <span className="font-semibold text-white">Aptean</span>
              </p>
            </div>
          </motion.div>

          {/* Personality Side */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="rounded-3xl bg-slate-950/70 border border-white/10 p-8 backdrop-blur-xl group hover:border-purple-500/30 transition-colors"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-2xl">
                <Moon className="w-8 h-8 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white">By Night</h3>
                <p className="text-purple-400 text-sm">Chaos Goblin Mode</p>
              </div>
            </div>

            <div className="space-y-5 text-slate-300">
              <p>
                Certified <span className="text-white">chaos goblin</span> and unhinged meme lord 24/7. 
                Zero chill on vibes, maximum focus on shipping random AI bangers.
              </p>

              <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-4">
                <Sparkles className="text-yellow-400 flex-shrink-0" />
                <p>
                  Can go from properly intoxicated to god-tier flow state every Monday morning like nothing happened 😂
                </p>
              </div>

              <div className="flex items-center gap-3 bg-white/5 rounded-2xl p-4">
                <Coffee className="text-amber-400 flex-shrink-0" />
                <p className="text-sm">
                  Professional at questionable life choices but somehow still delivers clean code.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Final Line */}
        <div className="text-center pt-6">
          <p className="text-slate-400 text-lg max-w-lg mx-auto">
            Passionate about good code, better systems, and even better vibes. 
            <span className="text-cyan-400"> If that sounds like your kind of energy — let&apos;s connect.</span>
          </p>
        </div>
      </div>
    </div>
  );
}