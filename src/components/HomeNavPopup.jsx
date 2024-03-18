import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const HomeNavPopup = ({ currentStage, rotateFunction }) => {
  const { handleRotationStart, handleRotationStop } = rotateFunction;
  const isTouchDevice = "ontouchstart" in window;
  return (
    <>
      {currentStage === 4 && (
        <div className="fixed top-[10%] left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-30 flex flex-col items-center justify-center px-2 py-1 rounded-xl backdrop-blur-sm text-orange-100 sm:w-auto w-[75vw]">
          <h1 className="text-lg sm:text-2xl font-bold text-center tracking-wide">
            Hello! Welcome to my Portfolio
          </h1>
          <p className="text-sm sm:text-lg font-semibold">I am Aniket Saha</p>
          <p className="text-sm sm:text-lg font-semibold text-center">
            I am a MERN stack developer
          </p>
          <button
            type="button"
            className="flex items-center gap-2 text-sm sm:text-lg font-semibold"
          >
            Press <FaArrowLeft /> or <FaArrowRight /> to Explore
          </button>
        </div>
      )}
      {currentStage === 1 && (
        <div className="fixed top-[10%] left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-30 flex flex-col items-center justify-center px-2 py-1 rounded-xl backdrop-blur-sm text-orange-100 gap-2 sm:w-auto w-[75vw]">
          <h1 className="text-lg sm:text-2xl font-bold text-center tracking-wide">
            About me
          </h1>
          <p className="text-sm sm:text-lg font-semibold text-center">
            Passionate MERN stack developer with a flair for creating robust and
            scalable web applications. I thrive on turning ideas into reality
            through clean and efficient code. A perpetual learner, I stay
            abreast of the latest technologies to deliver innovative solutions.
          </p>
          <Link
            to="/about"
            className="text-sm sm:text-base font-semibold capitalize px-1 sm:px-3 py-1 bg-orange-100 text-black rounded-3xl"
          >
            know more about me
          </Link>
        </div>
      )}
      {currentStage === 2 && (
        <div className="fixed top-[10%] left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-30 flex flex-col items-center justify-center px-2 py-1 rounded-xl backdrop-blur-sm text-orange-100 gap-2 sm:w-auto w-[75vw]">
          <h1 className="text-lg sm:text-2xl font-bold text-center tracking-wide">
            Portfolio Showcase
          </h1>
          <p className="text-sm sm:text-lg font-semibold text-center">
            Dive deeper into my projects. Witness the synergy of creativity and
            technology. Let&apos;s embark on a journey of innovation together.
          </p>
          <Link
            to="/projects"
            className="text-sm sm:text-base font-semibold capitalize px-1 sm:px-3 py-1 bg-orange-100 text-black rounded-3xl"
          >
            view my works
          </Link>
        </div>
      )}
      {currentStage === 3 && (
        <div className="fixed top-[10%] left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-30 flex flex-col items-center justify-center px-2 py-1 rounded-xl backdrop-blur-sm text-orange-100 gap-2 sm:w-auto w-[75vw]">
          <h1 className="text-lg sm:text-2xl font-bold text-center tracking-wide">
            Contact
          </h1>
          <p className="text-sm sm:text-lg font-semibold text-center">
            I&apos;m always open to new opportunities, collaborations, or just a
            friendly chat. Whether you have a project in mind or want to discuss
            the latest tech trends, feel free to reach out.
          </p>
          <Link
            to="/contact"
            className="text-sm sm:text-base font-semibold capitalize px-1 sm:px-3 py-1 bg-orange-100 text-black rounded-3xl"
          >
            contact me
          </Link>
        </div>
      )}
      {isTouchDevice && (
        <div className="absolute top-3/4 left-1/2 -translate-x-1/2 z-10 flex items-center justify-between w-[90vw]">
          <button
            type="button"
            className="text-xl text-orange-100  bg-black bg-opacity-30 px-4 py-2 rounded-xl"
            onClick={() => {
              handleRotationStart("left");
              handleRotationStop("left");
            }}
          >
            <FaArrowLeft />
          </button>
          <button
            type="button"
            className="text-xl text-orange-100  bg-black bg-opacity-30 px-4 py-2 rounded-xl"
            onClick={() => {
              handleRotationStart("right");
              handleRotationStop("right");
            }}
          >
            <FaArrowRight />
          </button>
        </div>
      )}
    </>
  );
};

export default HomeNavPopup;
