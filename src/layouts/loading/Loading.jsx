import React from "react";
import { motion } from "framer-motion";
import "./loading.scss";

const Loading = () => {
  return (
    <motion.div className="loading">
      <h1>Geeks Invention</h1>
    </motion.div>
  );
};

export default Loading;
