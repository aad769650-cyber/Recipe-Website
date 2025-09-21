import { useEffect, useState } from "react"
import faq from "../../json/faq.json"
import { Cards } from "./FaqCards";
export const FAQ=()=>{

const [isShow,setIsShow]=useState(false);
const [data,setData]=useState([])
useEffect(()=>{
    setData(faq)
},[])
// console.log(faq);


const handleButtonClick=(id)=>{
    // console.log(id);
    
    setIsShow((prev)=>{
    //  console.log(prev,id);
      return prev==id?"false":id
    })
    // setIsShow(!isShow)

}

// console.log(isShow,"sow");


    return (<>
  <section className="faq-section flex-center">
    <ul className="faq ">
{
    data.map((curr)=>{
        
       return( 
        <Cards key={curr.id}onToggle={()=>handleButtonClick(curr.id) } curr={curr} isActive={isShow==curr.id}></Cards>

)
    })

}

    </ul>
  </section>
    
    
    
    
    
    
    
    
    
    
    
    </>)
}







// 
{/* <li className="faq-list ">
<div className="faq-li flex-between">
        <div className="faq-question"> "What are components in React?",
    
    </div>
    <button className="faq-btn" onClick={handleButtonClick}>show</button>
    </div>
    <div className={`answer ${isShow?"show-answer":"hide-answer"}`}>"Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be functional or class-based, making code modular and easier to manage."</div>
    </li>
  <li className="faq-list ">
<div className="faq-li flex-between">
        <div className="faq-question"> "What are components in React?",
    
    </div>
    <button className="faq-btn" onClick={handleButtonClick}>show</button>
    </div>
    <div  className={`answer ${isShow?"show-answer":"hide-answer"}`}>"Components are the building blocks of a React application. They allow you to split the UI into independent, reusable pieces, and think about each piece in isolation. Components can be functional or class-based, making code modular and easier to manage."</div>
    </li> */}
// 