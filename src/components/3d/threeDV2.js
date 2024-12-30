"use client";
import React, {useState} from 'react';


const threeDV2 = () => {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");

  const videos = [
    {title:"siblings", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8" },
    {title:"Eid", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8" },
    {title:"Award", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8" },
    {title:" Independence Day", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8" },
  ];

  const openModal = (videoUrl) => {
    setActiveVideo(videoUrl);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setActiveVideo("");
    setIsModalOpen(false);
  }



  return (
    <div className='bg-gray-100'>
        <div className='flex items-center justify-center '>
            <div className='flex flex-col md:flex-row items-center md:items-center gap-6 w-4/5   '>
                <div className='flex-1 bg-white p-6'>
                    <h1 className='text-3xl font-bold text-gray-800 mb-4'>
                    Portfolio 
                    </h1>
                    <p className='text-gray-600'>
                         We have worked on award-winning animations for some of the most prestigious animation studios in the global industry. Some of our shows have even received Daytime Emmy Award Nominations! Check out some of our best work and our latest projects below.
                    </p>
                </div>
                <div className='flex-1'>
                    <img
                    src="./portfolio-page-banner-image.png"
                    alt="portfolio-page-banner-image"
                   
                    className="w-full h-full "
                    />

                </div>
            </div>
        </div>
        <div className='flex mt-20  items-center justify-center bg-white-100 '>
            <div
            className='bg-white p-6 rounded-lg w-4/5'>
            <div className='flex justify-between'>
                <button className='px-4 py-2 text-black font-semibold rounded-md'>
                    All
                </button>
                <button className='px-4 py-2 text-black font-semibold rounded-md'>
                    2D
                </button>
                <button className='px-4 py-2 text-black font-semibold rounded-md'>
                   3D
                </button>
                <button className='px-4 py-2 text-black font-semibold rounded-md'>
                    Explainer Video
                </button>
                <button className='px-4 py-2 text-black font-semibold rounded-md'>
                   
                </button>
                <button className='px-4 py-2 text-black font-semibold rounded-md'>
                   
                </button>
            </div>


            </div>
        </div>

        <div className='flex items-center justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-6'>
                {videos.map((video, index) => {
                    <div key={index} className='flex flex-col items-center'>
                        {/* { Video thumbnail and play button } */}
                        <div 
                        className='relative group w-64 h-40 bg-cover bg-center rounded-lg overflow-hidden cursor-pointer'
                        style={{backgroundImage: `url(${video.thumbnail})`}}
                        onClick={() => openModal(video.videoUrl)}
                        >

                        
                        </div>
                    </div>
                })}
            </div>


        </div>

       
            
    </div>
  )
}

export default threeDV2