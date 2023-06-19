"use client"

import { getFoodArea } from "@/actions/gets"
import { useEffect, useState } from "react"
import { FoodProps } from "@/utils/utils"
import './AreaStyle.sass'

export const Area = (country: {props:{ slug: string }}) => {
    const [countryFoods, setCountryFoods] = useState<FoodProps[]>([])

    useEffect(() => {
        async function fetchData(){
            const response = await getFoodArea(country.props.slug)
            setCountryFoods(response.meals)
        }
        fetchData()
    },[])

    return(
        <section className="area">
            <h1 className="area-title">{country.props.slug} Food</h1>
            <ul className="area-container">
                {
                    countryFoods.map((element, index) => {
                        return(
                            <li className="area-container-item" key={index}>
                                <div className="area-container-item-image" style={{ backgroundImage: `url(${element?.strMealThumb})` }}><span>{element?.strMeal}</span></div>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}