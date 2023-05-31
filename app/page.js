import React from 'react'
import NavBar from './components/NavBar'
import {SiOpenai} from 'react-icons/si'


const Page = () => {
  return (
    <>
    <NavBar />
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
    <img src="https://static.portaldaindustria.com.br/portaldaindustria/noticias/media/16_9/frcphotocreditadrianagroisman.jpg" className="max-w-prose rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">FRC Scouting like never before.</h1>
      <p className="py-6">Revolutionizing scouting through a friendly interface and the use 
                          of artificial intelligence. Our vision is to optimize data collection and analysis, 
                          providing a strategic advantage. With an intuitive interface, teams will be able to input 
                          and access relevant information, while artificial intelligence will analyze data in real 
                          time to identify hidden patterns and trends. </p>
                          <div className="flex items-center">
        <span className="text-3xl text-green-500"><SiOpenai/></span>
            <p className="ml-2 text-3xl">Powered with Open<span className="text-green-500">AI</span></p>
        </div>

      
    </div>
  </div>
</div>

</>
    
    
  )
}

export default Page