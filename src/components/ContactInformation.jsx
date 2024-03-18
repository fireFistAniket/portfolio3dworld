import { Player } from "@lottiefiles/react-lottie-player";
import React, { useRef, useState } from "react";
import { dataStore, collection, addDoc } from "../utils/firebase";

const ContactInformation = ({ informRef }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");
  const [success, setSuccess] = useState();

  const lottieRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: fullName,
      phone: phone,
      email: email,
      description: description,
    };
    const formDataRef = collection(dataStore, "formData");
    // Save form data to Firebase
    const sendForm = await addDoc(formDataRef, formData);
    setSuccess(true);
    setFullName("");
    setEmail("");
    setPhone("");
    setDescription("");
  };

  return (
    <div
      className="fixed top-[10%] left-1/2 -translate-x-1/2 z-10 bg-black bg-opacity-30 flex flex-col items-center lg:px-8 py-1 rounded-xl backdrop-blur-sm text-orange-100 gap-8 h-[88vh] overflow-hidden overflow-y-scroll no-scrollbar lg:w-auto w-[90vw]"
      ref={informRef}
    >
      <h1 className="text-2xl text-center lg:text-4xl font-bold">
        Have an project idea? Want to disscuss with me?
      </h1>
      <div className="flex items-center justify-between gap-8">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-center gap-4 border border-neutral-700 px-4 py-2 rounded-xl backdrop-blur-md"
        >
          <div className="flex flex-col items-start w-full gap-2">
            <label
              htmlFor="fullname"
              className="capitalize text-lg sm:text-2xl"
            >
              full name
            </label>
            <input
              type="text"
              id="fullname"
              placeholder="Enter your name"
              onFocus={() => lottieRef.current.play()}
              onBlur={() => lottieRef.current.pause()}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-4 py-2 bg-neutral-700 bg-opacity-50 w-full"
            />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <label htmlFor="email" className="capitalize text-lg sm:text-2xl">
              email
            </label>
            <input
              type="email"
              id="email"
              onFocus={() => lottieRef.current.play()}
              onBlur={() => lottieRef.current.pause()}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-4 py-2 bg-neutral-700 bg-opacity-50 w-full"
            />
          </div>
          <div className="flex flex-col items-start w-full gap-2">
            <label htmlFor="phone" className="capitalize text-lg sm:text-2xl">
              phone number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              onFocus={() => lottieRef.current.play()}
              onBlur={() => lottieRef.current.pause()}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="px-4 py-2 bg-neutral-700 bg-opacity-50 w-full"
            />
          </div>
          <div className="flex flex-col items-start gap-2">
            <label
              htmlFor="description"
              className="capitalize text-lg sm:text-2xl"
            >
              project description
            </label>
            <textarea
              name="description"
              id="description"
              onFocus={() => lottieRef.current.play()}
              onBlur={() => lottieRef.current.pause()}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="px-4 py-2 bg-neutral-700 bg-opacity-50 resize-none"
              placeholder="Give a small description about your project"
              rows="5"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-4 py-2 capitalize font-bold bg-blue-500 rounded-xl"
          >
            submit
          </button>
        </form>
        <div className="hidden sm:flex items-center justify-center">
          <Player
            ref={lottieRef}
            src="https://lottie.host/31bc8247-da29-4156-a873-5ce51e0d5bce/UkBa8JRlAf.json"
            className="w-[40vw] lg:w-[32vw] xl:w-[25vw]"
            autoplay={false}
            loop
          ></Player>
        </div>
      </div>
      <div>
        <h1 className="text-lg lg:text-2xl">
          You can also contact me by social media
        </h1>
        <div className="flex items-center">
          <a href="mailto:sahaaniket720@gmail.com">
            <img
              src="/icons/gmail.png"
              alt="gmail"
              className="w-[25vw] sm:w-[12vw]"
            />
          </a>
          <a href="https://www.facebook.com/aniket.saha.904" target="_blank">
            <img
              src="/icons/facebook.png"
              alt="facebook"
              className="w-[25vw] sm:w-[12vw]"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-saha-536048210/"
            target="_blank"
          >
            <img
              src="/icons/linkedin.png"
              alt="linkedin"
              className="w-[25vw] sm:w-[12vw]"
            />
          </a>
          <a href="https://github.com/fireFistAniket" target="_blank">
            <img
              src="/icons/github.png"
              alt="github"
              className="w-[25vw] sm:w-[12vw]"
            />
          </a>
          <a href="https://wa.me/919007000328" target="_blank">
            <img
              src="/icons/whatsapp.png"
              alt="whatsapp"
              className="w-[25vw] sm:w-[12vw]"
            />
          </a>
        </div>
      </div>
      {success && (
        <div className="flex flex-col items-center gap-2 border p-2 rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full backdrop-blur">
          <div className="flex items-center gap-2">
            <Player
              src="https://lottie.host/7dfcd387-8fcd-4b85-8525-85f718ded7b3/zjZDtxOHLU.json"
              autoplay
              keepLastFrame
              className="w-[12vw]"
            ></Player>
            <h1 className="text-lg font-semibold">
              Your query has been sent successfully. I will conatct you soon.
            </h1>
          </div>
          <button
            type="button"
            onClick={() => setSuccess(false)}
            className="capitalize bg-blue-500 text-white rounded-md px-2 py-1"
          >
            close
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactInformation;
