// hooks/useIsSmallScreen.js
import { useState, useEffect } from "react";

export default function useIsSmallScreen(breakpoint = 950) {
  const [isSmall, setIsSmall] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth < breakpoint);
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isSmall;
}
