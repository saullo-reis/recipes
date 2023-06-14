import { Header } from "@/components/header/Header"
import { Homes } from "@/components/home/Home"
import Head from "next/head"

export default function Home() {
  return (
    <>
      <Head>
        <title>Recipes</title>
      </Head>
      <Header />
      <Homes/>
    </>
    )
}
