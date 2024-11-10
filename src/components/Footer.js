// components/Footer.js
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaBehance } from 'react-icons/fa';


export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white bg-[url('/bg-logo.png')] bg-cover bg-center bg-no-repeat py-10 px-6 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
     
        <div className="text-left lg:text-left">
        <img src="logo.png" alt="Logo" className='my-20' />
          <h2 className="text-7xl font-extrabold">
            GET IN TOUCH<span className="text-red-500">@</span>
          </h2>
          <div className="flex font-extrabold justify-between space-x-20 mt-2">
          <p className="text-lg ">99@EXPLAINER.COM</p>
          <p className="text-lg">+00 000 0000</p>
          </div>
          
         
        </div>

        {/* Character Images */}
        <div className="relative">

  <div>
    <div>
      <img src="/group-men-women-standing-different-poses-vector-illustration 1.png" />
 
      <div className="flex justify-center space-x-4 mt-24">
            <a href="#" className="text-white hover:text-gray-400">
              <FaFacebookF size={24} />
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <FaLinkedinIn size={24} />
            </a>
          
            <a href="#" className="text-white hover:text-gray-400">
              <FaBehance size={24} />
            </a>
          </div>
        </div>
    </div>


  </div>
</div>
       
</footer>
  );
}
