"use client"

import './RandomFoodStyles.sass'
import { getRandomFood } from '@/actions/gets'
import { useEffect, useState } from 'react'

interface RandomFoodProps{
    strMeal: string,
    strMealThumb: string,
    idMeal: string
}



export const RandomFood = () => {
    const [food, setFood] = useState<RandomFoodProps>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRandomFood()
            setFood(response.meals[0])
        }
        fetchData()
    },[])

    console.log(food)
    return(
        <section className='random-food'>
            <div className='random-food-image' style={{ backgroundImage: `url(${food?.strMealThumb})` }}></div>
            <div className='random-food-info'>
                <h1 className='text'>Food for eat today</h1>
                <h2 className='text'>Click for recipe</h2>
            </div>
        </section>
    )
}