/* eslint-disable jsx-a11y/alt-text */
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Project } from "../../types";
import moment from "moment";
import { responsiveImageFragment } from "../../lib/fragments";
import {
  ResponsiveImageType,
  StructuredText,
  useQuerySubscription,
  Image,
} from "react-datocms";
import { request } from "../../lib/datocms";
import { NextSeo } from "next-seo";
import { renderRule, isList, isListItem } from "datocms-structured-text-utils";
import ScrollToTop from "../../components/ScrollToTop";
type Props = {
  subscription: any;
  preview: boolean;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request({ query: `{ allProjects { slug } }` });

  return {
    paths: data.allProjects.map(
      (project: { slug: string }) => `/projects/${project.slug}`
    ),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  preview = false,
}) => {
  const graphqlRequest = {
    query: `
    query PostBySlug2($slug: String) {
      project(filter: {slug: {eq: $slug}}) {
        id
        slug
        title
        dateTime
        tags {
          name
        }
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 1000, h: 850 }) {
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
                responsiveImage(imgixParams: {fm: webp, fit: crop }) {
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
    preview,
    variables: {
      slug: params?.slug,
    },
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
    revalidate: 1 * 60 * 60 * 24,
  };
};

type QueryResult = {
  project: Project;
};

const ProjectPage: NextPage<Props> = ({ subscription }) => {
  const { data } = useQuerySubscription<QueryResult>(subscription);
  const project = data?.project;
  return (
    <div id="article" className="container-padding mb-12">
      <NextSeo title={project?.title} description={project?.description} />
      <h1 className="text-2xl md:text-4xl ">{project?.title}</h1>

      <div className="my-4">
        <time className="px-2 py-1 rounded-xl mr-2 bg-teal-600 text-neutral-100 text-sm">
          {moment(project?.dateTime).get("year")}
        </time>
        <span className="text-slate-400">
          {project?.tags?.map((tag) => tag.name).join(" | ")}
        </span>
      </div>
      <p className="my-4">{project?.description}</p>

      <StructuredText
        data={project?.content}
        renderBlock={({ record }) => {
          if (record.__typename === "ImageBlockRecord") {
            return (
              <Image className="my-4" data={record.image.responsiveImage} />
            );
          }

          return (
            <>
              <p>Don t know how to render a block!</p>
              <pre>{JSON.stringify(record, null, 2)}</pre>
            </>
          );
        }}
      />
      <ScrollToTop />
    </div>
  );
};

export default ProjectPage;
