"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black">
      <div className="container flex py-[8px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Goat Logo"
            width={500}
            height={500}
            className="lg:w-[150px] lg:h-[105px] w-[59px] h-[41px]"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-6 lg:gap-[84px]">
          <Link
            href="#about"
            className="text-[22px] leading-[28px] hover:text-[#FFCA0D] transition-colors"
          >
            About
          </Link>
          <Link
            href="#community"
            className="text-[22px] leading-[28px] hover:text-[#FFCA0D] transition-colors"
          >
            Community
          </Link>
          <Link
            href="#partner"
            className="text-[22px] leading-[28px] hover:text-[#FFCA0D] transition-colors"
          >
            Partner
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <div className="relative isolate group hidden md:block">
            <Button
              variant="default"
              className="bg-[#FFCA0D] relative  group-hover:scale-105 group-active:scale-95 text-[22px] leading-[28px] hover:bg-yellow-500 rounded-[10px] lg:px-[30px] py-[10px] text-black font-bold"
            >
              Buy $B
            </Button>
            <Button
              variant="default"
              className="bg-[#F9E7CD] pointer-events-none group-hover:scale-105 group-active:scale-90 rounded-[10px] absolute -left-1 top-1 -z-10 text-[22px] leading-[28px] lg:px-[30px] py-[10px] text-black font-bold"
            >
              Buy $B
            </Button>
          </div>

          <Sheet>
            <SheetTitle className="hidden">Navigation</SheetTitle>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="md:hidden text-white"
                size="icon"
              >
                <Image src="/menu.svg" alt="Menu" width={24} height={24} />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full p-0 bg-black">
              {" "}
              <div className="flex flex-col justify-evenly h-full">
                <nav className="flex flex-col gap-4 p-6">
                  <SheetTrigger className="w-full h-full flex flex-col gap-4 p-6">
                    <Link
                      href="#about"
                      className="text-[22px] leading-[28px] hover:text-[#FFCA0D] transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="#community"
                      className="text-[22px] leading-[28px] hover:text-[#FFCA0D] transition-colors"
                    >
                      Community
                    </Link>
                    <Link
                      href="#partner"
                      className="text-[22px] leading-[28px] hover:text-[#FFCA0D] transition-colors"
                    >
                      Partner
                    </Link>
                  </SheetTrigger>
                </nav>
                <div className="mt-auto p-6">
                  <div className="relative isolate">
                    <Button
                      variant="default"
                      className="w-full bg-[#FFCA0D] relative text-[22px] leading-[28px] hover:bg-yellow-500 rounded-[10px] py-[10px] text-black font-bold"
                    >
                      Buy $B
                    </Button>
                    <Button
                      variant="default"
                      asChild
                      className="w-full bg-[#F9E7CD] pointer-events-none rounded-[10px] absolute -left-1 top-1 -z-10 text-[22px] leading-[28px] py-[10px] text-black font-bold"
                    >
                      Buy $B
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
