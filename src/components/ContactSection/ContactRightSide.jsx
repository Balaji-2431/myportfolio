import React from 'react'
import contactImg from '../../assets/contactImg.webP'
import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram} from 'react-icons/fa'
import ScrollFade from '../Animation/ScrollFade'
import LazyLoading from '../Lazyloding/LazyLoading'

const ContactRightSide = () => {
  return (
    <>
        <div className="md:w-[45%] max-w-[340px] min-w-[244px] mx-auto md:mx-0">
            <ScrollFade direction={"left"}>
            <div className="bg-cardBgColor shadow-normal py-4 px-5 md:px-3 flex flex-col gap-3 md:h-[471px] lg:h-[485px]">
                
                <div className="rounded-md">
                    <LazyLoading 
                        className='max-w-[300px] max-h-[150px] min-w-[220px] min-h-[110px] w-auto h-auto overflow-hidden'
                        src={contactImg}
                        alt="contact image"
                        placeholder={"/images/placeholder.webP"}
                    >
                    </LazyLoading>
                </div>
                
                <div className=" md:text-sm lg:text-base space-y-2.5">
                    <h3 className='text-white uppercase font-heading text-xl tracking-wider'>Balaji T</h3>
                    <p className="text-primaryColor font-primary">I'm always open to new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!</p>
                    <p className="text-primaryColor font-primary">Phone: <span className='text-gray-300'>+91 9345868996</span></p>
                    <p className="text-primaryColor font-primary">Email: <span className='text-gray-300'>tbalaji2411@gmail.com</span></p>
                    <p className="text-primaryColor font-primary">You also find me on</p>
                </div>

            <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/balaji-b-b7ab2629b" ><span className='icon'><FaLinkedin/></span></a>  
                <a href="mailto:tbalaji2411@gmail.com" ><span className='icon'><FaEnvelope/></span></a>  
                <a href="https://www.instagram.com/mickey___boy_____" ><span className='icon'><FaInstagram/></span></a>  
            </div>
            </div>
            </ScrollFade>
        </div>
    </>
  )
}

export default ContactRightSide