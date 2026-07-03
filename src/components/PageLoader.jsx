import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function PageLoader() {
  const [show, setShow] = useState(() => !sessionStorage.getItem("mh_loaded"));

  useEffect(() => {
    if (!show) return;
    const t = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("mh_loaded", "1");
    }, 1100);
    return () => clearTimeout(t);
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
        >
          <div className="font-mono text-sm md:text-base text-paper/90">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <span className="text-[#6FCF97]">mehadi=#</span>{" "}
            </motion.span>
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "auto" }}
              transition={{ delay: 0.25, duration: 0.6, ease: "easeInOut" }}
              className="inline-block overflow-hidden whitespace-nowrap align-bottom"
            >
              connect developer;
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ delay: 0.9, duration: 0.5, repeat: 1 }}
              className="ml-1"
            >
              _
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
