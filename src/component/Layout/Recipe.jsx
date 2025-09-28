import { useQuery } from "@tanstack/react-query"
import { apiData } from "../../api/apiData";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export const Recipe=()=>{
const [input,setInput]=useState("")


    const getApiData=async () => {
    const res=await apiData();
    // console.log(res);
    return res;
    
   }
   const {data,isError,isLoading}=useQuery({
    queryKey:['recipe'],
    queryFn:getApiData,
   })
   
   
// //  console.log(data?.data?.meals.strMeal.toLowerCase().includes("a"));
//  const arr = ["HELLO", "WORLD", "ReAcT", "JavaScript"];

// const lowercasedArr = arr.filter(item => item.toLowerCase().includes("a"));

// console.log(lowercasedArr);
   
   
  const filtered= data?.data?.meals.filter((curr)=>{
    //   console.log(curr.strMeal.toLowerCase().includes("a"))
    return(curr.strMeal.toLowerCase().includes(input.toLowerCase()))
   });
   
   console.log(filtered);
   
   
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
   
   
   
   console.log(input);
   
   
   
   
   return (<>
    <div className="rec-heading flex-center"><h2>Our Recipes</h2></div>
    
    
    
    <section className="recipe">

      <div className="input">  <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search Recipe..."/></div> 
      
       <ul className="grid-recipe">
    {
        filtered?.map((curr)=>{
 
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