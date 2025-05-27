import React, { useEffect, useRef, useState } from 'react'
import { resumedata } from '../../data/data'
import ScrollFade from '../Animation/ScrollFade';
import SectionTitle from '../SectionTitle/SectionTitle';

const Resume = () => {
  const [visbleSection,setVisbleSection] = useState(resumedata[0].component);
  const [active,setActive] = useState(1);
  const [activeindex,setActiveIndex] = useState(0);
  const [trans,setTrans] = useState(false);
  const [handleClick,sethandleClick] = useState(false);
  const sectionRefs=useRef([])

  function handleclick(item,index) {
    sethandleClick(true)
    setActiveIndex(index)
    setActive(item.id)
    setTrans(true)
    setTimeout(()=>{
      setVisbleSection(item.component)
      setTrans(false)
    },300)
  }

  useEffect(()=>{
    if(!handleClick){
      return;
    }
    if(activeindex!==null && window.innerWidth<768){
      setTimeout(()=>{
        sectionRefs.current[activeindex]?.scrollIntoView({behavior:"smooth",block:"start"});
      },100);
    }
  },[activeindex,handleClick]);

  return (
    <section id='resume' className=' pb-10'>
      
      <SectionTitle design={"Professional"} normal={"Profile"}/>
      
      <div className="w-[90vw] h-[4px]  bg-designColor mt-4 mx-auto hidden md:block "></div>
      
      <div className="md:flex lg:w-[95%] w-[97%] mx-auto" >    
        <aside className='flex-1/4 md:pt-10 md:border-r-[4px] border-r-designColor flex flex-col gap-1 md:gap-20 lg:gap-15'>
          {resumedata.map((data,index)=>{
            return(
              <div  
              ref={(el)=>(sectionRefs.current[index]=el)}
              className="group md:flex items-center pt-5 md:pt-0" key={data.id}>
                  <div 
                  onClick={()=>handleclick(data,index)}     
                  className={`font-primary cursor-pointer hover:bg-cardBghoverColor transition-all duration-300 
                  rounded-md lg:p-3 p-2 flex-3/4 lg:ml-6.5 md:ml-4 md:w-full sm:w-[80%] w-[90%] mx-auto
                  ${active === data.id?"border-designColor border-[1px] bg-cardBghoverColor shadow-active":"hover:shadow-glow shadow-normal bg-cardBgColor"}`}>
                    <h4 className='font-bold text-center text-primaryColor lg:text-lg text-base uppercase'>{data.title}</h4>
                  </div>
                  
                  <div className={`md:hidden ${activeindex===index?"block":"hidden"}`}>
                    <ScrollFade >
                      <data.component/>
                    </ScrollFade>
                  </div>

                  <div className="hidden md:block bg-designColor h-[4px] w-full flex-1/4 relative">
                    <span className='h-5  w-5 rounded-full bg-designColor absolute -right-[13px] -top-1.5 '>
                      <span key={data.id} className={`h-3 w-3 rounded-full  duration-500 absolute right-1 top-1 ${active === data.id ?"bg-bodyBgColor":"bg-designColor"}`}></span>
                    </span>
                  </div>
              </div>)
            })}
        </aside>
          
        <div className={`flex-3/4 hidden md:block  transition-all duration-300 ${trans?"opacity-0":"opacity-100"}`}>
        <ScrollFade direction={"down"}>
          {visbleSection?(visbleSection):<p className='text-3xl text-primaryColor'>Loading</p>}
          </ScrollFade>
        </div>     

      </div>

    </section>
  )
}

export default Resume