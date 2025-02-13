import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer id="footer" className="bg-black border-t border-white/10">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center order-last lg:order-first gap-2">
            <span className=" text-white">
              2025 <span className="text-[#FFCA0D]">$B</span> © Project all
              right reserved
            </span>
          </div>
          <Image
            alt="Logo"
            src="/footer.svg"
            width={200}
            height={200}
            className="hidden lg:block"
          />
          <nav className="flex md:text-[22px]  flex-col lg:flex-row text-[17px] leading-[28px] mr-10 items-center gap-6">
            <div className="flex items-center gap-6">
              <Link
                href="#about"
                className=" text-white hover:text-[#FFCA0D] transition-colors"
              >
                About
              </Link>
              <Link
                href="#community"
                className=" text-white hover:text-[#FFCA0D] transition-colors"
              >
                Community
              </Link>
            </div>
            <div className="relative group isolate">
              <Button
                variant="default"
                className="bg-[#FFCA0D] group-hover:scale-105 group-active:scale-95 relative text-[22px] leading-[28px] hover:bg-yellow-500 rounded-[6px] lg:px-[30px] py-[10px] text-black font-bold"
              >
                Buy $B
              </Button>

              <Button
                variant="default"
                className="bg-[#F9E7CD] group-hover:scale-105 group-active:scale-90 pointer-events-none absolute -left-1 top-1 -z-10 text-[22px] leading-[28px] rounded-[6px] lg:px-[30px] py-[10px] text-black font-bold"
              >
                Buy $B
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
