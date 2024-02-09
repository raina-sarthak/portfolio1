"use client";
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

export default function Hero(){
    return(
        <div className="bg-warmGray-9000 min-h-full py-32 mx-28 mb-52">
          <div className="pt-12 ">
            <h1 className='text-6xl text-white'>Hi, i'm Sarthak Raina</h1>
            <p className="text-xl text-trueGray-200 subpixel-antialiased flex justify-left ">Frontend Developer | Backend Developer | UI/UX Designer </p>
            <div className='flex text-stone-400 '>
              <TypeAnimation
              sequence={[
                "just curing my curiosities through designs and prototypes." ,800 ,
                "", 
              ]}

              cursor={true}
              repeat={Infinity}
              style={{ fontSize: 'em', }}
            />
            </div>
              
            </div>
        </div>
    )
}