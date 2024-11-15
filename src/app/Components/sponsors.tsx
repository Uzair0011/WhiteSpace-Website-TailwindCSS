import Image from "next/image";

export default function Sponsors() {
  return (
    <div>
      <div className="h-[538px] w-[100%] px-[50px] content-center text-black ">
        <section className="justify-items-center">
          <h1 className=" text-[64px] font-bold tracking-tight text-center">
            Our sponsors
          </h1>
          <br />
          <br />
          <div className="w-[1372px] flex justify-around items-center">
            <Image src="/apple.png" alt="arrow" width="55" height="68" />
            <Image src="/microsoft.png" alt="arrow" width="287" height="68" />
            <Image src="/slack.png" alt="arrow" width="280" height="68" />
            <Image src="/google.png" alt="arrow" width="211" height="68" />
          </div>
        </section>
      </div>
    </div>
  );
}
