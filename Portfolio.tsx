import { useState } from 'react';
import { Filter, Play, Clock, Grid, LayoutList } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Projects', count: 6 },
  { id: 'cinematic', name: 'Cinematic', count: 2 },
  { id: 'velocity', name: 'Velocity', count: 2 },
  { id: 'motion', name: 'Motion Graphics', count: 2 },
];

const projects = [
  { id: 1, title: 'First Cinematic Edit', category: 'Cinematic', duration: '2:30', desc: 'My first attempt at cinematic editing.' },
  { id: 2, title: 'Velocity Experiment', category: 'Velocity', duration: '1:45', desc: 'Trying out velocity editing techniques.' },
  { id: 3, title: 'Motion Graphics Test', category: 'Motion', duration: '0:58', desc: 'Basic motion graphics animation.' },
  { id: 4, title: 'Cinematic Short', category: 'Cinematic', duration: '3:15', desc: 'A short cinematic sequence.' },
  { id: 5, title: 'Velocity Practice', category: 'Velocity', duration: '2:00', desc: 'More velocity editing practice.' },
  { id: 6, title: 'Title Animation', category: 'Motion', duration: '0:20', desc: 'Simple title reveal animation.' },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category.toLowerCase() === activeCategory);

  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Portfolio</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-fade-in-up delay-100">
            My <span className="text-gradient">Work</span>
          </h1>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            A collection of my editing projects as I learn and grow
          </p>
        </div>

        {/* Filter and View Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Filter size={16} className="text-dark-500" />
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-brand-purple text-white'
                    : 'bg-dark-900/50 text-dark-400 hover:text-white hover:bg-dark-800 border border-dark-800'
                }`}
              >
                {category.name}
                <span className={`ml-1.5 text-xs ${activeCategory === category.id ? 'text-white/70' : 'text-dark-600'}`}>
                  ({category.count})
                </span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1 bg-dark-900/50 border border-dark-800 rounded-lg p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded transition-colors ${viewMode === 'grid' ? 'bg-dark-800 text-white' : 'text-dark-500 hover:text-white'}`}
            >
              <Grid size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded transition-colors ${viewMode === 'list' ? 'bg-dark-800 text-white' : 'text-dark-500 hover:text-white'}`}
            >
              <LayoutList size={16} />
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={viewMode === 'grid'
          ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-6'
          : 'space-y-4'
        }>
          {filteredProjects.map((project, index) =>
            viewMode === 'grid' ? (
              <div
                key={project.id}
                className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer animate-fade-in-up hover-lift"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Placeholder */}
                <div className="absolute inset-0 placeholder-pattern opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-1000">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="text-dark-600" size={32} />
                  </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-1000/90 via-dark-900/30 to-transparent" />
                <div className="absolute inset-0 bg-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* Duration */}
                <div className="absolute top-3 right-3 px-2 py-1 bg-dark-900/80 backdrop-blur-sm rounded text-2xs text-dark-300">
                  {project.duration}
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-brand-purple text-2xs">{project.category}</span>
                  <h3 className="font-medium text-white text-sm mt-1 line-clamp-1">{project.title}</h3>
                </div>
              </div>
            ) : (
              <div
                key={project.id}
                className="group flex gap-4 p-4 bg-dark-900/30 border border-dark-800 rounded-xl hover-lift cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
                onClick={() => setSelectedProject(project.id)}
              >
                {/* Thumbnail */}
                <div className="relative w-48 flex-shrink-0 aspect-video rounded-lg overflow-hidden">
                  <div className="absolute inset-0 placeholder-pattern opacity-20" />
                  <div className="absolute inset-0 bg-gradient-to-br from-dark-800 to-dark-900 flex items-center justify-center">
                    <Play className="text-dark-600" size={24} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <span className="text-brand-purple text-xs">{project.category}</span>
                  <h3 className="font-semibold text-white mt-1 line-clamp-1 group-hover:text-brand-purple-light transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark-400 text-sm mt-2 line-clamp-2">{project.desc}</p>
                  <div className="flex items-center gap-2 mt-3 text-dark-500 text-xs">
                    <Clock size={12} />
                    {project.duration}
                  </div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 mx-auto mb-4 bg-dark-900 rounded-full flex items-center justify-center">
              <Filter className="text-dark-600" size={24} />
            </div>
            <p className="text-dark-400">No projects in this category yet</p>
          </div>
        )}

        {/* Video Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-dark-1000/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="max-w-4xl w-full">
              <div className="aspect-video bg-dark-900 border border-dark-800 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <Play className="text-brand-purple mx-auto mb-4" size={64} />
                  <p className="text-dark-300 text-lg">
                    {projects.find((p) => p.id === selectedProject)?.title}
                  </p>
                  <p className="text-dark-500 text-sm mt-2">
                    {projects.find((p) => p.id === selectedProject)?.desc}
                  </p>
                </div>
              </div>
              <p className="text-dark-500 text-sm text-center mt-4">Click anywhere to close</p>
            </div>
          </div>
        )}

        {/* Note */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <p className="text-dark-500 text-sm">
            These projects represent my learning journey. I'm sharing them to document my progress
            and show where I'm at. Quality will improve as I grow.
          </p>
        </div>
      </div>
    </div>
  );
}
