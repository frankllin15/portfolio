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
    fallback: false,
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
        createdAt
        tags {
          name
        }
        coverImage {
          responsiveImage(imgixParams: {fm: jpg, fit: crop, w: 2000, h: 1000 }) {
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
            token: process.env.NEXT_EXAMPLE_CMS_DATOCMS_API_TOKEN,
          }
        : {
            enabled: false,
            initialData: await request(graphqlRequest),
          },
      preview,
    },
  };
};

type QueryResult = {
  project: Project;
};

const ProjectPage: NextPage<Props> = ({ subscription, preview }) => {
  const { data } = useQuerySubscription<QueryResult>(subscription);
  const project = data?.project;

  return (
    <div className="container-padding mb-12">
      <h1 className="text-2xl md:text-4xl ">{project?.title}</h1>

      <div className="my-4">
        <time className="px-2 py-1 rounded-xl mr-2 bg-teal-600 text-neutral-100 text-sm">
          {moment(project?.created_at).format("YYYY")}
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
            return <Image data={record.image.responsiveImage} />;
          }

          return (
            <>
              <p>Don t know how to render a block!</p>
              <pre>{JSON.stringify(record, null, 2)}</pre>
            </>
          );
        }}
      />
    </div>
  );
};

export default ProjectPage;