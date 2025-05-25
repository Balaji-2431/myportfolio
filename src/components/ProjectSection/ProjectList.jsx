import React from 'react'
import ProjectCard from './ProjectCard'
import { projectCardDetails } from '../../data/data'
import ScrollFade from '../Animation/ScrollFade'
import SectionTitle from '../SectionTitle/SectionTitle'

const ProjectList = () => {
  return (
    <>
      <section id='projects' className=" xs:w-[95%] w-[90%] mx-auto pb-5">
        
        <ScrollFade direction="down">
          <SectionTitle design={"Things"} normal={"I've Built"}/>
        </ScrollFade>
        
        <div className= {`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 2xl:grid-cols-[repeat(auto-fit,minmax(350px,1fr))] gap-8 place-items-center`}>
            {projectCardDetails.map((card,index)=>{
              const isMDLastOdd = (projectCardDetails.length % 2 !== 0 && index === projectCardDetails.length-1) ;
              const isLGLastOdd= (projectCardDetails.length % 3 === 1 && index === projectCardDetails.length-1)
              return(
                <div 
                  key={card.id} 
                  className={`${isMDLastOdd ? "md:col-span-2 lg:col-span-1":""} 
                  ${isLGLastOdd ? "lg:col-span-3 2xl:col-span-1":""} `}>
                  <ProjectCard 
                    title={card.title} 
                    image={card.img}
                    discription={card.discription} 
                    language={card.language} 
                    gitLink={card.gitLint} 
                    liveLink={card.liveLink}
                  />
                </div>
              )}
            )}
        </div>

      </section>
    </>
  )
}

export default ProjectList