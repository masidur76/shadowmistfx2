import { Play, Calendar, Bell, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/ui/Button';

const recentUploads = [
  {
    id: 1,
    title: 'First Cinematic Edit',
    date: '2025-05-28',
    duration: '2:30',
    category: 'Cinematic',
  },
  {
    id: 2,
    title: 'Velocity Test',
    date: '2025-05-25',
    duration: '1:45',
    category: 'Velocity',
  },
];

const updates = [
  {
    id: 1,
    title: 'Website Launched',
    content: 'Finally got my portfolio website up and running. A place to share my work and document my progress.',
    date: '2025-05-30',
  },
  {
    id: 2,
    title: 'New Project in Progress',
    content: 'Working on a new cinematic edit. Trying some techniques I learned recently.',
    date: '2025-05-25',
  },
  {
    id: 3,
    title: 'Learning After Effects',
    content: 'Started diving into After Effects for motion graphics. Lots to learn but excited about the possibilities.',
    date: '2025-05-20',
  },
];

export default function ContentHub() {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Updates</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-fade-in-up delay-100">
            Content <span className="text-gradient">Hub</span>
          </h1>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Recent uploads, updates, and notes from my journey
          </p>
        </div>

        {/* Recent Uploads */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-xl text-white flex items-center gap-2 animate-fade-in">
              <Play size={18} className="text-brand-purple" />
              Recent Uploads
            </h2>
            <Link to="/portfolio" className="text-brand-purple text-sm hover:text-brand-purple-light transition-colors">
              View All
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {recentUploads.map((upload, index) => (
              <div
                key={upload.id}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="absolute inset-0 placeholder-pattern opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-1000">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="text-dark-600" size={32} />
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-dark-1000/90 via-dark-900/30 to-transparent" />
                <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="absolute top-3 right-3 px-2 py-1 bg-dark-900/80 backdrop-blur-sm rounded text-2xs text-dark-300">
                  {upload.duration}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-brand-purple text-2xs">{upload.category}</span>
                  <h3 className="font-medium text-white text-sm mt-1">{upload.title}</h3>
                  <div className="flex items-center gap-2 mt-2 text-dark-500 text-xs">
                    <Calendar size={10} />
                    {new Date(upload.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Updates */}
        <section className="mb-16">
          <h2 className="font-display font-bold text-xl text-white mb-6 flex items-center gap-2 animate-fade-in">
            <Bell size={18} className="text-brand-purple" />
            Latest Updates
          </h2>

          <div className="space-y-4 max-w-3xl">
            {updates.map((update, index) => (
              <div
                key={update.id}
                className="p-5 bg-dark-900/50 border border-dark-800 rounded-xl animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-dark-500 text-xs">
                    {new Date(update.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                </div>
                <h3 className="font-medium text-white mb-2">{update.title}</h3>
                <p className="text-dark-400 text-sm">{update.content}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Notes */}
        <section className="mb-16">
          <div className="p-8 bg-dark-900/50 border border-dark-800 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="text-brand-purple" size={20} />
              <h2 className="font-display font-bold text-lg text-white">Learning Notes</h2>
            </div>

            <div className="space-y-3 text-dark-400 text-sm">
              <p>
                This section will eventually include short notes about things I'm learning,
                discoveries, and insights from my editing practice.
              </p>
              <p>
                For now, I'm focused on building the foundation and getting comfortable
                with the basics. Content will expand as I have more to share.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="max-w-2xl mx-auto text-center">
          <h2 className="font-display font-bold text-2xl text-white mb-3">Stay Updated</h2>
          <p className="text-dark-400 mb-6">
            If you'd like to follow along with my journey, sign up for occasional updates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field flex-1"
            />
            <Button variant="primary" size="md">
              Subscribe
            </Button>
          </div>
          <p className="text-dark-600 text-xs mt-3">
            No spam. Just occasional updates.
          </p>
        </section>
      </div>
    </div>
  );
}
