import { ProgressBar } from "react-progressbar-fancy";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "../fadeIn";

const sections = [
    {
        title: 'CODING',
        imgSrc: './programming-icon.svg',
        description: 'HTML/CSS/JavaScript/jQueryでのページ制作をはじめとして、React.js/Next.JS/Tailwind CSSといったモダンな技術を用いて「作りながら学ぶ」感覚と、自走することを大事にしてWEB制作に挑戦しています。クライアントやユーザーの課題を解決できるクリエイターになるために、新しい技術にも臆することなくチャレンジし、日々一歩でも成長していくことを大切にしています。',
    },
    {
        title: 'DESIGN',
        imgSrc: './illustration-icon.svg',
        description: 'ユーザーにとって「わかりやすいデザイン」を前提に、必要なアニメーションの取捨選択などUI/UXの部分も意識してWEB全般のデザインを行なっています。このように、私はデザインを届ける先のことを常に想像し、最終的にクライアントやユーザーの課題解決に繋げるにはどうすれば良いか考えています。また、日々様々なサイトを見て、デザインの知識を蓄えることも大切にしています。',
    }
];

const skills = [
    {
        name: 'HTML',
        image: './html5-original.svg',
        duration: '10months',
        score: 80
    },
    {
        name: 'CSS',
        image: './css3-original.svg',
        duration: '10months',
        score: 70
    },
    {
        name: 'Tailwind CSS',
        image: './tailwindcss-plain.svg',
        duration: '7months',
        score: 70
    },
    {
        name: 'JavaScript',
        image: './javascript-original.svg',
        duration: '8months',
        score: 40
    },
    {
        name: 'PHP',
        image: './php-original.svg',
        duration: '10months',
        score: 40
    },
    {
        name: 'jQuery',
        image: './jquery-original.svg',
        duration: '8months',
        score: 40
    },
    {
        name: 'React.js',
        image: './react-original.svg',
        duration: '7months',
        score: 40
    },
    {
        name: 'Next.js',
        image: './nextjs-original.svg',
        duration: '4months',
        score: 40
    },
    {
        name: 'Figma',
        image: './figma-original.svg',
        duration: '5months',
        score: 60
    },
    {
        name: 'XD',
        image: './xd-line.svg',
        duration: '5months',
        score: 30
    },
    {
        name: 'Illustrator',
        image: './illustrator-line.svg',
        duration: '10months',
        score: 60
    },
    {
        name: 'Photoshop',
        image: './photoshop-line.svg',
        duration: '10months',
        score: 60
    },
    {
        name: 'AfterEffects',
        image: './aftereffects-original.svg',
        duration: '1months',
        score: 10
    },
    {
        name: 'Swift',
        image: './swift-original.svg',
        duration: '3months',
        score: 10
    },
];

const AboutSkills = () => {
    return (
        <article className='w-full relative overflow-hidden mx-auto'>
            <div className='container mx-auto'>
                <div className=' mx-2 sm:mx-6 lg:mx-12 pt-12 lg:pt-20  pb-12 lg:pb-20'>
                    <motion.div
                        className='text-center pb-0 xl:pb-10'
                        // スクロールアニメーション
                        variants={fadeInUp}
                        exit={{ opacity: 0 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "0.4" }}
                    >
                        <h2 className='pb-5 text-4xl sm:text-5xl lg:text-8xl 2xl:text-9xl font-normal '>-SKILLS- <span className='text-xl sm:text-2xl xl:text-3xl align-middle'>〜できること〜</span></h2>
                    </motion.div>
                    <div className='h-full xl:mx-10 2xl:mx-12  xl:py-0'>
                        <div className="container mx-auto px-4 md:px-12 ">

                            {/* コーディング＆デザインに対する考え方 */}
                            <div className='lg:grid grid-cols-2 gap-14 justify-center mb-20 mt-5 xl:mt-0'>
                                {sections.map((section, index) => (
                                    <div key={index} className='mx-auto p-5 mb-10'>
                                        <motion.div
                                            className='mx-auto px-8 mb-4 drop-shadow-lg w-[300px] h-auto'
                                            // スクロールアニメーション
                                            variants={fadeInUp}
                                            exit={{ opacity: 0 }}
                                            initial="offscreen"
                                            whileInView="onscreen"
                                            viewport={{ once: true, amount: "0.4" }}
                                        >
                                            <Image
                                                src={section.imgSrc}
                                                alt={`${section.title}-icon`}
                                                className='mx-auto'
                                                width={300}
                                                height={240}
                                                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
                                            />
                                            <h2 className='text-3xl lg:text-4xl text-center font-semibold'>{section.title}</h2>
                                        </motion.div>
                                        <motion.div
                                            className='text-xs sm:text-sm md:text-base break-all font-normal'
                                            // スクロールアニメーション
                                            variants={fadeInUp}
                                            exit={{ opacity: 0 }}
                                            initial="offscreen"
                                            whileInView="onscreen"
                                            viewport={{ once: true, amount: "0.4" }}
                                        >
                                            <p className=' leading-[40px] tracking-wider'>{section.description}</p>
                                        </motion.div>
                                    </div>
                                ))}
                            </div>

                            {/* スキルセット＆プログレスバー */}
                            <div className='lg:grid grid-cols-2 gap-14'>
                                {skills.map((skill, index) => (
                                    <motion.div
                                        className='flex mb-12 last:mb-2 lg:mb-0'
                                        key={index}
                                        // スクロールアニメーション
                                        variants={fadeInUp}
                                        exit={{ opacity: 0 }}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true, amount: "0.4" }}
                                    >
                                        <div className='flex justify-center items-center'>
                                            <Image
                                                width={85}
                                                height={85}
                                                src={skill.image} 
                                                alt={skill.name} 
                                                className='h-[50px] xs:h-[60px] md:h-[70px] 2xl:h-[100px]'
                                            />
                                        </div>
                                        <div className='w-full text-start align-middle ml-2 xl:ml-3 2xl:ml-10'>
                                            <p className=' text-base sm:text-xl 2xl:text-2xl font-semibold ml-2'>{skill.name}<span className='mx-10 text-base sm:text-lg 2xl:text-xl font-semibold text-gray-500'>{skill.duration}</span></p>
                                            <ProgressBar score={skill.score} progressColor={"purple"} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </article>
    )
}

export default AboutSkills