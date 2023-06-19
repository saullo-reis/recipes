"use client"

import './HeaderStyle.sass'
import Image from 'next/image'
import Logo from '../../public/favicon.png' 
import Link from 'next/link'
import { FormEvent, FormEventHandler, useState } from 'react'
import axios from 'axios'
import { FoodProps } from '@/utils/utils'

export const Header = () => {
    const [searchNameFood, setSearchNameFood] = useState("")
    const [errorStatus, setErrorStatus] = useState(false)
    const [sugestion, setSugestions] = useState<FoodProps[]>([])

    const search = async (e: string) => {
        setSearchNameFood(e)
        try{
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${e}`)
            setSugestions(response.data.meals)
        }catch(err){
            console.error(err)
        }
    }


    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchNameFood}`)
    }

    return (
        <section className='header'>
            <Link href={'/'}><Image className='header-logo' src={Logo} alt="Recipes logo" /></Link>
            <form className='header-form' onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input className='text' value={searchNameFood} onChange={(e) => search(e.target.value)} placeholder="Write the name of the food" type={'text'}></input>
                    <input className='button' type={'submit'} value={'Search'}></input> 
                </div>
                {
                    searchNameFood !== "" && <ul className='sugestions'>
                        {
                            sugestion?.map((element, index) => {
                                return (
                                    <li className='sugestions-itens' key={index} onClick={() => setSearchNameFood(element.strMeal)}>
                                        <p className='sugestions-itens-name'>{element.strMeal}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                }
                
                {errorStatus && <p className="error">Food name not found</p>}        
            </form>     
        </section>
    )
}

