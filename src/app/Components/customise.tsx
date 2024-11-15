import Image from "next/image";

export default function Customise() {
  return (
    <div className=" w-auto h-auto md:h-[829px]   px-[50px] block lg:flex text-black text-center py-5 items-center">
      <section className="w-auto h-auto md:w-[95%] md:h-[400px]   flex justify-start items-center ">
        <div className="w-[424px] h-[350px]  bg-[#C4DEFD]"></div>
      </section>

      <section className="w-auto h-auto md:w-[50%] md:h-[829px] block md:flex justify-center  md:justify-end  items-center  md:text-start ">
        <div>
          <h1 className="w-auto h-auto md:w-[520px]  text-[50px] md:text-[72px] pl-0 md:pl-10  font-bold  tracking-tight ">
            Customise it to your needs
          </h1>
          <p className="h-auto w-auto md:w-[650px] text-[18px] py-10  pl-0 md:pl-10 ">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <div className="pl-0 py-5 md:py-0 md:pl-10 justify-items-center md:justify-items-start ">
            <button className="w-[250px] text-[18px]  bg-[#4F9CF9] hover:bg-[#89a6c9] py-3 px-5 rounded flex items-center justify-center gap-3">
              <p> Let&rsquo;s Go</p>

              <Image src="/arrow.png" alt="arrow" width="10" height="10" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
