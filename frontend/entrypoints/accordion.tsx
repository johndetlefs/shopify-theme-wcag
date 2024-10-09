import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  data: AccordionItem[];
};

// Accordion Component
const Accordion: React.FC<AccordionProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md">
      {data.map((item, index) => (
        <div key={index} className="accordion-item mb-4">
          <button
            className="accordion-title w-full text-left py-3 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
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
            <p className="p-4 bg-gray-100 rounded-md mt-2">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

// Creating the Web Component Wrapper
class AccordionElement extends HTMLElement {
  connectedCallback() {
    console.log('AccordionElement connected to the DOM');
    const shadowRoot = this.attachShadow({ mode: 'open' });
    const container = document.createElement('div');
    shadowRoot.appendChild(container);
    const root = createRoot(container);

    // Fetching live data from Shopify settings
    const blockData = this.getAttribute('data-settings');
    const parsedData: AccordionItem[] = blockData ? JSON.parse(blockData) : [];

    root.render(<Accordion data={parsedData} />);
  }
}

// Registering the Web Component
customElements.define('accordion-faq', AccordionElement);

// Adding to Shopify Theme as a Draggable Block
// Add the following Liquid code to your Shopify theme's JSON template file
/*
{
  "name": "FAQ Accordion",
  "settings": [],
  "blocks": [
    {
      "type": "faq_item",
      "name": "FAQ Item",
      "settings": [
        {
          "id": "title",
          "type": "text",
          "label": "FAQ Title",
          "default": "What is your return policy?"
        },
        {
          "id": "content",
          "type": "textarea",
          "label": "FAQ Content",
          "default": "You can return any item within 30 days of purchase."
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Default",
      "category": "FAQ",
      "blocks": [
        {
          "type": "faq_item"
        }
      ]
    }
  ]
}
*/

// Use the following Liquid code to pass data to the web component in your Shopify theme template
/*
<div id="faq-accordion">
  <accordion-faq data-settings='{{ block.settings | json }}'></accordion-faq>
</div>
*/

// The above JSON should be added to your section or template file to define the block settings and structure, allowing it to be draggable onto any page.
// You can then use the <accordion-faq></accordion-faq> custom element in your Liquid template to render the FAQ accordion with live data.