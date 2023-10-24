import React, { useState } from 'react';
import { Avatar } from '@nextui-org/react'
import { AnimatePresence, motion } from 'framer-motion';
import { fadeAnimation, headContainerAnimation, headTextAnimation } from '../config/motion.js';

{/* Characters */}
import aimiCharacter from '../assets/characters/Aimi.png';
import asherCharacter from '../assets/characters/Asher.png';
import atlasCharacter from '../assets/characters/Atlas.png';
import drekarCharacter from '../assets/characters/Drekar.png';
import dubuCharacter from '../assets/characters/Dubu.png';
import eraCharacter from '../assets/characters/Era.png';
import estelleCharacter from '../assets/characters/Estelle.png';
import finiiCharacter from '../assets/characters/Finii.png';
import julietteCharacter from '../assets/characters/Juliette.png';
import junoCharacter from '../assets/characters/Juno.png';
import kaiCharacter from '../assets/characters/Kai.png';
import kazanCharacter from '../assets/characters/Kazan.png';
import lunaCharacter from '../assets/characters/Luna.png';
import octaviaCharacter from '../assets/characters/Octavia.png';
import rasmusCharacter from '../assets/characters/Rasmus.png';
import runeCharacter from '../assets/characters/Rune.png';
import vyceCharacter from '../assets/characters/Vyce.png';
import xCharacter from '../assets/characters/X.png';
import zentaroCharacter from '../assets/characters/Zentaro.png';

const characters = [
    {
        id: "Aimi",
        name: "Ai.Mi",
        desc: "A glitch mage who excels at controlling the field with precise attacks from a distance.",
        src: {aimiCharacter},
    },
    {
        id: "Asher",
        name: "Asher",
        desc: "A warm-spirited warrior who charged in with a pair of high-tech shields.",
        src: {asherCharacter},
    },
    {
        id: "Atlas",
        name: "Atlas",
        desc: "A cosmic guardian who bends space-time to save his allies from danger.",
        src: {atlasCharacter},
    },
    {
        id: "Drekar",
        name: "Drekar",
        desc: "A soldier assassin who uses stealth and slows to disrupt enemies.",
        src: {drekarCharacter},
    },
    {
        id: "Dubu",
        name: "Dubu",
        desc: "A hard-hittin (but bluffy) bodyguard and defender.",
        src: {dubuCharacter},
    },
    {
        id: "Era",
        name: "Era",
        desc: "A shy witch who conjures magical spells to empower and hasten her team.",
        src: {eraCharacter},
    },
    {
        id: "Estelle",
        name: "Estelle",
        desc: "A focused sniper who applies pressure from afar.",
        src: {estelleCharacter},
    },
    {
        id: "Finii",
        name: "Finii",
        desc: "A mischievous magician who can summon gravity wells and help her team inflict major damage to enemies.",
        src: {finiiCharacter},
    },
    {
        id: "Juliette",
        name: "Juliette",
        desc: "An agile brawler who's not afriad to throw the first punch.",
        src: {julietteCharacter},
    },
    {
        id: "Juno",
        name: "Juno",
        desc: "A curious alien who summons blobbos to help her fight and score goals.",
        src: {junoCharacter},
    },
    {
        id: "Kai",
        name: "Kai",
        desc: "A speed, fireball-slinging skirmisher who wins in style.",
        src: {kaiCharacter},
    },
    {
        id: "Kazan",
        name: "Kazan",
        desc: "A wild stance dancer who utilizies an umbrella to do his dirty deeds.",
        src: {kazanCharacter},
    },
    {
        id: "Luna",
        name: "Luna",
        desc: "An explosive inventor who bombards enemies before rocketing herself into action.",
        src: {lunaCharacter},
    },
    {
        id: "Octavia",
        name: "Octavia",
        desc: "An evasive skirmisher who uses speed and repeated attacks to disrupt the field.",
        src: {octaviaCharacter},
    },
    {
        id: "Rasmus",
        name: "Rasmus",
        desc: "A flashy mid-range skirmisher who can pull enemies (and the Core) towards himself.",
        src: {rasmusCharacter},
    },
    {
        id: "Rune",
        name: "Rune",
        desc: "A tricky caster who can teleport and banish enemies to another realm.",
        src: {runeCharacter},
    },
    {
        id: "Vyce",
        name: "Vyce",
        desc: "A supercharged rocker who uses lightning energy to cause chaos and blast foes.",
        src: {vyceCharacter},
    },
    {
        id: "X",
        name: "X",
        desc: "A straightforward brute who loves to brawl anyone and everyone.",
        src: {xCharacter},
    },
    {
        id: "Zentaro",
        name: "Zentaro",
        desc: "A young and nimble swordsman who slashes at foes while eluding their attacks.",
        src: {zentaroCharacter},
    },
  ];
  
  export function CharacterInteractive() {
    const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);

    const handleCharacterClick = (character) => {
        setSelectedCharacter(character);
    };
  
    return (
        <AnimatePresence>
            <section id="characters" className="w-full h-fit bg-[#FDF0EE] 3xl:mt-24 2xl:mt-12 p-8">
                <div id="characters-wrapper" className="flex flex-col w-full h-auto justify-center items-center sm:py-8">
                    <div id="top-wrapper" className="flex flex-wrap justify-center items-center">
                    <motion.div
                        id="characters-info"
                        className="flex flex-col justify-center lg:items-start items-center w-[430px] h-[360px] gap-y-4 px-4"
                        initial={headContainerAnimation.initial}
                        animate={headContainerAnimation.animate}
                        transition={headContainerAnimation.transition}
                    >
                        <motion.h1
                            id="character-name"
                            className="font-bold text-black sm:text-[60px] text-[48px] uppercase point-events-none select-none"
                            initial={headTextAnimation.initial}
                            animate={headTextAnimation.animate}
                            transition={headTextAnimation.transition}
                        >
                            {selectedCharacter.name}
                        </motion.h1>
                        <motion.p
                            id="character-desc"
                            className="font-medium text-[20px] text-zinc-700 italics point-events-none select-none"
                            initial={fadeAnimation.initial}
                            animate={fadeAnimation.animate}
                            transition={fadeAnimation.transition}
                        >
                            {selectedCharacter.desc}
                        </motion.p>
                    </motion.div>
                    <motion.div
                        id="character-image"
                        className="w-[430px] h-[360px] p-2 overflow-hidden object-contain"
                        initial={fadeAnimation.initial}
                        animate={fadeAnimation.animate}
                        transition={fadeAnimation.transition}
                    >
                        <img src={selectedCharacter.src} alt={selectedCharacter.name} />
                    </motion.div>
                    </div>
                    <div id="character-select" className="flex flex-wrap w-full max-w-[800px] h-fit items-center justify-center lg:gap-4 md:gap-5 gap-4 py-16">
                        {characters.map((character) => (
                            <Avatar
                                key={character.id}
                                isBordered
                                id={character.id}
                                className="bg-slate-500 rounded-full sm:w-16 w-12 sm:h-16 h-12 cursor-pointer"
                                src={character.src}
                                onClick={() => handleCharacterClick(character)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </AnimatePresence>
    );
}
  
  export default CharacterInteractive;