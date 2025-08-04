import { useEffect } from "react";

export default function ScrollSpy() {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");

    const handleScroll = () => {
      let currentSectionId = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 4) {
          currentSectionId = section.id;
        }
      });
      if (currentSectionId === "" || currentSectionId === null) return;

      navLinks.forEach((link) => {
        link.classList.remove("accent-text");
        if (link.href.includes(`#${currentSectionId}`)) {
          link.classList.add("accent-text");
        }
      });
      console.log(currentSectionId);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
}
