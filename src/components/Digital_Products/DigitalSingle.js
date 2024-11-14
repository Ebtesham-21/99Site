"use client";
import React from 'react';
import {
    TabDes,
    TabHeader,
    TabImage,
    TabImageContainer,
    TabItem,
    TabList,
    TabsProvider,

} from '../core/image-tabs';
const tabs = [{
    title:'How do UI components improve UX?',
    id:'improve',
    description:'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    ImageUrl:'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
},
{
    title:'How do UI components improve UX?',
    id:'improve',
    description:'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
},
{
    title:'How do UI components improve UX?',
    id:'improve',
    description:'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
},
{
    title:'How do UI components improve UX?',
    id:'improve',
    description:'UI components can improve UX by providing familiar, consistent interactions that make it easy for users to navigate and interact with an application.',
    imageUrl:'https://images.unsplash.com/photo-1709949908058-a08659bfa922?q=80&w=1200&auto=format',
},
];

const DigitalSingle = () => {


    return (
        
        <div className='bg-black text-white'>
         
            <section className='text-center py-12'>
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
                <div className='bg-gray-300 h-64 mt-8'></div>

            </section>
            <section className='bg-gray-900 px-4 py-12 md:px-16 lg:px-32'>
                <h3 className='text-gray-400'>02 - ABC PROJECT</h3>
                <h2 className='text-3xl font-bold mb-4'>PROJECT <span className='text-white'>APPROACH</span></h2>
                <p className='text-gray-300 max-w-2xl'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, 
                 molestiae quas vel sint commodi repudiandae consequuntur voluptatum.
            </p>
                <a href="#" className='text-red-500 mt-4 inline-block'>READ MORE</a>
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
            <div className='w-full h-full'>
            <TabsProvider defaultValue="01" className="md:grid md:grid-cols-12">
  <TabList className="md:col-span-5">
    <TabItem value={'01'}>
      <TabHeader value={'01'}>title01</TabHeader>
      <TabDes value={'01'}>description</TabDes>
    </TabItem>
    <TabItem value={'02'}>
      <TabHeader value={'02'}>title02</TabHeader>
      <TabDes value={'02'}>description</TabDes>
    </TabItem>
    <TabItem value={'03'}>
      <TabHeader value={'03'}>title03</TabHeader>
      <TabDes value={'03'}>description</TabDes>
    </TabItem>
  </TabList>
  <TabImageContainer className="md:col-span-7">
    <TabImage value={'01'}>
      <img src={''} alt={''} />
    </TabImage>
    <TabImage value={'02'}>
      <img src={''} alt={''} />
    </TabImage>
    <TabImage value={'03'}>
      <img src={''} alt={''} />
    </TabImage>
  </TabImageContainer>
</TabsProvider>;

            </div>

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