import React from "react";
import { motion } from "framer-motion";
import "./loading.scss";

const Loading = () => {
  return (
    <motion.div className="loading">
      <motion.span
        initial={{ y: -40 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bouncing-ball"
      ></motion.span>
      <h1>
        Geeks <span className="invention"> Invention</span>
      </h1>
    </motion.div>
  );
};

export default Loading;
