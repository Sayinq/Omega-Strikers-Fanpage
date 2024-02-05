import React from 'react'
import '../index.css'
import { ImageCarousel }  from '../components/ImageCarousel';
import { CharacterInteractive } from '../components/CharacterInteractive';
import MapSection from '../components/MapSection';
import odyLogo from '../assets/OdyLogo.webp';
import heroLogo from '../assets/HeroLogo.webp';
import xImage from '../assets/characters/X.png';
import appleImage from '../assets/applebutton.png';
import googleImage from '../assets/googlebutton.png';
import nintendoImage from '../assets/nintendobutton.png';
import playstationImage from '../assets/playstationbutton.png';
import steamImage from '../assets/steambutton.png';
import xboxImage from '../assets/xboxbutton.png';
import pageDivider from '../assets/pagedivider.png';
import julietteSkin from '../assets/skins/GamerJuliette.png';
import aimiSkin from '../assets/skins/IdolAimi.png';
import estelleSkin from '../assets/skins/OrbEstelle.png';
import lunaSkin from '../assets/skins/OrbLuna.png';
import kaiSkin from '../assets/skins/PopKingKai.png';
import eraSkin from '../assets/skins/RaindropEra.png';
import aimiSG from '../assets/skins/SGAimi.png';
import runeSA from '../assets/skins/SARune.png';
import atlasSW from '../assets/skins/SWAtlas.png';
import kaiUW from '../assets/skins/UWKai.png';
import skinPack from '../assets/skins/SkinsPack.png'
import titleStack from '../assets/TitleStack.png';
import emotionStack from '../assets/EmoticonStack.png';
import explosionStack from '../assets/ExplosionStack.png';
import battlePass from '../assets/BattlePass.png';
import heroArt from '../assets/HeroArt.webp';

const Home = () => {
    const sectionStyle = {
        background: `url(${heroArt}) center/cover`,
    };

  return (
    <main className="overflow-x-hidden">
        {/* Hero Section, may change to just an image class */}
        <section id="hero" style={sectionStyle} className="flex w-screen h-screen sm:max-h-[640px] max-h-[400px] justify-center items-center">
            <img src={heroLogo} className="2xl:flex hidden h-auto max-w-[600px] translate-y-8" />
        </section>

        {/* Make this into infinite scrolling component */}
        <section id="img-carousel" className="w-screen h-[150px] bg-transparent 2xl:-translate-y-44 xl:-translate-y-16 lg:-translate-y-20 sm:-translate-y-20 -translate-y-12 z-10">
            <div className="flex absolute bg-gradient-to-r from-[#FFFFFF] to-[#AF0F5C] w-[200%] -translate-x-4 2xl:h-[300px] h-[175px] -rotate-3 overflow-hidden object-contain">
                <ImageCarousel />
            </div>
        </section>

        {/* Footbrawl area, transparent with our logo splash art as the main bg*/}
        <section id="footbrawl" className="flex flex-col w-screen h-auto justify-start items-center 2xl:-mt-32 xl:-mt-12 lg:-mt-16 sm:-mt-20 -mt-28 gap-y-4 px-4">
            <div id="footbrawl-header" className="flex flex-col items-center justify-center">
                <img id="x" src={xImage} className="2xl:w-96  -translate-x-[5px] 2xl:h-96 xl:w-64 xl:h-64 w-48 h-48 grayscale opacity-50" />
                <img id="x" src={xImage} className="absolute -translate-y-6 2xl:w-96 2xl:h-96 xl:w-64 xl:h-64 w-48 h-48" />
                <div>
                    <h2 id="footbrawl-text" className="font-black lg:text-[70px] md:text-[60px] sm:text-5xl text-3xl bg-gradient-to-b from-[#E01377] to-[#AF0F5C] bg-clip-text text-transparent uppercase drop-shadow-md pb-4">Join the footbrawl!</h2>
                </div>
            </div>
            <div id="trailer-video" className="flex justify-center items-center lg:max-w-[800px] lg:w-[800px] md:max-w-[650px] max-w-[375px]">
                <iframe 
                    id="video"
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/C7H4MzV_ZbY?si=Z6vxf2f_p0qN-EqA" 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share" 
                    allowFullScreen 
                    className="rounded-lg lg:min-w-[800px] lg:min-h-[400px]"
                />
            </div>
            <div id="download-links" className="flex flex-wrap justify-center items-center w-full h-auto py-2 lg:pb-16 pb-6">
                <a href=""><img src={appleImage} className="sm:max-w-[250px] max-w-[300px] hover:scale-110 transition-all duration-100 ease-in-out"/></a>
                <a href=""><img src={googleImage} className="sm:max-w-[250px] max-w-[300px] hover:scale-110 transition-all duration-100 ease-in-out"/></a>
                <a href=""><img src={nintendoImage} className="sm:max-w-[250px] max-w-[300px] hover:scale-110 transition-all duration-100 ease-in-out"/></a>
                <a href=""><img src={playstationImage} className="sm:max-w-[250px] max-w-[300px] hover:scale-110 transition-all duration-100 ease-in-out"/></a>
                <a href=""><img src={steamImage} className="sm:max-w-[250px] max-w-[300px] hover:scale-110 transition-all duration-100 ease-in-out"/></a>
                <a href=""><img src={xboxImage} className="sm:max-w-[250px] max-w-[300px] hover:scale-110 transition-all duration-100 ease-in-out"/></a>
            </div>
        </section>
        
        {/* Character section, needs character changing component */}
        <img src={pageDivider} className="absolute left-0 4xl:-translate-y-[100px] 3xl:-translate-y-[55px] 2xl:-translate-y-[70px] xl:-translate-y-[90px] lg:-translate-y-[80px] sm:-translate-y-[48px] -translate-y-8 w-screen h-fit rotate-180" />

        <CharacterInteractive />

        <img id="second-divider" src={pageDivider} className="absolute left-0 -translate-y-[5px] w-screen h-fit" />
        {/* Add scalability for scrolling to see more skins */}
        <section id="skin-showcase" className="2xl:mt-2 w-screen h-auto overflow-y-hidden overflow-x-hidden">
            <div id="skin-gradient" className="absolute w-full h-[400px]" />
            <div id="skins" className="flex items-center justify-center w-full h-[400px] bg-[#131313] gap-x-[5px]">
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={julietteSkin} className="sm:scale-[5] scale-[10] translate-y-[200px] sm:-translate-x-[35px] -translate-x-[30px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={aimiSkin} className="sm:scale-[5] scale-[10] translate-y-[180px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={estelleSkin} className="sm:scale-[4] scale-[6] translate-y-[205px] translate-x-[25px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={lunaSkin} className="sm:scale-[5] scale-[10] translate-y-[175px] translate-x-[10px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={kaiSkin} className="sm:scale-[5] scale-[10] translate-y-[215px] -translate-x-[45px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={eraSkin} className="sm:scale-[5] scale-[8] translate-y-[155px] -translate-x-[55px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={aimiSG} className="sm:scale-[5] scale-[8] translate-y-[185px] -translate-x-[25px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={runeSA} className="sm:scale-[5] scale-[8] translate-y-[175px] translate-x-[35px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={atlasSW} className="sm:scale-[5] scale-[8] translate-y-[175px] -translate-x-[5px]" />
                </div>
                <div id="skin" className="w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={kaiUW} className="sm:scale-[5] scale-[8] translate-y-[200px] -translate-x-[0px]" />
                </div>

                {/* Hidden until lg */}
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={julietteSkin} className="sm:scale-[5] scale-[10] translate-y-[200px] sm:-translate-x-[35px] -translate-x-[30px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={aimiSkin} className="sm:scale-[5] scale-[10] translate-y-[180px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={estelleSkin} className="sm:scale-[4] scale-[6] translate-y-[205px] translate-x-[25px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={lunaSkin} className="sm:scale-[5] scale-[10] translate-y-[175px] translate-x-[10px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={kaiSkin} className="sm:scale-[5] scale-[10] translate-y-[215px] -translate-x-[45px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={eraSkin} className="sm:scale-[5] scale-[8] translate-y-[155px] -translate-x-[55px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={aimiSG} className="sm:scale-[5] scale-[8] translate-y-[185px] -translate-x-[25px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={runeSA} className="sm:scale-[5] scale-[8] translate-y-[175px] translate-x-[35px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={atlasSW} className="sm:scale-[5] scale-[8] translate-y-[175px] -translate-x-[5px]" />
                </div>
                <div id="skin" className="lg:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={kaiUW} className="sm:scale-[5] scale-[8] translate-y-[200px] -translate-x-[0px]" />
                </div>
                {/* Hidden until 2440px */}
                <div id="skin" className="4xl:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={estelleSkin} className="sm:scale-[4] scale-[6] translate-y-[205px] translate-x-[25px]" />
                </div>
                <div id="skin" className="4xl:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={lunaSkin} className="sm:scale-[5] scale-[10] translate-y-[175px] translate-x-[10px]" />
                </div>
                <div id="skin" className="4xl:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={kaiSkin} className="sm:scale-[5] scale-[10] translate-y-[215px] -translate-x-[45px]" />
                </div>
                <div id="skin" className="4xl:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={eraSkin} className="sm:scale-[5] scale-[8] translate-y-[155px] -translate-x-[55px]" />
                </div>
                <div id="skin" className="4xl:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={aimiSG} className="sm:scale-[5] scale-[8] translate-y-[185px] -translate-x-[25px]" />
                </div>
                <div id="skin" className="4xl:inlinee hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={runeSA} className="sm:scale-[5] scale-[8] translate-y-[175px] translate-x-[35px]" />
                </div>
                <div id="skin" className="4xl:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={atlasSW} className="sm:scale-[5] scale-[8] translate-y-[175px] -translate-x-[5px]" />
                </div>
                <div id="skin" className="4xl:inline hidden w-[100px] h-[408px] rotate-3 bg-black overflow-hidden">
                    <img src={kaiUW} className="sm:scale-[5] scale-[8] translate-y-[200px] -translate-x-[0px]" />
                </div>
                
            </div>
            <div id="skin-text" className="flex flex-col absolute justify-center items-center w-full h-fit -translate-y-[45px] point-events-none select-none">
                <h2 className="font-bold lg:text-[68px] text-[48px] text-[#FDF0EE]">Keep it fresh</h2>
                <p className="font-medium text-[20px] text-slate-500 border-b-2 border-white pb-8">With plenty of Emotes, Titles, and Skins</p>
            </div>
        </section>
        <section id="customization" className="flex justify-center w-screen h-auto bg-[#131313] px-8 2xl:py-48 py-36 overflow-hidden point-events-none select-none">
            {/* Section to show off Emotes, Titles, and Nameplates  */}
            <div id="customization-wrapper" className="flex flex-wrap items-center justify-evenly w-full max-w-[1280px] h-full xl:gap-x-16 gap-y-12 py-8">
                <div id="customization-module" className="flex lg:flex-row flex-col justify-center items-center w-full xl:w-[400px] lg:w-[600px] h-auto ">
                    <div id="module-text" className="flex flex-col lg:text-start text-center w-full h-auto p-4">
                        <h2 className="font-black text-[36px] tracking-wide uppercase text-[#FDF0EE]">Skins</h2>
                        <p className="text-slate-500 text-[18px] xl:text-[14px] ">Customize your character's appearance and showcase your unique style!</p>
                    </div>
                    <div id="module-img" className="">
                        <img src={skinPack} />
                    </div>
                </div>
                <div id="customization-module" className="flex lg:flex-row flex-col justify-center items-center w-full xl:w-[400px] lg:w-[600px] h-auto ">
                    <div id="module-text" className="flex flex-col lg:text-start text-center w-full h-auto p-4">
                        <h2 className="font-black text-[36px] tracking-wide uppercase text-[#FDF0EE]">Titles</h2>
                        <p className="text-slate-500 text-[18px] xl:text-[14px] ">Elevate your in-game status with exclusive titles.</p>
                    </div>
                    <div id="module-img" className="">
                        <img src={titleStack} />
                    </div>
                </div>
                <div id="customization-module" className="flex lg:flex-row flex-col justify-center items-center w-full xl:w-[400px] lg:w-[600px] h-auto ">
                    <div id="module-text" className="flex flex-col lg:text-start text-center w-full h-auto p-4">
                        <h2 className="font-black text-[36px] tracking-wide uppercase text-[#FDF0EE]">Emotes</h2>
                        <p className="text-slate-500 text-[18px] xl:text-[14px] ">Express yourself with fun emotes!</p>
                    </div>
                    <div id="module-img" className="">
                        <img src={emotionStack} />
                    </div>
                </div>
                <div id="customization-module" className="flex lg:flex-row flex-col justify-center items-center w-full xl:w-[400px] lg:w-[600px] h-auto">
                    <div id="module-text" className="flex flex-col lg:text-start text-center w-full h-auto p-4">
                        <h2 className="font-black text-[36px] tracking-wide uppercase text-[#FDF0EE]">Goal Explosions</h2>
                        <p className="text-slate-500 text-[18px] xl:text-[14px] ">Make every goal a memorable spectacle.</p>
                    </div>
                    <div id="module-img" className="">
                        <img src={explosionStack} />
                    </div>
                </div>
                <div id="customization-module" className="flex lg:flex-row flex-col justify-center items-center w-full 2xl:w-[1000px] xl:w-[400px] lg:w-[600px] h-auto">
                    <div id="module-text" className="flex flex-col lg:text-start text-center w-full h-auto p-4">
                        <h2 className="font-black text-[36px] tracking-wide uppercase text-[#FDF0EE]">Battlepass</h2>
                        <p className="text-slate-500 text-[18px] xl:text-[14px] ">Unlock exclusive content, challenges, and rewards seasonally!</p>
                    </div>
                    <div id="module-img" className="">
                        <img src={battlePass} />
                    </div>
                </div>
            </div>
        </section>
        <MapSection />
        <footer className="flex flex-col w-screen h-[300px] items-center justify-evenly bg-[#131313] px-[1.25rem] gap-x-4">
            <div className="flex flex-row items-center justify-evenly w-full max-w-[1536px] py-8">
                <div className="flex flex-col justify-center items-center gap-y-2">
                    <img src={odyLogo} className="lg:w-24 lg:h-24 w-12 h-12" />
                    <h1 className="text-white font-bold lg:text-[24px] tracking-[0.125rem]">Odyssey</h1>
                </div>
                <div className="flex flex-col gap-y-4 justify-center items-center">
                    <div className="text-white lg:text-[36px] text-[20px] font-bold">
                        <h2>Connect with us</h2>
                    </div>
                    <div className="flex flex-row text-white lg:text-[36px] text-[24px] gap-x-6">
                        <a href="https://www.odysseyinteractive.gg/verified-creators#twitter-unauth-mask"><ion-icon name="logo-twitter"></ion-icon></a>
                        <a href="https://www.linkedin.com/company/odysseyinteractive"><ion-icon name="logo-linkedin"></ion-icon></a>
                        <a href="https://www.youtube.com/c/omegastrikers"><ion-icon name="logo-youtube"></ion-icon></a>
                        <a href="https://discord.gg/omegastrikers"><ion-icon name="logo-discord"></ion-icon></a>
                        <a href="https://www.twitch.tv/directory/game/Omega%20Strikers"><ion-icon name="logo-twitch"></ion-icon></a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-x-10 text-white lg:text-[18px] tracking-[0.25rem]">
                <a href=""><span>Terms of Service</span></a>
                <a href=""><span>Privacy Policy</span></a>
                <a href=""><span>Player Support</span></a>
            </div>
        </footer>
    </main>
  )
}

export default Home