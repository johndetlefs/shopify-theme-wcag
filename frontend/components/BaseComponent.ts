import tailwind from '../entrypoints/tailwind.css?inline';

const tailwindSheet = new CSSStyleSheet();

try {
  tailwindSheet.replaceSync(tailwind);
  console.log('CSSStyleSheet created successfully:', tailwindSheet);
} catch (error) {
  console.error('Error creating CSSStyleSheet:', error);
}

class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [tailwindSheet];
    }
  }
}

export default BaseComponent;
