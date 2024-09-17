import { useEffect, useRef, useState } from 'react';



const useIntersectionObserver = ({ threshold = 0.1, callback }) => {
  const [isObserved, setIsObserved] = useState(false);
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          setIsObserved(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold });

    observerRef.current = observer;

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [callback, threshold]);

  return {
    setRef: (node) => {
      elementRef.current = node;
    },
    isObserved,
  };
};

export default useIntersectionObserver;
