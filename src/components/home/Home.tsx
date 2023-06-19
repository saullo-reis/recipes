import { Categories } from "./categories/Categories"
import { RandomFood } from "./random-food/RandomFood"
import './HomeStyle.sass'
import { Areas } from "./areas/Areas"

export const Homes = () => {
    return(
        <section className="home">
            <RandomFood />
            <h1 className="title">Categories</h1>
            <Categories/>
            <h1 className="title">Areas</h1>
            <Areas />
        </section>
        
    )
}