import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Home } from "../components/Home";

const HomePage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Frankllin's portifolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
};

export default HomePage;
