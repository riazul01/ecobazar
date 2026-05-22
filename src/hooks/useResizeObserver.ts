import { useState, useEffect, type RefObject } from "react";
import ResizeObserver from "resize-observer-polyfill";

const useResizeObserver = (ref: RefObject<HTMLElement | null>) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleResize = (entries: ResizeObserverEntry[]) => {
      for (const entry of entries) {
        if (entry.contentRect) {
          setWidth(entry.contentRect.width);
        }
      }
    };

    const observer = new ResizeObserver(handleResize);
    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [ref]);

  return width;
};

export default useResizeObserver;
