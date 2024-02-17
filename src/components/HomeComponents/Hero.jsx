import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link as Scroll } from "react-scroll"
import { lazy, Suspense } from 'react';
import Link from 'next/link';
import { fadeInScaleUp1, fadeInScaleUp2 } from '../fadeIn';

const MainVisualAnimation = lazy(() => import('../MainVisualAnimation'));
const Fallback = () => <div></div>;

const Hero = () => {
    return (
        <article className='w-full min-h-screen relative '>
            <Suspense fallback={<Fallback />}>
                <MainVisualAnimation />
            </Suspense>
            <div className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[30%]'>
                <div className="py-8 lg:py-16">
                    <div className="block justify-center ">
                        <motion.div
                            variants={fadeInScaleUp1}
                            exit={{ opacity: 0 }}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: "0.4" }}
                            className=" text-center place-self-center mx-auto"
                        >
                            <h1 className=" text-navy mb-4 lg:text-center">
                                <span className="text-dark-black text-4xl xs:text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl leading-normal lg:leading-snug font-normal">
                                    {"Taiki Kureshima"}
                                </span><br></br>
                                <div className='text-2xl sm:text-3xl lg:leading-normal md:text-5xl 2xl:text-6xl font-normal'>
                                    <TypeAnimation
                                        sequence={[
                                            "Portfolio",
                                            1500,
                                            "Student",
                                            1500,
                                            "Front-End Engineer",
                                            1500,
                                            "Web Designer",
                                            1500,
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </div>
                            </h1>
                            <div className='flex justify-center sm:hidden mt-20'>
                                <Scroll to="about" smooth={true} offset={-80}
                                    className="px-1 inline-block py-1 sm:w-fit rounded-full hover:bg-navy duration-500  text-white-gray mt-3"
                                >
                                    <button className="inline-block bg-navy hover:bg-navy duration-500 rounded-full px-5 py-2">
                                        About
                                    </button>
                                </Scroll>
                                <Scroll
                                    to="works"
                                    smooth={true}
                                    offset={-80}
                                    className="px-1 inline-block py-1 sm:w-fit rounded-full hover:bg-yellow-400 duration-500 text-dark-black mt-3"
                                >
                                    <button className="inline-block bg-yellow-400 hover:bg-yellow-400 duration-500 rounded-full px-5 py-2">
                                        Works
                                    </button>
                                </Scroll>
                                <Link
                                    href="/contact"
                                    className="px-1 inline-block py-1 sm:w-fit rounded-full hover:bg-dark-blue duration-500 text-white-gray mt-3"
                                    scroll={false}
                                >
                                    <button className="inline-block bg-dark-blue hover:bg-dark-blue duration-500 rounded-full px-5 py-2">
                                        Contact
                                    </button>
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            variants={fadeInScaleUp2}
                            exit={{ opacity: 0 }}
                            initial="offscreen"
                            whileInView="onscreen"
                            viewport={{ once: true, amount: "0.4" }}
                        >
                            <div className='contents'>
                                <div className='relative text-center p-16 before:animate-scroll-animation before:inline-block before:content-[""] before:absolute before:w-[30px] sm:before:w-[40px] before:h-[30px] sm:before:h-[40px] before:border-b-4 sm:before:border-b-4 before:border-solid before:border-navy before:border-l-4 sm:before:border-l-4 before:rotate-45 before:top-[20%] sm:before:top-[50%] before:right-0 before:left-0 before:m-auto '
                                >
                                    <span className="font-normal sm:text-xl absolute top-[80%] sm:top-[130%] right-0 left-0 m-auto ">Scroll</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Hero