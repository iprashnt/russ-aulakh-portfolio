// @flow strict
"use client";

import { useState } from "react";
import { skillsData } from "@/utils/data/skills";
import { skillsImage } from "@/utils/skill-image";
import Image from "next/image";
import Marquee from "react-fast-marquee";

function Skills() {
  const [isFading, setIsFading] = useState(false);

  const toggleFade = () => {
    setIsFading(!isFading);
  };

  return (
    <div id="skills" className="relative z-50 my-12 lg:my-24">
      <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-0 left-[42%] translate-x-1/2 filter blur-3xl opacity-20"></div>

      <div className="w-full my-12">
        <Marquee
          gradient={false}
          speed={80}
          pauseOnHover={true}
          pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
          onMouseEnter={toggleFade}
          onMouseLeave={toggleFade}
        >
          {skillsData.map((skill, id) => (
            <div
              className={`w-28 h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer ${
                isFading ? "opacity-50" : "opacity-100"
              }`}
              key={id}
              style={{ marginTop: "-2px" }} // Move logos up
            >
              <div className="flex flex-col items-center justify-center gap-3 p-4">
                <div className="h-4 sm:h-8">
                  <Image
                    src={skillsImage(skill)?.src}
                    alt={skill}
                    width={25}
                    height={25}
                    className="h-full w-auto rounded-lg"
                    loading="lazy"
                  />
                </div>
                <p className="text-white text-xs sm:text-sm">{skill}</p>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}

export default Skills;
