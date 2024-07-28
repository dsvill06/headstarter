import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HeroPill from "./heropill";
import BackgroundSquares from "../Backgrounds/BackgroundSquares";
import HeroCarousel from "./herocarousel";
import Link from "next/link";
import { config } from "@/lib/config";

export default function Hero() {
  return (
    <>
      <div className="flex flex-col justify-start items-center mt-20">
        <HeroPill />
        <h1 className="text-6xl font-medium mt-8 text-center max-w-[650px]">
          Welcome to CodeDoc AI
        </h1>
        <div className="flex flex-col justify-center items-center mt-7 gap-2 text-2xl text-neutral-500 text-center max-w-[500px]">
          <h2>
          Your new way to create easy-to-read documentation
          </h2>
        </div>
        <Link href="/dashboard">
          <Button size="lg" className="mt-6 text-md">
            Check it out
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
        <HeroCarousel />
      </div>
      {/* Background */}
      <BackgroundSquares />
    </>
  );
}
