import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const faqs = [
    {
        question: "What is HobbyHub?",
        answer:
            "HobbyHub is a community platform where people with shared interests can connect, learn, and grow together through hobby groups.",
    },
    {
        question: "How do I join a hobby group?",
        answer:
            "You can browse available hobby groups on the platform and request to join any that catch your interest. Some groups may require approval from the organizer.",
    },
    {
        question: "Is there any cost to join?",
        answer:
            "Joining HobbyHub and participating in most groups is free. Certain premium events or classes may have fees, which will be clearly stated beforehand.",
    },
    {
        question: "Can I create my own hobby group?",
        answer:
            "Absolutely! You can create and manage your own hobby group, set rules, schedule meetups, and invite others to join.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleIndex = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="max-w-screen-2xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Frequently Asked Questions
            </h2>

            <div className="space-y-6">
                {faqs.map(({ question, answer }, index) => {
                    const isOpen = openIndex === index;

                    return (
                        <div
                            key={index}
                            className="border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition duration-300 bg-white"
                        >
                            <button
                                onClick={() => toggleIndex(index)}
                                className="flex items-center justify-between w-full px-6 py-5 text-left bg-gray-50 hover:bg-gray-100 focus:outline-none"
                                aria-expanded={isOpen}
                                aria-controls={`faq-content-${index}`}
                                id={`faq-header-${index}`}
                            >
                                <span className="text-lg font-semibold text-gray-800">{question}</span>
                                {isOpen ? (
                                    <FiChevronUp className="w-6 h-6 text-gray-600 transition-transform duration-300" />
                                ) : (
                                    <FiChevronDown className="w-6 h-6 text-gray-600 transition-transform duration-300" />
                                )}
                            </button>

                            <div
                                id={`faq-content-${index}`}
                                role="region"
                                aria-labelledby={`faq-header-${index}`}
                                className={`px-6 pt-1 pb-5 text-gray-700 text-base transition-all duration-500 ease-in-out ${
                                    isOpen
                                        ? 'opacity-100 max-h-[500px] translate-y-0'
                                        : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none'
                                }`}
                            >
                                <p>{answer}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default FAQ;
