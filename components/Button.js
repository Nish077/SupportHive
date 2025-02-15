"use client";

import React from "react";
import { motion } from "framer-motion";

const Button = ({ text, onClick }) => {
    return (
        <motion.button
            whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 15px #63e",
                transition: { duration: 0 } // Removes delay
            }}
            whileTap={{ scale: 0.95 }}
            className=" px-4 py-2 bg-white/10 border border-[#63e] text-white rounded-xl shadow-lg backdrop-blur-md transition-all hover:bg-[#63e] hover:text-black"
            onClick={onClick}
        >
            {text}
        </motion.button>
    );
};

export default Button;
