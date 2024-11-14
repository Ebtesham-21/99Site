"use client";
import React from 'react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { animate, scroll, spring } from 'motion';
import { ReactLenis } from 'lenis/react';
import HorizontalScroll from '../HorizontalScroll';




const DigitalSingle = () => {


    return (
        
        <div className='bg-black text-white'>
         
            <section className="text-center py-12 bg-[url('/Cover_1.png')] h-64 bg-cover bg-center bg-no-repeat">
                <h2 className='text-lg text-gray-400'>Project Name</h2>
                <h1 className='text-4xl font-bold'>ABC PROJECT</h1>
                <p className='text-md text-gray-400'>Project No.1</p>
            </section>

            <section className='bg-gray-900 px-4 py-12 md:px-16 lg:px-32'>
                <h3 className='text-gray-400'>01 - ABC PROJECT</h3>
                <h2 className='text-3xl font-bold mb-4'>
                    PROJECT <span className='text=white'>GOAL</span>
                </h2>
                <p className='text-gray-300 max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                molestiae quas vel sint commodi repudiandae consequuntur voluptatum.
                </p>
                <div className='mt-8 '>
                    <img className='p-4 ' src='/Project_Img-1.png'/>
                </div>

            </section>
            <section className='bg-gray-900 px-4  py-12 md:px-16 lg:px-32'>
                <img className='p-4  ' src='/Screenshot_12.png'/>
                <h3 className='text-gray-400 py-4'>02 - ABC PROJECT</h3>
                <h2 className='text-3xl font-bold mb-4'>PROJECT <span className='text-white'>APPROACH</span></h2>
                <p className='text-gray-300 max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                 molestiae quas vel sint commodi repudiandae consequuntur voluptatum.
            </p>
                <a href="#" className='text-red-500 mt-4 inline-block'>READ MORE</a>
                   {/* slider place */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-8'>
                    <div className=' rounded-md bg-gray-800 h-48'></div>
                    <div className='rounded-md bg-gray-800 h-48'></div>
                    <div className='rounded-md bg-gray-800 h-48'></div>
                </div>

            </section>
            <section className='bg-gray-900 px-4 py-12 md:px-16 lg:px-32'>
                <h3 className='text-gray-400'>
                    03 - ABC PROJECT
                </h3>
                <h2 className='text-3xl font-bold mb-4'>
                    PROJECT <span className='text-white'>CONCLUSION</span>
                </h2>
                <p className='text-gray-300 max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                 molestiae quas vel sint commodi repudiandae consequuntur voluptatum.
                 </p>
                
            </section>
        
      

            <section className="bg-gray-900 px-4 py-12 md:px-16 lg:px-32 text-center">
  <h2 className="text-3xl font-bold">Get A Project In Mind?</h2>
  <form className="flex flex-col gap-4 items-center justify-center mt-6">
    <input type="text" placeholder="Enter Your Name" className="p-2 w-full md:w-1/3 bg-gray-800 text-white border border-gray-700 rounded" />
    <input type="email" placeholder="Enter Your Email" className="p-2 w-full md:w-1/3 bg-gray-800 text-white border border-gray-700 rounded" />
    <button className="p-2 w-full md:w-1/3 bg-white text-black rounded">Submit</button>
  </form>
</section>
    <section className='bg-gray-900 px-4 py-6 md:px-16 lg:px-32 flex justify-between text-sm'>
    <a href="#" className='text-red-500'>Previous Project</a>
    <a href="#" className='text-red-500'>Next Project</a>
    </section>
</div>
    );
};

export default DigitalSingle;