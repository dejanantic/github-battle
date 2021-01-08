import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: 0,
    right: 0,
    marginTop: "20px",
    textAlign: "center",
  },
};

export default function Loading({ text = "Loading", speed = 300 }) {
  const [content, setContent] = useState(text);

  const id = useRef();

  const clear = (id) => window.clearInterval(id);

  useEffect(() => {
    id.current = window.setInterval(() => {
      setContent((c) => (c === text + "..." ? text : c + "."));
    }, speed);

    return () => clear(id.current);
  }, [text, speed]);

  return <p style={styles.content}>{content}</p>;
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number,
};
