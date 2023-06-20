import { DetailsFood } from "@/components/details-food/DetailsFood";
import { Footer } from "@/components/footer/Footer";
import { Header } from "@/components/header/Header";

export default function Page({params}: {params:{id: number}}){
    return(
        <>
            <Header />
            <DetailsFood params={params}/>
            <Footer />
        </>
    )
}