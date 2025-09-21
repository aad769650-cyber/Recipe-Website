import { CiLocationOn } from "react-icons/ci";
import contact from "../../json/contact.json"
import { RiContactsFill } from "react-icons/ri";
import { MdOutlineMail } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useState } from "react";
export const Footer=()=>{
 
const [email,setEmail]=useState({
    email:"",
})


const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(email);
    setEmail({email:""})
}



// console.log(email);














    const icon={
       CiLocationOn:<CiLocationOn></CiLocationOn>,
       RiContactsFill:<RiContactsFill/>,
       MdOutlineMail:<MdOutlineMail/>
    }
    // console.log(icon);
    
    return (
        <>
        
<div className="contact_section flex-evenly">
{
    contact.map((curr)=>{
        return(
            <>
       <div className="info-container flex-center">
             <div className="icon">{icon[curr.icon]}</div>
            <div className="info ">
                <div className="name">{curr.find}</div>
                <div className="name">{curr.Contact}</div>
                
            </div>
            
       </div>
            </>
        )
    })
}
</div>
        
        <hr />
      <footer className="footer">

<div className="grid">

<div className="grid-box flex-center"><h2>Welcome To Mahar Recipe Website</h2></div>
<div className="grid-box flex-footer-box2">RecipeNest  
Easy and delicious recipes you can trust.
<div className="footer-link">
    
<NavLink to="/about"> About</NavLink> | <NavLink to="login">Contact</NavLink> | <NavLink to="Recipe">Recipe</NavLink> | 


</div>



</div>
<div className="grid-box flex-footer-box3">
<div>    Check Our work</div>
    <div className="logos">
       <a href="" target="_blank"> <img src="instagram.jpg" alt="instagram logo" /></a>
<a href="">      <img src="linkedin.jpg" alt="instagram logo" /></a>
       <a href="https://github.com/aad769650-cyber"> <img src="github.png" alt="instagram logo" /></a>
    </div>
      
    
</div>
<div className="grid-box flex-center">
    <div className="newsletter">
       
      <h3>Newsletter</h3>
      <p>Subscribe to receive our latest updates:</p>
        <form action="" onSubmit={(e)=>handleSubmit(e)}>
            <input type="email" required placeholder="Enter Your Email... " value={email.email} onChange={(e)=>(setEmail({email:e.target.value}))}/>
            <button type="submit" disabled={email.email==""?true:false}>Subscribe</button>
        </form>
    </div>
</div>

</div>


<div className="para"><p>Copyright 2025 &copy;.All rights reserved.</p></div>   





   </footer>

        
        
        </>
    )
}