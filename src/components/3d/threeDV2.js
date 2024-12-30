import React from 'react';


const threeDV2 = () => {
  return (
    <div>
        <div className='min-h-screen flex items-center justify-center bg-gray-100'>
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
    </div>
  )
}

export default threeDV2