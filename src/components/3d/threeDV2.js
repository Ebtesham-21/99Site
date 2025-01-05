"use client";
import React, {useState} from 'react';


const threeDV2 = () => {
  const[isModalOpen, setIsModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState("");
  const [filter, setFilter] = useState("All");

  const videos = [
    {title:"siblings", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8", category: "2D" },
    {title:"Eid", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8", category: "2D" },
    {title:"Award", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8", category: "2D" },
    {title:" Independence Day", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8", category: "2D" },
    {title:"siblings2", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8", category: "3D" },
    {title:"Eid2", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8", category: "3D" },
    {title:"Award2", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8", category: "3D" },
    {title:" Independence Day2", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8", category: "3D" },
    {title:"siblings3", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8",category: "Explainer Video" },
    {title:"Eid3", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8" ,category: "Explainer Video"},
    {title:"Award3", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8",category: "Explainer Video" },
    {title:" Independence Day3", thumbnail:"/thumb.jpg", videoUrl:"https://www.youtube.com/embed/vxiAzUMl71w?si=PGAA6XEZkoIIFUb8",category: "Explainer Video" },
  ];

  const openModal = (videoUrl) => {
    setActiveVideo(`${videoUrl}?autoplay=1`);
    setIsModalOpen(true);
  };


  const closeModal = () => {
    setActiveVideo("");
    setIsModalOpen(false);
  }

  const filteredVideos = filter === "All" ? videos: videos.filter(video => video.category === filter);



  return (
    <div className="bg-[url('/2b.png')] bg-cover bg-fixed bg-center bg-no-repeat">
        <div className='flex items-center justify-center '>
            <div className='flex flex-col md:flex-row items-center gap-6 w-full md:w-4/5 p-6 md:p-10'>
                <div className='flex-1  p-6 rounded-lg' style={{ backgroundColor: '#564ab1' }}>
                    <h1 className='text-4xl md:text-6xl font-extrabold text-[#FED701] mb-4 text-center md:text-left'>
                    PORTFOLIO
                    </h1>
                    <p className='text-white text-lg md:text-3xl text-center md:text-left'>
                         We have worked on award-winning animations for some of the most prestigious animation studios in the global industry. Some of our shows have even received Daytime Emmy Award Nominations! Check out some of our best work and our latest projects below.
                    </p>
                </div>
                <div className='flex-1'>
                    <img
                    src="./ful_family-removebg-preview.png"
                    alt="portfolio-page-banner-image"
                   
                    className="w-full h-auto sm:max-w-sm md:max-w-full mx-auto"
                    />

                </div>
            </div>
        </div>
        <div className='flex mt-2  items-center justify-center  '>
            <div
            className=" p-6 rounded-lg w-4/5' bg-[#564ab1] ">
            <div className='flex flex-wrap justify-center gap-6 md:gap-10 lg:gap-40'>
                <button onClick={() => setFilter("All")} className='px-4 py-2 text-white font-semibold rounded-md border border-white hover:bg-white hover:text-black transition duration-300' >
                    All
                </button>
                <button onClick={() => setFilter("2D")} className='px-4 py-2 text-white font-semibold rounded-md border border-white hover:bg-white hover:text-black transition duration-300' >
                    2D
                </button>
                <button onClick={() => setFilter("3D")}  className='px-4 py-2 text-white font-semibold rounded-md border border-white hover:bg-white hover:text-black transition duration-300' >
                   3D
                </button>
                <button onClick={() => setFilter("Explainer Video")} className='px-4 py-2 text-white font-semibold rounded-md border border-white hover:bg-white hover:text-black transition duration-300' >
                    Explainer Video
                </button>
                <button className='px-4 py-2 text-black font-semibold rounded-md'>
                   
                </button>
               
            </div>


            </div>
        </div>

        <div className='flex mt-20 items-center justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-6'>
                {filteredVideos.map((video, index) => (
                    <div key={index} className='flex flex-col items-center'>
                        {/* { Video thumbnail and play button } */}
                        <div 
                        className='relative group w-64 h-80 bg-cover bg-center rounded-lg overflow-hidden cursor-pointer'
                        style={{backgroundImage: `url(${video.thumbnail})`}}
                        onClick={() => openModal(video.videoUrl)}
                        >
                            <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group:hover:opacity-100 transition'>
                                <button className='w-12 h-12 bg-white rounded-full flex items-center justify-center '>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-red-500"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-4.586 2.61A1 1 0 019 12.61V8.39a1 1 0 011.166-.97l4.586 2.61a1 1 0 010 1.737z" />
                                </svg>
                                </button>
                            </div>
                          


                        
                        </div>
                    <p className='m-4  p-4 text-white font-semibold rounded-md border border-white hover:bg-white hover:text-[#FED701] transition duration-300' style={{ backgroundColor: '#564ab1' }}>{video.title}</p>
                    </div>

                ))}
            </div>
            {/* {Modal} */}
            {isModalOpen && (
                <div className='fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50'>
                    <div className='bg-white rounded-lg overflow-hidden shadow-lg w-11/12 md:w=2/3 lg:w-1/2'>
                        <div className='relative pb-[56.25%]'>
                        <iframe
                            src={activeVideo}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full"
                        ></iframe>  
                        </div>
                        <button 
                        onClick={closeModal}
                        className='absolute top-4 right-4 bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center'>
                        &times;
                        </button>

                    </div>
                </div>
            )}


        </div>

       
            
    </div>
  )
}

export default threeDV2