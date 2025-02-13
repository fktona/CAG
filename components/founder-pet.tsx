"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const images = ["/bb.svg", "/founder.svg"];

export function FounderPet() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative my-[175px] bg-[#FFCA0D] lg:py-24 py-16">
      <div className="absolute left-0 md:-top-[165px] -top-[106px] w-full h-[170px]">
        <Image
          src="/sec-up.png"
          alt="Goat Character"
          width={1920}
          height={1080}
          className="w-full hidden md:block h-full"
        />
        <Image
          src="/sec-u.svg"
          alt="Goat Character"
          width={1920}
          height={1080}
          className="w-full lg:block h-full"
        />
      </div>
      <div className="absolute left-0 md:-bottom-[165px] -bottom-[106px] w-full h-[170px]">
        <Image
          src="/sec-down.png"
          alt="Goat Character"
          width={1920}
          height={1080}
          className="w-full hidden md:block h-full"
        />
        <Image
          src="/sec-d.svg"
          alt="Goat Character"
          width={1920}
          height={1080}
          className="w-full lg:hidden h-full"
        />
      </div>
      <div className="container relative z-30">
        <div className="flex justify-between flex-col lg:flex-row items-center gap-12 w-full r">
          <div>
            <h2 className="md:text-[46.5px] md:leading-[60px] text-[22px] leading-[28px] lg:whitespace-nowrap font-bold text-black mb-6">
              BNB'S VERY OWN FOUNDER PET
            </h2>
            <p className="text-black/80 md:text-[38.5px] md:leading-[45px] text-[16px] leading-[20.42px] mb-8">
              For years as an active face in crypto, the masses have always
              wondered if CZ had a pet. As someone as private as him, the people
              thought they would never determine an animal connection to take
              over his home chain of BNB, until B was found
            </p>
            <Button
              variant="default"
              className="bg-black rounded-[10px] px-[50px] py-[18px] text-[22px] leading-[28] text-white hover:bg-black/80"
            >
              Buy $B
            </Button>
          </div>
          <div className="relative md:min-w-[500px] w-full max-w-[100%] min-h-full mx-auto rounded-xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt="Energetic Goat"
                  width={500}
                  height={500}
                  className="w-full min-w-md mx-auto rounded-2xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
