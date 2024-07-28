import Link from "next/link";

export default function FooterColumn({ data }: any) {
  return (
    <div className="flex flex-col justify-start items-start">
      <p className="text-2xl font-medium mb-2 text-white">{data.title}</p>
      <hr className="w-full border-neutral-300 mb-3 " />
      {data.links.map((link: any, index: number) => (
        <Link
          key={index}
          href={link.href}
          className="text-sm text-neutral-300 hover:text-neutral-400 transition-all mb-4"
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
