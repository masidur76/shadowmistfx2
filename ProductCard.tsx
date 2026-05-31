import { Download, Star, Clock } from 'lucide-react';

interface ProductCardProps {
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  downloads: number;
  rating: number;
  reviewCount: number;
  includes: string[];
  isComingSoon?: boolean;
  delay?: number;
}

export default function ProductCard({
  name,
  category,
  price,
  originalPrice,
  downloads,
  rating,
  reviewCount,
  includes,
  isComingSoon = false,
  delay = 0,
}: ProductCardProps) {
  return (
    <div
      className="group bg-dark-900/50 border border-dark-800 rounded-xl overflow-hidden hover-lift animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Image Placeholder */}
      <div className="relative aspect-video overflow-hidden">
        <div className="absolute inset-0 placeholder-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 via-dark-900 to-dark-1000">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-dark-700">
              <Download size={48} strokeWidth={1} />
            </div>
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-dark-1000/40 group-hover:bg-brand-purple/5 transition-colors duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {isComingSoon && (
            <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-2xs font-semibold rounded">
              Coming Soon
            </span>
          )}
          {originalPrice && !isComingSoon && (
            <span className="px-2 py-1 bg-brand-purple/20 text-brand-purple text-2xs font-semibold rounded">
              -{Math.round((1 - price / originalPrice) * 100)}% OFF
            </span>
          )}
        </div>

        {/* Category */}
        <div className="absolute top-3 right-3">
          <span className="px-2 py-1 bg-dark-900/80 backdrop-blur-sm text-dark-300 text-2xs rounded">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-white text-sm mb-2 line-clamp-1 group-hover:text-brand-purple transition-colors">
          {name}
        </h3>

        {/* Price */}
        <div className="flex items-center gap-2 mb-3">
          {originalPrice && (
            <span className="text-dark-600 text-sm line-through">${originalPrice}</span>
          )}
          <span className="text-brand-purple font-bold text-lg">
            {isComingSoon ? 'TBA' : `$${price}`}
          </span>
        </div>

        {/* Includes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {includes.slice(0, 2).map((item) => (
            <span key={item} className="text-2xs text-dark-500 bg-dark-800 px-2 py-0.5 rounded">
              {item}
            </span>
          ))}
          {includes.length > 2 && !isComingSoon && (
            <span className="text-2xs text-dark-600 bg-dark-800 px-2 py-0.5 rounded">
              +{includes.length - 2}
            </span>
          )}
        </div>

        {/* Stats */}
        {!isComingSoon && (
          <div className="flex items-center justify-between pt-3 border-t border-dark-800">
            <div className="flex items-center gap-1 text-dark-500 text-xs">
              <Download size={12} />
              {downloads}
            </div>
            <div className="flex items-center gap-1">
              <Star size={12} className="text-yellow-500" fill="currentColor" />
              <span className="text-dark-300 text-xs">{rating}</span>
              <span className="text-dark-600 text-xs">({reviewCount})</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
