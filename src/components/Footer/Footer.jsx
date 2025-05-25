import logo from '../../assets/logoImage.webP'
import {FaGithub,FaLinkedin,FaEnvelope,FaInstagram} from 'react-icons/fa'
import { navItems } from '../../data/data.js';

const Footer =()=>{
    return(
        <>
            <section className="border-t-2 border-t-primaryColor bg-black">

                <div className=" w-[90%] mx-auto py-5 grid gap-5 lg:justify-items-center justify-items-center md:justify-items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">

                    <div className="space-y-2">
                        <a href="#home" className="flex items-center justify-center  md:justify-start lg:justify-center gap-2">
                            <div className="w-10 h-10 relative rounded-full border-1 border-primaryColor overflow-hidden">
                            <img src={logo} alt="Brand logo" className='' />
                            </div>
                            <h1 className="text-2xl font-semibold font-heading uppercase text-primaryColor">Balaji</h1>
                        </a>
                        <p className="text-primaryColor lg:mx-2 font-primary text-center md:text-start lg:text-center">"Crafted with passion. Growing with every line of code."</p>
                    </div>

                    <div className="font-primary space-y-2">
                        <h4 className="text-xl md:pl-1.5 md:text-start text-center text-designColor font-semibold">Follow us</h4>
                        <div className="flex gap-3">
                            <a href="" ><span className='icon w-9 h-9 '><FaLinkedin/></span></a>  
                            <a href="" ><span className='icon w-9 h-9 '><FaEnvelope/></span></a>  
                            <a href="" ><span className='icon w-9 h-9 '><FaInstagram/></span></a>  
                        </div>
                    </div>

                    <div className="space-y-2 font-primary">
                        <h4 className="text-xl md:text-start text-center text-designColor font-semibold">Quick links</h4>
                        <ul className="flex flex-col ">
                            {navItems.map((item, index) => (
                                <li key={index} className='text-start'>
                                    <a className='hover:text-designColor text-primaryColor capitalize py-3 transition-all duration-300' href={item.href}>{item.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-2 font-primary">
                        <h4 className="text-xl text-designColor  md:text-start text-center font-semibold">Support</h4>
                        <ul className="text-primaryColor capitalize text-start">
                            <li className=""><a href="" className='hover:text-designColor  py-3 transition-all duration-300'>FAQ</a></li>
                            <li className=""><a href="" className='hover:text-designColor  py-3 transition-all duration-300'>Privacy Policy.</a></li>
                            <li className=""><a href="" className='hover:text-designColor  py-3 transition-all duration-300'>Terms of Serivce</a></li>
                        </ul>
                    </div>

                </div>

                <div className=" text-white text-center text-sm py-2 border-t-2 border-t-primaryColor">
                    &copy; 2025 Balaji. All rights reserved.
                </div>
            </section>
        </>
    )
}
export default Footer;