import { motion } from "framer-motion";

export const ResumeHero: React.FC = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="max-w-2xl">
          <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">
            Professional Trajectory
          </span>
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
  );
};