import React from "react";
import StarIcon from "@/public/assets/svg/StarIcon";
import InfoContainer from "@/public/assets/svg/InfoContainer";
import InfoContainerL from "@/public/assets/svg/InfoContainerL";
import InfoContainerR from "@/public/assets/svg/InfoContainerR";
import SaveIcon from "@/public/assets/svg/SaveIcon";
import ArrowIcon from "@/public/assets/svg/ArrowIcon";
import { manga } from "../_constants";

const InfoBlock = ({ parentRef, dimensions, rating }) => {
  return (
    <div
      id="info-block"
      className="opacity-0 flex-shrink-0 w-2/5 min-w-[680px] max-lg:min-w-3/4 max-md:min-w-full h-full flex flex-col justify-end"
    >
      <div className="hidden max-md:visible w-full h-auto relative p-4 max-[550px]:p-2 max-md:flex max-md:flex-row max-sm:flex-col gap-4 max-[550px]:gap-2 border-2 border-primary rounded-lg bg-lightSecondary">
        <div className="w-[60%] max-sm:w-full p-4 border-2 border-primary rounded-md bg-darkPrimary">
          <p className="text-base max-md:text-sm font-outfit font-light text-primary leading-relaxed">
            {manga.description}
          </p>
        </div>
        <div className="w-[40%] max-sm:w-full px-6 py-8 max-sm:py-4 max-sm:px-4 border-2 border-primary rounded-md bg-darkSecondary text-right flex flex-col max-sm:flex-row gap-4 max-sm:justify-between">
          <h5 className="font-graffitiRegular text-xl text-primary max-sm:text-left">
            {manga.releaseDate.title}
          </h5>
          <div className="">
            <p className="text-sm font-outfit font-semibold text-lightPrimary opacity-80">
              {manga.releaseDate.duration}
            </p>
            <h6 className="text-xl font-outfit">{manga.releaseDate.date}</h6>
            <p className="text-xs font-outfit font-semibold text-lightPrimary opacity-50">
              {manga.releaseDate.day}
            </p>
          </div>
        </div>
      </div>

      <div
        ref={parentRef}
        className="relative w-full inline-flex h-auto max-md:hidden"
      >
        <InfoContainer
          className="w-full h-full"
          width={dimensions.width}
          height={dimensions.height}
        />
        <div className="w-full h-full absolute p-4 flex gap-4">
          <div className="absolute w-full h-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-4 p-4">
            <div className="w-[60%] p-6">
              <p className="text-base max-md:text-sm font-outfit font-light text-primary leading-relaxed">
                {manga.description}
              </p>
            </div>
            <div className="w-[40%] px-6 py-8 text-right flex flex-col gap-4">
              <h5 className="font-graffitiRegular text-xl text-primary">
                {manga.releaseDate.title}
              </h5>
              <div className="">
                <p className="text-sm font-outfit font-semibold text-lightPrimary opacity-80">
                  {manga.releaseDate.duration}
                </p>
                <h6 className="text-xl font-outfit">
                  {manga.releaseDate.date}
                </h6>
                <p className="text-xs font-outfit font-semibold text-lightPrimary opacity-50">
                  {manga.releaseDate.day}
                </p>
              </div>
            </div>
          </div>
          <InfoContainerL />
          <InfoContainerR />
        </div>
        <div className="absolute -bottom-3 right-[28.7%] max-md:right-[30%] -translate-x-1/2 p-5 border-[3px] bg-lightSecondary border-primary w-20 h-20 max-md:h-16 max-md:w-16 rounded-full flex items-center justify-center">
          <SaveIcon width={25} height={32} />
        </div>
      </div>

      <div className="w-full h-72 max-md:h-36 max-sm:h-auto border-2 border-primary rounded-lg p-4 max-[550px]:p-2 flex gap-4 bg-lightSecondary mt-5">
        <div className="flex-grow flex flex-col gap-4 max-[550px]:gap-2 max-md:flex-row max-sm:flex-col">
          <div className="flex gap-4 max-[550px]:gap-2 flex-grow">
            <div className="w-1/2 border-2 border-primary rounded-md bg-darkPrimary p-2 text-center flex align-center justify-evenly flex-col">
              <h5 className="font-graffitiRegular text-xl max-md:text-lg text-primary relative">
                {manga.chptCount.title}
              </h5>
              <h3 className="text-4xl relative">
                <span className="absolute inset-0 text-bgRoot font-graffitiShadow">
                  {manga.chptCount.count}
                </span>
                <span className="relative text-secondary font-graffitiRegular">
                  {manga.chptCount.count}
                </span>
              </h3>
            </div>
            <div className="w-1/2 border-2 border-primary rounded-md bg-darkPrimary p-2 text-center flex align-center justify-evenly flex-col">
              <h5 className="font-graffitiRegular text-xl max-md:text-lg text-primary">
                {manga.chptRead.title}
              </h5>
              <h3 className="text-4xl relative">
                <span className="absolute inset-0 text-bgRoot font-graffitiShadow">
                  {manga.chptRead.count}
                </span>
                <span className="relative text-secondary font-graffitiRegular">
                  {manga.chptRead.count}
                </span>
              </h3>
            </div>
          </div>
          <div className="flex-grow w-full max-md:w-1/4 max-sm:w-full border-2 border-primary rounded-md bg-darkSecondary px-4 py-2 flex flex-col justify-center">
            <h5 className="font-graffitiRegular text-xl max-md:text-center max-md:text-lg text-primary ">
              {manga.readerRatings.title}
            </h5>
            <div className="flex justify-center w-full py-1 gap-4 max-md:hidden">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  color={i < manga.readerRatings.rating ? "yellow" : "dark"}
                  height={42}
                  width={42}
                />
              ))}
            </div>
            <div className="hidden w-full max-md:flex items-center gap-4 justify-center">
              <p className="text-secondary font-graffitiRegular text-2xl relative">
                <span className="absolute inset-0 text-bgRoot font-graffitiShadow">
                  {rating} x
                </span>
                <span className="relative text-secondary font-graffitiRegular">
                  {rating} x
                </span>
              </p>

              <StarIcon color={"yellow"} height={30} width={30} />
            </div>
          </div>
        </div>
        <div className="max-md:hidden flex-shrink-0 w-64 border-2 border-primary rounded-md bg-avatar2 bg-cover bg-center"></div>
      </div>
      <div className="flex items-center justify-center mt-6 ">
        <div className="max-md:visible hidden p-5 max-[550px]:p-3 border-[3px] bg-lightSecondary border-primary h-16 w-16 max-[550px]:w-12 max-[550px]:h-12 rounded-full max-md:flex items-center justify-center">
          <SaveIcon width={25} height={32} />
        </div>
        <button className="ml-auto font-graffitiRegular border-4 border-primary rounded-full tracking-wider bg-lightSecondary p-3 pl-6 max-md:p-2 max-md:pl-4 max-sm:p-1 max-sm:pl-2 flex items-center justify-between gap-12 max-md:gap-8">
          <div className="text-4xl max-md:text-2xl max-[550px]:text-xl relative">
            <span
              className="absolute inset-0 text-bgRoot font-graffitiShadow"
              aria-hidden="true"
            >
              READ
            </span>
            <span className="relative font-graffitiRegular">READ</span>
          </div>
          <div className="border-[3px] bg-lightSecondary border-primary w-16 h-16 max-[550px]:w-12 max-[550px]:h-12 rounded-full flex items-center justify-center">
            <ArrowIcon width={25} height={25} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default InfoBlock;
