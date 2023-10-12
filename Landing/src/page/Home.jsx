import React from 'react'
import '../index.css'
import HeroLogo from '../assets/HeroLogo.png'

const Home = () => {
  return (
    <main>

        {/* Hero Section, may change to just an image class */}
        <section id="hero" className="flex w-screen h-screen sm:max-h-[640px] max-h-[400px] justify-center items-center bg-[url('./src/assets/HeroArt.jpg')] bg-center bg-cover">
        </section>

        {/* Make this into infinite scrolling component */}
        <section id="img-carousel" className="w-screen h-[150px] bg-transparent -translate-y-8 z-10">
            <div className="flex flex-row absolute bg-green-500 w-[200%] -translate-x-4 h-auto py-12 -rotate-3">

            </div>
        </section>

        {/* Footbrawl area, transparent with our logo splash art as the main bg*/}
        <section id="footbrawl" className="flex absolute flex-col w-screen h-fit justify-start items-center -mt-24 gap-y-4 px-4">
            <div id="footbrawl-header" className="flex flex-col items-center justify-center">
                <img id="x" src="./src/assets/X.png" className="w-48 h-48" />
                <div>
                    <h2 className="font-black sm:text-[64px] text-3xl bg-gradient-to-b from-[#E01377] to-[#AF0F5C] bg-clip-text text-transparent uppercase drop-shadow-md">Join the footbrawl!</h2>
                </div>
            </div>
            <div id="trailer-video" className="flex justify-center items-center max-w-[375px]">
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/C7H4MzV_ZbY?si=Z6vxf2f_p0qN-EqA" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" 
                    allowfullscreen 
                    className="rounded-lg"
                />
            </div>
            <div id="download-links" className="flex flex-wrap justify-center items-center w-full h-auto py-2">
                <a href=""><img src="./src/assets/applebutton.png" className=""/></a>
                <a href=""><img src="./src/assets/googlebutton.png" className=""/></a>
                <a href=""><img src="./src/assets/nintendobutton.png" className=""/></a>
                <a href=""><img src="./src/assets/playstationbutton.png" className=""/></a>
                <a href=""><img src="./src/assets/steambutton.png" className=""/></a>
                <a href=""><img src="./src/assets/xboxbutton.png" className=""/></a>
            </div>
        </section>
    </main>
  )
}

export default Home