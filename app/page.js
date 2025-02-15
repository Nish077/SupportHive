"use client";  // ← Add this
import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";


const click = () =>{
  console.log("Hello, Support Hive!");
}
export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-white text-lg h-[44vh] flex flex-col justify-center items-center"
      >
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="font-bold text-4xl flex gap-2 justify-center items-center"
        >
          Support Hive
          <span><img src="/hive.png" alt="" width={80} height={80} /></span>
        </motion.div>

        <p className="text-gray-300 text-center  px-4 mt-2 mb-4"> Create projects,
          raise funds, and help support your favorite creators.
        </p>
        <div className="gap-4 flex">
          <Button text="Get Started" onClick={click} />

          <Button text="Learn More" onClick={click} />
        </div>

      </motion.div>
      <div className="bg-white h-[0.2rem] opacity-10">

      </div>


      <div className="text-white py-12 ">
        <h2 className="text-2xl font-bold text-center my-10">
          Your fans can support you by donating to your projects.
        </h2>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/man.gif" alt="" />
            <p className="font-bold text-center">Fans want to help</p>
            <p className="text-center">Your fans are available to support you</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold text-center">Fans want to contribute</p>
            <p className="text-center">Your fans are willing to contribute financially</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold text-center">Fans want to collaborate</p>
            <p className="text-center">Your fans are ready to collaborate with you</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-[0.2rem] opacity-10 ">      </div>
      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center ">
        <h2 className="text-3xl font-bold text-center mb-14">Learn more about us</h2>
        {/* Responsive youtube embed  */}
        <div className="w-[80%] h-[40vh] md:w-[80%] md:h-[40vh] lg:w-[50%] lg:h-[40vh] xl:w-[50%] xl:h-[40vh]">
        <iframe className="w-full h-full"  src="https://www.youtube.com/embed/vxUNSuB439o?si=e36yemdxwRunWg1U" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>

      </div>
    </>
  );
}
