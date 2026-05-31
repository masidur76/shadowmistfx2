import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  delay?: number;
}

export default function TestimonialCard({ name, role, content, rating, delay = 0 }: TestimonialCardProps) {
  return (
    <div
      className="p-6 md:p-8 bg-dark-900/50 border border-dark-800 rounded-2xl hover-lift animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={16}
            className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-dark-700'}
          />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-dark-200 leading-relaxed mb-6">
        "{content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-purple/20 to-dark-800 flex items-center justify-center border border-dark-700">
          <span className="text-sm font-semibold text-brand-purple">{name.charAt(0)}</span>
        </div>
        <div>
          <p className="font-medium text-white text-sm">{name}</p>
          <p className="text-dark-500 text-xs">{role}</p>
        </div>
      </div>
    </div>
  );
}
