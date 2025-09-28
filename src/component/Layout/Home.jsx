import { IoIosArrowRoundForward } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { IoReorderThreeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export const Home=()=>{
    return (<>
<section className="home-sec">
    <div className="home">
        <div className="heading">
            <div className="home-para"><p className="main-para">Welcome to MaharRecipe</p>

Your Ultimate Destination for Delicious, Easy-to-Follow Recipes!
       
        </div>
        <p className="sec-para">Discover a world of flavors with our handpicked collection of recipes – from everyday comfort foods to gourmet dishes that impress. Whether you're a kitchen newbie or a seasoned chef, we've got something for every skill level, dietary need, and craving.</p>
        </div>
        <button className="home-btn"><NavLink to="/login" className="flex-center">Join Us <div ><IoIosArrowRoundForward className="home_icon"/></div></NavLink></button>
    </div>


<div className="home-image">
<img src="home-image.avif" alt="Recipe image for home" />
</div>

</section>
    
    
     <div className="about-us flex-center">About Us</div>

    <section className="about">
        <div className="about-card">
            <div className="card flex-center common">
                <div className="card_content ">
                    <div className="about_heading">Our Food Family</div>
                
<p className="about-para">
    Welcome to MaharRecipe App— your daily dose of delicious inspiration!
We created this app with one simple goal: to make cooking easier, tastier, and more fun for everyone — whether you're a beginner in the kitchen or a seasoned home chef.
</p>
                </div>

            </div>
            <div className="card flex-center common">
                <div className="Why_card ">
                    <div className="about_heading">Why We  DO It</div>
                    <p className="Why-para">Because food brings people together.
</p>
                    <p className="Why-para">Because you shouldn't have to scroll endlessly to find a recipe you can trust.</p>
                    <p className="Why-para">Because every home-cooked meal is a chance to nourish, connect, and create memories.
</p>
                </div>
            </div>
            <div className="card flex-center common">
                <div className="Explore">
                    <div className="about_heading">Let's Cook Together</div>
                    <p className="explore-para">Explore thousands of recipes, save your favorites, and start cooking smarter today.
Your next favorite meal is just a tap away.</p>
                </div>
            </div>
        </div>
    </section> 
    
    
    
    
    
    
    
    
    
    
    
    
    </>)
}