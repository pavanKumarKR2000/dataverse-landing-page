import React from 'react'

const NewsLetter = () => {
  return (
      <section>
          <div className='max-w-[1500px] mx-auto px-4 py-8 text-white grid md:grid-cols-3 items-center gap-4'>
              <div className='md:col-span-2 text-center space-y-2 md:space-y-0'>
                  <h1 className='text-xl sm:text-3xl md:text-4xl'>Want tips and tricks to optimise your flow?</h1> 
                  <p className='text-md sm:text-lg md:text-xl'>Signup to our newsletter and stay up to date</p>
              </div>
              <div>
                  <form className='flex flex-col items-center space-y-4'>
                        <input type="text" placeholder='email@email.com' className='w-full sm:w-[60%] md:w-full p-2 rounded-md text-md text-center placeholder:text-center'/>
                        <button className='bg-[#00df9a]  px-4 py-2 rounded-md text-md sm:text-lg hover:bg-[#53f5c2] w-full'>Notify Me</button>
                  </form>
                  
              </div>
          </div>
      </section>
  )
}

export default NewsLetter;