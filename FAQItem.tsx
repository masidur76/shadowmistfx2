import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  delay?: number;
}

export default function FAQItem({ question, answer, delay = 0 }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-dark-800 last:border-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-5 flex items-center justify-between text-left group"
      >
        <span className="font-medium text-white group-hover:text-brand-purple transition-colors pr-4">
          {question}
        </span>
        <ChevronDown
          size={20}
          className={`text-dark-500 group-hover:text-brand-purple transition-all duration-300 flex-shrink-0 ${
            isOpen ? 'rotate-180 text-brand-purple' : ''
          }`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'maxh-0 opacity-0'
        }`}
      >
        <p className="pb-5 text-dark-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}
