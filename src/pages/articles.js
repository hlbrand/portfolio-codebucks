import AnimatedText from "@/components/AnimatedText";
import Head from "next/head";
import React from "react";

const articles = () => {
  return (
    <>
      <Head>
        <title>CodeBucks | Articles Page</title>
        <meta name="description" content="any description" />
      </Head>
      <main>
        <Layout>
          <AnimatedText />
        </Layout>
      </main>
    </>
  );
};

export default articles;
