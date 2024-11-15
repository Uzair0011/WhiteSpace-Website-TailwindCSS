import Image from "next/image";

export default function Footer() {
  return (
    <div>
      <div className="w-[100%] h-[461px]  bg-customBlue  px-[50px] content-center text-white ">
        <section>
          <div className="w-[1000px] flex justify-between items-start pt-10">
            <div className="">
              <div className="flex gap-5 items-center text-[28px] font-bold ">
                <Image src="/logo.png" alt="logo" width="30" height="30" />
                <h1>whitespace</h1>
              </div>
              <p className="w-[210px] text-[18px] ">
                whitepace was created for the new ways we live and work. We make
                a better workspace around the world
              </p>
            </div>
            <ul>
              <h2 className="font-bold text-[18px]">Product</h2>
              <li>Overview</li>
              <li>Pricing</li>
              <li>Customer stories</li>
            </ul>
            <ul>
              <h2 className="font-bold text-[18px]">Resources</h2>
              <li>Blog</li>
              <li>Guides & tutorials</li>
              <li>Help center </li>
            </ul>
            <ul>
              <h2 className="font-bold text-[18px] ">Company</h2>
              <li>About us</li>
              <li>Careers</li>
              <li>Media kit </li>
            </ul>
          </div>
        </section>
        {/* line */}
        <section>
          <div className="pt-20"></div>
          <div className="w-[1372px]  h-0.5 opacity-30  bg-white"></div>
        </section>
        {/* bottom */}
        <section className="content-center pt-5 text-center">
          <h3>©2021 Whitepace LLC.</h3>
        </section>
      </div>
    </div>
  );
}
