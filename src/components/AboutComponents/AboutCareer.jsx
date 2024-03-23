import { motion } from "framer-motion";
import { fadeInUp } from "../fadeIn";

const TimelineData = [
    {
        date: "2015.04",
        content: "早稲田大学入学。\n入場者数6000人規模のライブイベントを企画・運営する学生団体に所属し、広報としてWEBメディアの記事やイベントレポートを担当。この時、WEBやマーケティング、PRに興味を持つ。"
    },
    {
        date: "2020.03",
        content: "早稲田大学を卒業。"
    },
    {
        date: "2020.04",
        content: "地元の銀行に新卒入社し、約1年間コンサルティングセールスと金融事務を経験。\n仕事をしていく中で、学生時代から関心があったWEB業界へのキャリアチェンジを目指す。"
    },
    {
        date: "2022.01",
        content: "転職活動を行う中で今後のキャリアについて見つめ直す。\nその結果、「ユーザーやクライアントの課題解決のために0からサービスを生み出すクリエイティブ側の人間」であるフロントエンドエンジニア・WEBデザイナーを目指す決意をする。そして、学ぶなら「最高峰の学校で学びたい」という考えからITの専門学校として有名だったHAL東京への入学を検討。そのための資金集めを始める。"
    },
    {
        date: "2023.04",
        content: "HAL東京WEB学科に入学。"
    },
    {
        date: "2023.10",
        content: "HAL東京・HAL名古屋・HAL大阪による三校合同コンテスト「美しいWEBデザイン学内コンペ」において銀賞を受賞。"
    },
    {
        date: "2024.03",
        content: "HAL東京・HAL名古屋・HAL大阪による三校合同コンテスト「店舗サイトリデザイン学内コンペ」において構成力賞を受賞。"
    },
    {
        date: "2024.03",
        content: "現在、フロントエンドエンジニア・WEBデザイナーを目指して就職活動中。"
    }
];

const AboutCareer = () => {

    return (
        <article className='w-full  mx-auto'>
            <div className="container mx-auto">
                <div className=' mx-2 sm:mx-6 lg:mx-12 pt-12 lg:pt-20'>
                    <motion.div
                        className=' text-center pb-0 xl:pb-10'
                        // スクロールアニメーション
                        variants={fadeInUp}
                        exit={{ opacity: 0 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "0.4" }}
                    >
                        <h2 className='pb-5 text-4xl sm:text-5xl lg:text-8xl 2xl:text-9xl font-normal '>-CAREER- <span className='text-xl sm:text-2xl xl:text-3xl align-middle'>〜経歴〜</span></h2>
                    </motion.div>
                    <div className='h-full xl:mx-10 2xl:mx-12 pt-10 xl:py-0 '>
                        <div className="container mb-10 mx-auto px-4 md:px-12 lg:mt-5 xl:mt-4">
                            <ul>
                                {TimelineData.map((item, index) => (
                                    <motion.li key={index}
                                        className="lg:relative lg:overflow-hidden"
                                        // スクロールアニメーション
                                        variants={fadeInUp}
                                        exit={{ opacity: 0 }}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: "0.4" }}
                                    >
                                        <p className="font-medium tracking-wider text-navy lg:text-dark-black  text-base md:text-lg lg:float-left lg:w-32 lg:py-7 ">{item.date}</p>
                                        <div className="lg:w-4/5 text-xs sm:text-sm md:text-base lg:float-left lg:border-l-2 lg:border-slate-300 lg:border-solid py-2 lg:py-7 lg:pl-10 lg:before:content-[''] before:bg-navy lg:before:absolute lg:before:w-3 lg:before:h-3 lg:before:left-[123px] lg:before:top-9 lg:before:rounded-full mb-4 lg:mb-0 font-normal">
                                            {/* 配列を改行できるようにする処理 */}
                                            {item.content.split("\n").map((line, i) => (
                                                <p key={i} className="leading-8 tracking-wider ">
                                                    {line}
                                                </p>
                                            ))}
                                        </div>
                                    </motion.li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </article >
    )
}

export default AboutCareer