import React from "react";
import { motion } from "framer-motion";

const FramerMotion = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}>
      <h1>Welcome to Framer Motion</h1>
      <p>Enjoy creating stunning animations in your React applications!</p>
    </motion.div>
  );
};

export default FramerMotion;
