import { render } from 'preact';
import { useEffect, useRef, useState } from 'preact/hooks';
import BaseComponent from '../components/BaseComponent';

interface SimpleSliderProps {
  items: { text: string; linkText?: string; linkUrl?: string }[];
  backgroundColor: string;
}

const SimpleSlider = (props: SimpleSliderProps) => {
  const { items, backgroundColor } = props;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<number | null>(null);
  const SLIDE_DURATION = 5000; // Duration to show each slide (in milliseconds)

  useEffect(() => {
    // Function to go to the next slide
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    // Set up interval to change slides
    slideInterval.current = window.setInterval(goToNextSlide, SLIDE_DURATION);

    // Cleanup interval on component unmount
    return () => {
      if (slideInterval.current) {
        clearInterval(slideInterval.current);
      }
    };
  }, [items.length]);

  // Determine text color based on background color
  const textColor = ['dark', 'primary', 'secondary'].includes(backgroundColor) ? 'text-white' : 'text-black';

  const background = (() => {
    switch (backgroundColor) {
      case 'dark':
        return 'gray-800';
      case 'primary':
        return 'primary-50';
      case 'secondary':
        return 'secondary-50';
      default:
        return 'gray-100';
    }
  })();

  return (
    <div className={`relative h-[50px] overflow-hidden w-full bg-${background}`}>
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-full h-full flex items-center justify-center text-center ${textColor}`}
          >
            <p>
              {item.text}
              {item.linkUrl && item.linkText && (
                <a href={item.linkUrl} className="underline ml-2">
                  {item.linkText}
                </a>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

class SimpleSliderElement extends BaseComponent {
  connectedCallback() {
    const container = document.createElement('div');
    if (this.shadowRoot) {
      this.shadowRoot.appendChild(container);
    }

    const settings = this.getAttribute('data-settings');
    const parsedSettings = settings ? JSON.parse(settings) : { items: [], backgroundColor: 'light' };

    // Render Preact component
    render(<SimpleSlider items={parsedSettings.items} backgroundColor={parsedSettings.backgroundColor} />, container);
  }
}

if (!customElements.get('announcement-bar')) customElements.define('announcement-bar', SimpleSliderElement);
