import React, { useEffect, useRef } from "react";
import "./FadeIn.css";

const FadeIn = ({ children }) => {
  const ref = useRef();

  useEffect(() => {
    const refElement = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          refElement.classList.add("fade_in");
        }
      },
      {
        rootMargin: "0px",
      }
    );

    observer.observe(refElement);

    return () => {
      observer.unobserve(refElement);
    };
  }, []);

  return (
    <div className={`fade_in_container`} ref={ref}>
      {children}
    </div>
  );
};

export default FadeIn;
