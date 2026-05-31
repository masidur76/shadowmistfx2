import { Play, Clock } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  duration: string;
  desc?: string;
  featured?: boolean;
  delay?: number;
}

export default function ProjectCard({
  title,
  category,
  duration,
  desc,
  featured = false,
  delay = 0,
}: ProjectCardProps) {
  return (
    <div
      className={`group relative rounded-xl overflow-hidden cursor-pointer animate-fade-in-up hover-lift ${
        featured ? 'aspect-video' : 'aspect-[4/3]'
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Placeholder Background */}
      <div className="absolute inset-0 placeholder-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-1000">
        <div className="absolute inset-0 bg-gradient-to-t from-dark-1000/90 via-dark-900/40 to-transparent" />

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 bg-dark-900/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-dark-700 group-hover:scale-110 group-hover:border-brand-purple/50 transition-all duration-300">
          <Play className="text-white ml-1" size={24} fill="white" />
        </div>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-2 py-0.5 bg-brand-purple/20 text-brand-purple text-2xs font-medium rounded">
            {category}
          </span>
          <span className="flex items-center gap-1 text-dark-500 text-2xs">
            <Clock size={10} />
            {duration}
          </span>
        </div>

        <h3 className="font-semibold text-white text-sm md:text-base line-clamp-1 group-hover:text-brand-purple-light transition-colors">
          {title}
        </h3>

        {desc && (
          <p className="text-dark-400 text-xs mt-1 line-clamp-1">{desc}</p>
        )}
      </div>

      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}
