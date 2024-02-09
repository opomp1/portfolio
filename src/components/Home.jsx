import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f] text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-white">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-white">
          TIRAWAT POMPAKUNSAWAT
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-white">
          <span className="text-[#8892b0]">I'm a</span> Full Stack Developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I’m a full-stack developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <Link to="Projects" smooth={true} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
              View my projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3 " />
              </span>
            </button>
          </Link>
          <div className="flex lg:hidden gap-3 pt-4">
            <a
              className="text-gray-300"
              href="https://github.com/opomp1"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaGithub size={30} />
            </a>
            <a
              className="text-gray-300"
              href="https://www.linkedin.com/in/tirawat-pompakunsawat/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              className="text-gray-300"
              href="https://drive.google.com/file/d/10lK57w5fu_DqltuSdNi1RXiqiBpB97F3/view?usp=drive_link"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsFillPersonLinesFill size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
