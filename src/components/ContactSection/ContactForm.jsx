import React, { useState } from 'react'
import ScrollFade from '../Animation/ScrollFade'
const ContactForm = () => {

    const[formData,setFormData]=useState({userName:"",phone:"",email:"",message:""})
    const[errors,setErrors]=useState({})

    function checksValidate(name,value){
        
        if(name === "userName"){
            return value.trim() === "" ?"username is required":""
        }

        if(name === "phone"){
            return value.trim() === "" ?"phone number is required":(!/^\d{10}$/.test(value))?"phone must be 10 digits":""
        }

        if(name === "email"){
            return value.trim() === "" ?"Email is required":(!/\S+@\S+\.\S+/.test(value))?"Email is invalid":""
        }

        if(name === "message"){
            return value.trim() === "" ? "Message is required": value.trim().length < 10 ?"Message must be at least 10 characters":""
        }

        return ""
    }

    function handleInput(e){
        const { name, value }=e.target;
        setFormData(prev =>({...prev,[name]:value}));
        const error = checksValidate(name,value)        
        setErrors({...errors,[name]:error})
    }

    // function handleBlur(e){
    //     const { name, value }=e.target;
    //     const error = checksValidate(name,value)        
    //     setErrors({...errors,[name]:error})
    // }
    
    function handleSubmit(e){
        e.preventDefault();
        
        const newError = {
            userName:checksValidate("userName",formData.userName),
            phone:checksValidate("phone",formData.phone),
            email:checksValidate("email",formData.email),
            message:checksValidate("message",formData.message),
        }        
        const isVaild= Object.values(newError).every((error)=> error.trim() !== "");
        setErrors(newError)
                
        if (isVaild) {            
            return ;
        }
        alert("successfully submitted");
        console.log("form submitted",formData);
        
    }

  return (
    <>
        <div className="mx-auto md:mx-0 md:max-w-4xl font-primary w-full max-w-[340px] md:h-[471px] lg:h-[485px]">
            <ScrollFade direction={"right"}>
            <div className="bg-cardBgColor shadow-normal">
            <form action="" onSubmit={handleSubmit} className='lg:px-8 px-5 py-5 flex flex-col gap-3'>
                
                <div className="flex flex-col md:flex-row md:gap-5 lg:gap-10">
                
                    <div className="md:w-1/2 w-full flex flex-col gap-2 relative">
                        <label htmlFor="userName" className='text-primaryColor text-sm uppercase tracking-wide'>Name</label>
                        <input type="text" className='inputbox'  onChange={handleInput} value={formData.userName} name="userName" id="userName" />
                        <div className="pl-2 md:h-3 h-5">
                            {errors.userName && <p className='leading-none text-red-700 text-sm capitalize'>{errors.userName}</p>}
                         </div>
                    </div>
                    
                    <div className="md:w-1/2 w-full flex flex-col gap-2 relative">
                        <label htmlFor="phone" className='text-primaryColor text-sm uppercase tracking-wide'>Phone</label>
                        <input type="number" inputMode='numeric' className='inputbox appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none'  onChange={handleInput} value={formData.phone} name="phone" id="phone" />
                        <div className="h-3 pl-2">
                            {errors.phone && <p className='leading-none text-red-700 text-sm capitalize'>{errors.phone}</p>}
                        </div>
                    </div>
                
                </div>

                <div className="flex flex-col gap-2 relative">
                    <label htmlFor="email" className='text-primaryColor text-sm uppercase tracking-wide'>Email</label>
                    <input type="text" className='inputbox'  onChange={handleInput} value={formData.email} name="email" id="email" />
                    <div className="h-3 pl-2">
                        {errors.email && <p className='leading-none  text-red-700 text-sm capitalize'>{errors.email}</p>}
                    </div>
                </div>

                <div className="flex flex-col gap-2 relative">
                    <label htmlFor="message" className='text-primaryColor text-sm uppercase tracking-wide'>Message</label>
                    <textarea name="message" className='inputbox h-28 p-2'  onChange={handleInput} value={formData.message} id="message"></textarea>
                    <div className="h-3 pl-2">
                        {errors.message && <p className='leading-none text-red-700 text-sm capitalize'>{errors.message}</p>}
                    </div>
                </div>

                <button 
                    type="submit" 
                    className={`w-full bg-[#141518] p-2 rounded-lg text-gray-300 uppercase 
                        text-base  hover:text-white hover:border-designColor
                        mt-4 
                        border border-transparent transition-all duration-300`}>send message</button>

            </form>
            </div>
            </ScrollFade>
        </div>
    </>
  )
}

export default ContactForm