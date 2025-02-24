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
          <div key={index} className={`accordion-item mb-2`}>
            <button
              className={`btn btn-primary btn-outline btn-md w-full`}
              id={`accordion-title-${index}`}
              onClick={() => handleToggle(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`accordion-content-${index}`}
            >
              {item.title}
              <i className={`${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'} `}></i>
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
    const settings = this.getAttribute('data-settings');

    const rawData = settings ? cleanJson(settings) : null;

    const parsedSettings = rawData
      ? JSON.parse(
          rawData.replace(/&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z]+);/g, (match) => {
            const textArea = document.createElement('textarea');
            textArea.innerHTML = match;
            return textArea.value;
          }),
        )
      : { items: [], backgroundColor: 'light' };

    // Render Preact component
    render(<Accordion data={parsedSettings} />, container);
  }
}

if (!customElements.get('accordion-faq')) customElements.define('accordion-faq', AccordionElement);
