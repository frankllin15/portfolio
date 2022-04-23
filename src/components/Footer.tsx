import LinkedinIcon from "../../public/icons/linkedin.svg";
import GithubIcon from "../../public/icons/github.svg";
import EmailIcon from "../../public/icons/email.svg";

export const Footer: React.FC = () => (
  <footer>
    <div className="flex flex-col items-center justify-evenly h-24">
      <div className="flex items-center justify-center ">
        <a
          href="https://www.linkedin.com/in/frankllin-teixeira-244a9517b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="mx-2" />
        </a>
        <a
          href="github.com/frankllin15"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon className="mx-2 dark:fill-neutral-100" />
        </a>
        <a
          href="mailto:frankllin15@hotmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <EmailIcon className="mx-2 dark:fill-neutral-100" />
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
