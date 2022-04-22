import Image from "next/image";

export const Footer: React.FC = () => (
  <footer>
    <div className="flex flex-col items-center justify-evenly h-24">
      <div className="flex items-center justify-center ">
        <a
          className="h-8 w-8 mr-2"
          href="https://www.linkedin.com/in/franklin-teixeira-a9a8b9b4/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={require("../../public/icons/linkedin.svg")}
            alt="LinkedIn"
          />
        </a>
        <a
          className="h-8 w-8 mr-2"
          href="github.com/franklin15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={require("../../public/icons/github.svg")} alt="GitHub" />
        </a>
        <a
          className="h-8 w-8"
          href="mailto:frankllin15@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src={require("../../public/icons/email.svg")} alt="Email" />
        </a>
      </div>
      <div className="flex flex-col items-center justify-center ">
        <p className="text-gray-600 text-center">
          © {new Date().getFullYear()}, developed with ❤️ by{" "}
          <a
            className="text-teal-500"
            href="https://www.linkedin.com/in/frankllin15/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Franklin Teixeira
          </a>
        </p>
      </div>
    </div>
  </footer>
);
