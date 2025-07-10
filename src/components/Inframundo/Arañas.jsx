import { motion } from "framer-motion";

const Arañas = () => {
  return (
    <div className="pointer-events-none">

      {/* Araña colgando */}
      <motion.img
        src="/assets/aranas.png"
        alt="Araña"
        className="absolute top-0 right-[80%] w-10 md:w-12 z-[60]"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default Arañas;
