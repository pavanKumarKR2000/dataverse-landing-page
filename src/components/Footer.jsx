import React from 'react'
import { IoLogoInstagram, IoLogoLinkedin, IoLogoFacebook ,IoLogoTwitter,IoLogoGithub} from 'react-icons/io5';

const Footer = () => {
  return (
      <footer>
          <div className='max-w-[1500px] mx-auto grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8 text-gray-300 p-4 py-8'>
              <div className='flex flex-col items-center space-y-9'>
                  <h1 className='text-3xl font-bold text-[#00df9a] uppercase leading-none'>dataverse</h1>    
                  <p className='text-center md:text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, deserunt.</p>
                  <div className='flex items-center space-x-8'>
                      <IoLogoLinkedin size={20} />
                      <IoLogoGithub size={20}/>
                      <IoLogoTwitter size={20}/>
                      <IoLogoFacebook size={20}/>
                      <IoLogoInstagram size={20}/>
                  </div>
              </div>
              <div className='space-y-3 text-center'>
                  <h6 className='text-lg md:text-xl font-medium text-gray-400'>Solutions</h6>
                  <ul className='space-y-3 md:text-lg'>
                    <li>Analytics</li>
                    <li>Marketing</li>
                    <li>Commerce</li>
                    <li>Insights</li>
                  </ul>
              </div>
              <div className='space-y-3 text-center'>
                  <h6 className='text-lg md:text-xl font-medium text-gray-400'>Support</h6>
                  <ul className='md:text-lg space-y-3'>
                    <li>Pricing</li>
                    <li>Documentation</li>
                    <li>Guides</li>
                    <li>API Status</li>
                  </ul>
              </div>
              <div className='space-y-3 text-center'>
                  <h6 className='text-lg md:text-xl font-medium text-gray-400'>Company</h6>
                  <ul className='md:text-lg space-y-3'>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Jobs</li>
                    <li>Press</li>
                  </ul>
              </div>
          </div>
      </footer>
  )
}

export default Footer;