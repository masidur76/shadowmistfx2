import { Heart, Sparkles, Rocket, Target, MapPin, Clock } from 'lucide-react';
import Avatar from '../components/ui/Avatar';

const skills = [
  { name: 'Video Editing', level: 40, desc: 'Premiere Pro, DaVinci Resolve' },
  { name: 'Motion Graphics', level: 25, desc: 'After Effects basics' },
  { name: 'Color Grading', level: 30, desc: 'Learning color theory' },
  { name: 'Sound Design', level: 20, desc: 'Audio syncing and music' },
  { name: 'Storytelling', level: 35, desc: 'Pacing and narrative flow' },
];

const journey = [
  {
    year: '2024',
    title: 'Discovered Video Editing',
    description: 'Watched an editing video that sparked my interest. Downloaded my first editing software and started experimenting.',
    icon: Heart,
  },
  {
    year: '2024',
    title: 'Started Learning',
    description: 'Began watching tutorials, studying other editors\' work, and practicing basic cuts and transitions every day.',
    icon: Sparkles,
  },
  {
    year: '2025',
    title: 'Created ShadowMist.FX',
    description: 'Decided to take editing seriously. Built this website to document my journey and hold myself accountable.',
    icon: Rocket,
  },
  {
    year: ' Future',
    title: 'Keep Growing',
    description: 'Continue learning, create more content, and eventually help others starting their own journey.',
    icon: Target,
  },
];

const goals = [
  { title: 'Master the Basics', desc: 'Build a solid foundation in editing fundamentals before moving to advanced techniques.' },
  { title: 'Develop My Style', desc: 'Find an editing aesthetic that feels authentic and represents who I am as a creator.' },
  { title: 'Build Consistently', desc: 'Create and share work regularly to build momentum and track my progress.' },
  { title: 'Connect with Community', desc: 'Learn from other editors, share feedback, and grow together.' },
];

export default function About() {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">About Me</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-fade-in-up delay-100">
            My <span className="text-gradient">Journey</span>
          </h1>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            A video editor in training, documenting the path from beginner to creator
          </p>
        </div>

        {/* Personal Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
              Hello, I'm <span className="text-gradient">ShadowMist.FX</span>
            </h2>
            <div className="space-y-4 text-dark-300 leading-relaxed">
              <p>
                I'm a video editor who's still learning the craft. This isn't a story about
                being an expert or having years of experience. It's a story about starting
                from zero and building something meaningful.
              </p>
              <p>
                Video editing found me when I was looking for a creative outlet. I stumbled
                across an edit that made me feel something, and I thought: "I want to learn
                how to do that."
              </p>
              <p>
                So here I am. Learning, practicing, failing, and improving. This website
                exists to document my progress and connect with others on a similar path.
                I'm not trying to pretend I'm something I'm not. I'm just a creator who's
                committed to getting better.
              </p>
            </div>

            {/* Quick Info */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-dark-900/30 border border-dark-800 rounded-xl">
                <MapPin size={18} className="text-brand-purple mb-2" />
                <p className="text-white font-medium text-sm">Remote</p>
                <p className="text-dark-500 text-xs">Location</p>
              </div>
              <div className="p-4 bg-dark-900/30 border border-dark-800 rounded-xl">
                <Clock size={18} className="text-brand-purple mb-2" />
                <p className="text-white font-medium text-sm">Since 2024</p>
                <p className="text-dark-500 text-xs">Editing</p>
              </div>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="relative max-w-md mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-brand-purple/10 via-transparent to-transparent rounded-3xl" />
              <div className="relative bg-dark-900/80 border border-dark-800 rounded-2xl p-8 text-center">
                <Avatar size="2xl" className="mx-auto mb-6" />
                <h3 className="font-display font-bold text-2xl text-white mb-2">ShadowMist.FX</h3>
                <p className="text-dark-400 text-sm mb-6">Video Editor & Creator</p>

                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {['Still Learning', 'Passionate', 'Determined'].map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="h-px bg-gradient-to-r from-transparent via-dark-700 to-transparent" />

                <p className="text-dark-500 text-xs mt-6 italic">
                  "Every expert was once a beginner"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* My Journey Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Timeline</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white animate-fade-in-up delay-100">
              How It <span className="text-gradient">Started</span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-8 bottom-8 w-px bg-gradient-to-b from-brand-purple via-dark-700 to-transparent" />

            <div className="space-y-8">
              {journey.map((item, index) => (
                <div key={index}
                  className="relative flex gap-6 animate-fade-in-up"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-dark-900 border border-dark-700 rounded-xl flex items-center justify-center">
                    <item.icon className="text-brand-purple" size={24} />
                  </div>

                  <div className="flex-1 pt-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-brand-purple font-display font-bold">{item.year}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-dark-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills I'm Learning */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Learning</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white animate-fade-in-up delay-100">
              Skills I'm <span className="text-gradient">Developing</span>
            </h2>
            <p className="text-dark-500 text-sm mt-2 max-w-md mx-auto">
              These represent where I'm at currently, not where I want to be
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {skills.map((skill, index) => (
                <div key={skill.name}
                  className="p-5 bg-dark-900/30 border border-dark-800 rounded-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex justify-between items-center mb-2">
                    <div>
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-dark-500 text-xs ml-2">({skill.desc})</span>
                    </div>
                    <span className="text-brand-purple text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-dark-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-brand-purple-dark to-brand-purple rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Current Goals */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Direction</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white animate-fade-in-up delay-100">
              What I'm Working <span className="text-gradient">Towards</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {goals.map((goal, index) => (
                <div key={goal.title}
                  className="p-6 bg-dark-900/30 border border-dark-800 rounded-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-8 h-8 mb-4 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple font-bold text-sm">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-white mb-2">{goal.title}</h3>
                  <p className="text-dark-400 text-sm">{goal.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Why This Website Exists */}
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Purpose</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-6 animate-fade-in-up delay-100">
            Why I Made This <span className="text-gradient">Site</span>
          </h2>
          <div className="space-y-4 text-dark-300">
            <p>
              I built this website for me. To have a place to showcase my work, track my progress,
              and hold myself accountable. But I also built it for others who might be on a
              similar journey.
            </p>
            <p>
              Too often we only see the finished product. We see the polished work of experts
              and think we need to be there already. But everyone starts somewhere. This is
              my somewhere.
            </p>
            <p>
              If you're also learning, or just starting out, know that you're not alone.
              This path is about progress, not perfection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
