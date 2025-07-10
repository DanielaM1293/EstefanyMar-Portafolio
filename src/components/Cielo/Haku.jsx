import React from "react";
import { motion } from "framer-motion";

const Haku = () => {
  return (
    <motion.div
      className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 0.6, 0.4, 0.6] }}
      transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.img
        src="https://i.pinimg.com/originals/75/34/e0/7534e0ae3575e54341426fe0fd91b392.gif"
        alt="Haku volando"
        className="absolute w-[70vw] max-w-[500px] bottom-0 left-1/2 -translate-x-1/2 opacity-80"
        initial={{ y: 0 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ pointerEvents: 'none' }}
      />
    </motion.div>
  );
};

export default Haku;
