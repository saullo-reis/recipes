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
    const infoDoc = document.getElementsByClassName('random-food-info')
    console.log(infoDoc)
    const randomFoodDoc = document.getElementsByClassName('random-food')
    randomFoodDoc[0]?.addEventListener('mouseover', () => {
        infoDoc[0]?.classList.add('open-text')
        infoDoc[0]?.classList.remove('close-text')
    })
    randomFoodDoc[0]?.addEventListener('mouseout', () => {
        infoDoc[0]?.classList.add('close-text')
        infoDoc[0]?.classList.remove('open-text')
    })

    

    useEffect(() => {
        const fetchData = async () => {
            const response = await getRandomFood()
            setFood(response.meals[0])
        }
        fetchData()
    },[])

    return(
        <section className='random-food'>
            <div className='random-food-image' style={{ backgroundImage: `url(${food?.strMealThumb})` }}><span>{food?.strMeal}</span></div>
            <div className='random-food-info'>
                <h1 className='text'>Food for eat today</h1>
                <h2 className='text'>Click for recipe</h2>
            </div>
        </section>
    )
}