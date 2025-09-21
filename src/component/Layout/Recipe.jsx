import { useQuery } from "@tanstack/react-query"
import { apiData } from "../../api/apiData";
import { NavLink } from "react-router-dom";

export const Recipe=()=>{
   const getApiData=async () => {
    const res=await apiData();
    // console.log(res);
    return res;
    
   }
   const {data,isError,isLoading}=useQuery({
    queryKey:['recipe'],
    queryFn:getApiData,
   })
   
   
//  console.log(data);
 
   
   
   
   
   
   
   if(isLoading){
    return (
        <>
           <div className="loading-container">
      <span className="dot"></span>
      <span className="dot"></span>
      <span className="dot"></span>
    </div>
        
        </>
    )
   }
   
   if (isError) {
      <div className="error-container">
      <h1>😢 Oops!</h1>
      <p>SomeThing Went Wrong</p>
      <a href="/" className="back-home">← Back to Home</a>
    </div>
   }
   
   
   
   
   
   
   
   return (<>
    <div className="rec-heading flex-center"><h2>Our Recipes</h2></div>
    
    
    
    <section className="recipe">
        <ul className="grid-recipe">
    {
        data?.data?.meals.map((curr)=>{
 
   const {strMeal,strMealThumb,idMeal}=curr;
            return(
                <>
                
                <li className="recipe-list recipe_card">
                   
                    <div className="str_Meal">{strMeal}</div>
                 <img src={strMealThumb} alt="Thumbnail image"  className="recipe_image"/>
                  <button className="recipe-btn"><NavLink to={`/IndvRecipe/${idMeal}`}>Get All Recipe</NavLink></button>
                </li>
                
                </>
            )
        })
    }   
        </ul>
    </section>
    
    
    
    
    
    </>)
}