"use client"

import './DetailsFoodStyle.sass'
import { getFood } from "@/actions/gets"
import { useEffect, useState } from "react"

export const DetailsFood = (params: {params:{id:number}}) => {
    const [recipe, setRecipe] = useState<any>()
    const [youtubeId, setYoutubeId] = useState<string>()
    const [ingredientsAndMeasure, setIngredientsAndMeasure] = useState<{ 
        ingredients: string[],
        measure: string[]
    }>({
        ingredients: [],
        measure: []
    })

    useEffect(() => {
        const fetchData = async () => {
            const response = await getFood(params.params.id)
            setRecipe(response.meals[0])
            const arrayPickId = response?.meals[0]?.strYoutube.split('=')
            setYoutubeId(arrayPickId[1])
            for(let i = 1 ; i <= 20; ++i){
                let ingredients = 'strIngredient' + i
                let measures = 'strMeasure' + i
                if (!response?.meals[0][ingredients]) break
                setIngredientsAndMeasure( prevState => ({
                    ingredients: [...prevState.ingredients, response?.meals[0][ingredients]],
                    measure: [...prevState.measure, response?.meals[0][measures]]
                }))
            }
        }
        fetchData()
    },[])

    return(
        <section className="recipe">
            <div className="recipe-titles">
                <h1 className="title">{recipe?.strArea}</h1>
                <h1 className="title">{recipe?.strCategory}</h1>
                <h1 className="title">{recipe?.strMeal}</h1>
            </div>
            <iframe className='video'
                title='Youtube player'
                sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                src={`https://youtube.com/embed/${youtubeId}?autoplay=0`}>
            </iframe>
            <div className="recipe-container">
                <div className="recipe-container-item">
                    <h1 className="title">Ingredients</h1>
                    {ingredientsAndMeasure.ingredients.map((element, index) => {
                        return <p className="text" key={index}>{element}</p>
                    })}   
                </div>
                <div className="recipe-container-item">
                    <h1 className="title">Measures</h1>
                    {ingredientsAndMeasure.measure.map((element, index) => {
                        return <p className="text" key={index}>{element}</p>

                    })}  
                </div>
            </div>
            <h1 className="recipe-instructions">Intructions</h1>
            <p className="recipe-intructions-text">{recipe?.strInstructions}</p>
        </section>
    )
}