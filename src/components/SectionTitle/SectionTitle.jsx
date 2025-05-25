import React from 'react'
import ScrollFade from '../Animation/ScrollFade'


const SectionTitle = ({design,normal}) => {
  return (
    <>
        <div className="my-3 text-center">
            <h1 className='md:text-3xl text-2xl py-3 font-heading text-primaryColor font-bold relative inline-block'>
                <span className='text-designColor'>{design} </span>
                <span className='text-primaryColor'>{normal}</span>
                <span key="title" className='block h-1 w-16 bg-designColor mx-auto mt-2 rounded-full'></span>
            </h1>
        </div>        
    </>
  )
}

export default SectionTitle