import Link from "next/link";
import { useState } from "react";
import { useTheme } from "../context/theme/ThemeProvider";
import { NavBar } from "./NavBar";
import { SwitchTheme } from "./SwitchTheme";
import { MenuIcon } from "./icons/MenuIcon";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(!open);
  };
  const { toggleTheme, theme } = useTheme();

  return (
    <header className="h-20 w-full px-4 md:px-8 flex flex-row justify-between items-center shadow-sm">
      <Link href="/">
        <a>
          <h1 className="text-2xl mdtext-3xl">
            Frankllin <span className="text-teal-500">Teixeira</span>
          </h1>
        </a>
      </Link>

      <SwitchTheme className="ml-auto mr-6" />
      <button onClick={handleToggle} className="md:hidden">
        <MenuIcon className="dark:fill-white md:hidden" />
      </button>
      <NavBar open={open} toggle={handleToggle} />
    </header>
  );
};
