import { ReactNode } from "react";
import { motion } from "motion/react";
import { 
  Home, 
  Briefcase, 
  Palette, 
  Mail, 
  Sparkles, 
  GraduationCap, 
  FileText, 
  LayoutGrid, 
  MessageSquare 
} from "lucide-react";

const EXPERIENCE = [
  {
    role: "Lead Creative Strategist",
    company: "Lumina Digital Studio",
    period: "2021 — Present",
    current: true,
    description: [
      "Spearheaded the visual redesign of 14+ Fortune 500 digital ecosystems, increasing user engagement by 40% on average.",
      "Developed a custom design system token architecture that reduced development handoff time by 60%.",
      "Mentored a cross-functional team of 12 designers and developers, fostering a culture of atmospheric clarity and no-line philosophy."
    ]
  },
  {
    role: "Senior UX Architect",
    company: "Aetheria Interactive",
    period: "2018 — 2021",
    description: "Focused on high-fidelity prototyping and user-centric flows for complex SaaS platforms in the fintech sector.",
    tags: ["Fintech", "SaaS"]
  },
  {
    role: "Visual Designer",
    company: "Prism Media",
    period: "2016 — 2018",
    description: "Crafting editorial layouts and brand identities for emerging lifestyle startups."
  }
];

const SKILLS = {
  Design: ["Figma", "Adobe CC", "Principle", "Cinema 4D"],
  Frontend: ["Tailwind CSS", "React.js", "Next.js", "Webflow"],
  Workflow: ["Jira / Agile", "Storybook", "Git / GitHub", "Linear"]
};

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">Curator</div>
          <div className="hidden md:flex space-x-8 items-center">
            <a className="font-headline font-medium text-sm tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#">About</a>
            <a className="font-headline font-bold text-sm tracking-tight text-primary border-b-2 border-primary pb-1" href="#">Resume</a>
            <a className="font-headline font-medium text-sm tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#">Insights</a>
            <a className="font-headline font-medium text-sm tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#">Agents</a>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-headline font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/10">
            Connect
          </button>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col p-6 space-y-8 h-full w-24 fixed left-0 top-0 pt-28 bg-transparent z-40">
        <div className="flex flex-col items-center space-y-10">
          <SidebarIcon icon={<Home size={24} />} title="Home" active />
          <SidebarIcon icon={<Briefcase size={24} />} title="Projects" />
          <SidebarIcon icon={<Palette size={24} />} title="Studio" />
          <SidebarIcon icon={<Mail size={24} />} title="Contact" />
        </div>
      </aside>

      <main className="pt-32 pb-24 px-6 md:px-12 lg:pl-32 max-w-7xl mx-auto">
        {/* Hero Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">Professional Trajectory</span>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
                Curating <span className="text-gradient">Digital</span> Excellence.
              </h1>
              <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl font-body">
                A decade of blending editorial precision with technical innovation to build products that feel human.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-2xl">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-surface-container">
                <img 
                  alt="Curator Profile" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDonrfGkJDxRwea1yhYUeK5Bi4rQpGfz9L1LG05QuL4GHW_eqt4lLeEB5LTshmmH-U-Fs-AZLMMJMKeyLdcibkq04ZBSiPc6_Sf7iImXYkhjyEsYLHT7ZwkAH9q6AgeSLDgZmnx7gc3wijBYIRKrYYcenZl1q32_HglcoV5zE660i8T6l6jPm6E_s6u7ucB5RBsZnOivIvpl3KFXeXnm5abr1YnvTahYZP84G8Dt7RBuGzqHkz6k1DvvEZQf1CtCFTywDstZLCfqA"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <p className="font-headline font-bold text-on-surface">Available for projects</p>
                <p className="font-label text-xs text-on-surface-variant">Q3 2024 • Global Remote</p>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Experience Section */}
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
                  <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold rounded-full mb-4 inline-block">CURRENT ROLE</span>
                  <h3 className="font-headline text-2xl font-bold mb-1">{EXPERIENCE[0].role}</h3>
                  <p className="text-on-surface-variant font-medium">{EXPERIENCE[0].company} • {EXPERIENCE[0].period}</p>
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
                <p className="text-on-surface-variant text-sm font-medium mb-6">{EXPERIENCE[1].company} • {EXPERIENCE[1].period}</p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {EXPERIENCE[1].description}
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {EXPERIENCE[1].tags?.map(tag => (
                  <span key={tag} className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant/60">{tag}</span>
                ))}
              </div>
            </motion.div>

            {/* Visual Designer */}
            <motion.div 
              whileHover={{ y: -4 }}
              className="bg-surface-container-low p-8 rounded-3xl"
            >
              <h3 className="font-headline text-xl font-bold mb-1">{EXPERIENCE[2].role}</h3>
              <p className="text-on-surface-variant text-sm font-medium mb-4">{EXPERIENCE[2].company} • {EXPERIENCE[2].period}</p>
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
                <p className="opacity-80 text-sm max-w-md">Royal Academy of Art • First Class Honors • Specialized in Anthropological Design & Digital Semantics.</p>
              </div>
              <div className="relative z-10 shrink-0">
                <div className="w-20 h-20 border-4 border-primary-container/30 rounded-full flex items-center justify-center">
                  <GraduationCap size={32} />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          <div className="lg:col-span-4">
            <h2 className="font-headline text-3xl font-bold mb-6">Expertise</h2>
            <p className="text-on-surface-variant mb-8 font-body">
              A multi-disciplinary approach that bridges the gap between aesthetic beauty and functional logic.
            </p>
            <div className="space-y-6">
              <ExpertiseCard 
                title="Strategy" 
                description="Brand Identity, Content Architecture, Design Sprints, User Research." 
              />
              <ExpertiseCard 
                title="Execution" 
                description="UI/UX Design, Typography, Motion Graphics, Rapid Prototyping." 
              />
            </div>
          </div>
          
          <div className="lg:col-span-8 bg-surface-container-low p-8 md:p-12 rounded-3xl">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8">
              {Object.entries(SKILLS).map(([category, items]) => (
                <div key={category}>
                  <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">{category}</p>
                  <ul className="space-y-3 font-headline font-bold text-lg">
                    {items.map(skill => (
                      <li key={skill} className="hover:translate-x-1 transition-transform cursor-default hover:text-primary">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            <div className="mt-16 pt-8 border-t border-outline-variant/10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h4 className="font-headline font-bold text-xl">Certifications</h4>
                  <p className="text-sm text-on-surface-variant">Verification IDs available upon request.</p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-on-surface-variant shadow-sm border border-outline-variant/5">
                    Google UX Design Professional
                  </div>
                  <div className="px-4 py-2 bg-white rounded-xl text-xs font-bold text-on-surface-variant shadow-sm border border-outline-variant/5">
                    Nielsen Norman Group UX Certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-12 px-8 bg-surface-container-low mt-12">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto gap-8">
          <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-6 md:mb-0 text-center md:text-left">
            © 2024 The Ethereal Curator. Built with Atmospheric Clarity.
          </p>
          <div className="flex space-x-8">
            <FooterLink href="#">Twitter</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
            <FooterLink href="#">GitHub</FooterLink>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container-lowest/80 backdrop-blur-xl border-t border-outline-variant/10 px-6 py-4 flex justify-between items-center z-50">
        <MobileNavItem icon={<Home size={20} />} label="HOME" />
        <MobileNavItem icon={<FileText size={20} />} label="RESUME" active />
        <MobileNavItem icon={<LayoutGrid size={20} />} label="WORK" />
        <MobileNavItem icon={<MessageSquare size={20} />} label="TALK" />
      </nav>
    </div>
  );
}

function SidebarIcon({ icon, title, active = false }: { icon: ReactNode, title: string, active?: boolean }) {
  return (
    <a 
      href="#" 
      title={title}
      className={`p-3 rounded-2xl transition-all ${active ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:bg-surface-container-low hover:translate-x-1'}`}
    >
      {icon}
    </a>
  );
}

function ExpertiseCard({ title, description }: { title: string, description: string }) {
  return (
    <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/5">
      <h4 className="font-headline font-bold text-primary mb-2">{title}</h4>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </div>
  );
}

function FooterLink({ href, children }: { href: string, children: ReactNode }) {
  return (
    <a 
      href={href} 
      className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavItem({ icon, label, active = false }: { icon: ReactNode, label: string, active?: boolean }) {
  return (
    <a href="#" className={`flex flex-col items-center gap-1 ${active ? 'text-primary' : 'text-on-surface-variant'}`}>
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </a>
  );
}
