import Image from "next/image";

export default function Project() {
  return (
    <div>
      <div className="h-[829px] w-[100%]   px-[50px] flex text-black ">
        <section className=" w-[50%] h-[829px] content-center ">
          <h1 className="w-[680px] text-[72px] font-bold tracking-tight">
            Project <div>Management</div>
          </h1>
          <p className="w-[600px] text-[18px] py-10 ">
            Images, videos, PDFs and audio files are supported. Create math
            expressions and diagrams directly from the app. Take photos with the
            mobile app and save them to a note.
          </p>
          <button className="text-[18px] bg-[#4F9CF9] py-2 px-5 rounded flex items-center gap-3 text-white">
            Get Started
            <Image src="/arrow.png" alt="arrow" width="10" height="10" />
          </button>
        </section>

        <section className="w-[50%] h-[829px] flex justify-end  items-center">
          <div className="w-[724px] h-[550px] bg-[#C4DEFD]"></div>
        </section>
      </div>

      {/* 2 */}
      <div className="h-[829px] w-[100%]  px-[50px] flex text-black ">
        <section className=" w-[50%] h-[829px] content-center ">
          <Image src="/work.png" alt="arrow" width="510" height="661" />
        </section>

        <section className="w-[50%] h-[829px] flex justify-end  items-center ">
          <div >
            <h1 className="w-[680px] text-[72px] font-bold tracking-tight">
              Work together
            </h1>
            <p className="w-[650px] text-[18px] py-10  ">
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the internet
              and share the URL with others.
            </p>
            <button className="text-[18px] bg-[#4F9CF9] py-2 px-5 rounded flex items-center gap-3 text-white">
              Try it now
              <Image src="/arrow.png" alt="arrow" width="10" height="10" />
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
