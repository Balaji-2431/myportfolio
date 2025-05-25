import React from 'react'
import { infromationDetails } from '../../data/data'


const Information = () => {
  return (
    <>
        <div className="lg:w-[85%] xs:w-[90%] w-[95%] mx-auto py-5 px-5 xs:px-8 mt-10 relative rounded-xl shadow-normal bg-cardBgColor hover:bg-cardBghoverColor hover:shadow-glow">
            <h4 className="text-2xl border-b left-4 border-b-designColor -top-4 text-designColor bg-bodyBgColor px-3 absolute font-heading">Info</h4>
            <ul className="space-y-4 mt-5 lg:mx-20 ">
                {
                    Object.entries(infromationDetails).map(([key,value])=>(
                        <li className="font-primary flex flex-row text-[14px] xs:text-base xs:flex-row md:gap-5 gap-0 items-start pb-1" key={key}>
                            <span className="font-bold flex-2/5 uppercase text-white ">{key}</span>
                            {key==="email"?<span className=" font-semibold flex-3/5 text-primaryColor">{": "+value}</span>
                            :key==="location"?<pre className=' font-semibold flex-3/5  text-primaryColor whitespace-pre-wrap font-primary'>{":"+value}</pre>
                            :<span className=" font-semibold flex-3/5 capitalize  text-primaryColor">{": "+value}</span>}
                        
                        </li>
                    ))
                }

            </ul>
        </div>
    </>
  )
}

export default Information