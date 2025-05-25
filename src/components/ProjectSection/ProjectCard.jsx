import React from 'react'
import {FaGithub,FaEye} from 'react-icons/fa'
import ScrollFade from '../Animation/ScrollFade'
import LazyLoading from '../Lazyloding/LazyLoading'

const ProjectCard = ({image,title,discription,language,gitLink,liveLink}) => {
  return (
    <>
        <ScrollFade direction="down">  
        <div className= "xs:px-8 px-5 py-8 max-w-[350px] w-full h-auto rounded-lg shadow-black flex flex-col gap-3 bg-gradient-to-r from-bodyBgColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-700">
          <div className='h-[150px] rounded-lg overflow-hidden group-hover:scale-[1.1] transition-all duration-400'>
            <LazyLoading 
               className='h-[150px]'
               src={image}
               alt="Project card image"
               >
            </LazyLoading>
          </div>
          <div className="flex items-center justify-between uppercase group-hover:mt-1 transition-all duration-400">
            <h2 className='text-designColor text-lg font-semibold font-heading'>{title}</h2>
            <div className="flex gap-2">
                <a href={gitLink} target='_blank'><span className='icon w-7 h-7 md:w-8 md:h-8 group-hover:bg-black group-hover:text-designColor group-hover:border-designColor group-hover:border'><FaGithub/></span></a>  
                <a href={liveLink} target='_blank'><span className='icon w-7 h-7 md:w-8 md:h-8  group-hover:bg-black group-hover:text-designColor group-hover:border-designColor group-hover:border'><FaEye/></span></a>          
            </div>
          </div>
          <p className="text-primaryColor text-[15px] font-primary">using <span className='text-white font-semibold tracking-wider'>{language}</span></p>
          <p className="text-primaryColor text-[15px] font-primary text-justify group-hover:text-white transition-all duration-300">{discription}</p>
        </div>
        </ScrollFade>

    </>
  )
}

export default ProjectCard