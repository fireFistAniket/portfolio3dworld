import React from "react";
import { motion } from "framer-motion";

const AboutInformation = ({ informRef }) => {
  return (
    <div
      className="fixed top-[10%] left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-30 flex flex-col items-center px-6 lg:px-8 py-1 rounded-xl backdrop-blur-sm text-orange-100 gap-8 h-[88vh] overflow-hidden overflow-y-scroll no-scrollbar lg:w-auto w-[90vw]"
      ref={informRef}
    >
      <div className="flex flex-col items-center gap-4">
        <h1 className="lg:text-5xl sm:text-3xl capitalize font-bold flex items-center">
          <motion.img
            initial={{ y: "-100%" }}
            whileInView={{ y: 0 }}
            transition={{ ease: "easeIn", duration: 2 }}
            src="/icons/about-me.png"
            alt="education"
            className="w-[12vw] lg:w-[8vw]"
          />
          about me
        </h1>
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-4">
          <p className="text-lg lg:text-xl font-medium text-center md:text-left">
            Greetings! I'm Aniket Saha, a passionate MERN stack developer based
            in Kolkata, West Bengal, India. With a love for crafting digital
            experiences, I specialize in building scalable and responsive web
            applications. My journey in the world of web development has been
            driven by a relentless pursuit of knowledge and a commitment to
            creating impactful solutions.
          </p>
          <img
            src="/assets/main-pro-pic.jpg"
            loading="lazy"
            alt="pro-pic"
            className="float-right w-[40vw] md:w-[25vw] xl:w-[20vw] rounded-lg"
          />
        </div>
        <ul className="flex flex-col gap-2">
          <h3 className="text-lg lg:text-2xl">What Sets Me Apart:</h3>
          <li className="text-lg lg:text-xl font-medium">
            <span className="font-semibold">Expertise:</span> Proficient in the
            MERN stack &#40;MongoDB, Express.js, React.js, Node.js&#41; with
            hands-on experience in crafting full-stack applications.
          </li>
          <li className="text-lg lg:text-xl font-medium">
            <span className="font-semibold">Innovation:</span> I thrive on
            transforming ideas into functional, user-centric applications that
            push the boundaries of what&apos;s possible.
          </li>
          <li className="text-lg lg:text-xl font-medium">
            <span className="font-semibold">Continuous Learner:</span>{" "}
            Technology is ever-evolving, and I&apos;m dedicated to staying ahead
            of the curve. I embrace challenges as opportunities for growth.
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <h3 className="text-lg lg:text-2xl">My Approach:</h3>
          <li className="text-lg lg:text-xl font-medium">
            I believe in the power of collaboration and the magic that happens
            when creativity meets code. Every project is an opportunity to
            create something meaningful, and I approach each with enthusiasm and
            a commitment to excellence.
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="lg:text-5xl sm:text-3xl flex items-center">
          <motion.img
            src="/icons/school-building.png"
            alt="education"
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 2 }}
            className="w-[12vw] lg:w-[8vw]"
          />{" "}
          Educational Qualification
        </h3>
        <ul className="flex flex-col items-start">
          <li className="flex flex-col sm:flex-row items-center gap-2">
            <motion.img
              src="/icons/certificate.png"
              alt="education"
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ ease: "easeIn", duration: 2 }}
              className="w-[30vw] sm:w-[5vw]"
            />
            <p className="text-lg lg:text-2xl font-medium text-center sm:text-left">
              Successfully completed graduation in the field of Electrical
              Engineering
            </p>
          </li>
          <li className="flex flex-col sm:flex-row items-center gap-2">
            <motion.img
              src="/icons/certificate.png"
              alt="education"
              initial={{ x: "-100%" }}
              whileInView={{ x: 0 }}
              transition={{ ease: "easeIn", duration: 2 }}
              className="w-[30vw] sm:w-[5vw]"
            />
            <p className="text-lg lg:text-2xl font-medium text-center sm:text-left">
              Successfully completed JAVA full stack training from Qspider
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h3 className="lg:text-5xl sm:text-3xl flex items-center capitalize font-bold">
          <motion.img
            src="/icons/setting.png"
            alt="education"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 2 }}
            className="w-[12vw] lg:w-[8vw]"
          />{" "}
          my expertise
        </h3>
        <ul className="flex flex-col items-center gap-8">
          <li className="flex flex-col items-center gap-4">
            <motion.img
              src="/icons/api-programming.png"
              className="lg:w-[30vw] w-[45vw]"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeIn", duration: 2 }}
              alt="full-stack-developer"
            />
            <p className="text-xl lg:text-3xl font-medium lg:w-[40vw] text-center">
              Full-stack web developer using React, Node, Express, MongoDB.
            </p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <motion.img
              src="/icons/api-configuration.png"
              className="lg:w-[15vw] w-[28vw]"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeIn", duration: 2 }}
              alt="backend-developer"
            />
            <p className="text-xl lg:text-3xl font-medium lg:w-[35vw] text-center">
              Backend Development using Node js, Express js, MongoDB, Mongoose
              js, JWT.
            </p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <motion.img
              src="/icons/online-analysis.png"
              className="lg:w-[15vw] w-[24vw]"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeIn", duration: 2 }}
              alt="full-stack-developer"
            />
            <p className="text-xl lg:text-3xl font-medium text-center">
              Mobile app development using React Native.
            </p>
          </li>
          <li className="flex flex-col items-center gap-4">
            <motion.img
              src="/icons/web.png"
              className="lg:w-[15vw] w-[24vw]"
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ ease: "easeIn", duration: 2 }}
              alt="full-stack-developer"
            />
            <p className="text-xl lg:text-3xl font-medium text-center">
              Desktop software development using Electron js.
            </p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="lg:text-5xl sm:text-3xl flex items-center capitalize font-bold">
          <motion.img
            src="/icons/package-list.png"
            alt="education"
            initial={{ x: -100 }}
            whileInView={{ x: 0 }}
            transition={{ ease: "easeIn", duration: 2 }}
            className="w-[12vw] lg:w-[8vw]"
          />{" "}
          my skills
        </h1>
        <ul className="flex flex-col gap-8">
          <li className="flex items-center justify-center sm:justify-normal gap-4 w-full sm:w-auto">
            <h1 className="text-xl lg:text-4xl sm:whitespace-nowrap font-medium">
              For Frontend I use
            </h1>
            <div className="w-[35vw] sm:w-full overflow-hidden">
              <motion.div
                className="flex items-center w-[200%] lg:w-[400%] px-4"
                animate={{ x: ["0%", "-100%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 27,
                  ease: "linear",
                }}
              >
                <img
                  src="/icons/html.png"
                  alt="html"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/css.png"
                  alt="css"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/javascript.png"
                  alt="js"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/jquery.png"
                  alt="jquery"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/react.png"
                  alt="react"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/framer.png"
                  alt="framer"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/sass.png"
                  alt="sass"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/tailwind.png"
                  alt="tailwind"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/redux.png"
                  alt="redux"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/wordpress.png"
                  alt="wordpress"
                  className="w-[15vw] object-contain"
                />
              </motion.div>
            </div>
          </li>
          <li className="flex items-center justify-center sm:justify-normal gap-4 w-full sm:w-auto">
            <div className="w-[35vw] sm:w-full overflow-hidden">
              <motion.div
                className="flex items-center w-[150%] lg:w-[300%] px-4 gap-4"
                animate={{ x: ["-100%", "0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 27,
                  ease: "linear",
                }}
              >
                <img
                  src="/icons/nodejs.png"
                  alt="node"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/java.png"
                  alt="java"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/javascript.png"
                  alt="js"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/expressjs.png"
                  alt="express"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/jwt.png"
                  alt="jwt"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/socket.png"
                  alt="socketio"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/spring.png"
                  alt="spring"
                  className="w-[15vw] object-contain"
                />
              </motion.div>
            </div>
            <h1 className="text-xl lg:text-4xl whitespace-nowrap font-medium">
              For Backend I use
            </h1>
          </li>
          <li className="flex items-center justify-center sm:justify-normal gap-4 w-full sm:w-auto">
            <h1 className="text-xl lg:text-4xl sm:whitespace-nowrap font-medium">
              For Databse I prefer
            </h1>
            <div className="w-[35vw] sm:w-full overflow-hidden">
              <motion.div
                className="flex items-center w-[100%] px-4"
                animate={{ x: ["0%", "-100%", "0%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                }}
              >
                <img
                  src="/icons/mysql.png"
                  alt="html"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/mongo-db.png"
                  alt="css"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/firebase.png"
                  alt="js"
                  className="w-[15vw] object-contain"
                />
              </motion.div>
            </div>
          </li>
          <li className="flex items-center justify-center sm:justify-normal gap-4 w-full sm:w-auto">
            <div className="w-[35vw] sm:w-full overflow-hidden">
              <motion.div
                className="flex items-center w-[150%] lg:w-[300%] px-4 gap-4"
                animate={{ x: ["-100%", "0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 27,
                  ease: "linear",
                }}
              >
                <img
                  src="/icons/apache.png"
                  alt="apache2"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/git.png"
                  alt="git"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/nginx.png"
                  alt="nginx"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/firebase.png"
                  alt="nginx"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/npm.png"
                  alt="npm"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/visual-studio-code.png"
                  alt="vs code"
                  className="w-[15vw] object-contain"
                />
              </motion.div>
            </div>
            <h1 className="text-xl lg:text-4xl sm:whitespace-nowrap font-medium text-right sm:text-left">
              For Additional controling I use
            </h1>
          </li>
          <li className="flex items-center justify-center sm:justify-normal gap-4 w-full sm:w-auto">
            <h1 className="text-xl lg:text-4xl whitespace-nowrap font-medium">
              For IDE I prefer
            </h1>
            <div className="w-[35vw] sm:w-full overflow-hidden">
              <motion.div
                className="flex items-center w-[100%] px-4 gap-4"
                animate={{ x: ["-100%", "0%", "-100%"] }}
                transition={{
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 15,
                  ease: "linear",
                }}
              >
                <img
                  src="/icons/visual-studio-code.png"
                  alt="vs-code"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/intellij-idea.png"
                  alt="intellij-idea"
                  className="w-[15vw] object-contain"
                />
                <img
                  src="/icons/android.png"
                  alt="android-studio"
                  className="w-[15vw] object-contain"
                />
              </motion.div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AboutInformation;
