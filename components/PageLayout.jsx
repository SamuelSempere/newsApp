import Head from "next/head";

export default function PageLayaout({children, title = "NewsApp"}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>NewsAP</header>
      <main>{children}</main>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          padding: 30px;
        }
      `}</style>
    </>
  );
}
