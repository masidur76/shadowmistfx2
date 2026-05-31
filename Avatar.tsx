interface AvatarProps {
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
  xl: 'w-32 h-32',
  '2xl': 'w-40 h-40',
};

const textSizes = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl',
  xl: 'text-3xl',
  '2xl': 'text-4xl',
};

export default function Avatar({ size = 'lg', className = '' }: AvatarProps) {
  return (
    <div
      className={`${sizeClasses[size]} relative rounded-full bg-gradient-to-br from-brand-purple/20 via-dark-800 to-dark-900 flex items-center justify-center border border-dark-700 overflow-hidden ${className}`}
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/10 to-transparent" />

      {/* Initials */}
      <span className={`font-display font-bold text-gradient ${textSizes[size]} relative z-10`}>
        SM
      </span>

      {/* Animated Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-brand-purple/20 animate-pulse-slow" />
    </div>
  );
}
