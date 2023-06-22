import axios from 'axios'
const urlBase = 'https://www.themealdb.com/api/json/v1/1/'

export const getFoods = async (letter) => {
    try{
        const response = await axios.get(urlBase + 'search.php?f=' + letter)
        return response.data.meals
    }catch(err){
        console.error(err)
        throw err
    }
}

export const getCategories = async () => {
    try{
        const response = await axios.get(urlBase + 'categories.php')
        return response.data.categories
    }catch(err){
        console.error(err)
        throw err
    }
}

export const getRandomFood = async () => {
    try{
        const response = await axios.get(urlBase + 'random.php')
        return response.data
    }catch(err){
        console.error(err)
        throw err
    }
}

export const getAreasFood = async () => {
    try{
        const response = await axios.get(urlBase+"list.php?a=list")
        return response.data
    }catch(err){
        console.error(err)
        throw err
    }
}

export const getFoodArea = async (country) => {
    try{
        const response = await axios.get(urlBase +"filter.php?a="+country)
        return response.data
    }catch(err){
        console.error(err)
        throw err
    }
}

export const getFood = async ( id ) => {
    try{
        const response = await axios.get(urlBase + "lookup.php?i=" + id)
        return response.data
    }catch(err){
        console.error(err)
        throw err
    }
}

export const getCategoryFood = async (category) => {
    try{
        const response = await axios.get(urlBase + "filter.php?c=" + category)
        return response.data
    }catch(err){
        console.error(err)
        throw err
    }
}