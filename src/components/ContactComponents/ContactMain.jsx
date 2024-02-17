import React from 'react'
import Button from '../Button'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { fadeInUp2 } from '../fadeIn'

const ContactMain = () => {

    const text = "「一度、話をしてみたい」という方は、\n下記のメールアドレスからお申し込み下さい。"

    return (
        <article className='w-full max-h-[1080px] relative mx-auto' id='contact'>
            <div className=' container mx-auto'>
                <div className=' mx-2  sm:mx-6 lg:mx-12 pb-12 lg:pb-40 pt-4 lg:pt-6 mt-[110px] md:mt-[120px] lg:mt-[140px]'>
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
                    <div className='w-full'>
                        <div className='flex flex-col h-full mt-28 my-32 lg:mt-12 lg:my-16 items-center justify-center gap-y-12 lg:gap-y-16 2xl:gap-y-20 '>
                            <motion.p
                                className=' text-xs xs:text-sm lg:text-lg 2xl:text-xl font-normal whitespace-pre-wrap md:whitespace-nowrap'
                                // スクロールアニメーション
                                variants={fadeInUp2}
                                exit={{ opacity: 0 }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: "0.4" }}
                            >
                                {text}
                            </motion.p>
                            <motion.p className='text-2xl xs:text-3xl lg:text-4xl 2xl:text-5xl text-navy '
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
                            <Link href="mailto:4464tk64@gmail.com">
                                <motion.div   // スクロールアニメーション
                                    variants={fadeInUp2}
                                    exit={{ opacity: 0 }}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    viewport={{ once: true, amount: "0.4" }}
                                >
                                    <Button buttonText={"Send Email"} />
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </article>
    )
}

export default ContactMain