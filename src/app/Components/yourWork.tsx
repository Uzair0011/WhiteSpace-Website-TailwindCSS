import Image from "next/image";

export default function YourWork() {
  return (
    <div>
      <div className="h-[574px] w-[100%] bg-customBlue  px-[50px] content-center text-white ">
        <section className="justify-items-center">
          <h1 className=" text-[64px] font-bold tracking-tight text-center">
            Your work, everywhere you are
          </h1>
          <p className="w-[1100px] text-[18px] py-10 text-center">
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace, Dropbox
            and OneDrive. The app is available on Windows, macOS, Linux, Android
            and iOS. A terminal app is also available!
          </p>
          <button className="text-[18px] bg-[#4F9CF9] py-3 px-8 rounded flex items-center gap-3 ">
            Try Taskey{" "}
            <Image src="/arrow.png" alt="arrow" width="10" height="10" />
          </button>
        </section>

     
      </div>
    </div>
  );
}
