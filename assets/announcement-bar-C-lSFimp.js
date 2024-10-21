import { B as BaseComponent, a as B, u, h, A, y } from "./BaseComponent-BqtFtXhS.js";
const backgroundClasses = {
  dark: "bg-gray-800",
  primary: "bg-primary-50",
  secondary: "bg-secondary-50",
  light: "bg-gray-100",
  default: "bg-black"
};
const SimpleSlider = (props) => {
  const { items, backgroundColor } = props;
  const [currentIndex, setCurrentIndex] = h(0);
  const slideInterval = A(null);
  const SLIDE_DURATION = 5e3;
  const [textColor, setTextColor] = h("text-black");
  y(() => {
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };
    slideInterval.current = window.setInterval(goToNextSlide, SLIDE_DURATION);
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [items.length]);
  y(() => {
    const tempColor = ["dark", "primary", "secondary"].includes(backgroundColor) ? "text-white" : "text-black";
    setTextColor(tempColor);
  }, [backgroundColor]);
  return /* @__PURE__ */ u(
    "div",
    {
      className: `relative h-[50px] overflow-hidden w-full ${backgroundClasses[backgroundColor] || backgroundClasses.default}`,
      children: /* @__PURE__ */ u(
        "div",
        {
          className: "flex h-full transition-transform duration-700 ease-in-out",
          style: { transform: `translateX(-${currentIndex * 100}%)` },
          children: items.map((item, index) => /* @__PURE__ */ u(
            "div",
            {
              className: `flex-shrink-0 w-full h-full flex items-center justify-center text-center ${textColor}`,
              children: /* @__PURE__ */ u("p", { children: [
                item.text,
                item.linkUrl && item.linkText && /* @__PURE__ */ u("a", { href: item.linkUrl, className: "underline ml-2", children: item.linkText })
              ] })
            },
            index
          ))
        }
      )
    }
  );
};
class SimpleSliderElement extends BaseComponent {
  connectedCallback() {
    const container = document.createElement("div");
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(container);
    }
    const settings = this.getAttribute("data-settings");
    const parsedSettings = settings ? JSON.parse(settings) : { items: [], backgroundColor: "light" };
    B(/* @__PURE__ */ u(SimpleSlider, { items: parsedSettings.items, backgroundColor: parsedSettings.backgroundColor }), container);
  }
}
if (!customElements.get("announcement-bar")) customElements.define("announcement-bar", SimpleSliderElement);
