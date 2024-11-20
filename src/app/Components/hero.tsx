import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="w-auto h-auto lg:h-[629px] text-center md:text-start overflow-hidden block md:flex-wrap md:h-auto m:h-[829px] md:w-[100%] bg-customBlue px-[50px]  md:flex flex-col lg:flex-row text-white  justify-between  ">
        <section className=" w-auto h-auto md:w-[50%] md:h-[450px] lg:w-[400px]   py-20 lg:h-[629px] content-center justify-items-center md:justify-items-start    ">
          <h1 className="w-[250px]  lg:w-[400px] h-auto sm:w-[680px] text-[35px] sm:text-[50px] md:text-[44px] font-bold tracking-tight ">
            Get More Done with whitepace
          </h1>
          <p className=" w-[250px]   md:w-[380px] text-[15px] text-justify md:text-[17px] py-10 ">
            Project management software that enables your teams to collaborate,
            plan, analyze and manage everyday tasks
          </p>
          <button className="w-[250px] text-[18px]  bg-[#4F9CF9] hover:bg-[#4F9CF9] py-3 px-5 rounded flex items-center justify-center gap-3">
            <p> Try Whitepace free</p>
            <Image src="/arrow.png" alt="arrow" width="10" height="10" />
          </button>
        </section>

        <section className="w-[95%] h-[400px]  md:w-[50%] md:h-[829px] flex justify-center items-center lg:w-[550px] lg:h-[629px]  ">
          <div className="w-[824px] h-[350px]  bg-[#C4DEFD]"></div>
        </section>
      </div>
    </div>
  );
}
