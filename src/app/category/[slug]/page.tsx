import { Category } from "@/components/category/Category";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export default function Page({params}: {params:{slug: string}}){
    return(
        <>
            <Header />
            <Category params={params}/>
            <Footer />
        </>
        
    )
}