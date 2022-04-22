import Link from "next/link";

export const Header = () => (
  <header className="h-20 w-full px-4 flex flex-row justify-between items-center shadow-sm">
    <Link href="/">
      <a>
        <h1 className="text-xl">
          Frankllin <span className="text-teal-500">Teixeira</span>
        </h1>
      </a>
    </Link>
    <div>
      <Link href="/projects">
        <a className="text-gray-600 mr-2 text-lg font-semibold">Projects</a>
      </Link>
      <Link href="/blog">
        <a className="text-teal-500 mr-2 text-lg font-semibold">Blog</a>
      </Link>

      <Link href="/about">
        <a className="mr-2 text-lg font-semibold">Sobre mim</a>
      </Link>
    </div>
  </header>
);
