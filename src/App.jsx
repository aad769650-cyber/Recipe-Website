import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { MainLayout } from "./component/Layout/MainLayout"
import { Home } from "./component/Layout/Home"
import { About } from "./component/Layout/About"
import { Recipe } from "./component/Layout/Recipe"
import { FAQ } from "./component/Layout/FAQ"
import { Login } from "./component/Layout/Login"
import "../src/component/css/style.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { IndvRecipe } from "./component/Layout/IndvRecipe"
 

 const App= ()=>{
  
const router=createBrowserRouter([{
  path:"/",
  element:<MainLayout></MainLayout>,
  children:[
   { 
path:"/",
element:<Home/>,


  },
{
  path:"/about",
element:<About/>,},

{path:"/faq",
element:<FAQ/>,},

{path:"/login",
element:<Login/>,},


{path:"/recipe",
element:<Recipe/>,},

{
  
  path:"/IndvRecipe/:ID",
element:<IndvRecipe/>,


}



  ]

  }])

 
 
 

 
 const client=new QueryClient;
  return (
    <>
    
<QueryClientProvider client={client}>
  <RouterProvider router={router}></RouterProvider>   
</QueryClientProvider>
    </>
  )
 }
 export default App