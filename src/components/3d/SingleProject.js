"use client";
import Image from 'next/image';
import { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram,  FaBehance, FaPlay } from 'react-icons/fa';
import '@google/model-viewer';
import { BsTwitterX } from "react-icons/bs";

export default function ProjectPage() {
  return (
    <div className="bg-black pt-4 text-white font-sans">
   

      {/* Main Image */}
      <section className="flex justify-center mt-6">
        <div className="bg-blue-500 w-full max-w-4xl h-96 rounded-lg flex items-center justify-center">
        <model-viewer
        src="/3dModel.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'300px'}}
        >

        </model-viewer>
        </div>
      </section>

      {/* Project Info */}
      <section className="px-6 mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h2 className="text-3xl font-bold">3D Project Name</h2>
          <p className="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Maxime
            mollitia, molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborum.
          </p>
        </div>
        <div className="text-gray-300 space-y-2">
          <p><span className="font-bold text-white">Client</span>: Client Name</p>
          <p><span className="font-bold text-white">Project Type</span>: Film/Game/Explainer</p>
          <p><span className="font-bold text-white">Date</span>: Client Name</p>
        </div>
      </section>

      {/* Description and Gallery */}
      <section className="px-6 mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div> <h3 className="text-2xl font-bold">Description</h3>
        <p className="mt-4 text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipiscing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum.
        </p></div>
       
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-blue-500 h-48 rounded-lg flex items-center justify-center">
          <model-viewer
        src="/robotSketch.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'300px'}}
        >

        </model-viewer>
          </div>
          <div className="bg-blue-500 h-48 rounded-lg flex items-center justify-center">
          <model-viewer
        src="/3dModel.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'200px'}}
        >

        </model-viewer>
          </div>
        
        </div>
      </section>
      <section className="px-6 mt-6 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-gray-700 h-48 rounded-lg flex items-center justify-center">
            <button className="text-4xl text-gray-400"><FaPlay size={24} /></button>
          </div>
          <div className="bg-gray-700 h-48 rounded-lg flex items-center justify-center">
            <button className="text-4xl text-gray-400"><FaPlay size={24} /></button>
          </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-10 mt-12 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold">Get A Project In Mind ?</h3>
        <div className="mt-4 flex flex-col md:flex-row gap-4 justify-center">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="bg-gray-800 px-4 py-2 rounded-lg text-white focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="bg-gray-800 px-4 py-2 rounded-lg text-white focus:outline-none"
          />
        </div>
        <button className="mt-4 px-6 py-2 bg-white text-black rounded-lg font-bold ">Submit</button>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-6 py-8 bg-[url('/bg-logo.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Logo and About Section */}
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center space-x-2 mb-4">
          <img src="logo.png" alt="Logo" className='my-20' />
          </div>
          <div className="text-center md:text-left">
        <h2 className="text-7xl font-extrabold">
            GET IN TOUCH<span className="text-red-500">@</span>
          </h2>
          <div className='flex justify-between'><p className="text-gray-300">Email: 99@explainer.com</p>
          <p className="text-gray-300">Phone: +00 000 0000</p></div>
          
        </div>
        </div>

        {/* Contact Information */}
      

        {/* Social Media Icons */}
        <div className="flex flex-col items-center md:items-end space-y-4">
        <div className="flex justify-end space-x-3 "><img src="/characters.png" /></div>
          <div className="flex justify-center space-x-4  md:mt-0">
           
           <a href="#" className="text-white hover:text-gray-400">
           <FaFacebookF size={24} />
         </a>
           <a href="#" className="text-white hover:text-gray-400">
           <FaInstagram size={24} />
         </a>
           <a href="#" className="text-white hover:text-gray-400">
           <FaLinkedinIn size={24} />
         </a>
           <a href="#" className="text-white hover:text-gray-400">
           <BsTwitterX size={24} />  
         </a>
           <a href="#" className="text-white hover:text-gray-400">
           <FaBehance size={24} />
         </a>
         </div>
        </div>
      </div>

      {/* Bottom Line and Copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2024 99 Explainers Studio. All rights reserved.
      </div>
    </footer>
     
     
    </div>
  );
}
