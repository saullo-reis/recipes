"use client"

import { getAreasFood } from "@/actions/gets"
import { AreasProps } from "@/utils/utils"
import Link from "next/link"
import { useEffect, useState } from "react"
import './AreasStyle.sass'


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
                    <Link href={`/areas/${element.strArea}`} key={index}>
                        <li className="areas-item" key={index}>
                            <p className="areas-item-text">{element.strArea}</p> 
                        </li>
                    </Link>   
                )
            })}
        </ul>
    )
}