import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Home } from "../components/Home";
import { request } from "../lib/datocms";
import { responsiveImageFragment } from "../lib/fragments";
import { Project } from "../types";

const HOMEPAGE_QUERY = `
query HomePage {
  allProjects(orderBy: createdAt_DESC, first: 1) {
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: {
      data: data?.allProjects[0],
    },
    revalidate: 1 * 60 * 60,
  };
};

type Props = {
  data: Project;
};

const HomePage: NextPage<Props> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Frankllin's portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home project={data} />
    </div>
  );
};

export default HomePage;
