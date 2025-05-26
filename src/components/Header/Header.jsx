import { useState } from 'react';
import {FiMenu,FiX} from 'react-icons/fi'
import { navItems } from '../../data/data.js';
import logo from '../../assets/logoImage.webp'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="h-[74px] fixed top-0 z-50 w-full bg-bodyBgColor border-b-2 border-b-primaryColor ">
      <nav aria-label="Main navigation"className="p-3 pl-6 md:pl-0 w-screen filter backdrop-blur-xl flex items-center md:justify-between">
        <button aria-label="Open menu" className="cursor-pointer md:hidden fixed text-2xl left-4 text-primaryColor"
          onClick={() => setMenuOpen(true)}><FiMenu/></button>

        <a href="#home" className="flex items-center gap-2 ml-6 md:ml-3 lg:ml-8">
          <div className="w-12 h-12 relative rounded-full border-1 border-primaryColor overflow-hidden">
            <img src={logo} alt="Brand logo" className='' />
          </div>
          <h1 className="text-3xl uppercase text-primaryColor font-semibold font-heading">Balaji</h1>
        </a>

        <ul className="hidden lg:mr-10 md:mr-5 md:flex md:gap-8 lg:gap-12 font-primary">
          {navItems.map((item, index) => (
            <li className='text-primaryColor tracking-wide uppercase font-semibold hover:text-designColor duration-500' key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile Sidebar Menu */}
      <aside className={`fixed top-0 left-0 h-screen max-w-96 w-full filter backdrop-blur-2xl bg-cardBghoverColor text-primaryColor transform transition-transform duration-500 
      ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-hidden={!menuOpen}>

        <div className="flex justify-between items-center p-5">
          <a href="#home" className="flex items-center gap-2">
            <div className="w-12 h-12 relative rounded-full border-1 border-primaryColor overflow-hidden">
              <img src={logo} alt="Brand logo" className= '' />
            </div>
            <h1 className="text-2xl font-semibold font-heading uppercase">Balaji</h1>
          </a>
          <button aria-label="Close menu"
            className="text-3xl pt-2 hover:text-designColor cursor-pointer transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          ><FiX/></button>
        </div>

        <ul className="flex flex-col font-primary items-center mt-3">
          {navItems.map((item, index) => (
            <li key={index} className='w-full text-center' onClick={()=>setMenuOpen(false)}>
              <a className='hover:text-designColor uppercase font-semibold p-3 w-full inline-block hover:bg-primaryColor transition-all duration-300' href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
};

export default Header;
