import { Link } from 'react-router-dom';
import { ArrowRight, Play, Sparkles, Film, Heart } from 'lucide-react';
import Button from '../components/ui/Button';
import Avatar from '../components/ui/Avatar';
import ProjectCard from '../components/ui/ProjectCard';

const featuredProjects = [
  { id: 1, title: 'First Cinematic Edit', category: 'Cinematic', duration: '2:30', featured: true },
  { id: 2, title: 'Velocity Experiment', category: 'Velocity', duration: '1:45', featured: true },
  { id: 3, title: 'Motion Graphics Test', category: 'Motion', duration: '0:58', featured: true },
];

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-dark-1000 via-dark-950 to-dark-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-purple/5 blur-[120px] animate-pulse-slow" />
          <div className="absolute inset-0 opacity-[0.03]">
            <div className="h-full w-full" style={{
              backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>
          <div className="absolute inset-0 noise-overlay opacity-50" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="flex flex-col items-center text-center">
            {/* Creator Avatar */}
            <div className="mb-8 animate-fade-in-down">
              <Avatar size="2xl" />
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-900/50 border border-dark-800 rounded-full mb-6 animate-fade-in-up">
              <Heart size={14} className="text-brand-purple" />
              <span className="text-dark-300 text-sm font-medium">Video Editor & Creator</span>
            </div>

            {/* Brand Name */}
            <h1 className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight mb-4 animate-fade-in-up delay-100">
              <span className="text-white">Shadow</span>
              <span className="text-gradient">Mist</span>
              <span className="text-dark-600">.FX</span>
            </h1>

            {/* Tagline */}
            <p className="text-xl md:text-2xl text-dark-300 font-light mb-6 animate-fade-in-up delay-200">
              Editing Beyond Reality
            </p>

            {/* Description */}
            <p className="text-dark-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up delay-300">
              I'm a video editor on a journey to master the craft. This is my space to share
              my work, document my progress, and connect with fellow creators.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-400">
              <Link to="/portfolio">
                <Button variant="primary" size="lg">
                  View My Work
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="secondary" size="lg">
                  My Story
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in delay-500">
          <div className="w-6 h-10 rounded-full border border-dark-700 flex justify-center pt-2">
            <div className="w-1 h-2 bg-brand-purple rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* My Story Preview */}
      <section className="py-20 md:py-28 bg-dark-1000/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-slide-in-left">
              <p className="text-brand-purple text-sm font-medium mb-2">My Story</p>
              <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-6">
                Just Getting <span className="text-gradient">Started</span>
              </h2>
              <div className="space-y-4 text-dark-300 leading-relaxed">
                <p>
                  Hi, I'm the creator behind ShadowMist.FX. Video editing found me recently,
                  and it's become something I'm genuinely passionate about.
                </p>
                <p>
                  I spend my time learning new techniques, experimenting with different styles,
                  and pushing myself to create better content. This website is both my portfolio
                  and my journey documented.
                </p>
                <p>
                  I'm not claiming to be an expert yet. I'm a creator who's dedicated to
                  improving every day and building something meaningful along the way.
                </p>
              </div>
              <Link to="/about" className="inline-block mt-8">
                <Button variant="secondary" size="md">
                  Read More
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-brand-purple/10 via-transparent to-transparent rounded-3xl" />
                <div className="relative bg-dark-900/80 border border-dark-800 rounded-2xl p-8 text-center">
                  <Avatar size="xl" className="mx-auto mb-6" />
                  <h3 className="font-display font-bold text-2xl text-white mb-2">ShadowMist.FX</h3>
                  <p className="text-dark-400 text-sm mb-6">Video Editor & Creator</p>

                  <div className="flex flex-wrap justify-center gap-2">
                    {['Learning', 'Creating', 'Growing'].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-brand-purple/10 text-brand-purple text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">My Work</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 animate-fade-in-up delay-100">
              Latest <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-dark-400 max-w-xl mx-auto animate-fade-in-up delay-200">
              A collection of my editing projects as I learn and grow
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                {...project}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="text-center">
            <Link to="/portfolio">
              <Button variant="ghost" size="md">
                View All Projects
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What I'm Learning */}
      <section className="py-20 md:py-28 bg-dark-1000/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Skills</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 animate-fade-in-up delay-100">
              What I'm <span className="text-gradient">Learning</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Video Editing', desc: 'Mastering cuts, pacing, and storytelling through Premiere Pro and other editing software.' },
              { title: 'Motion Graphics', desc: 'Learning After Effects to create animations, titles, and visual effects.' },
              { title: 'Color Grading', desc: 'Understanding color theory and developing my own editing style.' },
            ].map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 bg-dark-900/30 border border-dark-800 rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-10 h-10 mb-4 rounded-lg bg-brand-purple/10 flex items-center justify-center text-brand-purple">
                  <Film size={20} />
                </div>
                <h3 className="font-semibold text-white mb-2">{skill.title}</h3>
                <p className="text-dark-400 text-sm">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Goals */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Goals</p>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 animate-fade-in-up delay-100">
              Where I'm <span className="text-gradient">Heading</span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {[
                { title: 'Build My Portfolio', desc: 'Create consistent, quality content that showcases my growing skills.' },
                { title: 'Find My Style', desc: 'Develop a unique editing aesthetic that feels authentic to me.' },
                { title: 'Connect with Creators', desc: 'Build genuine relationships in the editing community.' },
                { title: 'Launch Resources', desc: 'Eventually share presets and resources that helped me learn.' },
              ].map((goal, index) => (
                <div
                  key={goal.title}
                  className="flex gap-4 p-4 bg-dark-900/30 border border-dark-800 rounded-xl animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple text-sm font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium text-white mb-1">{goal.title}</h3>
                    <p className="text-dark-400 text-sm">{goal.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-dark-1000/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Sparkles className="text-brand-purple mx-auto mb-4 animate-fade-in" size={32} />
            <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-4 animate-fade-in-up delay-100">
              Thanks for <span className="text-gradient">Visiting</span>
            </h2>
            <p className="text-dark-400 mb-8 animate-fade-in-up delay-200">
              This is just the beginning. I'm excited to share my journey with you.
              If you want to connect or collaborate, I'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
              <Link to="/contact">
                <Button variant="primary" size="lg">
                  Get in Touch
                  <ArrowRight size={18} />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="secondary" size="lg">
                  See My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
