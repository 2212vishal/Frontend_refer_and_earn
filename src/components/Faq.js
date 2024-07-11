import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs'; // Example: Using react-icons

function Faq() {
  const [accordions, setAccordions] = useState([false, false, false, false]);

  const toggleAccordion = (index) => {
    const updatedAccordions = [...accordions];
    updatedAccordions[index] = !updatedAccordions[index];
    setAccordions(updatedAccordions);
  };

  return (
    <div>
      <section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
        <img className="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/faqs/gradient.svg" alt="" />
        <div className="relative z-10 container px-4 mx-auto">
          <div className="md:max-w-4xl mx-auto">
            {/* <p className="mb-7 text-sm text-indigo-600 text-center font-semibold uppercase tracking-px">Have any questions?</p> */}
            {/* <h2 className="mb-16 text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2> */}
            <h2 className="font-mullish font-bold text-2xl text-center text-black">Frequently Asked Questions</h2>
          <div className="w-6 h-1 bg-greenLight mx-auto mt-4 mb-6"></div>
            <div className="mb-11 space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="w-full">
                  <button
                    className={`w-full py-4 px-8 bg-white bg-opacity-60 border-2 border-gray-200 rounded-2xl shadow-10xl ${
                      accordions[index] ? 'border-indigo-600' : ''
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold leading-normal">{faq.question}</h3>
                      <div className="flex-shrink-0 ml-2">
                        {accordions[index] ? (
                          <BsChevronUp className="w-6 h-6 text-indigo-600" />
                        ) : (
                          <BsChevronDown className="w-6 h-6 text-gray-500" />
                        )}
                      </div>
                    </div>
                    <div
                      className={`overflow-hidden transition-height duration-500 ${
                        accordions[index] ? 'h-auto' : 'h-0'
                      }`}
                    >
                      <p className="mt-4 text-gray-600 font-medium">{faq.answer}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-center font-medium">
              <span>Still have any questions?</span>
              <a className="font-semibold text-indigo-600 hover:text-indigo-700" href="#">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

// Example FAQ data structure
const faqData = [
  {
    question: 'Do you provide any free plan?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.',
  },
  {
    question: 'How to claim your 25% discount offer?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.',
  },
  {
    question: "What’s your refund policy?",
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.',
  },
  {
    question: 'How to get support for the product?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat tempor to the condimentum vitae vel purus.',
  },
];

export default Faq;
