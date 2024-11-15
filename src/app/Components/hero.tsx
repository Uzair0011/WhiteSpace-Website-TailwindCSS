import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="h-[829px] w-[100%] bg-customBlue  px-[50px] flex text-white ">
        <section className=" w-[50%] h-[829px] content-center ">
          <h1 className="w-[680px] text-[64px] font-bold tracking-tight">
            Get More Done with whitepace
          </h1>
          <p className="w-[650px] text-[18px] py-10">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="text-[18px] bg-[#4F9CF9] py-2 px-5 rounded flex items-center gap-3">
            Try Whitepace free
            <Image src="/arrow.png" alt="arrow" width="10" height="10" />
          </button>
        </section>

        <section className=" w-[50%] h-[829px] flex   items-center">
          <div className="w-[824px] h-[550px] bg-[#C4DEFD]"></div>
        </section>
      </div>
    </div>
  );
}
