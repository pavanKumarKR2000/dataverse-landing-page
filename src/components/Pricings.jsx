import {IoCheckmarkCircle} from 'react-icons/io5'
const Pricings = () => {
  return (
      <section className="bg-white">
          <div className="max-w-[1500px] mx-auto px-4 ms:px-12 py-16 2xl:py-32 grid md:grid-cols-3 gap-24">
               <div className="border border-gray-300 rounded-md flex flex-col items-center space-y-6 pb-6 shadow-md hover:scale-[101%]">
                    <img src="./single.png" alt="single" className="h-20 -mt-10 bg-white"/>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium">Single User</h2>
                    <p className="text-3xl md:text-4xl font-bold">$149</p>
                    <div className="flex flex-col text-md md:text-lg space-y-2 w-full px-4 md:pt-4 text-center">
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">500 GB storage</p>
                        </div>
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">1 granted user</p>
                        </div>
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">Send up to 2 GB</p>
                        </div>
                    </div>
                    <button className="bg-[#00df9a] px-4 py-2 rounded-md text-md sm:text-lg hover:bg-[#53f5c2]">Start Trial</button>
               </div>
               <div className="border border-gray-300 rounded-md flex flex-col items-center space-y-6 pb-6 shadow-md hover:scale-[101%]">
                    <img src="./double.png" alt="single" className="h-20 -mt-10 bg-white"/>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium">Partnership</h2>
                    <p className="text-3xl md:text-4xl font-bold">$199</p>
                    <div className="flex flex-col text-md md:text-lg space-y-2 w-full px-4 pt-4 text-center">
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">1 TB storage</p>
                        </div>
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">3 users allowed</p>
                        </div>
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">Send up to 10 GB</p>
                        </div>
                    </div>
                    <button className="bg-[#00df9a] px-4 py-2 rounded-md text-md sm:text-lg hover:bg-[#53f5c2]">Start Trial</button>
               </div>
               <div className="border border-gray-300 rounded-md flex flex-col items-center space-y-6 pb-6 shadow-md hover:scale-[101%]">
                    <img src="./triple.png" alt="single" className="h-20 -mt-10 bg-white"/>
                    <h2 className="text-lg sm:text-xl md:text-2xl font-medium">Group Account</h2>
                    <p className="text-3xl md:text-4xl font-bold">$299</p>
                    <div className="flex flex-col text-md md:text-lg space-y-2 w-full px-4 pt-4 text-center">
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">5 TB storage</p>
                        </div>
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">10 users allowed</p>
                        </div>
                        <div className='flex justify-center items-center space-x-2'> 
                            <IoCheckmarkCircle size={20} className="text-green-400"/>
                            <p className="">Send up to 20 GB</p>
                        </div>
                    </div>
                    <button className="bg-[#00df9a] px-4 py-2 rounded-md text-md sm:text-lg hover:bg-[#53f5c2]">Start Trial</button>
               </div>
          </div>
     </section>
  )
}

export default Pricings;