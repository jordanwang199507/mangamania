import React from "react";
import { landingPage, manga } from "../_constants";

const Title = ({ position }) => {
  return (
    <div
      className={`${
        position === "info" ? "max-xl:hidden" : "max-xl:visible xl:hidden"
      }`}
    >
      <div
        id="hero-title"
        className="opacity-0 relative max-w-[520px] max-md:max-w-[350px] tracking-widest overflow-hidden"
      >
        <span
          className={`absolute inset-0 text-bgRoot font-graffitiShadow leading-tight ${
            position === "info"
              ? "text-[80px]"
              : "text-7xl max-md:text-5xl max-sm:text-4xl"
          }`}
          aria-hidden="true"
        >
          {landingPage.heroTitle}
        </span>
        <span
          className={`relative text-lightPrimary font-graffitiRegular leading-tight ${
            position === "info"
              ? "text-[80px]"
              : "text-7xl max-md:text-5xl max-sm:text-4xl"
          }`}
        >
          {landingPage.heroTitle}
        </span>
      </div>
      <h4
        id="manga-title"
        className="opacity-0 font-outfit text-3xl max-md:text-xl max-sm:text-lg  mt-2 text-secondary uppercase"
      >
        {manga.name}
      </h4>
      <button
        id="category"
        className={`opacity-0 border-2 border-primary mt-6 max-sm:mt-2 rounded-full tracking-wider bg-darkPrimary ${
          position === "info"
            ? "text-xl px-8 py-3 "
            : "text-lg px-6 py-2 max-md:text-sm max-md:px-4"
        }`}
      >
        <div className="relative">
          <span
            className="absolute inset-0 text-bgRoot font-graffitiShadow uppercase"
            aria-hidden="true"
          >
            {manga.category}
          </span>
          <span className="relative font-graffitiRegular uppercase">
            {manga.category}
          </span>
        </div>
      </button>
    </div>
  );
};

export default Title;
