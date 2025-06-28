import React, { useState } from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const Question = ({ title, info }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setShow(!show)}>
          {show ? <FaMinus /> : <FaPlus />}
        </button>
      </header>

      <AnimatePresence initial={false}>
        {show && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p>{info}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default Question