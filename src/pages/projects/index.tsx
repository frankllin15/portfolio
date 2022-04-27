/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { GetStaticProps, NextPage } from "next";
import { ProjectEmbed } from "../../components/ProjectEmbed";
import { Project } from "../../types";
import { request } from "../../lib/datocms";
import { responsiveImageFragment } from "../../lib/fragments";
import { NextSeo } from "next-seo";
import { useQuerySubscription } from "react-datocms";

type Props = {
  subscription: any;
};

type QueryResult = {
  allProjects: Project[];
};

const Projects: NextPage<Props> = ({ subscription }) => {
  const { data } = useQuerySubscription<QueryResult>(subscription);
  const projects = data?.allProjects;
  return (
    <div className="container-padding">
      <NextSeo title="Projetos" />
      <h1 className="text-2xl">Projetos</h1>
      <p>Estes são alguns projetos que desenvolvi</p>
      <section className="mt-4">
        {projects?.map((project) => (
          <ProjectEmbed key={project.id} project={project} />
        ))}
      </section>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async ({ preview = false }) => {
  const graphqlRequest = {
    query: `
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
    `,

    variables: { limit: 20 },
    preview,
  };

  return {
    props: {
      subscription: preview
        ? {
            ...graphqlRequest,
            initialData: await request(graphqlRequest),
            token: process.env.NEXT_PUBLIC_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
      preview,
    },
  };
};

export default Projects;
