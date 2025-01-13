"use client";

import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import Title from "./Title";

import Ranking from "./Ranking";
import Logo from "@/public/assets/svg/Logo";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Toolbar from "./Toolbar";
import InfoBlock from "./InfoBlock";
import { landingPage } from "../_constants";

export default function Hero() {
  const rating = 4;
  const parentRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [save, setSave] = useState(true);
  const [isAnimationInitialized, setAnimationInitialized] = useState(false);
  useEffect(() => {
    const loadSVG = async () => {
      const response = await fetch("/emblem.svg");
      const svg = await response.text();
      const fragment = document.createRange().createContextualFragment(svg);
      const svgElement = fragment.querySelector("svg");

      svgElement.setAttribute("width", "100%");
      svgElement.setAttribute("height", "100%");
      document.getElementById("emblem").appendChild(fragment);

      // Notify that SVG is loaded
      setAnimationInitialized(true);
    };

    loadSVG();
  }, []);

  useEffect(() => {
    if (!isAnimationInitialized) return; // Ensure SVG is loaded

    const onComplete = () => {
      console.log("animation complete");
    };

    const timeline = gsap.timeline({ onComplete });
    const toolbars = gsap.utils.toArray(".toolbar");
    // Animation sequence
    timeline.fromTo(
      "#emblem",
      { scale: 0.6, opacity: 0 },
      { scale: 1, duration: 0.2, opacity: 1, ease: "power1.inOut" }
    );
    timeline.fromTo(
      "#LeftTop",
      { rotate: -45, opacity: 0, transformOrigin: "center bottom" },
      { rotate: 0, opacity: 1, duration: 0.3, ease: "power1.out" },
      ">0.1"
    );
    timeline.fromTo(
      "#RightTop",
      { rotate: 45, opacity: 0, transformOrigin: "center bottom" },
      { rotate: 0, opacity: 1, duration: 0.3, ease: "power1.out" },
      "<"
    );
    timeline.fromTo(
      "#LeftBottom",
      { rotate: 145, opacity: 0 },
      { rotate: 0, opacity: 1, duration: 0.3, ease: "power1.out" },
      ">0.1"
    );
    timeline.fromTo(
      "#RightBottom",
      { rotate: -45, opacity: 0 },
      { rotate: 0, opacity: 1, duration: 0.3, ease: "power1.out" },
      "<"
    );
    timeline.fromTo(
      ["#manga-title", "#category"],
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power1.out" },
      ">0.2"
    );

    timeline.fromTo(
      "#hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power1.out" },
      "<"
    );
    timeline.fromTo(
      "#heroBG",
      { scale: 1.5, y: 250, opacity: 0 },
      {
        scale: 1,
        y: 0,
        opacity: 1,
        duration: 1.3,
        ease: "power1.inOut",
      },
      "<"
    );
    timeline.fromTo(
      toolbars,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, stagger: { each: 0.5 } },
      "<"
    );
    timeline.fromTo(
      "#info-block",
      { scale: 0.2, y: 330, x: 300, opacity: 0 },
      {
        scale: 1,
        y: 0,
        x: 0,
        duration: 1.5,
        ease: "power2.inOut",
        opacity: 1,
      },
      "<"
    );
  }, [isAnimationInitialized]);

  useEffect(() => {
    if (parentRef.current) {
      const { offsetWidth, offsetHeight } = parentRef.current;
      setDimensions({ width: offsetWidth, height: offsetHeight });
    }
    // Optional: Add a resize listener to dynamically adjust on window resize
    const handleResize = () => {
      if (parentRef.current) {
        const { offsetWidth, offsetHeight } = parentRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-6 max-[550px]:py-2 w-full h-full relative">
      <div className="h-full font-graffitiRegular text-6xl text-outline flex flex-col items-center">
        {/* top banner section */}
        <div className="h-24 max-sm:h-20 w-full relative flex">
          {/* top banner left */}
          <div className="relative bg-bgRoot w-[240px] max-sm:w-[150px] h-full flex-shrink-0">
            <div className="absolute z-10 w-full h-full p-4 flex items-center gap-4 max-sm:gap-2">
              <Logo />
              <div className="relative text-lg max-sm:text-sm">
                <span className="absolute inset-0 text-bgRoot font-graffitiShadow uppercase">
                  {landingPage.pageLogo}
                </span>
                <span className="relative text-lightPrimary font-graffitiRegular uppercase">
                  {landingPage.pageLogo}
                </span>
              </div>
            </div>
            <div className="banner-curve absolute w-full h-full bg-bgPrimary"></div>
            <div className="banner-cover absolute w-[101%] h-[101%] top-[-1%] left-[-1%] bg-bgRoot rounded-br-[14px]"></div>
          </div>
          {/* top banner right */}
          <div className="flex-grow h-[101%] bg-bgPrimary rounded-tl-[14px] rounded-tr-[14px]"></div>
        </div>
        {/* bottom banner section */}
        <div className="bg-bgPrimary w-full h-full rounded-tl-[14px] rounded-bl-[14px] rounded-br-[14px]"></div>
      </div>

      <div className="h-full w-full absolute top-0 left-0 py-6 max-[550px]:py-2 overflow-hidden">
        <div className="w-full h-full p-8 relative max-md:p-4 max-sm:p-3">
          <div className="w-[100%] h-[100%] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 flex items-center justify-center p-4">
            <div id="emblem" className="w-2/3 h-full opacity-0 "></div>
          </div>
          <Image
            src={"/assets/img/heroBG.png"}
            fill
            id="heroBG"
            className="opacity-0 object-contain object-bottom z-0 max-xl:object-scale-down max-md:object-cover"
            alt="hero background image"
          />
          <p className="absolute bottom-0 text-sm p-2 left-1/2 -translate-x-1/2 text-center opacity-50">
            Website designed and developed by Jordan Wang, inspired by the
            creative works of
            <span> @Design.Howard</span>.<br /> View the original Figma design
            file created by me here:{" "}
            <a href="https://www.figma.com/design/iEGLK1nt9bBTCsOl1p2gPi/Mangamania?node-id=0-1&t=r7s6PDarznrHAryH-1">
              Mangamania on Figma
            </a>
            .
          </p>
          <div className="w-full h-full flex flex-col flex-grow items-end z-10m relative gap-5">
            {/* toolbar */}
            <Toolbar />
            {/* ranking */}
            <div className="flex-[2] max-sm:flex-none max-sm:justify-end w-full flex max-xl:justify-between max-sm:flex-col-reverse justify-end max-sm:pt-4">
              <Title position="ranking" />
              <Ranking />
            </div>
            {/* info section */}
            <div className="flex-[5] max-sm:flex-none flex items-start justify-between w-full max-xl:justify-end">
              <Title position="info" />
              <InfoBlock
                parentRef={parentRef}
                dimensions={dimensions}
                rating={rating}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
