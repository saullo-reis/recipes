"use client"

import { getCategoryFood } from "@/actions/gets"
import { FoodProps } from "@/utils/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import './CategoryStyle.sass'

export const Category = ({params}: {params: {slug: string}}) => {
    const[foods, setFoods] = useState<FoodProps[]>([])

    console.log(foods)
    useEffect(() => {
        const fetchData = async () => {
            const response = await getCategoryFood(params.slug)
            setFoods(response.meals)
        }
        fetchData()
        
    },[])
    return (
        <section className="category">
            <h1 className="category-title">{params.slug} Food</h1>
            <ul className="category-container">
                {
                    foods.map((element, index) => {
                        return (
                            <Link key={index} href={`/food/${element.idMeal}`}>
                                <li className="category-container-item" >
                                    <div className="category-container-item-image" style={{ backgroundImage: `url(${element?.strMealThumb})` }}><span>{element?.strMeal}</span></div>
                                </li>
                            </Link>
                        )
                    })
                }
            </ul>
        </section>
    )
}