import React, { useEffect, useState } from 'react'

const useWindowSize = () => {

    const [size,setSize]=useState({
        width:window.innerWidth,
        hight:window.innerHeight,
    });
    useEffect(()=>{
        const handleResize=()=> setSize({
                                    width:window.innerWidth,
                                    hight:window.innerHeight, 
                                });
        window.addEventListener("resize",handleResize);
        return ()=> window.removeEventListener("resize",handleResize);
    },[])

  return size
}

export default useWindowSize