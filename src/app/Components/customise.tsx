import Image from "next/image";

export default function Customise() {
  return (
    <div className=" w-auto h-auto md:h-[729px]   px-[50px] block lg:flex text-black text-center py-5 items-center justify-between">
      <section className="w-[95%] h-[400px]  md:w-[50%] md:h-[729px] flex justify-center items-center lg:w-[450px] lg:h-[629px] ">
        <div className="w-[424px] h-[350px]  bg-[#C4DEFD]"></div>
      </section>

      <section className="w-auto  h-auto md:w-[50%] lg:h-[629px] content-center text-start  lg:w-[450px] ">
        <div>
          <h1 className="w-auto h-auto md:w-[450px]  text-[50px] md:text-[62px] pl-0 md:pl-10  font-bold  tracking-tight ">
            Customise it to your needs
          </h1>
          <p className="h-auto w-auto md:w-[450px] text-[17px] py-10  pl-0 md:pl-10 ">
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
