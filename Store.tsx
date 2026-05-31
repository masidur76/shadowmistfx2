import { ShoppingBag, Clock, Sparkles, Bell } from 'lucide-react';
import Button from '../components/ui/Button';

const plannedProducts = [
  {
    name: 'Editing Presets Pack',
    desc: 'My personal collection of presets I\'ve developed while learning.',
    includes: ['Transition Presets', 'Color Presets', 'Effect Presets', 'Installation Guide'],
  },
  {
    name: 'Project Templates',
    desc: 'Beginner-friendly templates for common video projects.',
    includes: ['AE Project Files', 'Premiere Projects', 'Customizable Assets', 'Tutorial'],
  },
  {
    name: 'Motion Graphics Pack',
    desc: 'Simple motion graphics elements I\'ve created.',
    includes: ['Title Animations', 'Lower Thirds', 'Transitions', 'Icons'],
  },
  {
    name: 'Learning Resources',
    desc: 'Resources to help others starting their editing journey.',
    includes: ['Workflow Guide', 'Tips & Tricks', 'Practice Projects', 'Resource List'],
  },
];

export default function Store() {
  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 text-brand-purple animate-fade-in">
            <ShoppingBag size={20} />
            <span className="text-sm font-semibold tracking-wider uppercase">Store</span>
          </div>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-fade-in-up delay-100">
            Coming <span className="text-gradient">Soon</span>
          </h1>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Digital products and resources are in development. I'll only release them when
            I feel they're genuinely helpful and worth sharing.
          </p>
        </div>

        {/* Coming Soon Banner */}
        <section className="mb-16">
          <div className="relative p-8 md:p-12 bg-gradient-to-br from-brand-purple/10 via-dark-900 to-dark-1000 border border-brand-purple/20 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 placeholder-pattern opacity-10" />

            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-purple/10 rounded-full mb-6">
                <Clock className="text-brand-purple" size={32} />
              </div>

              <h2 className="font-display font-bold text-2xl md:text-3xl text-white mb-4">
                Store Opening <span className="text-gradient">Later</span>
              </h2>

              <p className="text-dark-400 leading-relaxed mb-8">
                I'm currently focused on learning and improving my editing skills.
                The store will launch when I have products I'm proud of and confident
                will actually help others. Quality over speed.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 bg-dark-900/50 border border-dark-700 rounded-lg text-white placeholder:text-dark-500 focus:outline-none focus:border-brand-purple/50 w-full sm:w-64"
                />
                <Button variant="primary" size="md">
                  <Bell size={16} />
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* What's Planned */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">In Development</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white animate-fade-in-up delay-100">
              What's <span className="text-gradient">Planned</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {plannedProducts.map((product, index) => (
              <div
                key={product.name}
                className="p-6 bg-dark-900/50 border border-dark-800 rounded-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 75}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-brand-purple/10 rounded-xl flex items-center justify-center">
                    <Sparkles className="text-brand-purple" size={20} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-white mb-2">{product.name}</h3>
                    <p className="text-dark-400 text-sm mb-4">{product.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {product.includes.map((item) => (
                        <span key={item} className="text-2xs text-dark-500 bg-dark-800 px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Wait */}
        <section className="max-w-2xl mx-auto">
          <div className="p-8 bg-dark-900/50 border border-dark-800 rounded-2xl">
            <h3 className="font-display font-bold text-xl text-white mb-4 text-center">
              Why Am I Waiting?
            </h3>
            <div className="space-y-3 text-dark-400 text-sm">
              <p>
                I don't want to sell products just to sell products. When I launch
                something here, it'll be because:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li>I've tested it extensively and know it works</li>
                <li>It actually helped me learn and improve</li>
                <li>It's something I'd genuinely want to buy myself</li>
                <li>I can provide real support if people have questions</li>
              </ul>
              <p className="pt-2">
                This approach takes longer, but I'd rather build trust than make
                a quick sale. Thanks for understanding.
              </p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mt-16 text-center">
          <p className="text-dark-500 text-sm mb-4">
            Want to know when the store launches? Or have suggestions for what you'd like to see?
          </p>
          <Button variant="secondary" size="md" onClick={() => window.location.href = '/contact'}>
            Get in Touch
          </Button>
        </section>
      </div>
    </div>
  );
}
