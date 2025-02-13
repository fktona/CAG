import Image from "next/image";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative mt-[105px] container mb-[100px] min-h-clac(100dvh-105px) pt-24 justify-center flex items-center">
      <div className="w-full relative  z-10">
        <div className=" relative  w-full  mx-auto text-center">
          <h1 className="text-4xl lg:text-[66px] lg:leading-[85px] text-[35px] leading-[45px] text-center  font-bold mb-14">
            CHANGPENG
            <br className="md:hidden" /> ZHAO'S <br />
            <span className="text-[#FFCA0D]"> ADOPTED GOAT</span>
          </h1>
          <div className="absolute   -top-10  max-w-[411px] w-fit mx-auto  mb-8">
            <Image
              src="/code.svg"
              alt="Goat Character"
              width={100}
              height={100}
              className="max-w-[48px] max-h-[51px] lg:max-w-full lg:max-h-full"
            />
          </div>

          <div className="absolute  -bottom-10 right-10 max-w-[411px] w-fit mx-auto mb-8">
            <Image
              src="/code.svg"
              alt="Goat Character"
              width={100}
              height={100}
              className="max-w-[48px] max-h-[51px] hidden lg:block lg:max-w-full lg:max-h-full"
            />
          </div>

          <div className="absolute  top-16 right-0  max-w-[411px] w-fit mx-auto mb-8">
            <Image
              src="/code.svg"
              alt="Goat Character"
              width={100}
              height={100}
              className="max-w-[48px] max-h-[51px]  lg:max-w-full lg:max-h-full"
            />
          </div>
          <div className="absolute  top-10 -left-[200px] lg:left-0 opacity-20  max-w-[411px] w-fit mx-auto mb-8">
            <Image
              src="/hero-goat.svg"
              alt="Goat Character"
              width={300}
              height={500}
              className="animate-bounce-slow max-w-[234px] max-h-[335px] lg:max-w-full lg:max-h-full"
            />
          </div>
          <div className="absolute  -bottom-10 lg:right-0 -right-[200px] opacity-20 max-w-[411px] w-fit mx-auto mb-8">
            <Image
              src="/hero-goat.svg"
              alt="Goat Character"
              width={300}
              height={500}
              className="animate-bounce-slow max-w-[234px] max-h-[335px] lg:max-w-full lg:max-h-full"
            />
          </div>
          <div className="relative  lg:max-w-[411px] lg:w-fit w-full mx-auto mb-8">
            <Image
              src="/hero-goat.svg"
              alt="Goat Character"
              width={300}
              height={500}
              className="animate-bounce-slow mx-auto max-w-[234px] max-h-[335px] lg:max-w-full lg:max-h-full"
            />
            <div className="absolute  w-full h-full flex items-end  bottom-0">
              <Image
                src="/tweet.svg"
                alt="tweet"
                width={1920}
                height={1080}
                className="w-full object-contain h-[160px]"
              />
            </div>
          </div>
          <button className="bg-[#FFCA0D] rounded-[10px] text-black  text-[22px] leading-[28px]  px-[30px] py-[10px]">
            The Tweet
          </button>
        </div>
      </div>
    </section>
  );
}
