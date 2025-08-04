import { useEffect, useState } from "react";
export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="bg-gray-200 dark:bg-gray-700 p-2 rounded"
    >
      {darkMode ? "Light" : "Dark"} Mode
    </button>
  );
}
