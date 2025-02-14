import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Community() {
  return (
    <section id="community" className="lg:pb-24 py-16 bg-bf">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 bg-black rounded-b-[30px] lg:pl-14 px-5 lg:px-0 items-center">
          <div>
            <h2 className=" font-bold md:text-[46.5px] md:leading-[60px] text-[22px] leading-[28px] text-[#FFCA0D] mb-6">
              JOIN NOW
            </h2>
            <p className="text-white  md:text-[38.5px] md:leading-[45px] text-[16px] leading-[20.42px] mb-8">
              Lets show the world B and take over. Lets show the world B and
              take over.
            </p>

            <Button
              variant="default"
              className="bg-[#FFCA0D] rounded-[10px] px-[50px] py-[25px] text-[22px] leading-[28] text-black"
            >
              <a
                href="https://twitter.com/CzGoatB"
                className="w-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Now
              </a>
            </Button>
          </div>
          <div className="relative pb-5 lg:pb-0">
            <Image
              src="/ddo.svg"
              alt="Rocket Goat"
              width={500}
              height={500}
              className="w-full  mx-auto rounded-br-[30px] "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
