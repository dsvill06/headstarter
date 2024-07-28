import { config } from "@/lib/config";
import { ArrowRight, Twitter } from "lucide-react";
import Link from "next/link";

export default function HeroPill() {
  return (
    <div className="bg-blue-100 hover:shadow transition-all w-fit rounded-full">
      <Link
        href={config.links.x}
        target="_blank"
        className="flex flex-row justify-start items-center w-fit p-[3px] gap-1"
      >
        <div className="bg-[#2c344a] text-white p-1 rounded-full">
        </div>
        <div className="flex flex-row justify-start items-center gap-1 mr-2 text-[#2c344a]">
          <p className="text-sm font-medium">@codedoc</p>
          <ArrowRight className="h-4 w-4" />
        </div>
      </Link>
    </div>
  );
}
