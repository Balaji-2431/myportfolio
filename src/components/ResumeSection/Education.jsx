import React from 'react'
import { educationData } from '../../data/data'


const Education = () => {
  return (
    <>
      <div className="flex flex-wrap gap-10 mt-8 mx-5 justify-center">
        {educationData.map((edu,index)=>(
            <div key={index} className="max-w-[400px] font-primary relative bg-cardBgColor hover:bg-cardBghoverColor
            rounded-lg shadow-normal hover:shadow-glow duration-500 transition-all gap-2 flex flex-col p-4">
              <h2 className='text-white font-bold text-2xl'>{edu.degree}</h2>
              <h3 className='max-w-[270px] font-semibold text-base text-primaryColor'>{edu.institution}<span>{" "}({edu.year})</span></h3>
              <h3 className='text-designColor text-md font-medium w-fit xs:absolute xs:top-13 top-13 right-5 bg-cardBgColor p-1 rounded-lg'>{edu.grade}</h3>
              <p className='text-base font-normal text-primaryColor duration-300'>{edu.discripation}</p>
            </div>
        ))}
      </div>
    </>
  )
}

export default Education