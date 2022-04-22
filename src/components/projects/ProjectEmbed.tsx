import Image from "next/image";
import Link from "next/link";
import { Project } from "../../types";

type Props = {
  project?: Project;
};

export const ProjectEmbed: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex flex-col items-start md:flex-row my-2 max-  bg-neutral-100 p-2 rounded-sm shadow-sm hover:-translate-y-1 hover:shadow-md duration-300">
      <div className="w-full md:max-w-[14rem] md:mr-4 relative">
        <Image
          alt="project image"
          layout="responsive"
          src={require("../../../public/images/project-embed-image.webp")}
        />
      </div>
      <div className="min-w-[8rem]">
        <Link href="/">
          <a>
            <h2 className="text-xl font-semibold my-2">
              Construção de portifólio de desenvolvedor
            </h2>
          </a>
        </Link>
        <div className="mb-2">
          <span className="px-2 py-1 rounded-xl mr-2 bg-teal-600 text-neutral-100 text-sm">
            2022
          </span>
          <span className="text-slate-400">Profile | Next.js + Typescript</span>
        </div>
        <p>
          Com a necessidade de práticar o que estou aprendendo ultimamente em
          relação a Reactjs, Typescript, Next.js e Nodejs, decidi criar a minha
          primeira aplicação web, um blog.
        </p>
      </div>
    </div>
  );
};
