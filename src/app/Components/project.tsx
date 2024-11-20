import Image from "next/image";

export default function Project() {
  return (
    <div>
      <div className=" overflow-hidden h-auto md:h-[629px] w-[100%] px-[50px] block lg:flex text-black justify-between">
        <section className="w-auto h-auto md:w-[50%] lg:h-[629px] content-center lg:w-[450px] ">
          <h1 className="w-[680px] text-[42px] md:text-[62px] pt-11 md:pt-0 font-bold tracking-tight">
            Project <div>Management</div>
          </h1>
          <p className="w-auto md:w-[400px]  text-[16px] md:text-[17px] py-10  ">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="text-[18px] bg-[#4F9CF9] hover:bg-[#89a6c9] py-2 px-5 rounded flex items-center gap-3 text-white">
            Get Started
            <Image src="/arrow.png" alt="arrow" width="10" height="10" />
          </button>
        </section>

        <section className="w-[95%] h-[400px]   md:w-[50%] lg:h-[629px] flex justify-center items-center lg:w-[450px] ">
          <div className="w-[824px] h-[350px]  bg-[#C4DEFD]"></div>
        </section>
      </div>

      {/* 2 */}
      <div className="w-auto h-auto md:h-[629px] md:w-[100%]  px-[50px] block lg:flex text-black justify-between">
        <section className="w-auto h-auto md:w-[50%] lg:h-[629px] content-center lg:w-[450px] pb-10 sm:pb-0 ">
          <Image src="/work.png" alt="arrow" width="510" height="661" />
        </section>

        <section className="w-auto h-auto md:w-[50%] lg:h-[629px] content-center lg:w-[450px]  ">
          <div className="flex flex-col md:block">
            <h1 className="w-auto md:w-[680px] text-[50px] md:text-[62px] font-bold tracking-tight">
              Work together
            </h1>
            <p className="w-auto h-auto md:w-[450px] text-[17px] py-10  ">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="text-[18px] bg-[#4F9CF9] hover:bg-[#89a6c9] py-2 px-5 rounded flex items-center gap-3 text-white justify-center mb-5 sm:mb-0 ">
              Try it now
              <Image src="/arrow.png" alt="arrow" width="10" height="10" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
