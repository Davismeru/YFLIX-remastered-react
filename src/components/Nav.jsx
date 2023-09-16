import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";

export default function Nav() {
  return (
    <div className="flex items-center justify-between px-3 pt-4 md:px-20 md:pt-7 md:pb-3">
      {/* nav logo */}
      <Link
        to={"/"}
        className="flex items-center gap-1 font-bold text-lg md:text-3xl"
      >
        <CiStreamOn />
        <p>
          Y<span className="text-orange-500">Flix</span>
        </p>
      </Link>

      {/* nav links */}
      <div className="flex items-center gap-3 md:text-lg md:gap-7">
        <section className="flex items-center gap-2 text-gray-500">
          <a href="https://github.com/Davismeru">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/davis-meru-a5320324a/">
            <FaLinkedin />
          </a>
        </section>
        {/* portfolio link */}
        <a
          href="https://developerdavis.pages.dev/"
          className="bg-orange-600 text-white px-5 py-[2px] rounded-sm md:px-7"
        >
          Dev
        </a>
      </div>
    </div>
  );
}
