import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { request } from "../lib/datocms";
import { responsiveImageFragment } from "../lib/fragments";
import { Project } from "../types";
import { ProjectEmbed } from "./projects/ProjectEmbed";
import { NextIcon } from "./icons/tecnologies/NextIcon";
import { TypeScriptIcon } from "./icons/tecnologies/TypescriptIcon";
import { JavaSriptIcon } from "./icons/tecnologies/JavaScriptIcon";
import { GraphqlIcon } from "./icons/tecnologies/GraphqlIcon";
import { TaiwindcssIcon } from "./icons/tecnologies/Taiwindcss";

const project = {
  id: "1",
  title: "Project 1",
  description: "This is a project",
  image: "https://source.unsplash.com/random",
  created_at: "2022-04-22T21:08:36.834Z",
  tags: ["tag1", "tag2"],
};

type Props = {
  project: Project;
};

type StyledIconProps = {
  title?: string;
  href?: string;
  children: React.ReactNode;
  className?: string;
};

const StyledIcon: React.FC<StyledIconProps> = ({
  title,
  href,
  children,
  className,
}) => (
  <a
    className={"hover:scale-105 duration-200 ease-in-out " + className}
    href={href}
    target="_blank"
    rel="noreferrer"
  >
    <i className="cursor-pointer " title={title}>
      {children}
    </i>
  </a>
);

export const Home: React.FC<Props> = ({ project }) => {
  return (
    <div className="w-full">
      <section className="flex flex-col justify-between items-center md:items-start md:flex-row-reverse container-padding  ">
        <div className="flex flex-col items-center">
          <div className="w-36 h-36 md:w-52 flex-grow-0 shrink-0 md:h-52 flex-aut  border-2 p-1 rounded-full mb-4 md:mb-0 relative">
            <Image
              layout="responsive"
              className="rounded-full"
              alt="Foto de perfil"
              src={require("../../public/images/me.webp")}
            />
          </div>
          <div className="flex items-center gap-2 justify-evenly bg-neutral-100 dark:bg-neutral-700 px-4 rounded-md my-4">
            <StyledIcon
              className="animate-[wave_1s]"
              title="Javascript"
              href="https://developer.mozilla.org/docs/Web/JavaScript"
            >
              <JavaSriptIcon className="w-8 h-8" />
            </StyledIcon>

            <StyledIcon
              className="animate-[wave_1s_0.2s]"
              title="Typescript"
              href="https://www.typescriptlang.org/"
            >
              <TypeScriptIcon className="w-8 h-8" />
            </StyledIcon>
            <StyledIcon
              className="animate-[wave_1s_0.3s]"
              title="Next.js"
              href="https://nextjs.org/"
            >
              <NextIcon className="w-14 h-14 dark:fill-white" />
            </StyledIcon>
            <StyledIcon
              className="animate-[wave_1s_0.4s]"
              title="GraphQL"
              href="https://graphql.org/"
            >
              <GraphqlIcon className="w-8 h-8" />
            </StyledIcon>
            <StyledIcon
              className="animate-[wave_1s_0.5s]"
              title="Taiwindcss"
              href="https://tailwindcss.com/"
            >
              <TaiwindcssIcon className="w-8 h-8" />
            </StyledIcon>
          </div>
        </div>

        <div className="md:mr-8 animate-fade-in">
          <h1 className="text-2xl mb-2 text-center md:text-left md:text-4xl">
            Olá, eu sou o Frankllin, um desenvolvedor web.
          </h1>

          <p className="text-center md:text-left md:text-lg">
            Trabalho como desenvolvedor desde 2019, e atualmente sou freelancer.
            <br />
            Meu foco atualmete tem sido o desenvolvimento frontend, mas também
            sou experiente com backends.
            <br />
            Aqui você pode ver alguns dos projetos que já desenvolvi. Sinta-se a
            vontade para dar uma olhada.
          </p>
        </div>
      </section>
      <section className=" container-padding py-4 my-4 ">
        <div className="flex justify-between mb-4">
          <h2 className="text-xl">Projetos</h2>
          <Link href="/projects">
            <a className="text-blue-500">Ver todos</a>
          </Link>
        </div>
        <ProjectEmbed project={project} />
      </section>
    </div>
  );
};
