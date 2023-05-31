import React from 'react'
import NavBar from './components/NavBar'
import {SiOpenai} from 'react-icons/si'


const Page = () => {
  return (
    <>
    <NavBar />
    <div className="hero bg-base-100" style={{ height: "calc(90vh - 20rem)" }}>
  <div className="hero-content flex-col lg:flex-row bg-base-100">
    <img
      src="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/16_9/frcphotocreditadrianagroisman.jpg"
      className="max-w-prose rounded-lg shadow-2xl"
    />
    <div className="mt-4 lg:mt-0 lg:ml-8 bg-base-100">
      <h1 className="text-5xl font-bold">FRC Scouting like never before.</h1>
      <p className="py-6">
        Revolutionizing scouting through a friendly interface and the use of artificial intelligence. Our vision is to
        optimize data collection and analysis, providing a strategic advantage. With an intuitive interface, teams will
        be able to input and access relevant information, while artificial intelligence will analyze data in real time to
        identify hidden patterns and trends.
      </p>
      <div className="flex items-center">
        <span className="text-3xl text-green-500"><SiOpenai/></span>
        <p className="ml-2 text-3xl">Powered with Open<span className="text-green-500">AI</span></p>
      </div>
    </div>
  </div>
</div>

<h1 className="text-7xl text-white text-center font-bold italic bg-base-100 py-40">
  "Me in terra, <span className="text-sky-500">Helios </span> in caelo"
</h1>




      <div className="hero min-h-screen" style={{ backgroundImage: `url("https://d2pn8kiwq2w21t.cloudfront.net/original_images/1-FIRST_field_blur.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white">Made for the most beginners and for the most experts teams.</h1>
            <p className="mb-5">Our objective is to standardize the use of a single scouting tool to have an ease during the Regionals, Districts, Off-season events and the Championship.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

            
</>
    
    
  )
}

export default Page