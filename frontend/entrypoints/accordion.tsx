import { render } from 'preact';
import { useState } from 'preact/hooks';
import { cleanJson } from '../utilities/cleanJson';

type AccordionItem = {
  title: string;
  content: string;
};

type Data = {
  items: AccordionItem[];
};

type AccordionProps = {
  data: Data;
};

// Accordion Component
const Accordion = (props: AccordionProps) => {
  const { data } = props;
  const { items } = data;

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`accordion w-full mx-auto p-4 bg-white`}>
      {items.map((item, index) => {
        return (
          <div key={index} className={`accordion-item mb-4`}>
            <button
              className={`accordion-title w-full text-left py-3 px-4 bg-primary-50 text-white rounded-sm hover:bg-primary-75 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-0`}
              id={`accordion-title-${index}`}
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-content-${index}`}
            >
              {item.title}
            </button>
            <div
              id={`accordion-content-${index}`}
              role="region"
              aria-labelledby={`accordion-title-${index}`}
              className={`accordion-content overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
              hidden={activeIndex !== index}
            >
              <p className={`p-4 bg-gray-100 rounded-sm mt-2 whitespace-pre-wrap`}>{item.content}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

class AccordionElement extends HTMLElement {
  connectedCallback() {
    console.log('AccordionElement connected to the DOM');

    const container = document.createElement('div');
    this.appendChild(container);

    // Fetching live data from Shopify settings
    const blockData = this.getAttribute('data-settings');

    // Sanitize the raw data to handle line breaks and special characters
    let rawData = blockData;

    if (rawData) {
      rawData = cleanJson(rawData);
    }

    const parsedData = rawData ? JSON.parse(rawData) : { items: [] };

    render(<Accordion data={parsedData} />, container);
  }
}

if (!customElements.get('accordion-faq')) {
  customElements.define('accordion-faq', AccordionElement);
}
