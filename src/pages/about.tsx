const AboutPage = () => {
    const yearsOld = new Date().getFullYear() - 2001;

    return (
        <div className="container-padding text-xl">
            <h1 className="text-2xl md:text-3xl">
                About <span className="text-teal-500">Me</span>
            </h1>
            <p className="mt-4">
                Me chamo{" "}
                <span className="text-teal-500">Frankllin Teixeira</span> tenho{" "}
                {yearsOld} anos, sou natural de Natal, Rio Grande do Norte, Brasil.
            </p>
            <p>
                Sou desenvolvedor web e apaixonado por tecnologia. Atualmente
                trabalho como desenvolvedor fullstack no{" "}
                <a
                    href="https://www.linkedin.com/company/grupomoradaoficial/mycompany/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500  ml-1"
                >
                    Grupo Morada
                </a>
                .
            </p>
            <p className="mt-4">
                Estou cursando o ultimo periodo em Análise e Desenvolvimento de
                Sistemas pela{" "}
                <a
                    href="https://estacio.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500  ml-1"
                >
                    Estácio
                </a>
                .
            </p>
            <p className="mt-4">
            Tenho experiência em projetos de desenvolvimento web tanto no front-end quanto no back-end, trabalhando com tecnologias como HTML, CSS, JavaScript, React, Node.js, SQL e MongoDB. Além disso, também possuo conhecimentos em metodologias ágeis de desenvolvimento, como Scrum e Kanban, que me permitem trabalhar de forma eficiente em equipe.
            </p>
            <p className="mt-4">
            Além disso, estou sempre atento às tendências e boas práticas de design e usabilidade, aplicando esses conhecimentos em meus projetos para oferecer soluções de qualidade e que proporcionem uma experiência agradável e eficiente aos usuários.
            </p>

            <h2 className="text-2xl md:text-3xl mt-8">
              Hobbies 
            </h2>
            <p className="mt-4">
            Como um hobby, sou um grande amante de música e instrumentos musicais. Adoro passar meu tempo livre tocando piano, violão, ukulele e explorando novos sons e acordes.
            </p>
        </div>
    );
};

export default AboutPage;
