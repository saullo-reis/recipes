"use client"

import { useEffect, useState } from "react"
import { getCategories } from "@/actions/gets"
import './CategoriesStyle.sass'
import { categoriesProps } from "@/utils/utils"
import Link from "next/link"

export const Categories = () => {
    const [categories, setCategories] = useState<categoriesProps[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCategories()
            setCategories(response)
        }
        fetchData()
    }, [])

    return (
            <ul className="categories">
                
                {categories.map((element, index) => {
                    return (
                        <li className="categories-item" key={index} >
                                <Link className="categories-item" href={`/category/${element.strCategory}`}>
                                    <span className="name-categories">{element.strCategory}</span>
                                    <div className="image-categories" style={{ backgroundImage: `url(${element.strCategoryThumb})` }}></div>
                                </Link>
                            </li>                   
                    )
                })}
            </ul>
    )
}