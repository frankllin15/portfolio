/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, NextPage } from "next";
import { ProjectEmbed } from "../../components/ProjectEmbed";
import { Project } from "../../types";
import { request } from "../../lib/datocms";
import { responsiveImageFragment } from "../../lib/fragments";
import { NextSeo } from "next-seo";

type Props = {
  projects: Project[];
  data: any;
};

const HOMEPAGE_QUERY = `
query HomePage {
  allProjects {
    id
    slug
    title
    description
    createdAt
    tags {
      name
    }
    coverImage {
      responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 700 }) {
        ...responsiveImageFragment
      }
    }
    content {
      value
      blocks {
        __typename
        ...on ImageBlockRecord {
          id
          image {
            responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
              ...responsiveImageFragment
            }
          }
        }
      }
    }
  }
}
${responsiveImageFragment}
`;

const Projects: NextPage<Props> = ({ data }) => {
  return (
    <div className="container-padding">
      <NextSeo title="Projetos" />
      <h1 className="text-2xl">Projetos</h1>
      <p>Estes são alguns projetos que desenvolvi</p>
      <section className="mt-4">
        {data.map((project: any) => (
          <ProjectEmbed key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  });
  return {
    props: {
      data: data?.allProjects,
    },
  };
};

export default Projects;
