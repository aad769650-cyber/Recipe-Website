import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom"
import { getIndvApiData } from "../../api/apiData";
// import { useState } from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaHandLizard } from "react-icons/fa";

export const IndvRecipe=()=>{
    
    const param=useParams();
   
const navigate=useNavigate();

const handleBackClick=()=>{
    navigate(-1);
}
const getIndvData=async(param)=>{
  
    
    const res=await  getIndvApiData(param);

    
    return res ;
};



    const {data,isLoading,isError}=useQuery({
        queryKey:["Detail"],
        queryFn:()=>getIndvData(param),
    })

    

   
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


   const {strMeal,strMealThumb,
strIngredient1,strMeasure1,
    strIngredient2,strMeasure2,
    strIngredient3,strMeasure3,
    strIngredient4,strMeasure4,
    strIngredient5,strMeasure5,
    strIngredient6,strMeasure6,
    strIngredient7,strMeasure7,
    strIngredient8,strMeasure8,
    strIngredient9,strMeasure9,
    strIngredient10,strMeasure10,
    strIngredient11,strMeasure11,
    strIngredient12,strMeasure12,
    strIngredient13,strMeasure13,
    strIngredient14,strMeasure14,
    strIngredient15,strMeasure15,
    strIngredient16,strMeasure16,
    strIngredient17,strMeasure17,
    strIngredient18,strMeasure18,
    strIngredient19,strMeasure19,
    strIngredient20,strMeasure20,
// eslint-disable-next-line no-unsafe-optional-chaining
}=data?.data?.meals[0];
   
   
   return(
        <>
   
   
       <section className="individual">


         
                <li className="recipe-indv-list recipe_IndvCard">
                   
                
                    <div className="str_Meal">{strMeal}</div>
                 <img src={strMealThumb} alt="Thumbnail image"  className="recipe_image"/>
                  
                </li>
                    <li className="recipe-indv-list recipe_Detail">
                        <div className="recipe-heading">Ingredients</div>
                   <span className="Ingredients">{strIngredient1}:{strMeasure1},</span>
                   <span className="Ingredients">{strIngredient2}:{strMeasure2},</span>
                   <span className="Ingredients">{strIngredient3}:{strMeasure3},</span>
                   <span className="Ingredients">{strIngredient4}:{strMeasure4},</span>
                   <span className="Ingredients">{strIngredient5}:{strMeasure5},</span>
                   <span className="Ingredients">{strIngredient6}:{strMeasure6},</span>
                   <span className="Ingredients">{strIngredient7}:{strMeasure7},</span>
                   <span className="Ingredients">{strIngredient8}:{strMeasure8},</span>
                   <span className="Ingredients">{strIngredient9}:{strMeasure9},</span>
                   <span className="Ingredients">{strIngredient10}:{strMeasure10},</span>
                   <span className="Ingredients">{strIngredient11}:{strMeasure11},</span>
                   <span className="Ingredients">{strIngredient12}:{strMeasure12},</span>
                   <span className="Ingredients">{strIngredient13}:{strMeasure13}</span>
                   <span className="Ingredients">{strIngredient14}:{strMeasure14}</span>
                   <span className="Ingredients">{strIngredient15}:{strMeasure15}</span>
                   <span className="Ingredients">{strIngredient16}:{strMeasure16}</span>
                   <span className="Ingredients">{strIngredient17}:{strMeasure17}</span>
                   <span className="Ingredients">{strIngredient18}:{strMeasure18}</span>
                   <span className="Ingredients">{strIngredient19}:{strMeasure19}</span>
                   <span className="Ingredients">{strIngredient20}:{strMeasure20}</span>
                   <button className="back-btn flex-center" onClick={handleBackClick}><IoIosArrowRoundBack className="back-icon"/>
<div>Go Back</div></button>
                </li>
                

       </section>
        </>
    )
}