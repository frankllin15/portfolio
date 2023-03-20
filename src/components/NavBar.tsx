import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { CloseIcon } from "./icons/CloseIcon";

type Props = {
  open: boolean;
  toggle: () => void;
};

const links = [
  {
    href: "/projects",
    label: "Projetos",
  },

  {
    href: "/about",
    label: "Sobre",
  },
];

export const NavBar: React.FC<Props> = ({ open, toggle }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const handleClose = () => {
    if (open) {
      toggle();
    }
  };

  return (
    <nav
      className={`mobile-only:absolute top-0 left-0 mobile-only:flex flex-col items-center  mobile-only:w-screen mobile-only:h-screen mobile-only:pt-12  z-10 mobile-only:bg-neutral-100 mobile-only:dark:bg-neutral-900 duration-200 ${
        open ? "" : "transform mobile-only:-translate-y-full "
      } `}
    >
      {links.map((link) => (
        <Link href={link.href} key={link.href}>
          <a
            onClick={handleClose}
            className="text-gray-800 dark:text-neutral-50 md:mr-4 mobile-only:text-3xl text-xl mobile-only:pb-10  font-semibold hover:text-teal-500 dark:hover:text-teal-500 duration-200"
          >
            {link.label}
          </a>
        </Link>
      ))}

      <button
        className="absolute top-6 right-4 dark:fill-neutral-50 md:hidden"
        onClick={toggle}
      >
        <CloseIcon className="dark:fill-neutral-50 w-8 h-8" />
      </button>
    </nav>
  );
};
