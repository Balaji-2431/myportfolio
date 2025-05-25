import React from 'react'
import LazyLoading from '../Lazyloding/LazyLoading'

const CertificateCard = ({certificateImage,certificateHeading,certificateCompany,certificateDescription,certificateLink}) => {
  return (
    <>
        <div className="group w-[274px] p-3 bg-cardBgColor shadow-normal relative hover:shadow-glow transition-all duration-300">
            <div className="relative">
                <LazyLoading src={certificateImage} alt={"certificate image"} className={"h-[176px] w-[250px]"}/>
                <div className="hidden md:block absolute inset-0 group-hover:backdrop-blur-[4px] bg-gradient-to-r group-hover:from-[rgba(0,0,0,0.6)] group-hover:to-[rgba(0,0,0,0.7)]"></div>
            </div>

            <h4 className='md:block hidden font-heading font-semibold text-lg text-designColor text-center pt-2'>{certificateHeading}</h4>

            <div className="md:mx-5 md:my-0 my-1 font-primary  md:group-hover:flex flex flex-col md:gap-2 gap-1 md:hidden text-white md:absolute top-3 left-0 transition-all duration-500">
                <h4 className='font-heading font-medium text-lg md:text-center text-designColor md:text-white'>{certificateCompany} <span className='md:hidden'>- {certificateHeading}</span></h4>          
                <p className="text-sm mb-2">{certificateDescription}</p>
                <a href={certificateLink} className='md:-ml-1 text-designColor md:shadow-glow shadow-normal text-sm bg-bodyBgColor text-center md:py-0.5 py-1 px-2 rounded w-14'>View</a>
            </div>

        </div>
    </>
  )
}

export default CertificateCard