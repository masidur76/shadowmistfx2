interface StatsCardProps {
  value: string | number;
  label: string;
  suffix?: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function StatsCard({ value, label, suffix = '', icon, delay = 0 }: StatsCardProps) {
  return (
    <div
      className="relative group p-6 bg-dark-900/30 border border-dark-800 rounded-xl overflow-hidden hover-lift animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Content */}
      <div className="relative z-10">
        {icon && (
          <div className="w-10 h-10 mb-4 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
            {icon}
          </div>
        )}
        <div className="flex items-baseline gap-1">
          <span className="font-display text-3xl md:text-4xl font-bold text-white">{value}</span>
          {suffix && <span className="text-brand-purple text-lg font-semibold">{suffix}</span>}
        </div>
        <p className="text-dark-400 text-sm mt-1">{label}</p>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-purple/30 to-transparent" />
    </div>
  );
}
