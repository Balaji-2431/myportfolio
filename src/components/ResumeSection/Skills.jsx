import React from 'react'
import { otherSkill } from '../../data/data'
import { developmentSkill } from '../../data/data'

const Skills = () => {
  return (
    <>     
      <div className="w-[95%] mx-auto mt-5 flex gap-5 lg:flex-row flex-col">

        <div className="lg:w-1/2 w-[90%] mx-auto ">
          <h2 className='text-xl text-white font-heading uppercase tracking-wider'>Development <span className='text-designColor capitalize font-primary text-[14px]'>Skills,</span></h2>
          <div className="flex flex-col gap-5 mt-5  font-primary">
            {developmentSkill.map((skill,index)=>{
                return(
                  <div key={index} className="overflow-x-hidden lg:w-[90%] lg:mx-auto">
                    <p className="text-sm uppercase text-primaryColor font-medium">{skill.language}</p>
                    <span className="w-full h-2 bg-cardBgColor inline-flex rounded-md mt-2">
                      <span style={{width:skill.learn}} className={`animate-trans h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}>
                        <span className='absolute -top-7 right-0 text-primaryColor'>{skill.learn}</span>
                      </span>
                    </span>
                  </div>
                )
              })}
          </div>
        </div>

        <div className="lg:w-1/2 w-[90%] mx-auto ">
          <h2 className='text-xl text-white font-heading uppercase tracking-wider'>Other <span className='text-designColor capitalize font-primary text-[14px]'>Skills,</span></h2>
          <div className="font-primary flex flex-col gap-5 mt-5 ">
            {otherSkill.map((skill,index)=>{
                return(
                  <div key={index} className="overflow-x-hidden lg:w-[90%] lg:mx-auto">
                    <p className="text-sm uppercase text-primaryColor font-medium">{skill.language}</p>
                    <span className="w-full h-2 bg-cardBgColor inline-flex rounded-md mt-2">
                      <span style={{width:skill.learn}} className={`animate-trans h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative`}>
                        <span className='absolute -top-7 right-0 text-primaryColor'>{skill.learn}</span>
                      </span>
                    </span>
                  </div>
                )
              })}
          </div>
        </div>
        
      </div>
    </>
  )
}

export default Skills