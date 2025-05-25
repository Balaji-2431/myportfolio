import React from 'react'
import ContactRightSide from './ContactRightSide'
import ContactForm from './ContactForm'
import ScrollFade from '../Animation/ScrollFade'
import SectionTitle from '../SectionTitle/SectionTitle'

const Contact = () => {
  return (
    <section id='contact' className='mb-2 pb-5 w-full'>

        <ScrollFade direction={"down"} >
          <SectionTitle design={"Let's"} normal={"Connect"}/>
        </ScrollFade>

        <div className="w-[95%] lg:w-[80%] mx-auto flex flex-col md:flex-row justify-center gap-5">
          <ContactRightSide/>      
          <ContactForm/>
        </div>
        
    </section>
  )
}

export default Contact