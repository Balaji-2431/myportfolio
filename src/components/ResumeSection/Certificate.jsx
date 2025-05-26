import React from 'react'
import CertificateCard from './CertificateCard'
import ScrollFade from '../Animation/ScrollFade'

const Certificate = () => {

  const data=[
    {
      id:24,
      certificateImage:"public/images/certificates/cssBasic.webp",
      certificateHeading:"CSS Basic",
      certificateCompany:"HackerRank",
      certificateDescription: "Certificated for understanding core CSS concepts like selectors, layout, and styling fundamentals.",
      certificateLink:"",
    },
    {
      id:25,
      certificateImage:"public/images/certificates/webDeveloper.webp",
      certificateHeading:"Web Developer",
      certificateCompany:"Eduonix",
      certificateDescription: "Completed a comprehensive  course covering HTML, CSS, JavaScript, and essential web development skills through hands-on projects.",
      certificateLink:"www.eduonix.com/certificate/35e059cf11",
    },
  ]

  return (
    <>
      <div className="flex flex-wrap flex-col md:flex-row justify-center gap-8 m-8 items-center">
      {
          data.map((certificate)=>(
            <ScrollFade direction={"right"} key={certificate.id}>
               <CertificateCard 
                  certificateImage={certificate.certificateImage}
                  certificateHeading={certificate.certificateHeading}
                  certificateCompany={certificate.certificateCompany}
                  certificateDescription={certificate.certificateDescription}
                  certificateLink={certificate.certificateLink}/>
            </ScrollFade>
          ))
        }
      </div>
    </>
  )
}

export default Certificate