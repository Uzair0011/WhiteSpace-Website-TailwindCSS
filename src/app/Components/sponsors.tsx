import Image from "next/image";

export default function Sponsors() {
  return (
    <div>
      <div className="w-auto h-auto md:h-[538px] md:w-[100%] px-10 md:px-[50px] content-center text-black ">
        <section className="justify-items-center">
          <h1 className="text-[40px] md:text-[64px] font-bold tracking-tight text-center">
            Our Sponsors
          </h1>
          <br />
          <br />
          <div className="md:auto md:w-full block md:flex justify-items-center md:justify-around items-center ">
            <Image className="pb-11 w-48 md:w-54" src="/microsoft.png" alt="arrow" width="287" height="68" />
            <Image className="pb-11 md:w-45" src="/apple.png" alt="arrow" width="42" height="68" />
            <Image className="pb-11 w-48 md:w-52" src="/slack.png" alt="arrow" width="280" height="68" />
            <Image className="pb-11 w-48 md:w-50" src="/google.png" alt="arrow" width="211" height="68" />
          </div>
        </section>
      </div>
    </div>
  );
}
