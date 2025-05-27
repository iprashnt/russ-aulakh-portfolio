import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaReddit } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import { educations } from "@/utils/data/educations";
import GlowCard from "../../helper/glow-card";
import styles from "./styles.module.css";

function MyLogo({ size = 20 }) {
  // Adjusted the default size here
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/flymile.webp"
      alt="Flymile Logo"
      style={{ width: size, height: size }}
    />
  );
}

function MyLogoConcordia({ size = 20 }) {
  // Adjusted the default size here
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/concordiaCourses.webp"
      alt="ConcordiaCourses Logo"
      style={{ width: size, height: size, borderRadius: "10%" }}
    />
  );
}

function HeroSection() {
  return (
    <section className="w-full flex lg:flex-row flex-col-reverse items-center">
      <div style={{ flex: 1 }}>
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className=" text-pink-500">{personalData.name}</span>
            <span>, I&apos;m a Professional </span>
            <span className=" text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          <div className="my-12 flex items-center gap-5">
            {/* Social and personal links */}
            <Link
              href={personalData.github}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsGithub size={24} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <BsLinkedin size={24} />
            </Link>
            <Link
              href={personalData.leetcode}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <SiLeetcode size={24} />
            </Link>
            <Link
              href={personalData.reddit}
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <FaReddit size={24} />
            </Link>
            <Link
              href={personalData.flymile} // Assuming you have a URL for your startup in personalData
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <MyLogo size={20} />
            </Link>
            <Link
              href={personalData.Concordia_Courses} // Assuming you have a URL for your startup in personalData
              target="_blank"
              className="transition-all text-pink-500 hover:scale-125 duration-300"
            >
              <MyLogoConcordia size={20} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            {/* Contact and resume download links */}
            <Link
              href="#contact"
              className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
      </div>
      <div className={`${styles.hideOnSmallScreens} lg:mt-auto mb-12`}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
          className="group"
        >
          <Image
            src={personalData.profile}
            width={250} // Made the image smaller
            height={250} // Made the image smaller
            alt="Russ Aulakh"
            className="rounded-full group-hover:my-rotate-y-180 transition-all duration-1000 hover:grayscale-0 hover:scale-110 cursor-pointer"
          />
          <div style={{ width: 300 }}>
            <GlowCard
              key={educations[0].id}
              identifier={`education-${educations[0].id}`}
            >
              <div className="p-3 relative text-white">
                <Image
                  src="/blur-23.svg"
                  alt="Hero"
                  width={1080}
                  height={200}
                  className="absolute bottom-0 opacity-80"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <p className="text-xs sm:text-sm">
                    <span>
                      Computer Science &apos;25 at Concordia University,{" "}
                      <span style={{ color: "#16f2b3" }}>GPA: 3.81</span>
                    </span>
                  </p>
                  <p className="text-xs sm:text-sm">(Dean&apos;s List 2023)</p>
                </div>
              </div>
            </GlowCard>
          </div>
          <div className=" text-pink-500">
            &quot;Solving real problems for real people&quot;
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
