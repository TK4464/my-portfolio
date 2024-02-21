import React, { useState } from 'react'
import {
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
    SiPhp,
    SiJquery,
    SiReact,
    SiNextdotjs,
    SiFigma,
    SiAdobexd,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiSwift,
    SiAdobeaftereffects,
} from 'react-icons/si'
import Link from "next/link";
import Button from '../Button';
import { motion } from 'framer-motion';
import { fadeInImageUp2, fadeInUp, fadeInUpX, fadeInUpX2 } from '../fadeIn';
import Image from 'next/image';
import profilePic from 'public/images/home-about.jpeg'

const aboutData = [
    {
        title: 'PROFILE',
        info: [
            {
                title: '呉島 大暉 / Taiki Kureshima\n1996-06-04　岡山県出身\n経歴：早稲田大学 文化構想学部→株式会社中国銀行→HAL東京\n大学のサークルでの広報活動の経験や銀行でのコンサルティングセールスの経験から、クライアントやユーザーにとって魅力的なサービスを生み出すクリエイターになりたいと考え、WEB業界を目指すように。\n志望職種はフロントエンドエンジニア・WEBデザイナー。',
            }
        ],
    },
    {
        title: 'SKILLS',
        info: [
            {
                title: 'Web -',
                icons: [
                    <SiHtml5 key="html" />,
                    <SiCss3 key="css" />,
                    <SiTailwindcss key="tailwind" />,
                    <SiJavascript key="js" />,
                    <SiPhp key="php" />,
                    <SiJquery key="jquery" />,
                    <SiReact key="react" />,
                    <SiNextdotjs key="next" />,
                ],
            },
            {
                title: 'Design -',
                icons: [
                    <SiFigma key="figma" />,
                    <SiAdobexd key="adobeXd" />,
                    <SiAdobeillustrator key="illustrator" />,
                    <SiAdobephotoshop key="photoshop" />,
                    <SiAdobeaftereffects key="aftereffects" />
                ]
            },
            {
                title: 'iOS -',
                icons: [<SiSwift key="swift" />],
            },
        ],
    },
    {
        title: 'AWARDS',
        info: [
            {
                title: 'HAL3校合同コンテスト 美しいWEBデザイン学内コンペ 銀賞',
                stage: '2023 - 2024',
            },
        ],
    },
    {
        title: 'HISTORY',
        info: [
            {
                title: 'Student - HAL東京 WEB学科',
                stage: '2023 - 2024',
            },
            {
                title: 'Consulting Sales - 株式会社中国銀行',
                stage: '2020 - 2021',
            },
            {
                title: 'Student - 早稲田大学 文化構想学部',
                stage: '2015 - 2020',
            },
            {
                title: 'Student - 岡山県立岡山城東高等学校',
                stage: '2012 - 2015',
            },
        ],
    },
    {
        title: 'QUALIFICATIONS',
        info: [
            {
                title: 'Web - Webデザイナー検定エキスパート ',
                stage: '- 2023',
            },
            {
                title: 'Design - 文部科学省後援 色彩検定2級 ',
                stage: '- 2022',
            },
            {
                title: 'Financial - 3級ファイナンシャル・プランニング技能士 ',
                stage: '- 2021',
            },
            {
                title: 'Financial - 証券外務員資格一種 取得 ',
                stage: '- 2019',
            },
        ]
    }
];

const HomeAbout = () => {
    const [index, setIndex] = useState(0);

    return (
        <article className='w-full mx-auto relative overflow-hidden' id='about'>
            <div className='container mx-auto'>
                <div className=' mx-2 sm:mx-6 lg:mx-12 pt-12 lg:pt-20 pb-12 lg:pb-20'>
                    <motion.div
                        className='text-center  pb-0 xl:pb-10'
                        // スクロールアニメーション
                        variants={fadeInUp}
                        exit={{ opacity: 0 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "0.4" }}>
                        <h2 className=' pb-5 text-4xl sm:text-5xl lg:text-6xl xl:text-6xl 2xl:text-8xl font-normal '>-ABOUT- <span className='text-xl sm:text-2xl xl:text-3xl align-middle'>〜私について〜</span></h2>
                    </motion.div>

                    <div className='h-full xl:mx-10 2xl:mx-12 xl:py-4 '>
                        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-12'>
                            <motion.div
                                className=' my-10 xl:my-0 mx-auto basis-5/12'
                                // スクロールアニメーション
                                variants={fadeInImageUp2}
                                exit={{ opacity: 0 }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: "0.4" }}
                            >
                                <Image
                                    src={profilePic}
                                    alt='home-about.jpeg'
                                    width={430} height={430}
                                    style={{ objectFit: 'contain' }}
                                    className=' w-[300px] h-[300px]  md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px] xl:w-[430px] xl:h-[430px] object-cover rounded-lg drop-shadow-2xl 2xl:mx-auto'
                                    unoptimized
                                />
                            </motion.div>
                            {/* セレクト項目全体 */}
                            <div className='xl:basis-7/12 w-[97%] xs:w-[98%] sm:w-[95%] md:w-[87%] lg:w-[68%] '
                            >
                                <div className='flex items-center xl:items-start flex-col h-[360px] sm:h-[380px] md:h-[360px] xl:h-[420px] 2xl:h-[420px] '
                                >
                                    <motion.div
                                        className='flex gap-x-4 xs:gap-x-4 sm:gap-x-3 md:gap-x-7 2xl:gap-x-8 xl:mx-0 mb-4 xl:mt-6 xl:mb-8'
                                        // スクロールアニメーション
                                        variants={fadeInUpX2}
                                        exit={{ opacity: 0 }}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: "0.4" }}
                                    >
                                        {aboutData.map((item, itemIndex) => {
                                            return <button
                                                key={itemIndex}
                                                className={`${index === itemIndex ? 'text-navy after:w-[100%] after:bg-navy after:transition-all after:duration-500' : 'text-dark-black'
                                                    } xs:tracking-wider cursor-pointer button-reset font-semibold capitalize text-xs xs:text-sm sm:text-xl xl:text-xl  2xl:text-2xl relative after:w-8 after:h-[2px] hover:after:bg-navy hover:text-navy after:bg-dark-black after:absolute after:-bottom-1 after:left-0 duration-500 after:duration-500`}
                                                onClick={() => setIndex(itemIndex)}
                                            >
                                                {/* 項目 */}
                                                {item.title}
                                            </button>
                                        })}
                                    </motion.div>
                                    {/* 本文 */}
                                    <motion.div
                                        className=' py-2 flex flex-col items-center xl:item-start xl:items-start w-full xl:px-0'
                                        // スクロールアニメーション
                                        variants={fadeInUpX}
                                        exit={{ opacity: 0 }}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: "0.4" }}
                                    >
                                        {aboutData[index].info.map((item, itemIndex) => {
                                            return <div key={itemIndex} className='flex-1 flex flex-col md:flex-row max-w-max items-center mb-2 text-xs sm:text-sm md:text-base text-dark-black'
                                            >

                                                {/* タイトル */}
                                                <div className=' mx-auto mb-2 md:mb-0 text-justify xl:pr-3 2xl:pr-0 leading-[40px]'
                                                >
                                                    {/* 配列を改行できるようにする処理 */}
                                                    {item.title.split('\n').map((line, index) => (
                                                        <div key={index}>
                                                            {line}
                                                            <br />
                                                        </div>
                                                    ))}
                                                </div>
                                                <div className='hidden md:flex'>  </div>
                                                {/* 年 */}
                                                <div className='pl-2'>{item.stage}</div>
                                                <div className='flex gap-x-4'>
                                                    {/* アイコン */}
                                                    {item.icons?.map((icon, iconIndex) => {
                                                        return <div
                                                            key={iconIndex} className='text-2xl xs:text-3xl sm:text-4xl xl:text-3xl'>{icon}</div>
                                                    })}
                                                </div>
                                            </div>
                                        })}
                                    </motion.div>
                                </div>
                                <Link href="/about" className='flex justify-center xl:justify-start mx-auto w-full xl:w-[50%]' scroll={false}>
                                    <motion.div
                                        // スクロールアニメーション
                                        variants={fadeInUp}
                                        exit={{ opacity: 0 }}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: "0.4" }}>
                                        <Button buttonText={"VIEW ALL"} />
                                    </motion.div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default HomeAbout