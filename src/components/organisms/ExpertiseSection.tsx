import { SKILLS } from "@/data/resume";

function ExpertiseCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/5">
      <h4 className="font-headline font-bold text-primary mb-2">{title}</h4>
      <p className="text-sm text-on-surface-variant">{description}</p>
    </div>
  );
}

export const ExpertiseSection: React.FC = () => {
  return (
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
              <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">
                {category}
              </p>
              <ul className="space-y-3 font-headline font-bold text-lg">
                {items.map((skill) => (
                  <li
                    key={skill}
                    className="hover:translate-x-1 transition-transform cursor-default hover:text-primary"
                  >
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
  );
};