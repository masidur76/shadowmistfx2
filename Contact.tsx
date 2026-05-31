import { useState } from 'react';
import { Instagram, Youtube, Facebook, Mail, Send, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';
import FAQItem from '../components/ui/FAQItem';
import { Link } from 'react-router-dom';

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/shadowmist.fx',
    icon: Instagram,
    username: '@shadowmist.fx',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@shadowmist.fx',
    icon: Youtube,
    username: '@shadowmist.fx',
  },
  {
    name: 'Facebook',
    href: 'https://facebook.com/shadowmist.fx',
    icon: Facebook,
    username: 'ShadowMist.FX',
  },
  {
    name: 'Email',
    href: 'mailto:contact@shadowmist.fx',
    icon: Mail,
    username: 'contact@shadowmist.fx',
  },
];

const faqs = [
  {
    question: 'Are you available for freelance work?',
    answer: 'I\'m still learning and building my skills, so I\'m not taking paid work yet. But I\'m open to collaborating on projects for practice and portfolio building.',
  },
  {
    question: 'What software do you use?',
    answer: 'I primarily use Premiere Pro for editing and am learning After Effects for motion graphics. I also experiment with DaVinci Resolve for color work.',
  },
  {
    question: 'When will your store launch?',
    answer: 'The store will launch when I have products I\'m confident will genuinely help others. I don\'t want to sell something I haven\'t thoroughly tested and believe in.',
  },
  {
    question: 'How long have you been editing?',
    answer: 'I started in 2024, so I\'m still relatively new. This website documents my journey from the beginning.',
  },
  {
    question: 'Can I use your work as reference?',
    answer: 'Absolutely. Feel free to use my work as reference or inspiration. If you do, I\'d appreciate a credit or shoutout, but it\'s not required.',
  },
  {
    question: 'Do you offer tutorials?',
    answer: 'Not yet, but it\'s something I\'d like to do in the future once I feel I have enough knowledge to share meaningfully.',
  },
];

const questionTypes = [
  'General Question',
  'Collaboration',
  'Feedback',
  'Just Saying Hi',
  'Other',
];

interface FormData {
  name: string;
  email: string;
  questionType: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    questionType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name.trim()) newErrors.name = 'Required';
    if (!formData.email.trim()) newErrors.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Invalid email';
    if (!formData.message.trim()) newErrors.message = 'Required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Min 10 characters';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', questionType: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">Contact</p>
          <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-4 animate-fade-in-up delay-100">
            Say <span className="text-gradient">Hello</span>
          </h1>
          <p className="text-dark-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Have a question or just want to connect? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3 animate-slide-in-left">
            <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-6 md:p-8">
              <h2 className="font-display font-bold text-xl text-white mb-6">Send a Message</h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
                    <ArrowRight className="text-green-400" size={16} />
                  </div>
                  <p className="text-green-400 text-sm">Message sent! Thanks for reaching out.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="label-text">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`input-field ${errors.name ? 'border-red-500/50' : ''}`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="label-text">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`input-field ${errors.email ? 'border-red-500/50' : ''}`}
                      placeholder="you@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="questionType" className="label-text">What's this about?</label>
                  <select
                    id="questionType"
                    name="questionType"
                    value={formData.questionType}
                    onChange={handleChange}
                    className="input-field cursor-pointer"
                  >
                    <option value="" disabled>Select type</option>
                    {questionTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="label-text">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className={`input-field resize-none ${errors.message ? 'border-red-500/50' : ''}`}
                    placeholder="Say whatever you'd like..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <Button variant="primary" size="lg" className="w-full">
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={18} />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in-right">
            {/* Social Links */}
            <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-6">
              <h2 className="font-display font-bold text-lg text-white mb-6">Find Me</h2>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-4 p-3 bg-dark-800/50 rounded-xl hover:bg-dark-800 transition-colors"
                  >
                    <div className="w-10 h-10 bg-dark-700 rounded-lg flex items-center justify-center group-hover:bg-brand-purple/20 transition-colors">
                      <link.icon className="text-dark-400 group-hover:text-brand-purple transition-colors" size={20} />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-white text-sm">{link.name}</p>
                      <p className="text-dark-500 text-xs">{link.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Note */}
            <div className="p-6 bg-dark-900/50 border border-dark-800 rounded-2xl">
              <p className="text-dark-400 text-sm">
                I'm still building things up here, so I might be slow to respond.
                Thanks for your patience.
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-20 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-brand-purple text-sm font-medium mb-2 animate-fade-in">FAQ</p>
            <h2 className="font-display font-bold text-2xl md:text-3xl text-white animate-fade-in-up delay-100">
              Common <span className="text-gradient">Questions</span>
            </h2>
          </div>

          <div className="bg-dark-900/50 border border-dark-800 rounded-2xl p-6 md:p-8">
            {faqs.map((faq, index) => (
              <FAQItem key={index} question={faq.question} answer={faq.answer} delay={index * 50} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
