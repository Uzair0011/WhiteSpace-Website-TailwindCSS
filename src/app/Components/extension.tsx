import Image from "next/image";

export default function Extension() {
  return (
    <div>
      <div className="w-auto h-auto text-center md:text-start overflow-hidden flex-wrap  m:h-[829px] md:w-[100%] bg-customBlue px-[50px]  flex flex-col lg:flex-row text-white  ">
        <section className="w-auto h-auto md:w-[50%] md:h-[450px] py-5 sm:py-20 lg:h-[829px] content-center justify-items-center md:justify-items-start ">
          <h1 className="h-auto w-[250px] lg:h-auto sm:w-[680px] text-[35px] sm:text-[50px] md:text-[64px] font-bold tracking-tight">
            Use as Extension
          </h1>
          <p className=" w-[250px]   md:w-[650px] text-[15px] md:text-[18px] py-10">
            Use the web clipper extension, available on Chrome and Firefox, to
            save web pages or take screenshots as notes.
          </p>
          <button className="w-[250px] text-[18px]  bg-[#4F9CF9] hover:bg-[#89a6c9] py-3 px-5 rounded flex items-center justify-center gap-3">
            <p> Let&rsquo;s Go</p>
            <Image src="/arrow.png" alt="arrow" width="10" height="10" />
          </button>
        </section>

        <section className="w-[95%] h-[400px]  md:w-[50%] lg:h-[829px] flex justify-center items-center">
          <div className="w-[824px] h-[350px]  bg-[#C4DEFD]"></div>
        </section>
      </div>
    </div>
  );
}
