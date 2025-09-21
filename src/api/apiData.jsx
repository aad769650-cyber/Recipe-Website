import axios from "axios"

const api=axios.create({
    baseURL:`https://www.themealdb.com/api/json/v1/1/
`
})

export const apiData=()=>{

    return api.get(`filter.php?c=Seafood`)

}


export const getIndvApiData=(param)=>{
    // console.log(param);
    return api.get(`/lookup.php?i=${param.ID}`)
}