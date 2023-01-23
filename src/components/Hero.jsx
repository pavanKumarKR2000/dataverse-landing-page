import Typed from 'react-typed';

const Hero = () => {
  return (
    <section> 
        <div className="max-w-[1500px] mx-auto h-screen w-full flex flex-col justify-center items-center text-center text-white space-y-6 px-4 py-2">
          <p className="text-[#00df9a] uppercase text-md  sm:text-lg font-medium">growing with data analytics</p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase">grow with data</h1>
          <div className='flex justify-center items-center space-x-1 md:space-x-2'>
             <p className="text-lg sm:text-4xl md:text-5xl">Fast,flexible financing for</p> 
             <Typed
                    strings={['BTB','SAAS','BTC']}
                    typeSpeed={150}
                    backSpeed={150}
                    loop
                    className='text-xl sm:text-4xl md:text-5xl '          
                />
        </div>
        <p className='text-lg md:text-2xl text-gray-500'>Monitor your data analytics to increase revenue for BTB,BTC and SAAS platforms</p>
        <button className='bg-[#00df9a] px-4 py-2 rounded-md text-md sm:text-lg hover:bg-[#53f5c2]'>Get Started</button>
        </div>
    </section>
  )
}

export default Hero;