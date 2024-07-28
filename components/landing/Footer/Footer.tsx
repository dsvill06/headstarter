import Link from "next/link";
import FooterColumn from "./FooterColumn";
import { data } from "./data";
import { config } from "@/lib/config";

export default function Footer() {
  return (
    <div className="bg-black border-t flex flex-col justify-center items-center">
      
      <div className="grid grid-cols-4 md:flex md:flex-row justify-center items-start w-full max-w-[1000px] py-10 px-6 gap-4 md:gap-40 ">
      <div className="flex flex-row justify-start items-center">
            {/* <Logo size="h-32 w-56" /> */}
          </div>
        {data.map((section, index) => (
          <FooterColumn key={index} data={section} />
        ))}
      </div>
      <p className="text-sm text-neutral-300 mb-4">
        Made by{" "}
        {/* <Link
          href={config.links.x}
          className="text-white hover:text-blue-500 transition-all font-medium"
        >
          Copyright . All Right Reserved
        </Link> */}
      </p>
    </div>
  );
}
