"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import RankingContainer from "@/public/assets/svg/RankingContainer";
import { useState } from "react";
import ArrowDown from "@/public/assets/svg/ArrowDown";
import ArrowUp from "@/public/assets/svg/ArrowUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { manga, rankingList } from "../_constants";

const mangas = [
  { name: "Manga Name", category: "action", image: "/assets/img/avatar01.png" },
  { name: "Manga Name", category: "action", image: "/assets/img/avatar02.png" },
  { name: "Manga Name", category: "action", image: "/assets/img/avatar03.png" },
  { name: "Manga Name", category: "action", image: "/assets/img/avatar04.png" },
];

const Ranking = () => {
  const [rankingListActive, setRankingListActive] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [focusIndex, setFocusIndex] = useState(1);
  const tweenInRef = useRef(null);
  const tweenOutRef = useRef(null);
  useEffect(() => {
    const rankingItems = gsap.utils.toArray(".ranking-item");
    //play first part
    tweenInRef.current = gsap.timeline({ paused: true });
    tweenInRef.current.fromTo(
      rankingItems,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: { each: 0.2 },
        ease: "power1.inOut",
      }
    );
    // Timeline for the second part (reverse animation)
    tweenOutRef.current = gsap.timeline({ paused: true });
    tweenOutRef.current.to(rankingItems, {
      x: 50,
      opacity: 0,
      duration: 0.5,
      stagger: { each: 0.2, from: "end" },
      ease: "power1.inOut",
    });
  }, []);

  const toggleRankingList = () => {
    if (rankingListActive) {
      //play second part
      tweenOutRef.current.restart();
    } else {
      //play first part
      tweenInRef.current.restart();
    }
    setRankingListActive(!rankingListActive);
  };

  return (
    <div className="toolbar opacity-0 w-48 max-sm:min-h-[230px] h-full max-sm:h-[240px] max-sm:ml-auto flex flex-col">
      <div
        className="flex items-center gap-4 cursor-pointer justify-end z-10"
        onClick={toggleRankingList}
      >
        <div className="relative text-xl ranking-title">
          <span className="font-graffitiShadow uppercase inset-0 text-bgRoot absolute">
            {rankingList.title}
          </span>
          <span
            className={`ranking-title-font font-graffitiRegular uppercase text-primary ${
              rankingListActive ? "text-secondary" : ""
            } relative`}
          >
            {rankingList.title}
          </span>
        </div>
        <div className="h-7 w-7 rounded-full border-2 border-primary flex items-center justify-center bg-darkPrimary">
          {rankingListActive ? <ArrowDown /> : <ArrowUp />}
        </div>
      </div>

      <ul id="ranking-list" className={`mt-4`}>
        {rankingList.list.map((manga, index) => (
          <li
            key={index}
            className={`${
              focusIndex === index
                ? "ranking-item-focus ranking-item"
                : "ranking-item"
            } flex gap-3 my-2 max-sm:my-1 justify-center opacity-0`}
            onMouseOver={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="relative w-14 h-14 max-sm:w-10 max-sm:h-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="0" height="0">
                <defs>
                  <clipPath id="myClipPath" clipPathUnits="objectBoundingBox">
                    <path
                      d="M0.589795 3.41421C-0.670135 2.15428 0.222202 0 2.00401 0H7.1755H7.17558H35.1755C41.8029 0 47.1755 5.37258 47.1755 12V30.1715C47.1755 30.7019 47.3862 31.2106 47.7613 31.5857L52.7614 36.5858C54.0213 37.8457 53.129 40 51.3472 40H47.1755H46.1756H19.1755C12.5481 40 7.1755 34.6274 7.1755 28V10.8283C7.1755 10.2979 6.96479 9.78921 6.58972 9.41414L0.589795 3.41421Z"
                      transform="scale(0.02)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <img
                src={manga.image}
                alt="Clipped image"
                className="w-full h-full object-cover object-left-top"
                style={{
                  clipPath: "url(#myClipPath)",
                  WebkitClipPath: "url(#myClipPath)",
                }}
              />
              <RankingContainer
                className="absolute inset-0 max-sm:w-11 max-sm:h-11"
                width={61}
                height={61}
                focus={hoverIndex === index || focusIndex === index}
              />
            </div>
            <div className="">
              <div className="relative">
                <span className="font-graffitiShadow uppercase inset-0 text-bgRoot absolute max-sm:text-sm">
                  {manga.name}
                </span>
                <span className="manga-name font-graffitiRegular uppercase text-primary max-sm:text-sm opacity-75 relative">
                  {manga.name}
                </span>
              </div>
              <p className="manga-category text-sm max-sm:text-xs font-outfit capitalize opacity-70">
                {manga.category}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Ranking;
