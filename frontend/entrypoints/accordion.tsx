import { render } from 'preact';
import { useState } from 'preact/hooks';
import { cleanJson } from '../utilities/cleanJson';
import BaseComponent from '../components/BaseComponent';

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
              className={`accordion-title flex justify-between w-full text-left py-3 px-4 bg-primary-50 text-white rounded-sm hover:bg-primary-75 focus:outline-none focus-visible:ring-4 focus-visible:ring-primary-0`}
              id={`accordion-title-${index}`}
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-content-${index}`}
            >
              {item.title}
              <i className={`${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'} text-white font-bold`}></i>
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

class AccordionElement extends BaseComponent {
  connectedCallback() {
    const container = document.createElement('div');
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(container);
    }

    // Fetch and parse data
    const blockData = this.getAttribute('data-settings');
    const rawData = blockData ? cleanJson(blockData) : null;
    const parsedData = rawData ? JSON.parse(rawData) : { items: [] };

    // Render Preact component
    render(<Accordion data={parsedData} />, container);
  }
}

customElements.define('accordion-faq', AccordionElement);
