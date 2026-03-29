import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { AnimatedText } from '@/components/atoms/AnimatedText';

const typingWords = ['AI Engineer', 'Full Stack Developer', 'Product Builder', 'Open Source'];

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 mb-8"
        >
          <Sparkles className="w-4 h-4 text-accent-purple" />
          <span className="text-sm text-text-secondary">Building the future with AI</span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold text-text-primary mb-6"
        >
          Hi, I'm <span className="text-gradient">Zai</span>
        </motion.h1>

        {/* Subtitle with typing animation */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl sm:text-2xl md:text-3xl text-text-secondary mb-4"
        >
          I'm a <AnimatedText words={typingWords} />
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-text-muted text-lg max-w-2xl mx-auto mb-10"
        >
          I build high-performance web applications with modern technologies. 
          Passionate about AI, open source, and creating delightful user experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href="/urls"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent-purple text-white rounded-lg hover:bg-accent-purple/90 transition-all hover:shadow-lg hover:shadow-accent-purple/25 group"
          >
            <span>Explore URLs</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 glass text-text-primary rounded-lg hover:bg-surface-hover transition-all"
          >
            <span>Learn more</span>
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-8 sm:gap-16 mt-16"
        >
          {[
            { value: '50+', label: 'Projects' },
            { value: '10k+', label: 'Users' },
            { value: '100+', label: 'Repos' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-text-muted">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
