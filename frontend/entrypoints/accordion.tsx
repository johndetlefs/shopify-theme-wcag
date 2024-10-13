import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import { setupTwind } from './twindSetup';

const { tw, sheet } = setupTwind();

type AccordionItem = {
    title: string;
    content: string;
};

type AccordionItems = AccordionItem[];

type Data = {
    items: AccordionItems;
};

type AccordionProps = {
    data: Data
};

// Accordion Component
const Accordion: React.FC<AccordionProps> = ({ data }) => {

    const { items } = data;

    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggle = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className={tw`accordion w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md`}>
            {items.map((item, index) => {

                return (
                    <div key={index} className={tw`accordion-item mb-4`}>
                        <button
                            className={tw`accordion-title w-full text-left py-3 px-4 bg-primary-50 text-white rounded-md hover:bg-primary-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-0`}
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
                            className={tw`accordion-content overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? 'max-h-96' : 'max-h-0'}`}
                            hidden={activeIndex !== index}
                        >
                            <p className={tw`p-4 bg-gray-100 rounded-md mt-2 whitespace-pre-wrap`}>{item.content}</p>
                        </div>
                    </div>
                )
            })}

        </div>
    );
};

// Creating the Web Component Wrapper
class AccordionElement extends HTMLElement {
    connectedCallback() {
        console.log('AccordionElement connected to the DOM');
        const shadowRoot = this.attachShadow({ mode: 'open' });

        shadowRoot.adoptedStyleSheets = [sheet.target]

        const container = document.createElement('div');
        shadowRoot.appendChild(container);
        const root = createRoot(container);

        // Fetching live data from Shopify settings
        const blockData = this.getAttribute('data-settings');

        /**
         * Cleans a JSON string by escaping unescaped line breaks within string literals.
         * @param {string} jsonStr - The JSON string to clean.
         * @returns {string} - The cleaned JSON string with line breaks escaped.
         */
        function cleanJson(jsonStr: string) {
            let inString = false;    // Tracks if we're inside a string literal
            let escaped = false;     // Tracks if the current character is escaped
            let result = '';         // Accumulates the cleaned JSON string

            for (let i = 0; i < jsonStr.length; i++) {
                let char = jsonStr[i];

                if (char === '"' && !escaped) {
                    inString = !inString; // Toggle inString status
                    result += char;
                    continue;
                }

                if (inString) {
                    if (char === '\\' && !escaped) {
                        escaped = true;    // Next character is escaped
                        result += char;
                        continue;
                    }

                    // If we encounter a line break inside a string, replace it with \\n
                    if ((char === '\n' || char === '\r') && !escaped) {
                        result += '\\n';
                        continue;
                    }
                }

                // Reset escaped status if it was set
                if (escaped) {
                    escaped = false;
                }

                result += char;
            }

            return result;
        }

        // Sanitize the raw data to handle line breaks and special characters
        let rawData = blockData

        if (rawData) {
            rawData = cleanJson(rawData);
        }

        const parsedData: Data = rawData ? JSON.parse(rawData) : { items: [] };

        root.render(<Accordion data={parsedData} />);
    }
}

// Registering the Web Component
// check if the element is already registered
if (!customElements.get('accordion-faq'))
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