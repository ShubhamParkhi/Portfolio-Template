import React from "react";
import { motion } from "framer-motion";

// define the gradient colors and the animation duration
const colors = ["#f0f0f0", "#e0e0e0", "#f0f0f0"];
const duration = 1.5;

// define the keyframes animation
const shine = {
  // start from the left
  0: {
    backgroundPosition: "0%",
  },
  // move to the right
  100: {
    backgroundPosition: "100%",
  },
};

// define the CSS styles
const style = {
  // use a linear gradient with the colors
  background: `linear-gradient(to right, ${colors.join(",")})`,
  // set the background size to cover the element
  backgroundSize: "200%",
  // use a border radius to create a rounded effect
  borderRadius: "10px",
  // use a backdrop filter to create a blurred effect
  backdropFilter: "blur(3px) brightness(120%)",
  // use the keyframes animation with the duration
  animation: `${shine} ${duration}s infinite linear`,
};

// define the loading component
function Loading({ height, width }: { height: string; width: string }) {
  return <motion.div style={{ ...style, height, width }} />;
}

export default Loading;
