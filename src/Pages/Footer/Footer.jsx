import React from "react";
import instraIcon from "../../assets/instagram.png";
import facebookIcon from "../../assets/facebook.png";
import twitterIcon from "../../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#244D3F] text-white mt-16 container mx-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        
        
        <div className="text-center">
          
        
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
            KeenKeeper
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-200 ">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
          </p>

        
          <div className="mt-6">
            <p className="text-xs sm:text-sm mb-3">Social Links</p>

            <div className="flex justify-center gap-3 sm:gap-4">
              
              <a className="flex items-center justify-center bg-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition">
                <img
                  src={instraIcon}
                  alt="Instagram"
                  className="h-4 sm:h-5 w-4 sm:w-5 object-contain"
                />
              </a>

              <a className="flex items-center justify-center bg-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="h-4 sm:h-5 w-4 sm:w-5 object-contain"
                />
              </a>

              <a className="flex items-center justify-center bg-white p-2 sm:p-3 rounded-full shadow-md hover:scale-110 transition">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="h-4 sm:h-5 w-4 sm:w-5 object-contain"
                />
              </a>

            </div>
          </div>
        </div>

       
        <div className="mt-10 border-t border-white/30 pt-4 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-gray-200">
          
          <p className="text-center md:text-left">
            © 2026 KeenKeeper. All rights reserved.
          </p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <a className="hover:underline cursor-pointer">Privacy Policy</a>
            <a className="hover:underline cursor-pointer">Terms of Service</a>
            <a className="hover:underline cursor-pointer">Cookies</a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;