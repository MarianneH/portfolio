import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import "./FadeIn.css";

const FadeIn = ({ children, direction }) => {
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

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf([
    "from_left",
    "from_right",
    "from_top",
    "from_bottom",
  ]),
};

FadeIn.defaultProps = {
  direction: "from_bottom",
};

export default FadeIn;
