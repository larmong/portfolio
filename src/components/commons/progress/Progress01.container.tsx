import { useState, useEffect } from "react";
import { ProgressScrollBar, ScrollBar } from "./Progress01.style";

export default function ProgressBar() {
  const [scrolled, setScrolled] = useState("0%");

  const showScrollProgress = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const newScrolled = (winScroll / height) * 100 + "%";
    setScrolled(newScrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", showScrollProgress);
    return () => {
      window.removeEventListener("scroll", showScrollProgress);
    };
  }, []);

  return (
    <ProgressScrollBar>
      <ScrollBar style={{ width: scrolled }}></ScrollBar>
    </ProgressScrollBar>
  );
}
