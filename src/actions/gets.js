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