import { CiStreamOn } from "react-icons/ci";
import { AiFillHome, AiOutlineSearch } from "react-icons/ai";
import Categories from "../components/Categories";
import { Link } from "react-router-dom";
import { useState } from "react";
import Nav from "../components/Nav";

export default function Home() {
  const [input, setInput] = useState("");

  return (
    <div className="">
      {/* Hero */}
      <div className='h-[60vh] text-white text-center bg-[url("/hero.jpg")] bg-cover flex flex-col justify-center relative'>
        {/* dark overlay */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[rgba(0,0,0,0.1)] to-black via-[rgba(0,0,0,0.3)] left-0 top-0"></div>
        {/* nav */}
        <div className="absolute top-0 w-full">
          <Nav />
        </div>
        <div className="relative z-20">
          {/* logo */}
          <section className="text-7xl font-bold flex items-center justify-center mb-5 gap-2">
            <CiStreamOn />
            <p>
              Y<span className="text-orange-500 text-6xl md:7xl">Flix</span>
            </p>
          </section>

          {/* search */}
          <section className="flex justify-center relative w-[80%] text-gray-500 mx-auto">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full rounded-lg outline-none pr-6 py-1 pl-2 md:w-[50%]"
            />
            <Link to={`/videos/${input}`}>
              <AiOutlineSearch className="absolute right-1 top-1/2 -translate-y-1/2 md:right-[26%]" />
            </Link>
          </section>
        </div>
      </div>

      {/* categories */}
      <Categories />
    </div>
  );
}
