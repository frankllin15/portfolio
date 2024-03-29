import Image from "next/image";
import Link from "next/link";
import { Project } from "../types";
import { ProjectEmbed } from "./ProjectEmbed";
import { NextIcon } from "./icons/tecnologies/NextIcon";
import { TypeScriptIcon } from "./icons/tecnologies/TypescriptIcon";
import { JavaSriptIcon } from "./icons/tecnologies/JavaScriptIcon";
import { GraphqlIcon } from "./icons/tecnologies/GraphqlIcon";
import { TaiwindcssIcon } from "./icons/tecnologies/Taiwindcss";

const H2 = ({ children }: any) => (
    <h2 className="text-xl text-teal-600 dark:text-teal-600">{children}</h2>
);

const ListItem = ({ children }: any) => (
    <li className="list-none">
        <p className="text-lg text-gray-700 text-center">{children}</p>
    </li>
);

type Props = {
    projects: Project[];
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

export const Home: React.FC<Props> = ({ projects }) => {
    const birthDate = new Date(2001, 9, 4);
    return (
        <div className="w-full">
            {/* <NextSeo title="Frank" /> */}
            <section className="flex flex-col justify-between items-center md:items-start md:flex-row-reverse container-padding  ">
                <div className="flex flex-col items-center">
                    <div className="flex flex-wrap justify-center">
                        <div className="w-48 sm:w-60">
                            <img
                                src="/images/me.jpeg"
                                alt="..."
                                className="shadow rounded-full max-w-full h-auto align-middle border-none"
                            />
                        </div>
                    </div>

                    <div className="flex items-center gap-2 justify-evenly bg-neutral-100 dark:bg-neutral-800 px-4 rounded-md my-4">
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
                            className="animate-[wave_1s_0.4s]"
                            title="Next.js"
                            href="https://nextjs.org/"
                        >
                            <NextIcon className="w-14 h-14 dark:fill-white" />
                        </StyledIcon>
                        <StyledIcon
                            className="animate-[wave_1s_0.6s]"
                            title="GraphQL"
                            href="https://graphql.org/"
                        >
                            <GraphqlIcon className="w-8 h-8" />
                        </StyledIcon>
                        <StyledIcon
                            className="animate-[wave_1s_1s]"
                            title="Taiwindcss"
                            href="https://tailwindcss.com/"
                        >
                            <TaiwindcssIcon className="w-8 h-8" />
                        </StyledIcon>
                    </div>
                </div>

                <div className="md:mr-8 animate-fade-in">
                    <h1 className="text-2xl  mb-2 text-center md:text-left md:text-4xl">
                        Olá, eu sou o Frankllin, um desenvolvedor Fullstack.
                    </h1>

                    <p className="text-center md:text-left md:text-lg">
                        Apaixonado por código limpo e desenvolvimento web.
                        Sempre disposto a aprender e enfrentar novos desafios.
                    </p>
                    <p className="text-center md:text-left md:text-lg">
                        Se você busca um profissional engajado, apaixonado por
                        tecnologia e com habilidades tanto no front-end quanto
                        no back-end, sinta-se à vontade para entrar em contato
                        comigo.
                    </p>
                    <p className="text-center md:text-left md:text-lg">
                        Será um prazer conversarmos sobre possíveis projetos e
                        oportunidades de trabalho juntos.
                    </p>
                </div>
            </section>
            <section className=" container-padding py-4 my-4 ">
                <div className="grid gap-4 grid-cols-1 grid-rows-[auto_auto_auto] md:grid-cols-2  md:grid-rows-[auto_auto] my-4">
                    <div className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md">
                        <div className="w-16 h-16 mx-auto ">
                            <Image
                                width={552}
                                height={552}
                                src="/images/frontend.svg"
                                alt="Frontend"
                            />
                        </div>
                        <h2 className="text-xl">Frontend</h2>
                        <p className="text-center">
                            Meu foco está no desenvolvimento de interfaces e
                            aplicações web que proporcionem uma excelente
                            experiência do usuário. Valorizo designs limpos,
                            objetivos e que facilitem a navegação e usabilidade
                            do usuário
                        </p>
                        <H2>Linguagens</H2>
                        <ul className="flex justify-evenly w-full">
                            <ListItem>HTML5</ListItem>
                            <ListItem>CSS3</ListItem>
                        </ul>
                        <H2>Bibliotecas e Frameworks</H2>
                        <ul>
                            <ListItem>React</ListItem>
                            <ListItem>Next.js</ListItem>
                            <ListItem>Taiwindcss</ListItem>
                            <ListItem>Styled-components</ListItem>
                            <ListItem>Material UI</ListItem>
                        </ul>
                    </div>
                    <div className="flex flex-col items-center bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md">
                        <div className="w-16 h-16 mx-auto">
                            <Image
                                width={552}
                                height={552}
                                src="/images/backend.svg"
                                alt="Frontend"
                            />
                        </div>
                        <h2 className="text-xl">Backend</h2>
                        <p className="text-center">
                            Tenho habilidades sólidas em desenvolvimento de APIs
                            e modelagem de banco de dados, buscando sempre
                            utilizar as melhores práticas e padrões de
                            arquitetura para garantir a eficiência,
                            escalabilidade e segurança do sistema.
                        </p>
                        <H2>Linguagens</H2>
                        <ul>
                            <ListItem>Javascript</ListItem>
                            <ListItem>Typescript</ListItem>
                            <ListItem>Python</ListItem>
                            <ListItem>SQL</ListItem>
                        </ul>

                        <H2>Bibliotecas e Frameworks</H2>
                        <ul>
                            <ListItem>Express.js</ListItem>
                            <ListItem>Nest.js</ListItem>
                            <ListItem>Prisma.js</ListItem>
                            <ListItem>Graphql</ListItem>
                            <ListItem>Flask</ListItem>
                        </ul>
                    </div>
                    <div className="w-full md:col-span-2 flex flex-row item bg-neutral-100 dark:bg-neutral-800 p-4 rounded-md">
                        <div className="flex-1 flex flex-col items-center">
                            <H2 className="text-xl text-teal-700">
                                Ferramentas
                            </H2>
                            <ul>
                                <ListItem>Git</ListItem>
                                <ListItem>GitHub</ListItem>
                                <ListItem>Docker</ListItem>
                                <ListItem>Terminal</ListItem>
                            </ul>
                        </div>
                        <div className="flex-1 flex flex-col items-center">
                            <H2 className="text-xl text-teal-700">
                                Banco de dados
                            </H2>
                            <ul>
                                <ListItem>MongoDB</ListItem>
                                <ListItem>PostgreSQL</ListItem>
                                <ListItem>Sqlite</ListItem>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl">Projetos</h2>
                    <Link href="/projects">
                        <a className="text-blue-500">Ver todos</a>
                    </Link>
                </div>
                {projects.map((project) => (
                    <ProjectEmbed key={project.id} project={project} />
                ))}
            </section>
        </div>
    );
};
