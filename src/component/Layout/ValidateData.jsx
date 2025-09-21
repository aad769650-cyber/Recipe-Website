import * as Yup from "yup"
export const validateData= Yup.object({
        name:Yup.string().min(2,).max(25).required("Name is Required"),
        email:Yup.string().email().required("Email is required"),
        password:Yup.string().min(6,"Minimum six letter is required").required("password is required"),
        
        confirm_password:Yup.string().oneOf([Yup.ref("password"),null],"Password should match").required("Password must match")
        
    })
