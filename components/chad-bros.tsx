import Image from "next/image";
import { Button } from "@/components/ui/button";

export function ChadBros() {
  return (
    <section id="partner" className="py-24 bg-black">
      <div className="container">
        <div className="lg:grid md:grid-cols-2  flex flex-col-reverse  justify-center  gap-12 items-center">
          <div className="relative">
            <Image
              src="/chad.svg"
              alt="Chad Goat"
              width={400}
              height={400}
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4 md:text-[46.5px] md:leading-[60px] text-[22px] leading-[28px]] text-[#FFCA0D] ">
              CHAD BROS | <span className="text-[#FFCA0D]">COOL BROS</span>
            </h2>
            <p className="text-zinc-400 mb-8  md:text-[38.5px] md:leading-[45px] text-[16px] leading-[20.42px]">
              Cryptos biggest chad now has his partner in crime. B x CZ will
              take over.
            </p>
            <Button
              variant="default"
              className="bg-[#FFCA0D] rounded-[10px] px-[50px] py-[25px] text-[22px] leading-[28] text-black hover:bg-black/80"
            >
              Buy $B
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
