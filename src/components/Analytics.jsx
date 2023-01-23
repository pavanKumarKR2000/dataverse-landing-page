
const Analytics = () => {
  return (
      <section className="bg-white ">
          <div className="min-h-screen max-w-[1500px] mx-auto px-4 py-8 grid md:grid-cols-2 justify-items-center items-center text-center ">
              <img src="./analytics.png" alt="analytics" className="banner w-[100%] sm:w-[80%]" />
              <div className="flex flex-col justify-center items-center space-y-4">
                  <p className="text-[#00df9a] uppercase text-md  sm:text-lg font-medium">data analytics dashboard</p>
                  <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase">manage data analytics centrally</h1>
                  <p className="text-md sm:text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nesciunt omnis, atque ut
                      architecto corporis culpa provident doloremque aliquid assumenda?
                  </p>
                  <button className="bg-[#00df9a] px-4 py-2 rounded-md text-md sm:text-lg hover:bg-[#53f5c2] w-max">Get Started</button>
              </div>
          </div> 
     </section>
  )
}

export default Analytics;