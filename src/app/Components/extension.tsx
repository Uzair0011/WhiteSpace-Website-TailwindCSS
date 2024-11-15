import Image from "next/image";

export default function Extension() {
  return (
    <div>
      <div className="h-[759px] w-[100%] bg-customBlue  px-[50px] flex text-white ">
        <section className=" w-[50%] h-[829px] content-center ">
          <h1 className="w-[680px] text-[64px] font-bold tracking-tight">
            Use as Extension
          </h1>
          <p className="w-[650px] text-[18px] py-10">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="text-[18px] bg-[#4F9CF9] py-2 px-5 rounded flex items-center gap-3">
            <p> Let&rsquo;s Go</p>
            <Image src="/arrow.png" alt="arrow" width="10" height="10" />
          </button>
        </section>

        <section className=" w-[50%] h-[829px] flex   items-center">
          <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
        </section>
      </div>
    </div>
  );
}
