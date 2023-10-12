import React from 'react'
import '../index.css'
import HeroLogo from '../assets/HeroLogo.png'

const Home = () => {
  return (
    <main className="overflow-x-hidden">

        {/* Hero Section, may change to just an image class */}
        <section id="hero" className="flex w-screen h-screen sm:max-h-[640px] max-h-[400px] justify-center items-center bg-[url('./src/assets/HeroArt.jpg')] bg-center bg-cover">
        </section>

        {/* Make this into infinite scrolling component */}
        <section id="img-carousel" className="w-screen h-[150px] bg-transparent -translate-y-8 z-10">
            <div className="flex flex-row absolute bg-green-500 w-[200%] -translate-x-4 h-auto py-12 -rotate-3">

            </div>
        </section>

        {/* Footbrawl area, transparent with our logo splash art as the main bg*/}
        <section id="footbrawl" className="flex flex-col w-screen h-auto justify-start items-center -mt-28 gap-y-4 px-4">
            <div id="footbrawl-header" className="flex flex-col items-center justify-center">
                <img id="x" src="./src/assets/X.png" className="w-48 h-48" />
                <div>
                    <h2 className="font-black sm:text-[64px] text-3xl bg-gradient-to-b from-[#E01377] to-[#AF0F5C] bg-clip-text text-transparent uppercase drop-shadow-md pb-4">Join the footbrawl!</h2>
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
            <div id="download-links" className="flex flex-wrap justify-center items-center w-full h-auto py-2 pb-6">
                <a href=""><img src="./src/assets/applebutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/googlebutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/nintendobutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/playstationbutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/steambutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/xboxbutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
            </div>
        </section>
        
        {/* Character section, needs character changing component */}
        <img src="./src/assets/pagedivider.png" className="absolute left-0 -translate-y-8 w-screen h-fit rotate-180" />
        <section id="characters" className="w-full h-fit bg-[#FDF0EE] p-8">
            <div id="characters-wrapper" className="flex flex-col w-full h-auto justify-center sm:py-8">
                
                {/* Wrapper for top section of Character section */}
                <div id="top-wrapper" className="flex flex-wrap justify-center items-center">
                    <div id="characters-info" className="flex flex-col justify-center sm:items-start items-center w-[430px] h-[360px] gap-y-4 px-4">
                        <h1 className="font-bold text-black text-[48px] uppercase">Ai.Mi</h1>
                        <p className="font-medium text-[20px] text-zinc-700 italics">A glitch mage who excels at controlling
                            the field with precise attacks
                            from a distance.
                        </p>
                    </div>
                    <div id="character-image" className="w-[430px] h-[360px] p-2 overflow-hidden object-contain">
                        <img src="./src/assets/Aimi.png" className="" />
                    </div>
                </div>

                {/* Character Selection carousel */}
                <div className="flex flex-wrap w-full h-fit items-center justify-center gap-x-2 py-16">
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                    <div id="character" className="bg-slate-500 rounded-full w-12 h-12"></div>
                </div>
            </div>
        </section>
        <img id="second-divider" src="./src/assets/pagedivider.png" className="absolute left-0 -translate-y-[5px] w-screen h-[40px]" />
        {/* Add scalability for scrolling to see more skins */}
        <section id="skin-showcase" className="w-screen h-auto overflow-y-hidden overflow-x-hidden">
            <div id="skin-gradient" className="absolute w-full h-[400px]" />
            <div id="skins" className="flex items-center justify-center w-full h-[400px] bg-[#131313] gap-x-[5px]">
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/GamerJuliette.png" className="sm:scale-[5] scale-[10] translate-y-[200px] sm:-translate-x-[35px] -translate-x-[30px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/IdolAimi.png" className="sm:scale-[5] scale-[10] translate-y-[180px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/OrbEstelle.png" className="sm:scale-[5] scale-[6] translate-y-[175px] translate-x-[25px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/OrbLuna.png" className="sm:scale-[5] scale-[10] translate-y-[175px] translate-x-[10px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/PopKingKai.png" className="sm:scale-[5] scale-[10] translate-y-[215px] -translate-x-[45px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/RaindropEra.png" className="sm:scale-[5] scale-[8] translate-y-[155px] -translate-x-[55px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/SGaimi.png" className="sm:scale-[5] scale-[8] translate-y-[185px] -translate-x-[25px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/SARune.png" className="sm:scale-[5] scale-[8] translate-y-[175px] translate-x-[35px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/SWAtlas.png" className="sm:scale-[5] scale-[8] translate-y-[175px] -translate-x-[5px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/UWKai.png" className="sm:scale-[5] scale-[8] translate-y-[200px] -translate-x-[0px]" />
                </div>
            </div>
            <div id="skin-text" className="flex flex-col absolute justify-center items-center w-full h-fit -translate-y-[45px]">
                <h2 className="font-bold text-[48px] text-white">Skin Hook</h2>
                <p className="font-medium text-[20px] text-slate-500">Some description hook text.</p>
            </div>
        </section>
        <section id="bottom-part" className="w-screen h-[600px] bg-[#131313]">

        </section>
    </main>
  )
}

export default Home