import { motion } from "framer-motion";
import { fadeInImageUp2, fadeInUp2, fadeInUpX } from '../fadeIn';
import Image from 'next/image';
import profilePic from '/public/images/home-about.jpeg'

const AboutMain = () => {


    return (
        <article className=' relative w-full h-full mx-auto'>
            <div className='container mx-auto'>
                <div className=' mx-2 sm:mx-6 lg:mx-12 pb-12 lg:pb-20'>
                    <motion.div
                        className='text-center  pb-0 xl:pb-10'
                        // スクロールアニメーション
                        variants={fadeInUp2}
                        exit={{ opacity: 0 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "0.4" }}
                    >
                        <h2 className='pb-5 text-4xl sm:text-5xl lg:text-8xl 2xl:text-9xl font-normal '>-ABOUT- <span className='text-xl sm:text-2xl xl:text-3xl align-middle'>〜私について〜</span></h2>
                    </motion.div>

                    <div className='h-full xl:mx-10 2xl:mx-12 xl:py-4 '>
                        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-28 mt-5 xl:mt-4'>
                            {/* 画像 */}
                            <motion.div
                                className='mt-8 xl:my-0 mx-auto xl:w-2/5 w-[300px]  md:w-[350px] lg:w-[400px]'
                                // スクロールアニメーション
                                variants={fadeInImageUp2}
                                exit={{ opacity: 0 }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: "0.4" }}
                            >
                                <Image
                                    src={profilePic}
                                    alt='about-img'
                                    width={400}
                                    height={400}
                                    style={{ width: '100%', height: 'auto' }}
                                    className='object-cover rounded-lg drop-shadow-2xl mx-auto xl:mx-0 xl:ml-auto '
                                    unoptimized
                                />
                            </motion.div>

                            {/* プロフィール文 */}
                            <motion.div
                                className=' mx-auto mt-8 xl:mt-0 xs:w-[85%] w-[85%] sm:w-[70%] md:w-[75%] lg:w-[55%] xl:w-3/5 '
                                // スクロールアニメーション
                                variants={fadeInUpX}
                                exit={{ opacity: 0 }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: "0.4" }}
                            >
                                <div className='mx-auto flex justify-center xl:items-start flex-col  '>
                                    <div className='pt-2 flex flex-col items-center xl:items-start w-full 2xl:w-[95%] xl:px-0 animate-fadeIn'>
                                        <div className=' pt-2 flex flex-col items-center xl:items-start w-full 2xl:w-[95%] xl:px-0 animate-fadeIn'>
                                            <div className='font-normal md:mb-0 xl:pr-3 2xl:pr-0 leading-[40px] '>
                                                <div className='flex-1 flex flex-col md:flex-row max-w-max items-center  text-xs sm:text-sm md:text-base'>
                                                    <div className='font-normal  md:mb-0 xl:pr-3 2xl:pr-0 leading-[40px] mx-auto '>
                                                        <h2 className='text-center xl:text-start text-xl xs:text-2xl sm:text-3xl border-b-2 border-dark-black pb-4 '>呉島 大暉 / Taiki Kureshima</h2>
                                                        <div className='mt-4 text-justify tracking-wider'>
                                                            1996年、岡山県出身。岡山城東高校に入学後は甲子園出場を目指して毎日野球に打ち込んでいました。その後、早稲田大学に進学し、卒業後は新卒入社した銀行で個人向けのコンサルティングセールスをしていました。
                                                            2023年4月にHAL東京WEB学科に再進学。
                                                            フロントエンドエンジニア・WEBデザイナーを目指し、日々寝る間も惜しんで勉学に励んでいます。現在は就活中です。
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default AboutMain