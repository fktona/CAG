"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { div } from "framer-motion/client";

export function Quote() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const handleScroll = () => {
        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollLeft = 0;
        }
      };

      scrollContainer.addEventListener("scroll", handleScroll);
      setScrollWidth(scrollContainer.scrollWidth / 2);

      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      const animate = () => {
        scrollContainer.scrollLeft += 1;
        if (scrollContainer.scrollLeft >= scrollWidth) {
          scrollContainer.scrollLeft = 0;
        }
        requestAnimationFrame(animate);
      };
      const animationId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationId);
    }
  }, [scrollWidth]);

  return (
    <div className="relative w-full">
      <section className="py-20 bg-black container relative overflow-hidden">
        <Image
          alt="Quote"
          src="/left.svg"
          width={250}
          height={320}
          className="contain absolute left-0 -top-0 max-w-[101px] max-h-[300px] lg:max-w-full lg:max-h-full"
        />
        <Image
          alt="Quote"
          src="/right.svg"
          width={250}
          height={320}
          className="contain absolute right-0 max-w-[101px] max-h-[300px] lg:max-w-full lg:max-h-full bottom-0"
        />
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
          <p className="md:text-[38.5px] text-[16px] leading-[20.42px] md:leading-[53px] font-bold mb-8 text-white">
            BNB WAS THE REAL BEGINNING TO WHAT WE CALL SHITCOINS TODAY. FOR MOST
            OF THIS CYCLE WE HAVE BEEN RUNNING UNDER THE RADAR. BUT NOW WE WILL
            REIMERGE AND TAKE BACK OVER.
          </p>
          <footer className="text-[#FFCA0D] relative w-full text-center md:text-[46.5px] md:leading-[60px] text-[22px] leading-[28px] font-bold">
            <Image
              alt="Quote"
              src="/lf2.svg"
              width={241}
              height={342}
              className="contain absolute max-w-[131px] max-h-[330px] lg:max-w-max lg:max-h-max -left-[20%] -top-14"
            />
            <Image
              alt="coin"
              src="/code.svg"
              width={100}
              height={100}
              className="contain absolute left-[20%] max-w-[48px] max-h-[51px] lg:max-w-full lg:max-h-full top-[80px]"
            />
            <Image
              alt="coin"
              src="/code.svg"
              width={100}
              height={100}
              className="contain absolute max-w-[48px] max-h-[51px] lg:max-w-full lg:max-h-full right-[20%] top-[160px]"
            />
            <Image
              alt="Quote"
              src="/rf2.svg"
              width={241}
              height={342}
              className="contain absolute hidden lg:block -right-[20%] -top-10"
            />
            $BA CHAD | $B COOL
          </footer>
          <Image
            alt="Quote"
            src="/bbf.svg"
            width={241}
            height={342}
            className="contain right-0 bottom-0 max-w-[131px] max-h-[330px] lg:max-w-full lg:max-h-full"
          />
        </div>
      </section>
      <div className="  mt-10 h-[300px] bottom-0 left-0 right-0  bg-[#FFCA0D] flex items-center overflow-hidden">
        <div
          ref={scrollRef}
          className="flex whitespace-nowrap overflow-x-hidden"
        >
          {[...Array(100)].map((_, i) => (
            <Image
              key={i}
              src="/fit-s.svg"
              alt=""
              width={500}
              height={500}
              className="inline-block object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
