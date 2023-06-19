import { Area } from "@/components/area/Area";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export default function Page({params}: {params: {slug: string}}){
    console.log(params)
    return (
        <>
            <Header />
            <Area props={params}/>
            <Footer />
        </>
    )
}