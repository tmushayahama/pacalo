import type React from 'react';
import { useMemo, useState } from 'react';
import { FaChevronDown, FaChevronUp, FaPhone, FaEnvelope } from 'react-icons/fa';
import type { FaqCategory } from '../models/faq';
import { DEFAULT_FAQS } from '../data/faq';


interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

interface FAQProps {
  faqData?: FaqCategory[];
}

const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
      aria-expanded={isOpen}
    >
      <span className="font-semibold text-gray-900 pr-4">{question}</span>
      {isOpen ? (
        <FaChevronUp className="text-pacalo-blue flex-shrink-0" />
      ) : (
        <FaChevronDown className="text-pacalo-blue flex-shrink-0" />
      )}
    </button>
    {isOpen && (
      <div className="p-4 bg-white border-t border-gray-200">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{answer}</p>
      </div>
    )}
  </div>
);

const FAQ: React.FC<FAQProps> = ({ faqData }) => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const faqItems = useMemo(
    () => (faqData && faqData.length ? faqData : DEFAULT_FAQS),
    [faqData]
  );

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const index = `${categoryIndex}-${questionIndex}`;
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about our services
          </p>
        </div>

        <div className="space-y-8">
          {faqItems.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-bold text-pacalo-blue mb-4">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.questions.map((item, questionIndex) => {
                  const index = `${categoryIndex}-${questionIndex}`;
                  const isOpen = openIndex === index;

                  return (
                    <AccordionItem
                      key={questionIndex}
                      question={item.question}
                      answer={item.answer}
                      isOpen={isOpen}
                      onToggle={() => toggleQuestion(categoryIndex, questionIndex)}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-pacalo-blue rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-lg mb-6">
            Our team is here to help 24/7. Give us a call or send us an email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:3093074564"
              className="inline-flex items-center justify-center px-6 py-3 bg-pacalo-gold text-pacalo-blue font-bold rounded-lg hover:bg-yellow-500 transition-colors"
            >
              <FaPhone className="mr-2" />
              Call (309) 307-4564
            </a>
            <a
              href="mailto:ride@pacalo.net"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-pacalo-blue font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              <FaEnvelope className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;