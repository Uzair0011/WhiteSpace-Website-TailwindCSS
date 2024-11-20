import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="w-auto h-auto md:w-[100%] md:h-[461px]  bg-customBlue  px-[50px] content-center bg  text-white pb-5 md:pb-0">
        <section>
          <div className="  h-auto md:w-[900px] block md:flex justify-between items-start pt-10 text-center md:text-start ">
            <div >
              <div className="flex flex-col md:flex-row gap-5 items-center text-[28px] font-bold ">
                <Image src="/logo.png" alt="logo" width="30" height="30" />
                <h1>whitespace</h1>
              </div>
              <p className="w-auto md:w-[210px] text-[18px] pb-11 md:pb-0 ">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            <ul className="pb-11 md:pb-0">
              <h2 className="font-bold text-[18px] pb-1 md:pb-0">Product</h2>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
            <ul className="pb-11 md:pb-0">
              <h2 className="font-bold text-[18px] pb-1 md:pb-0">Resources</h2>
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center </li>
            </ul>
            <ul className="pb-11 md:pb-0">
              <h2 className="font-bold text-[18px] pb-1 md:pb-0">Company</h2>
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit </li>
            </ul>
          </div>
        </section>
        {/* line */}
        <section>
          <div className="pt-20"></div>
          <div className="w-auto  h-0.5 opacity-30  bg-white"></div>
        </section>
        {/* bottom */}
        <section className="content-center pt-5 text-center">
          <h3>©2021 Whitepace LLC.</h3>
        </section>
      </div>
    </div>
  );
}
