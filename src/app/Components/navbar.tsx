import Image from "next/image";

export default function Navbar() {
  return (
    <div>
      <nav className="logo h-[92px] w-screen bg-customBlue flex justify-between items-center px-[50px]">
        <div className="flex gap-3 text-white size-28px font-bold">
          <Image src="/logo.png" alt="logo" width="39" height="19" />
          <h1 className="text-[28px]">whitespace</h1>
        </div>

        <div className="navMenu w-[550px] h-[60px] flex justify-between gap-20 items-center ">
          <ul className="flex gap-3 text-white items-center">
            <li>Products</li>
            <li>Solutions</li>
            <li>Resources</li>
            <li>Pricing</li>
          </ul>
          <div>
            <button className="bg-customYellow py-3 px-8 rounded text-customBlue font-medium ">
              Login
            </button>
          </div>
        </div>
      </nav>
      <div className="h-0.5 w-full bg-white"></div>
    </div>
  );
}
