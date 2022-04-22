import Image from "next/image";
import Link from "next/link";
import { ProjectEmbed } from "./projects/ProjectEmbed";

export const Home = () => (
  <div className="w-full">
    <section className="flex flex-col justify-between items-center md:items-start md:flex-row-reverse container-padding ">
      <div className="w-36 h-36 md:w-52 flex-grow-0 shrink-0 md:h-52 flex-auto  border-2 p-1 rounded-full mb-4 md:mb-0 relative">
        <Image
          layout="responsive"
          className="rounded-full"
          alt="Foto de perfil"
          src={require("../../public/images/me.webp")}
        />
      </div>
      <div className="md:mr-8">
        <h1 className="text-2xl mb-2 text-center md:text-left md:text-4xl">
          Olá, eu sou o Frankllin, um desenvolvedor web.
        </h1>

        <p className="text-center md:text-left md:text-lg">
          Trabalho como desenvolvedor desde 2019, e atualmente sou freelancer.
          <br />
          Meu foco atualmete tem sido o desenvolvimento frontend, mas também sou
          experiente com backends.
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
      <ProjectEmbed />
    </section>
  </div>
);
