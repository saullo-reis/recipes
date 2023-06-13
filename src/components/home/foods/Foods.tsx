"use client"

import { useRef, useEffect, useState, MutableRefObject } from "react"
import { getFoods } from '../../../actions/gets'
import './FoodsStyle.sass'

interface foodsProps {
    idMeal: string,
    strMeal: string,
    strMealThumb: string
    map: any
}

export const Foods = () => {
    const count: MutableRefObject<number> = useRef(3)
    const [foods, setFoods] = useState<foodsProps[]>([])
    const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'w', 'y', 'z']

    useEffect(() => {
        const fetchData = async () => {
            for (let i = 0; i < 3; ++i) {
                const response = await getFoods(letters[i])
                setFoods(prevFoods => [...prevFoods, response])
            }
        }
        fetchData()
    }, [])

    return (
        <ul>
            {
                foods?.map((__, index: number) => {
                    return (
                        <li className="container-foods" key={index}>
                            <h1 className="title-letter">{letters[index].toUpperCase()}</h1>
                            <div className="foods">
                                {foods[index].map((element: foodsProps, index: number) => {
                                    return(
                                        <div className="foods-container">
                                            <span className="foods-container-span">Click for recipe</span>
                                            <img className="foods-container-img" src={element.strMealThumb} key={index}></img>
                                        </div>
                                    ) 
         
                                })}
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}