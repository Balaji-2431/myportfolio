import React from 'react'
import logoImg from '../../assets/logoImage.webp'
import Typewriter from 'typewriter-effect'
import {FaGithub,FaLinkedin,FaEnvelope,FaDownload} from 'react-icons/fa'
import ScrollFade from '../Animation/ScrollFade'
import useWindowSize from '../useWindowSize'

const Banner = () => {

    const{ width }=useWindowSize();
  return (
    <>
        <section id='home' 
            className=" min-h-[calc(100vh)] lg:w-[90vw] 2xl:w-[60vw] 2xl:h-auto 2xl:pt-40 w-[95vw] mx-auto 
                    pt-[78px] relative z-10 
                    flex sm:flex-row flex-col justify-center items-center lg:gap-10 gap-2 sm:gap-4">

            <div className="sm:order-1 order-2">
                <ScrollFade direction={width>786?"left":"down"}>
                    <div className=" w-full lg:pl-16 md:pl-5 flex flex-col items-center md:items-start gap-2 sm:gap-3 lg:flex-1/2 md:flex-[60%]">
                        <h4 className='uppercase text-[15px] md:text-lg font-normal text-primaryColor font-primary'>Welcome to my world</h4>
                        <h1 className='lg:text-6xl md:text-6xl text-4xl text-white font-heading'>Hi, I'm <span className='text-designColor font-bold'>Balaji</span></h1>
                        <h3 className='text-white font-bold font-primary md:text-2xl text-xl'>&nbsp;a &nbsp;
                                <span className='inline-block align-middle'>
                                <Typewriter
                                    options={{
                                        strings:[" Frontend Developer."," Designer."],
                                        autoStart:true,
                                        loop:true,
                                        cursor:"|",
                                        delay:75,
                                    }}
                                />
                                </span>
                        </h3>
                        <p className='max-w-96 mx-2 md:max-w-lg indent-5 sm:indent-0 font-primary text-justify text-white'>I build real-world projects with React and modern web tools. I'm passionate about clean design and fast performance.</p>
                        <div className="flex sm:gap-5 gap-3 sm:mt-2">
                            <a download href='./assets/background.jpg' className="font-primary bg-designColor  text-primaryColor hover:bg-primaryColor hover:text-black transition-all duration-500 md:flex justify-center items-center gap-2 hidden py-2 px-4 my-1 rounded-full font-bold ">Download CV<FaDownload/></a> 
                            <a href="https://github.com/Balaji-2431" target='_blank' ><span className='icon hover:-translate-y-2 '><FaGithub/></span></a>  
                            <a href="https://www.linkedin.com/in/balaji-b-b7ab2629b" target='_blank' ><span className='icon hover:-translate-y-2 '><FaLinkedin/></span></a>  
                            <a href="mailto:tbalaji2411@gmail.com"  ><span className='icon hover:-translate-y-2 '><FaEnvelope/></span></a>  
                        </div>
                        <a download href='./assets/background.jpg' className="font-primary bg-designColor text-primaryColor mt-1 hover:bg-primaryColor hover:text-black transition-all duration-500 md:hidden py-2 px-4  rounded-full  font-bold flex gap-2 justify-center items-center">Download CV<FaDownload/> </a>
                    </div>
                </ScrollFade>
            </div>

            <div className="lg:flex-1/2 md:flex-[40%] flex justify-center order-1 sm:order-2 rounded-full ">
                <ScrollFade direction={width>786?"right":"down"}>
                    <div className="lg:h-[400px] lg:w-[400px] md:w-[350px] md:h-[350px] sm:w-[300px] sm:h-[300px] w-[250px] h-[250px]  ">
                        <div className="bannerLogo h-full w-full relative rounded-full md:p-1.5 p-1.25 flex justify-center items-center overflow-hidden ">
                            <div className="h-full w-full relative rounded-full bg-bodyBgColor z-10 flex justify-center items-center overflow-hidden">
                                <img src={logoImg} alt="logo image" className=' absolute rounded-full block w-[96%] h-[96%] shadow-shadowOne' />
                            </div>
                        </div>
                    </div>
                </ScrollFade>
            </div>  
        </section>
    </>
  )
}

export default Banner