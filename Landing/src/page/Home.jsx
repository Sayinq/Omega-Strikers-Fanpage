import React from 'react'
import '../index.css'
import { Avatar } from '@nextui-org/react'
import ImageCarousel from '../components/ImageCarousel'

const Home = () => {
  return (
    <main className="overflow-x-hidden">
        {/* Hero Section, may change to just an image class */}
        <section id="hero" className="flex w-screen h-screen sm:max-h-[640px] max-h-[400px] justify-center items-center bg-[url('./src/assets/HeroArt.jpg')] bg-center bg-cover">
            <img src="./src/assets/HeroLogo.png" className="2xl:flex hidden h-auto max-w-[600px] translate-y-8" />
        </section>

        {/* Make this into infinite scrolling component */}
        <section id="img-carousel" className="w-screen h-[150px] bg-transparent 2xl:-translate-y-44 xl:-translate-y-16 lg:-translate-y-20 sm:-translate-y-20 -translate-y-12 z-10">
            <div className="flex absolute bg-white w-[200%] -translate-x-4 2xl:h-[200px] h-[175px] -rotate-3 overflow-hidden">
                <ImageCarousel />
            </div>
        </section>

        {/* Footbrawl area, transparent with our logo splash art as the main bg*/}
        <section id="footbrawl" className="flex flex-col w-screen h-auto justify-start items-center 2xl:-mt-32 xl:-mt-12 lg:-mt-16 sm:-mt-20 -mt-28 gap-y-4 px-4">
            <div id="footbrawl-header" className="flex flex-col items-center justify-center">
                <img id="x" src="./src/assets/characters/X.png" className="w-48 h-48" />
                <div>
                    <h2 className="font-black lg:text-[70px] md:text-[60px] sm:text-5xl text-3xl bg-gradient-to-b from-[#E01377] to-[#AF0F5C] bg-clip-text text-transparent uppercase drop-shadow-md pb-4">Join the footbrawl!</h2>
                </div>
            </div>
            <div id="trailer-video" className="flex justify-center items-center lg:max-w-[800px] lg:w-[800px] md:max-w-[650px] max-w-[375px]">
                <iframe 
                    id="video"
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
                    className="rounded-lg lg:min-w-[800px] lg:min-h-[400px]"
                />
            </div>
            <div id="download-links" className="flex flex-wrap justify-center items-center w-full h-auto py-2 lg:pb-16 pb-6">
                <a href=""><img src="./src/assets/applebutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/googlebutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/nintendobutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/playstationbutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/steambutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
                <a href=""><img src="./src/assets/xboxbutton.png" className="sm:max-w-[250px] max-w-[300px]"/></a>
            </div>
        </section>
        
        {/* Character section, needs character changing component */}
        <img src="./src/assets/pagedivider.png" className="absolute left-0 3xl:-translate-y-[55px] 2xl:-translate-y-[70px] xl:-translate-y-[90px] lg:-translate-y-[80px] sm:-translate-y-[48px] -translate-y-8 w-screen h-fit rotate-180" />
        <section id="characters" className="w-full h-fit bg-[#FDF0EE] 3xl:mt-24 2xl:mt-12 p-8">
            <div id="characters-wrapper" className="flex flex-col w-full h-auto justify-center items-center sm:py-8">
                
                {/* Wrapper for top section of Character section */}
                <div id="top-wrapper" className="flex flex-wrap justify-center items-center">
                    <div id="characters-info" className="flex flex-col justify-center lg:items-start items-center w-[430px] h-[360px] gap-y-4 px-4">
                        <h1 className="font-bold text-black sm:text-[60px] text-[48px] uppercase">Ai.Mi</h1>
                        <p className="font-medium text-[20px] text-zinc-700 italics">A glitch mage who excels at controlling
                            the field with precise attacks
                            from a distance.
                        </p>
                    </div>
                    <div id="character-image" className="w-[430px] h-[360px] p-2 overflow-hidden object-contain">
                        <img src="./src/assets/characters/Aimi.png" className="" />
                    </div>
                </div>

                {/* Character Selection carousel */}
                <div id="character-select" className="flex flex-wrap w-full max-w-[800px] h-fit items-center justify-center lg:gap-4 md:gap-5 gap-4 py-16">
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Aimi.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Asher.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Atlas.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Drekar.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Dubu.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Era.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Estelle.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Finii.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Juliette.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Juno.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Kai.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Kazan.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Luna.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Octavia.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Rasmus.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Rune.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Vyce.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/X.png" />
                    <Avatar isBordered id="character" className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer" src="./src/assets/characters/Zentaro.png" />
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
                    <img src="./src/assets/skins/OrbEstelle.png" className="sm:scale-[4] scale-[6] translate-y-[205px] translate-x-[25px]" />
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

                {/* Hidden until lg */}
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/GamerJuliette.png" className="sm:scale-[5] scale-[10] translate-y-[200px] sm:-translate-x-[35px] -translate-x-[30px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/IdolAimi.png" className="sm:scale-[5] scale-[10] translate-y-[180px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/OrbEstelle.png" className="sm:scale-[4] scale-[6] translate-y-[205px] translate-x-[25px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/OrbLuna.png" className="sm:scale-[5] scale-[10] translate-y-[175px] translate-x-[10px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/PopKingKai.png" className="sm:scale-[5] scale-[10] translate-y-[215px] -translate-x-[45px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/RaindropEra.png" className="sm:scale-[5] scale-[8] translate-y-[155px] -translate-x-[55px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/SGaimi.png" className="sm:scale-[5] scale-[8] translate-y-[185px] -translate-x-[25px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/SARune.png" className="sm:scale-[5] scale-[8] translate-y-[175px] translate-x-[35px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/SWAtlas.png" className="sm:scale-[5] scale-[8] translate-y-[175px] -translate-x-[5px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src="./src/assets/skins/UWKai.png" className="sm:scale-[5] scale-[8] translate-y-[200px] -translate-x-[0px]" />
                </div>
            </div>
            <div id="skin-text" className="flex flex-col absolute justify-center items-center w-full h-fit -translate-y-[45px]">
                <h2 className="font-bold lg:text-[68px] text-[48px] text-[#FDF0EE]">Keep it fresh</h2>
                <p className="font-medium text-[20px] text-slate-500">With plenty of Emotes, Titles, and Skins</p>
            </div>
        </section>
        <section id="customization" className="w-screen h-[600px] bg-[#131313] py-8">
            {/* Section to show off Emotes, Titles, and Nameplates  */}
        </section>
        <section id="maps">
            {/* Gif of Kill on Ai-Mi map */}

            {/* Gif of door hit on any map */}

            {/* Gif of water cannon on Inky map */}
        </section>
    </main>
  )
}

export default Home