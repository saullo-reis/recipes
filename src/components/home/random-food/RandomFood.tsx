"use client"

import './RandomFoodStyles.sass'
import { getRandomFood } from '@/actions/gets'
import { useEffect, useState } from 'react'
import { FoodProps } from '@/utils/utils'
import Link from 'next/link'

export const RandomFood = () => {
    const [food, setFood] = useState<FoodProps>()

    useEffect(() => {
        const infoDoc = document.getElementsByClassName('random-food-info')
        const randomFoodDoc = document.getElementsByClassName('random-food')
        randomFoodDoc[0]?.addEventListener('mouseover', () => {
            infoDoc[0]?.classList.add('open-text')
            infoDoc[0]?.classList.remove('close-text')
        })
        randomFoodDoc[0]?.addEventListener('mouseout', () => {
            infoDoc[0]?.classList.add('close-text')
            infoDoc[0]?.classList.remove('open-text')
        })
        const fetchData = async () => {
            const response = await getRandomFood()
            setFood(response.meals[0])
        }
        fetchData()
    },[])

    return(
        <Link className="link-random-food" href={`/food/${food?.idMeal}`}>
            <section className='random-food'>
                    <div className='random-food-image' style={{ backgroundImage: `url(${food?.strMealThumb})` }}><span>{food?.strMeal}</span></div>
                    <div className='random-food-info'>
                        <h1 className='text'>Food for eat today</h1>
                        <h2 className='text'>Click for recipe</h2>
                    </div>
            </section>
        </Link>
    )
}