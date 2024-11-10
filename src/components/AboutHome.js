// components/AboutSection.js
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className="bg-black text-white py-16 px-6 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Column */}
      <div className="lg:w-1/2 text-center lg:text-left space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          ABOUT <span className="text-red-500">99</span> EXPLAINERS
        </h2>
        <p className="text-gray-300 max-w-md mx-auto lg:mx-0">
          99 EXPLAINER is one of the successful growing companies that has been
          creating explainer videos in reasonable price promoting your businesses,
          campaigns, and more.
        </p>
        <button className="bg-white text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-200">
          LEARN MORE
        </button>
      </div>

      {/* Right Column */}
      <div className="lg:w-1/2 flex flex-col items-center lg:items-end mt-8 lg:mt-0 space-y-4">
        <button className="bg-red-500 text-white font-semibold py-3 px-6 lg:px-12 rounded-full flex items-center shadow-lg hover:bg-red-600">
          <span>WATCH OUR WORKS ON YOUTUBE</span>
          <svg className="w-6 h-6 ml-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.615 3.184c1.33.12 2.562.888 3.278 2.003.736 1.141.96 2.627 1.107 4.009.171 1.659.171 3.33 0 4.988-.147 1.382-.371 2.869-1.107 4.01-.715 1.115-1.947 1.883-3.278 2.003C16.877 21 12 21 12 21s-4.877 0-7.615-.184c-1.33-.12-2.563-.888-3.278-2.003-.736-1.141-.96-2.628-1.107-4.01-.171-1.658-.171-3.329 0-4.988.147-1.382.371-2.869 1.107-4.01.715-1.115 1.948-1.883 3.278-2.003C7.123 3 12 3 12 3s4.877 0 7.615.184zM10 15.542V8.458L15.55 12 10 15.542z" />
          </svg>
        </button>

        <div className="relative w-[150px] h-[300px] lg:w-[200px] lg:h-[400px]">
          <Image
            src="/path-to-character-image.png" // Replace with the actual path to the image
            alt="Character"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
