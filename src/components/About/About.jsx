import React from 'react'
import aboutImg from '../../assets/aboutImage.webp'
import LazyLoading from '../Lazyloding/LazyLoading'
import ScrollFade from '../Animation/ScrollFade'
import SectionTitle from '../SectionTitle/SectionTitle'

const About = () => {
  return (
     <section id='about' className='w-full my-10 md:my-4 md:py-3 lg:py-0 md:pb-20 lg:pb-12'>

          <div className="w-[98%] xs:w-[90%] lg:max-w-[1050px]  mx-auto ">
            <ScrollFade direction="down">
                <SectionTitle design={"Who"} normal={"I'am?"}/>
            </ScrollFade>
            
            <div className="flex justify-center items-center md:flex-row flex-col lg:gap-10" >
                <div className="lg:flex-[40%] flex-[45%]  ">
                    <ScrollFade direction={"left"}>
                    <div className="overflow-hidden flex h-[288px] w-[300px] md:h-auto xs:h-[400px] xs:w-full justify-center items-center">
                        <LazyLoading 
                            className='h-full w-auto'
                            src={aboutImg}
                            alt="About image"
                        >
                        </LazyLoading>
                    </div>
                    </ScrollFade>
                </div>
                
                <div className="text-primaryColor font-primary lg:flex-[50%] flex-[55%] p-5 font-semibold">
                    <ScrollFade direction="right">
                        <p className='indent-5 text-justify leading-relaxed mb-6'>
                            Hi, I'm <span className='font-bold'>Balaji</span>, a passionate 
                            <span className='font-bold'> Frontend Developer</span> who loves creating responsive, user-friendly websites. 
                            My journey began in college with a simple HTML and CSS project, which sparked my interest in web development. Since then, I’ve explored JavaScript, React, and tools like Vite.
                        </p>

                        <p className='indent-5 text-justify leading-relaxed mb-6'>
                            I enjoy building clean, accessible, and interactive user interfaces, with a focus on performance and SEO. I’m always exploring new trends in UI/UX and improving my skills.
                        </p>

                        <p className='indent-5 text-justify leading-relaxed mb-6 md:hidden lg:block'>
                            Outside of coding, I enjoy watching tech content, brainstorming UI ideas, and improving my English communication. I believe learning is a continuous journey, and I strive to grow every day.
                        </p>

                        <div>
                            <a href="#contact" className="bg-designColor text-primaryColor hover:bg-primaryColor
                            hover:text-black transition-all duration-500 py-2 px-4 my-1 rounded-full font-bold">
                                Contact me
                            </a>      
                        </div>
                    </ScrollFade>
                </div>
            </div>

          </div>
    </section>
  )
}

export default About