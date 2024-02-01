import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
const languages = [
    {
        name: 'HTML',
        image: './html5-original.svg',
    },
    {
        name: 'CSS',
        image: './css3-original.svg',
    },
    {
        name: 'Tailwind CSS',
        image: './tailwindcss-plain.svg',
    },
    {
        name: 'JavaScript',
        image: './javascript-original.svg',
    },
    {
        name: 'PHP',
        image: './php-original.svg',
    },
    {
        name: 'jQuery',
        image: './jquery-original.svg',
    },
    {
        name: 'React.js',
        image: './react-original.svg',
    },
    {
        name: 'Next.js',
        image: './nextjs-original.svg',
    },
    {
        name: 'Figma',
        image: './figma-original.svg',
    },
    {
        name: 'XD',
        image: '/xd-line.svg',
    },
    {
        name: 'Illustrator',
        image: './illustrator-line.svg',
    },
    {
        name: 'Photoshop',
        image: './photoshop-line.svg',
    },
    {
        name: 'AfterEffects',
        image: './aftereffects-original.svg',
    },
    {
        name: 'Swift',
        image: './swift-original.svg',
    },
];

const ContactLanguages = () => {
    return (
        <article className='w-full  mx-auto'>
            <div className="container mx-auto">
                <div className=' mx-2 xs:grid-cols-3 sm:mx-6 lg:mx-12 pt-12 lg:pt-0 pb-28'>
                    {/* プログラミング言語 */}
                    <div className='grid grid-cols-4 sm:grid-cols-7 justify-items-center  sm:gap-0 lg:gap-y-20 2xl:gap-y-24'>
                        {languages.map((language, index) => (
                            <div className='flex mb-12 lg:mb-0' key={index} >
                                <motion.div
                                    className='flex justify-center items-center'
                                    // whileHover={{ scale: 1.1 }}
                                    whileTap={{ y: -20 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 1 }}
                                >
                                    <Image src={language.image} alt={language.name} width={100}
                                        height={100}
                                        style={{ width: '50%', height: 'auto', objectFit: 'contain' }}
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ContactLanguages