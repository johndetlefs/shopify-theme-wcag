import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { cleanJson } from '../utilities/cleanJson';

import tailwindStyles from './tailwind.css?inline';

type AccordionItem = {
    title: string;
    content: string;
};

type Data = {
    items: AccordionItem[];
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
        <div className={`accordion w-full max-w-2xl mx-auto p-4 bg-white shadow-md rounded-md`}>
            {items.map((item, index) => {
                return (
                    <div key={index} className={`accordion-item mb-4`}>
                        <button
                            className={`accordion-title w-full text-left py-3 px-4 bg-primary-50 text-white rounded-md hover:bg-primary-75 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-0`}
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
                            <p className={`p-4 bg-gray-100 rounded-md mt-2 whitespace-pre-wrap`}>{item.content}</p>
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

        const React = window.React;
        const ReactDOM = window.ReactDOM;

        // Inject styles
        const style = document.createElement('style');
        style.textContent = tailwindStyles;
        shadowRoot.appendChild(style);

        const container = document.createElement('div');
        shadowRoot.appendChild(container);
        const root = createRoot(container);

        // Fetching live data from Shopify settings
        const blockData = this.getAttribute('data-settings');

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
