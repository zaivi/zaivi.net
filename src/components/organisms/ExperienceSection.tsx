import { motion } from "framer-motion";
import { Sparkles, GraduationCap } from "lucide-react";
import { EXPERIENCE } from "@/data/resume";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="mb-24">
      <div className="flex items-baseline gap-4 mb-12">
        <h2 className="font-headline text-3xl font-bold">Experience</h2>
        <div className="h-[1px] flex-grow bg-surface-container-high"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Lead Role */}
        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-2 bg-surface-container-lowest p-8 md:p-12 rounded-3xl shadow-sm border border-outline-variant/5 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-8 relative z-10">
            <div>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 inline-block">
                CURRENT ROLE
              </span>
              <h3 className="font-headline text-2xl font-bold mb-1">{EXPERIENCE[0].role}</h3>
              <p className="text-on-surface-variant font-medium">
                {EXPERIENCE[0].company} • {EXPERIENCE[0].period}
              </p>
            </div>
            <Sparkles className="text-surface-dim" size={40} />
          </div>
          <ul className="space-y-4 text-on-surface-variant relative z-10">
            {(EXPERIENCE[0].description as string[]).map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-primary mt-1">•</span>
                <p>{item}</p>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Senior UX Architect */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-surface-container-low p-8 rounded-3xl flex flex-col justify-between"
        >
          <div>
            <h3 className="font-headline text-xl font-bold mb-1">{EXPERIENCE[1].role}</h3>
            <p className="text-on-surface-variant text-sm font-medium mb-6">
              {EXPERIENCE[1].company} • {EXPERIENCE[1].period}
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              {EXPERIENCE[1].description}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {EXPERIENCE[1].tags?.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Visual Designer */}
        <motion.div
          whileHover={{ y: -4 }}
          className="bg-surface-container-low p-8 rounded-3xl"
        >
          <h3 className="font-headline text-xl font-bold mb-1">{EXPERIENCE[2].role}</h3>
          <p className="text-on-surface-variant text-sm font-medium mb-4">
            {EXPERIENCE[2].company} • {EXPERIENCE[2].period}
          </p>
          <p className="text-on-surface-variant text-sm leading-relaxed">
            {EXPERIENCE[2].description}
          </p>
        </motion.div>

        {/* Education Block */}
        <motion.div
          whileHover={{ y: -4 }}
          className="md:col-span-2 bg-primary-dim p-8 md:p-12 rounded-3xl text-on-primary flex flex-col md:flex-row justify-between items-center gap-8 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
          <div className="relative z-10">
            <h3 className="font-headline text-2xl font-bold mb-2">Education & Growth</h3>
            <p className="text-primary-container font-medium mb-4">MA Visual Communication & Design</p>
            <p className="opacity-80 text-sm max-w-md">
              Royal Academy of Art • First Class Honors • Specialized in Anthropological Design & Digital Semantics.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <div className="w-20 h-20 border-4 border-primary-container/30 rounded-full flex items-center justify-center">
              <GraduationCap size={32} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};