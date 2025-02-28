"use client";
import { motion } from "framer-motion";
import { useState } from "react";


const Input = ({ name, type = "text", placeholder }) => {
    const [focused, setFocused] = useState(false);

  return (
    <div className="relative w-full">
      <motion.input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full p-3 rounded-lg bg-slate-900 text-white border border-gray-700 outline-none focus:border-blue-500 transition-all"
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        whileFocus={{ scale: 1.02, borderColor: "#3b82f6" }}
      />
    </div>
  )
}

export default Input