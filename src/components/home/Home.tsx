import { Categories } from "./categories/Categories"
import { RandomFood } from "./random-button/RandomFood"
import './HomeStyle.sass'

export const Homes = () => {
    return(
        <section className="home">
            <RandomFood />
            <h1 className="title">Categories</h1>
            <Categories/>
            <h1 className="title">Japanese Foods</h1>
        </section>
        
    )
}