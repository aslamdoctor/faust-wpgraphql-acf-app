import Head from "next/head";

export default function Layout({children}){
  return (
    <>
      <Head>
        <title>One Republic Discography</title>
      </Head>
      <main>{children}</main>
    </>
  )
}