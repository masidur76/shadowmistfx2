import { Link } from 'react-router-dom';
import { Instagram, Youtube, Facebook, Mail } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Store', path: '/store' },
    { name: 'Content Hub', path: '/content-hub' },
    { name: 'Contact', path: '/contact' },
  ],
  social: [
    { name: 'Instagram', href: 'https://instagram.com/shadowmist.fx', icon: Instagram },
    { name: 'YouTube', href: 'https://youtube.com/@shadowmist.fx', icon: Youtube },
    { name: 'Facebook', href: 'https://facebook.com/shadowmist.fx', icon: Facebook },
    { name: 'Email', href: 'mailto:contact@shadowmist.fx', icon: Mail },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-800 bg-dark-1000">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="font-display font-bold text-2xl tracking-tight">
                <span className="text-white">Shadow</span>
                <span className="text-brand-purple">Mist</span>
                <span className="text-dark-600">.FX</span>
              </span>
            </Link>
            <p className="text-dark-500 text-sm max-w-xs">
              Professional video editing and motion design. Editing Beyond Reality.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Navigation</h3>
            <ul className="space-y-2">
              {navigation.main.slice(0, 4).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-dark-400 hover:text-brand-purple text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Resources</h3>
            <ul className="space-y-2">
              {navigation.main.slice(4).map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-dark-400 hover:text-brand-purple text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4">Connect</h3>
            <div className="flex gap-3">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-dark-800 flex items-center justify-center text-dark-400 hover:text-brand-purple hover:bg-dark-700 transition-all duration-300"
                  aria-label={item.name}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-600 text-sm">
              &copy; {currentYear} ShadowMist.FX. All rights reserved.
            </p>
            <p className="text-dark-700 text-xs">
              Editing Beyond Reality
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
