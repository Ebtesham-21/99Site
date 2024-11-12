"use client";
import React, { useEffect, useState } from 'react';
import '@google/model-viewer';

const PortfolioSection = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrollPosition(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className=" bg-[url('/Astronomy-bg.jpg')] bg-cover bg-center bg-no-repeat  mx-auto xl:px-20 md:px-10 sm:px-2 px-4 ">
             <section className="relative  text-white py-16 px-4 overflow-hidden">
      {/* Rocket Animation */}
      <div
        className="absolute right-0 transform transition-transform duration-300"
        style={{ top: `${scrollPosition * 0.5}px` }}
      >
        <img
          src="/rocket.png" // Replace with the path to your rocket image
          alt="Rocket"
          className="w-16"
        />
      </div>

      {/* 3D Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-8">3D</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Fixed 3D Items */}
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <model-viewer
        src="/3dModel.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'300px'}}
        >

        </model-viewer>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-auto">
              Details
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <model-viewer
        src="/3dModel.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'300px'}}
        >

        </model-viewer>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-auto">
              Details
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <model-viewer
        src="/3dModel.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'300px'}}
        >

        </model-viewer>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-auto">
              Details
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <model-viewer
        src="/3dModel.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'300px'}}
        >

        </model-viewer>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-auto">
              Details
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <model-viewer
        src="/3dModel.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'300px'}}
        >

        </model-viewer>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-auto">
              Details
            </button>
          </div>
          <div className="bg-gray-800 rounded-lg shadow-lg p-4 flex flex-col items-center">
          <model-viewer
        src="/3dModel.glb"
        alt="3D Model"
        auto-rotate
        camera-controls
        style={{width: '100%', height:'300px'}}
        >

        </model-viewer>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-auto">
              Details
            </button>
          </div>
        </div>
        <button className="mt-8 bg-blue-500 text-white py-2 px-6 rounded-lg">
          See More
        </button>
      </div>

      {/* 3D Animation Section */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-8">3D Animation</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {/* Fixed 3D Animation Items */}
          <div className=" rounded-lg   flex justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vxiAzUMl71w?si=siEuAWaS1aziGqiX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className=" rounded-lg   flex justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vxiAzUMl71w?si=siEuAWaS1aziGqiX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className=" rounded-lg   flex justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vxiAzUMl71w?si=siEuAWaS1aziGqiX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
          <div className=" rounded-lg   flex justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vxiAzUMl71w?si=siEuAWaS1aziGqiX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
         
          
        </div>
        <button className="mt-8 bg-blue-500 text-white py-2 px-6 rounded-lg">
          See More
        </button>
      </div>
    </section>
        </div>
   
  );
};

export default PortfolioSection;
