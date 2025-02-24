import { useState, useLayoutEffect, RefObject } from "react";

export function useGetElementHeight<T extends HTMLElement | null>(
  ref: RefObject<T>
) {
  const [height, setHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!ref || !ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      if (entry) {
        setHeight(entry.contentRect.height);
      }
    });

    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { height };
}
