import { B as BaseComponent, a as B, u, h } from "./BaseComponent-BqtFtXhS.js";
function cleanJson(jsonStr) {
  let inString = false;
  let escaped = false;
  let result = "";
  for (let i = 0; i < jsonStr.length; i++) {
    let char = jsonStr[i];
    if (char === '"' && !escaped) {
      inString = !inString;
      result += char;
      continue;
    }
    if (inString) {
      if (char === "\\" && !escaped) {
        escaped = true;
        result += char;
        continue;
      }
      if ((char === "\n" || char === "\r") && !escaped) {
        result += "\\n";
        continue;
      }
    }
    if (escaped) {
      escaped = false;
    }
    result += char;
  }
  return result;
}
const Accordion = (props) => {
  const { data } = props;
  const { items } = data;
  const [activeIndex, setActiveIndex] = h(null);
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return /* @__PURE__ */ u("div", { className: `accordion w-full mx-auto p-4 bg-white`, children: items.map((item, index) => {
    return /* @__PURE__ */ u("div", { className: `accordion-item mb-2`, children: [
      /* @__PURE__ */ u(
        "button",
        {
          className: `btn btn-primary btn-outline btn-md w-full`,
          id: `accordion-title-${index}`,
          onClick: () => handleToggle(index),
          "aria-expanded": activeIndex === index,
          "aria-controls": `accordion-content-${index}`,
          children: [
            item.title,
            /* @__PURE__ */ u("i", { className: `${activeIndex === index ? "bi-chevron-up" : "bi-chevron-down"} ` })
          ]
        }
      ),
      /* @__PURE__ */ u(
        "div",
        {
          id: `accordion-content-${index}`,
          role: "region",
          "aria-labelledby": `accordion-title-${index}`,
          className: `accordion-content overflow-hidden transition-max-height duration-300 ease-in-out ${activeIndex === index ? "max-h-96" : "max-h-0"}`,
          hidden: activeIndex !== index,
          children: /* @__PURE__ */ u("p", { className: `p-4 bg-gray-100 rounded-sm mt-2 whitespace-pre-wrap`, children: item.content })
        }
      )
    ] }, index);
  }) });
};
class AccordionElement extends BaseComponent {
  connectedCallback() {
    const container = document.createElement("div");
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(container);
    }
    const settings = this.getAttribute("data-settings");
    const rawData = settings ? cleanJson(settings) : null;
    const parsedSettings = rawData ? JSON.parse(
      rawData.replace(/&(#\d+|#x[0-9a-fA-F]+|[a-zA-Z]+);/g, (match) => {
        const textArea = document.createElement("textarea");
        textArea.innerHTML = match;
        return textArea.value;
      })
    ) : { items: [], backgroundColor: "light" };
    B(/* @__PURE__ */ u(Accordion, { data: parsedSettings }), container);
  }
}
if (!customElements.get("accordion-faq")) customElements.define("accordion-faq", AccordionElement);
