import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FounderPet } from "@/components/founder-pet";
import { ChadBros } from "@/components/chad-bros";
import { Quote } from "@/components/quote";
import { Community } from "@/components/community";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <Header />
      <Hero />
      <FounderPet />
      <ChadBros />
      <Quote />
      <Community />
      <Footer />
    </main>
  );
}
