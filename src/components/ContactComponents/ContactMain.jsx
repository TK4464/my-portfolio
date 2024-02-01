import React from 'react'
import Button from '../Button'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp2 } from '../fadeIn'
import ContactLanguages from './ContactLanguages'

const ContactMain = () => {

    return (
        <article className='w-full h-full relative mx-auto' id='contact'>
            <div className=' container mx-auto'>
                <div className=' mx-2  sm:mx-6 lg:mx-12 pb-12 lg:pb-28 pt-4 lg:pt-6 mt-[110px] md:mt-[120px] lg:mt-[140px]'>
                    <motion.div
                        className='text-center pb-0 xl:pb-10'
                        // スクロールアニメーション
                        variants={fadeInUp2}
                        exit={{ opacity: 0 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "0.4" }}
                    >
                        <h2 className='pb-5 text-4xl sm:text-5xl lg:text-8xl 2xl:text-9xl font-normal '>-CONTACT- <span className='text-xl sm:text-2xl xl:text-3xl align-middle'>〜お問合せ〜</span></h2>
                    </motion.div>
                    {/* <div className=' w-full //h-[375px] xs:h-[400px] sm:h-[410px] md:h-[435px] xl:h-[465px] 2xl:h-[445px] '> */}
                    <div className=' w-full '>
                        <div className='flex flex-col h-full mt-12 items-center justify-start gap-y-12 '>
                            <motion.p
                                className=' text-xs xs:text-sm lg:text-lg 2xl:text-xl font-normal'
                                // スクロールアニメーション
                                variants={fadeInUp2}
                                exit={{ opacity: 0 }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: "0.4" }}
                            >
                                「一度、話をしてみたい」という方は、<br />下記のメールアドレスまたはフォームからお申し込み下さい。
                            </motion.p>
                            <motion.p className='text-2xl xs:text-3xl lg:text-4xl text-navy '
                                // スクロールアニメーション
                                variants={fadeInUp2}
                                exit={{ opacity: 0 }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: "0.4" }}
                            >
                                <TypeAnimation
                                    sequence={[
                                        "4464tk64@gmail.com",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                />
                            </motion.p>
                            <Link href="https://forms.gle/m7RzsqosYo7HrLeA7" target='_blank' rel='noopener noreferrer'>
                                <motion.div   // スクロールアニメーション
                                    variants={fadeInUp2}
                                    exit={{ opacity: 0 }}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: "0.4" }}
                                >
                                    <Button buttonText={"Contact Form"} />
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <ContactLanguages/>
        </article>
    )
}

export default ContactMain