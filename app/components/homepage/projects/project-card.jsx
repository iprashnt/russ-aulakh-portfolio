// @flow strict
"use client";

import * as React from "react";
import { memo, useState } from "react";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// ASSETS
import styles from "./ProjectCard.module.css";

// COMPONENTS
import PreviewImage from "./PreviewImage";

function ProjectCard({ project }) {
  const projectImagesSliderSetting = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  const projectReviewSliderSetting = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // STATES
  const [modalImageUrl, setModalImageUrl] = useState(null);

  //   FUNCTIONS
  const openModal = (imageUrl) => {
    setModalImageUrl(imageUrl);
  };
  const closeModal = () => {
    setModalImageUrl(null);
  };

  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-[#16f2b3] text-base lg:text-xl">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <div className="font-mono text-xs md:text-sm lg:text-base">
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-cyan-400">{project.description}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-orange-400">{project.role}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">Impact:</span>
            <span className="text-cyan-400">{" " + project.impact}</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-white">{project.visitMessage} </span>
            <a
              href={project.link}
              className="text-amber-300 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </div>
        </div>
      </div>

      {/* IMAGE SLIDER */}
      <Carousel
        draggable
        itemClass="flex justify-center items-center"
        responsive={projectImagesSliderSetting}
        containerClass="my-5"
        arrows={modalImageUrl ? false : true}
      >
        {project.pics.map((pic, index) => {
          return (
            <Image
              key={index}
              src={pic}
              className="rounded-lg"
              width={250}
              height={200}
              layout="intrinsic"
              alt="related picture"
              loading="lazy"
              onClick={() => openModal(pic)}
            />
          );
        })}
      </Carousel>

      {/* REVIEW SLIDER */}
      <Carousel
        draggable
        itemClass="flex justify-center items-center"
        responsive={projectReviewSliderSetting}
        autoPlay
        infinite
        autoPlaySpeed={3000}
        containerClass="mt-10"
        arrows={modalImageUrl ? false : true}
      >
        {project.reviews.map((review, index) => (
          <div
            key={index}
            className={`${styles.reviewContent} my-20 max-w-[70%]`}
          >
            <div className="text-center text-cyan-400">{review.username}</div>
            <div className="text-center text-pink-500">
              &quot;{review.comment}&quot;
            </div>
            <div className="text-center">
              <a
                href={review.link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-[#16f2b3]"
              >
                Link
              </a>
            </div>
          </div>
        ))}
      </Carousel>

      {/* FULL SCREEN IMAGE PREVIEW */}
      {modalImageUrl && (
        <PreviewImage imageUrl={modalImageUrl} onClose={closeModal} />
      )}
    </div>
  );
}

export default memo(ProjectCard);
