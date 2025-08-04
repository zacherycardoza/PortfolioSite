import DarkModeToggle from "./DarkModeToggle";
import ScrollSpy from "./ScrollSpy";
export default function Navbar() {
  return (
    <>
      <ScrollSpy />
      <div
        className="fixed top-0 left-0 right-0 z-50 dark:text-white"
        style={{ backgroundColor: "#000000cc" }}
      >
        <nav className=" flex justify-end items-center">
          <a className="p-4" href="#project-section">
            Projects
          </a>
          <a className="p-4" href="#about-section">
            About Me
          </a>
          <a className="p-4" href="#contact-section">
            Contact
          </a>
        </nav>
      </div>
    </>
  );
}
