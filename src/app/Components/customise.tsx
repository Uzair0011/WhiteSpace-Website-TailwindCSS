import Image from "next/image";

export default function Customise() {
  return (
    <div className="h-[829px] w-[100%]  px-[50px] flex text-black ">
      <section className=" w-[50%] h-[829px] flex   items-center">
        <div className="w-[686px] h-[479px] bg-[#C4DEFD]"></div>
      </section>

      <section className="w-[50%] h-[829px] flex  justify-end  items-center">
        <div>
          <h1 className="w-[520px] text-[72px] pl-10  font-bold  tracking-tight">
            Customise it to your needs
          </h1>
          <p className="w-[650px] text-[18px] py-10  pl-10  ">
            Customise the app with plugins, custom themes and multiple text
            editors (Rich Text or Markdown). Or create your own scripts and
            plugins using the Extension API.
          </p>
          <div className=" pl-10">
            <button className="text-[18px] bg-[#4F9CF9] py-2 px-5 rounded flex items-center gap-3 text-white ">
              <p> Let&rsquo;s Go</p>

              <Image src="/arrow.png" alt="arrow" width="10" height="10" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
