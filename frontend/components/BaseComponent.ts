const tailwindSheet = new CSSStyleSheet();
const iconsSheet = new CSSStyleSheet();

import tailwind from '../entrypoints/tailwind.css?inline';

async function loadStyleSheet(sheet: CSSStyleSheet, url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch CSS from ${url}, status: ${response.status}`);
    }
    const cssText = await response.text();
    sheet.replaceSync(cssText);
  } catch (error) {
    console.error('Error creating CSSStyleSheet:', error);
  }
}

// Load Tailwind CSS and Bootstrap Icons asynchronously
tailwindSheet.replaceSync(tailwind);
loadStyleSheet(iconsSheet, 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css');

class BaseComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    if (this.shadowRoot) {
      this.shadowRoot.adoptedStyleSheets = [tailwindSheet, iconsSheet];
    }
  }
}

export default BaseComponent;
