"use client";

import { useEffect } from "react";

const usePreLoaderAnimation = () => {
  useEffect(() => {
    const body = document.querySelector("body");

    // Add transition animation class
    body?.classList.add("page-transition", "bg-whiteOne", "dark:bg-blackOne");

    // Remove the transition class after the animation completes (500ms)
    const timer = setTimeout(() => {
      body?.classList.remove("page-transition");
    }, 500); // Match this delay with the transition duration

    return () => clearTimeout(timer);
  }, []);
};

export default usePreLoaderAnimation;
