import { useFormik } from "formik"
import { validateData } from "./ValidateData";

export const Login=()=>{


const initialValues={
    name:"",
    email:"",
    password:"",
    confirm_password:"",
}



const formik=useFormik({
    initialValues,
    validationSchema:validateData,
    onSubmit:(values,action)=>{console.log(values);
        action.resetForm()
    }
})

// console.log(formik);



const {values,
handleChange,
handleBlur,
errors,
handleSubmit,
touched

}=formik

// console.log(formik);



console.log(errors,touched);








return (<>
    <section className="login flex-center">
        <form action="" className="login-form flex-center-coulomb" onSubmit={handleSubmit}>

<label htmlFor="">
    Name:<input type="text" name="name" placeholder="Enter your Name..." value={values.name} onChange={handleChange} autoComplete="off" onBlur={handleBlur}/>
    <div className="error">{errors.name&&touched.name?<p>{errors.name}</p>:null}</div>
</label>


<label htmlFor="">
    Email:<input type="text" name="email" placeholder="Enter your Email..." value={values.email} onChange={handleChange}autoComplete="off" onBlur={handleBlur}/>
   <div className="error">{errors.email&&touched.email?<p>{errors.email}</p>:null}</div>
   </label>

<label htmlFor="">
    Password:<input type="text" name="password" placeholder="Enter your Password..." value={values.password} onChange={handleChange} autoComplete="off" onBlur={handleBlur}/>
   <div className="error">{errors.password&&touched.password?<p>{errors.password}</p>:null}</div>
   </label>


<label htmlFor="">
    Confirm_Password:<input type="password" name="confirm_password" placeholder="Confirm Password" value={values.confirm_password} onChange={handleChange} autoComplete="off" onBlur={handleBlur}/>
   <div className="error">{errors.confirm_password&&touched.confirm_password?<p>{errors.confirm_password}</p>:null}</div>
   </label>
<button className="submit" type="submit">Register</button>
       
       <p className="sign-up-para">Already have an account?<span className="signup">Sign up</span></p>
       
        </form>
    </section>
    
    
    
    </>)
}