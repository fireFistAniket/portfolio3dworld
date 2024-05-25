import React from "react";
import { motion } from "framer-motion";

const ProjectInformation = ({ informRef }) => {
  const projectDetails = [
    {
      imgSrc: "/assets/fipezo-page-screen.png",
      title: "Fipezo",
      description:
        "Fipezo is a revolutionary online marketplace for freelancers, created by a team of passionate professionals who understand the challenges and aspirations of independent workers.It is devloped by me with associates company Rabin's Photography. ",
      hostedLink: "https://fipezo.com/",
    },
    {
      imgSrc: "/assets/rabins-photography-page-screen.png",
      title: "Rabin's Photography",
      description:
        "At Rabin's photography, we believe that every moment is special and deserves to be captured beautifully. With our team of experienced photographers, state-of-the-art equipment, and commitment to excellence, we strive to turn your precious moments into lasting memories.It is devloped by me with associates company Rabin's Photography.",
      hostedLink: "https://rabinsphotography.com/",
    },
    {
      imgSrc: "/assets/virtualparadise-page-screen.png",
      title: "VirtualParadise",
      description:
        "Explore VirtualParadise, your ultimate destination for discovering and exploring a vast collection of games. Powered by the IGDB API, VirtualParadise offers detailed game information, release dates, genres, and more. Find your next gaming adventure today!",
      githubRepo: "https://github.com/fireFistAniket/virtualparadise",
      hostedLink: "https://virtualparadise-cit4.vercel.app/",
    },
    {
      imgSrc: "/assets/animexhub-page-screen.png",
      title: "AnimexhuB",
      description:
        "AnimeXhuB welcomes visitors with stunning anime imagery, offering a captivating glimpse into the world of anime. Featuring vibrant colors and dynamic designs, it sets the stage for an immersive anime experience.",
      githubRepo: "https://github.com/fireFistAniket/animexhub",
      hostedLink: "https://firefistaniket.github.io/animexhub/",
    },
    {
      imgSrc: "/assets/entertainx-home-screens.png",
      title: "EntertainX",
      description:
        "It is an open-source movies, series, tv shows database. React, Vite, Taliwind, Redux are used in this project. The backend api is provided by TheMovieDb",
      githubRepo: "https://github.com/fireFistAniket/entertainx",
      hostedLink: "https://firefistaniket.github.io/entertainx/",
    },
    {
      imgSrc: "/assets/songly-page-screen.png",
      title: "Songly",
      description:
        "It is an open-source music player web app. It based on own browser based database. React, Vite, Taliwind are used in this project.",
      githubRepo: "https://github.com/fireFistAniket/songly",
      hostedLink: "https://firefistaniket.github.io/songly/",
    },
    {
      imgSrc: "/assets/doctor-page-screen.png",
      title: "Pharma Design",
      description:
        "It is a landing page about launch of an app name Asklepia Doctor. It designed by html, css , javascript. There obserever api has been used for view scroll transition",
      githubRepo: "https://github.com/fireFistAniket/docAppLandingPage",
      hostedLink: "https://firefistaniket.github.io/docAppLandingPage/",
    },
    {
      imgSrc: "/assets/marioblack-page-screen.png",
      title: "Mario Black",
      description:
        "It is basic 2d game design and developed for learning purpose. It designed by html, css , javascript.",
      githubRepo: "https://github.com/fireFistAniket/marioblack",
      hostedLink: "https://firefistaniket.github.io/marioblack/",
    },
    {
      imgSrc: "/assets/scroll-animation-screen.png",
      title: "Scroll Animation Carousael",
      description:
        "It is simple scroll animation carousel design and developed for learning purpose. It designed by React and GSAP.",
      githubRepo: "https://github.com/fireFistAniket/scroll-animation",
      hostedLink: "https://firefistaniket.github.io/scroll-animation/",
    },
    {
      imgSrc: "/assets/textutils-screen.png",
      title: "TextUtils",
      description:
        "Textutils is a webapp for modifying texts more efficiently. It is my first created app at the time of learning React.",
      githubRepo: "https://github.com/fireFistAniket/TextUtils",
      hostedLink: "https://firefistaniket.github.io/",
    },
    {
      imgSrc: "/assets/weather-screen.png",
      title: "Weather Classic",
      description:
        "Weather classic is a classic weather app for checking weather report. It is created by HTML, css and javascript",
      githubRepo: "https://github.com/fireFistAniket/weatherclassic",
      hostedLink: "https://firefistaniket.github.io/weatherclassic/",
    },
    {
      imgSrc: "/assets/projectatgworld-page-screen.png",
      title: "Projectatgworld",
      description:
        "Projectatgworld is a classic website for blogging website. It is created with Vite",
      githubRepo: "https://github.com/fireFistAniket/projectatgworld",
      hostedLink: "https://firefistaniket.github.io/projectatgworld/",
    },
    {
      imgSrc: "/assets/randomjokes-screens.png",
      title: "Random jokes",
      description:
        "Random jokes is a classic website for randomly fetching jokes. It is created with Vite and React",
      githubRepo: "https://github.com/fireFistAniket/randomjokes",
      hostedLink: "https://firefistaniket.github.io/randomjokes/",
    },
    {
      imgSrc: "/assets/aptitudenotes-screens.png",
      title: "Aptitude",
      description:
        "Aptitude is a classic website for quantitive aptitude. It is created with HTML, css & js",
      githubRepo: "https://github.com/fireFistAniket/aptitudenotes",
      hostedLink: "https://firefistaniket.github.io/aptitudenotes/",
    },
    {
      imgSrc: "/assets/Car3dModel-screen.png",
      title: "Car3dModel",
      description:
        "Car3dModel is a basic 3d car model with animation. It is created with Vite & threejs",
      githubRepo: "https://github.com/fireFistAniket/Car3dModel",
      hostedLink: "https://firefistaniket.github.io/Car3dModel/",
    },
  ];

  return (
    <div
      className="fixed top-[10%] left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-30 flex flex-col items-center lg:px-8 py-1 rounded-xl backdrop-blur-sm text-orange-100 gap-8 h-[88vh] overflow-hidden overflow-y-scroll no-scrollbar lg:w-auto w-[90vw]"
      ref={informRef}
    >
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <motion.img
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeIn", duration: 2 }}
            src="/icons/project.png"
            alt="education"
            className="w-[12vw] lg:w-[8vw]"
          />
          <h1 className="lg:text-5xl text-2xl capitalize font-bold">
            works &amp; portfolio
          </h1>
        </div>
        <p className="text-xl lg:text-2xl font-medium text-center">
          Welcome to my portfolio of creative works. Each piece is a testament
          to my passion for virtual developing. Through a blend of innovation,
          dedication, and attention to detail, I strive to bring unique and
          impactful creations to life. Explore my diverse collection below, and
          discover the intersection of artistry and functionality.
        </p>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <motion.img
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 2 }}
            src="/icons/boxes.png"
            alt="education"
            className="w-[12vw] lg:w-[8vw]"
          />
          <h1 className="lg:text-4xl text-xl font-bold">
            Projects I have worked before
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {projectDetails.map((item, index) => (
            <div className="flex flex-col items-center gap-4" key={index}>
              <motion.div
                className="relative"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 3, ease: "easeIn" }}
              >
                <img
                  src={item.imgSrc}
                  alt="songly"
                  className="w-full max-w-[75vw] lg:max-w-[40vw] lg:h-[43vh] object-cover border-0 rounded-3xl"
                />
                <a
                  href={item.hostedLink}
                  target="_blank"
                  className="capitalize lg:text-xl text-base font-bold bg-white text-blue-500 lg:px-4 px-2 lg:py-2 py-1 rounded-xl absolute bottom-2 right-2 shadow-md"
                >
                  visit site
                </a>
              </motion.div>
              <h3 className="text-lg lg:text-2xl text-center">
                <span className="font-bold">{item.title}:</span>{" "}
                {item.description}{" "}
                {item.githubRepo && (
                  <>
                    Source code is available on{" "}
                    <a
                      href={item.githubRepo}
                      target="_blank"
                      className="break-all [text-shadow:1px_0_1px_#fff] sm:[text-shadow:0_2px_2px_#fff] text-blue-500"
                    >
                      {item.githubRepo}
                    </a>
                  </>
                )}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectInformation;
