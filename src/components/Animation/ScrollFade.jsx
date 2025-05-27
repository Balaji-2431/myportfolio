import { useEffect, useRef, useState } from 'react'

const ScrollFade = ({children,direction}) => {

    const getDirection = ()=>{
        switch (direction) {
            case "left":
                return "-translate-x-48 opacity-0"
            case "right":
                return "translate-x-48 opacity-0"
            case "up":
                return "-translate-y-32 opacity-0"
            case "down":
                return "translate-y-44 opacity-0"
            default:
                break;
        }
    }
    const ref=useRef(null);
    const[isVisible,setIsVisible]=useState(false);
    useEffect(()=>{
        const observer = new IntersectionObserver(([entry])=>{
            if(entry.isIntersecting){
                setIsVisible(true)
            }
        },{threshold: 0.4});
        const node = ref.current;
        
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
        <div ref={ref}
        className={`transition-all duration-1000 transform ease-out ${isVisible?"trasnlate-y-0 translate-x-0 opacity-100": getDirection()}`}
        >
            {children}
        </div>
  )
}

export default ScrollFade