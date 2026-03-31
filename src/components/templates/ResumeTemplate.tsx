import {
  Home,
  Briefcase,
  Palette,
  Mail,
  FileText,
  LayoutGrid,
  MessageSquare
} from "lucide-react";
import { ResumeHero } from "@/components/organisms/ResumeHero";
import { ExperienceSection } from "@/components/organisms/ExperienceSection";
import { ExpertiseSection } from "@/components/organisms/ExpertiseSection";

interface ResumeTemplateProps {
  children?: ReactNode;
}

function SidebarIcon({
  icon,
  title,
  active = false
}: {
  icon: ReactNode;
  title: string;
  active?: boolean;
}) {
  return (
    <a
      href="#"
      title={title}
      className={`p-3 rounded-2xl transition-all ${
        active
          ? "bg-primary/10 text-primary"
          : "text-on-surface-variant hover:bg-surface-container-low hover:translate-x-1"
      }`}
    >
      {icon}
    </a>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-colors"
    >
      {children}
    </a>
  );
}

function MobileNavItem({
  icon,
  label,
  active = false
}: {
  icon: ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <a href="#" className={`flex flex-col items-center gap-1 ${active ? "text-primary" : "text-on-surface-variant"}`}>
      {icon}
      <span className="text-[10px] font-bold">{label}</span>
    </a>
  );
}

export const ResumeTemplate: React.FC<ResumeTemplateProps> = () => {
  return (
    <div className="min-h-screen">
      {/* Top Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-nav border-b border-outline-variant/5">
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <div className="text-xl font-bold tracking-tighter text-on-surface font-headline">
            Curator
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <a
              className="font-headline font-medium text-sm tracking-tight text-on-surface-variant hover:text-primary transition-all"
              href="#"
            >
              About
            </a>
            <a
              className="font-headline font-bold text-sm tracking-tight text-primary border-b-2 border-primary pb-1"
              href="#"
            >
              Resume
            </a>
            <a
              className="font-headline font-medium text-sm tracking-tight text-on-surface-variant hover:text-primary transition-all"
              href="#"
            >
              Insights
            </a>
            <a
              className="font-headline font-medium text-sm tracking-tight text-on-surface-variant hover:text-primary transition-all"
              href="#"
            >
              Agents
            </a>
          </div>
          <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-full font-headline font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/10">
            Connect
          </button>
        </div>
      </nav>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col p-6 space-y-8 h-full w-24 fixed left-0 top-0 pt-28 bg-transparent z-40">
        <div className="flex flex-col items-center space-y-10">
          <SidebarIcon icon={<Home size={24} />} title="Home" />
          <SidebarIcon icon={<Briefcase size={24} />} title="Projects" active />
          <SidebarIcon icon={<Palette size={24} />} title="Studio" />
          <SidebarIcon icon={<Mail size={24} />} title="Contact" />
        </div>
      </aside>

      <main className="pt-32 pb-24 px-6 md:px-12 lg:pl-32 max-w-7xl mx-auto">
        <ResumeHero />
        <ExperienceSection />
        <ExpertiseSection />
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
};