"use client"

import { getAreasFood } from "@/actions/gets"
import { useEffect, useState } from "react"
import './AreasStyle.sass'

interface AreasProps{
    strArea: string,
    map: void
}

export const Areas = () => {
    const [areas, setAreas] = useState<AreasProps[]>()

    useEffect(() => {
        const fetchData = async () => {
            const response = await getAreasFood()
            setAreas(response.meals)
        } 
        fetchData()
    },[])   

    return(
        <ul className="areas">
            {
            areas?.map((element: AreasProps, index: number) => {
                return(
                    <li className="areas-item" key={index}>
                        <p className="areas-item-text">{element.strArea}</p>
                    </li>
                )
            })}
        </ul>
    )
}