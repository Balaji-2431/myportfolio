import React, { useState,useEffect,useRef } from 'react'

const LazyLoading = ({src,alt,className}) => {

    const placeholderImg="/images/placeholder.webp"
    const [loaded,setLoaded]=useState(false)
    const imgRef=useRef(null);
    const[isVisible,setIsVisible]=useState(false);
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setIsVisible(true)
            }
        },{threshold: 0.1,rootMargin:'50px 0px'});
        const node = imgRef.current;
        
        if(node){
            observer.observe(node);
        }
        return()=>{
            if(node){
                observer.unobserve(node);
            }    
        }
    },[])
  
  return (
    <div 
      className={`relative ${className}`}
      ref={imgRef}
      style={{
            minHeight:'200px',
            backgroundImage:!loaded?`url(${placeholderImg})`:'none',
            backgroundSize:'cover',
            backgroundPosition:'center',
            transition:'background-image 0.5s ease',
          }}
    >
        {isVisible && (
          <img src={src} alt={alt} loading='lazy' 
            onLoad={()=>setLoaded(true)}
            className={`w-full h-full transition-opacity duration-500 
            ${loaded?"opacity-100":"opacity-0"}`}
            style={{
              display:loaded?`block`:'block',
            }} 
        />)}
    </div>
  )
}

export default LazyLoading