import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaBehance } from 'react-icons/fa';

export default function Footer2() {
    return (
      <footer className="bg-gray-900 text-white bg-[url('/bg-logo.png')] bg-cover bg-center bg-no-repeat py-10  relative">
        <div className='grid  sm:grid-cols-12'>
            <div className='sm:col-span-7'>
            <div className="text-left lg:text-left px-20 sm:col-span-12 ">
            <img src="logo.png" alt="Logo" className='mx-4' />
            <h2 className="text-7xl font-extrabold mx-4">
            GET IN TOUCH<span className="text-red-500">@</span>
          </h2>
          <div className='sm:col-span-12'>
          <div className="flex font-extrabold justify-between mx-4 mt-2">
          <p className="text-lg ">99@EXPLAINER.COM</p>
          <p className="text-lg">+00 000 0000</p>
          </div>

          </div>
            
            </div>
            </div>
            <div className='sm:col-span-3 justify-end'>
            <div class="relative  ...">
              <div class="absolute inset-y-0 right-0  ..."><img className='justify-end' src="/group-men-women-standing-different-poses-vector-illustration 1.png" /></div>
            </div>
      
            </div>

        </div>



      </footer>

    );
}