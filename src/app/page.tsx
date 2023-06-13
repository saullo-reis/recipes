import { Header } from "@/components/header/Header"
import { Homes } from "@/components/home/Home"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Homes/>
    </>
    )
}
