import React from 'react'
import { useState } from 'react';
import Image from 'next/image';
import Modal from '../Modal';
import { motion } from 'framer-motion';
import { fadeInImageUp, fadeInUp } from '../fadeIn';

const WorksData = [
    {
        title: 'ALL',
        contents: [
            {
                imageUrl: '/images/works-image1.png',
                title: 'Taiki Kureshima Portfolio',
                type: 'Website',
                alt: 'works-image1',
                modalImageUrl: '/images/works-image1.png',
                author: '呉島 大暉',
                technology: 'Next.js/Tailwind CSS/Illustrator/Photoshop/AfterEffects/Figma/VS Code',
                productionPeriod: '2023.11~ / 2 months',
                url: 'https://taiki-kureshima-portfolio.vercel.app/',
                comment: '0からポートフォリオサイトを制作を行いました。\nデザイン面においてはシンプルさを意識して見る人にとってわかりやすくすることを意識しました。\n技術面おいては初めてNext.jsを使用してのWeb制作で手探りだったこともあり、配列を使ってコードの簡略化などを試みたものの全体的にコードが複雑になってしまった点や、FramerMotionを使用したページ遷移時のアニメーションの動きがnext13のAppRouterを使用した際に上手く行かず結果的にPagesRouterでのサイト制作になった点は今後の課題だと考えています。\nまた、Next.jsに触れる機会は今後も確実にあると思うのでSSRやCSR、SSGなどについてや、動的なサイトを作るための技術などについても更に学んでいきたいと考えています。\nただ、自分にとって初めて使用する新しい技術を駆使して作品を完成させられたという点では大きく成長できたのではないかと考えています。',
            },
            {
                imageUrl: '/images/works-image2.png',
                title: '就活掲示板 Reboot',
                type: 'Webapp',
                alt: 'works-image2',
                modalImageUrl: '/images/works-image2.png',
                author: '呉島 大暉',
                technology: 'Next.js/Tailwind CSS/Illustrator/Photoshop/XD/VS Code/Supabase',
                productionPeriod: '2024.1~ / 1 month',
                url: 'https://internet-forum-mocha.vercel.app/',
                comment: '将来、フロントエンドエンジニアという選択肢を視野に入れた時に、動的なWebアプリを作れるようになっておいた方が良いと考えたこと、また、日頃から自分のようなエンジニアを目指している就業経験有りの学生に対する就活情報が少ないと感じていたため、同じような境遇の人たちと情報交換できたら良いのではないかと考え、就活用掲示板のようなものを制作しました。\nフロント側ではNext.js14を使い、バックエンド側では知識が乏しいこともあり、Supabaseを使用しました。とはいえ、まだまだSupabaseの知識自体も乏しく、とにかく動的なものを作るということで手一杯になったため、今後さらに勉強し、単なる掲示板ではなく就活Webアプリとして使えるようにオリジナルの機能を追加していきたいと思います。',
            },
            {
                imageUrl: '/images/works-image3.png',
                title: 'Boulangerie HAL',
                type: 'Website',
                alt: 'works-image3',
                modalImageUrl: '/images/works-image3.png',
                author: '呉島 大暉',
                technology: 'HTML/CSS/JavaScript/jquery/Illustrator/Photoshop/VS Code',
                productionPeriod: '2024.1~ / 2 weeks',
                url: 'https://taikikureshima.com/BoulangerieHAL/',
                comment: 'パン屋のサイト制作を行いました。\nまずデザインにおいては、紺や白を落ち着いた色を主体としつつも、あえてグレーの背景の左側に白を残すなど、単調にならないように工夫しました。技術面においては、今回は生のJavaScriptだけでなくjQueryも使用しました。\n今後に向けた課題としては、毎回シンプルな色構成のサイトを制作することが多いので派手目な色を使用したデザインにも挑戦し、デザインの引き出しを増やしていきたいと考えています。',
            },
            {
                imageUrl: '/images/works-image4.png',
                title: 'アーティストサイト',
                type: 'Website',
                alt: 'works-image4',
                modalImageUrl: '/images/works-image4.png',
                author: '呉島 大暉',
                technology: 'React.js/Tailwind CSS/Illustrator/Photoshop/Blender/XD/VS Code',
                productionPeriod: '2023.7~ / 1 month',
                url: 'https://tk4464.xsrv.jp/',
                comment: '※こちらのサイトは著作権の関係でアクセス制限をかけています。閲覧する場合は以下のユーザー名とパスワードをリンク先で入力してください。\nユーザー名：artistsite\nパスワード：hal30169\n\nアーティストサイトを制作しました。\nデザイン面に関しては特に、アーティストのイメージに合致し、尚且つ安っぽさが出ないカラー選択をすることにかなり苦戦しましたが、最終的に緑系の色を使用することで落ち着きました。\nまた、フッターの部分がシンプルすぎて面白みに欠けていたのでBlenderで簡単な3Dモデルを作成し、React-Three-Fiverで3Dモデルを描写してみるなど独自性が出るように少し遊んでみました。\n技術面においては、初めてReact.jsを使用したのですが、複数のページがあるサイトだったためルーティングのことなどを考えると別のフレームワークを使用した方が結果的には良かったと思いました。\nただ、技術選定の仕方など今後何か新規開発していくにあたって、かなり勉強になったと思います。',
            },
            {
                imageUrl: '/images/works-image5.png',
                title: 'Café de paris',
                type: 'Website',
                alt: 'works-image5',
                modalImageUrl: '/images/works-image5.png',
                author: '呉島 大暉',
                technology: 'HTML/CSS/JavaScript/Illustrator/Photoshop/VS Code',
                productionPeriod: '2023.11~ / 2 weeks',
                url: 'https://taikikureshima.com/Caf%c3%a9%20de%20paris/',
                comment: 'カフェサイトの制作を行いました。\nデザインにおいては、最初にサイトを見たときにインパクトが出るようにフルスクリーンで店内の写真を切り替えて表示させるようにしました。また、カフェということでメニューや店内の写真が目立つように使用するカラーを主に白と黒とし、フォントも日本語に明朝体を使用することでシンプルかつ綺麗めに仕上げました。\n技術面においては,今回あえて生のJavaScriptとJQueryに依存しないライブラリのみ使用して制作しました。\n今後に向けた課題としては、今のままだと要素が綺麗に並んでるだけで、サイトのデザインとして動きがないので、次回は曲線など何かしらサイトに動きが生まれるようなデザインに挑戦していきたいです。',
            },
            {
                imageUrl: '/imaggies/works-image6.png',
                title: 'Hair Salon バナー',
                type: 'DTP',
                alt: 'works-image6',
                modalImageUrl: '/images/works-image6.png',
                author: '呉島 大暉',
                technology: 'Illustrator',
                productionPeriod: '2023.11~ / 1 week',
                url: '',
                comment: '美容室のバナーを制作しました。画像を含めて全体的に黒色・白色に統一した上で、強調したい部分には赤色を使用し、「スタイリッシュなメンズヘアーサロン」というイメージでバナーを制作しました。今後の課題としては、文章や図形が全て理路整然と並んでいて殆ど動きのないデザインになってしまったので、次回は斜めや円など動きのあるデザインを取り入れていきたいと考えています。',
            },
        ],
    },
    {
        title: 'WEB',
        contents: [
            {
                imageUrl: '/images/works-image1.png',
                title: 'Taiki Kureshima Portfolio',
                type: 'Website',
                alt: 'works-image1',
                modalImageUrl: '/images/works-image1.png',
                author: '呉島 大暉',
                technology: 'Next.js/Tailwind CSS/Illustrator/Photoshop/AfterEffects/Figma/VS Code',
                productionPeriod: '2023.11~ / 2 months',
                url: 'https://taiki-kureshima-portfolio.vercel.app/',
                comment: '0からポートフォリオサイトを制作を行いました。\nデザイン面においてはシンプルさを意識して見る人にとってわかりやすくすることを意識しました。\n技術面おいては初めてNext.jsを使用してのWeb制作で手探りだったこともあり、配列を使ってコードの簡略化などを試みたものの全体的にコードが複雑になってしまった点や、FramerMotionを使用したページ遷移時のアニメーションの動きがnext13のAppRouterを使用した際に上手く行かず結果的にPagesRouterでのサイト制作になった点は今後の課題だと考えています。\nまた、Next.jsに触れる機会は今後も確実にあると思うのでSSRやCSR、SSGなどについてや、動的なサイトを作るための技術などについても更に学んでいきたいと考えています。\nただ、自分にとって初めて使用する新しい技術を駆使して作品を完成させられたという点では大きく成長できたのではないかと考えています。',
            },
            {
                imageUrl: '/images/works-image2.png',
                title: '就活掲示板 Reboot',
                type: 'Webapp',
                alt: 'works-image2',
                modalImageUrl: '/images/works-image2.png',
                author: '呉島 大暉',
                technology: 'Next.js/Tailwind CSS/Illustrator/Photoshop/XD/VS Code/Supabase',
                productionPeriod: '2024.1~ / 1 month',
                url: 'https://internet-forum-mocha.vercel.app/',
                comment: '将来、フロントエンドエンジニアという選択肢を視野に入れた時に、動的なWebアプリを作れるようになっておいた方が良いと考えたこと、また、日頃から自分のようなエンジニアを目指している就業経験有りの学生に対する就活情報が少ないと感じていたため、同じような境遇の人たちと情報交換できたら良いのではないかと考え、就活用掲示板のようなものを制作しました。\nフロント側ではNext.js14を使い、バックエンド側では知識が乏しいこともあり、Supabaseを使用しました。とはいえ、まだまだSupabaseの知識自体も乏しく、とにかく動的なものを作るということで手一杯になったため、今後さらに勉強し、単なる掲示板ではなく就活Webアプリとして使えるようにオリジナルの機能を追加していきたいと思います。',
            },
            {
                imageUrl: '/images/works-image3.png',
                title: 'Boulangerie HAL',
                type: 'Website',
                alt: 'works-image3',
                modalImageUrl: '/images/works-image3.png',
                author: '呉島 大暉',
                technology: 'HTML/CSS/JavaScript/jquery/Illustrator/Photoshop/VS Code',
                productionPeriod: '2024.1~ / 2 weeks',
                url: 'https://taikikureshima.com/BoulangerieHAL/',
                comment: 'パン屋のサイト制作を行いました。\nまずデザインにおいては、紺や白を落ち着いた色を主体としつつも、あえてグレーの背景の左側に白を残すなど、単調にならないように工夫しました。技術面においては、今回は生のJavaScriptだけでなくjQueryも使用しました。\n今後に向けた課題としては、毎回シンプルな色構成のサイトを制作することが多いので派手目な色を使用したデザインにも挑戦し、デザインの引き出しを増やしていきたいと考えています。',
            },
            {
                imageUrl: '/images/works-image4.png',
                title: 'アーティストサイト',
                type: 'Website',
                alt: 'works-image4',
                modalImageUrl: '/images/works-image4.png',
                author: '呉島 大暉',
                technology: 'React.js/Tailwind CSS/Illustrator/Photoshop/Blender/XD/VS Code',
                productionPeriod: '2023.7~ / 1 month',
                url: 'https://tk4464.xsrv.jp/',
                comment: '※こちらのサイトは著作権の関係でアクセス制限をかけています。閲覧する場合は以下のユーザー名とパスワードをリンク先で入力してください。\nユーザー名：artistsite\nパスワード：hal30169\n\nアーティストサイトを制作しました。\nデザイン面に関しては特に、アーティストのイメージに合致し、尚且つ安っぽさが出ないカラー選択をすることにかなり苦戦しましたが、最終的に緑系の色を使用することで落ち着きました。\nまた、フッターの部分がシンプルすぎて面白みに欠けていたのでBlenderで簡単な3Dモデルを作成し、React-Three-Fiverで3Dモデルを描写してみるなど独自性が出るように少し遊んでみました。\n技術面においては、初めてReact.jsを使用したのですが、複数のページがあるサイトだったためルーティングのことなどを考えると別のフレームワークを使用した方が結果的には良かったと思いました。\nただ、技術選定の仕方など今後何か新規開発していくにあたって、かなり勉強になったと思います。',
            },
            {
                imageUrl: '/images/works-image5.png',
                title: 'Café de paris',
                type: 'Website',
                alt: 'works-image5',
                modalImageUrl: '/images/works-image5.png',
                author: '呉島 大暉',
                technology: 'HTML/CSS/JavaScript/Illustrator/Photoshop/VS Code',
                productionPeriod: '2023.11~ / 2 weeks',
                url: 'https://taikikureshima.com/Caf%c3%a9%20de%20paris/',
                comment: 'カフェサイトの制作を行いました。\nデザインにおいては、最初にサイトを見たときにインパクトが出るようにフルスクリーンで店内の写真を切り替えて表示させるようにしました。また、カフェということでメニューや店内の写真が目立つように使用するカラーを主に白と黒とし、フォントも日本語に明朝体を使用することでシンプルかつ綺麗めに仕上げました。\n技術面においては,今回あえて生のJavaScriptとJQueryに依存しないライブラリのみ使用して制作しました。\n今後に向けた課題としては、今のままだと要素が綺麗に並んでるだけで、サイトのデザインとして動きがないので、次回は曲線など何かしらサイトに動きが生まれるようなデザインに挑戦していきたいです。',
            },
        ],
    },
    {
        title: 'iOS',
        contents: [
            {
                imageUrl: '/images/no-image.png',
                title: 'iOSアプリ',
                type: 'iOS App',
                alt: 'works-image7',
                modalImageUrl: '/images/no-image.png',
                author: '呉島 大暉',
                technology: 'X Code',
                productionPeriod: '/',
                url: '',
                comment: 'iOSアプリの作品がここに入ります。',
            },
        ]
    },
    {
        title: 'DTP',
        contents: [
            {
                imageUrl: '/images/works-image6.png',
                title: 'Hair Salon バナー',
                type: 'DTP',
                alt: 'home-works-image6',
                modalImageUrl: '/images/works-image6.png',
                author: '呉島 大暉',
                technology: 'Illustrator',
                productionPeriod: '2023.11~ / 1 week',
                url: '',
                comment: '美容室のバナーを制作しました。画像を含めて全体的に黒色・白色に統一した上で、強調したい部分には赤色を使用し、「スタイリッシュなメンズヘアーサロン」というイメージでバナーを制作しました。今後の課題としては、文章や図形が全て理路整然と並んでいて殆ど動きのないデザインになってしまったので、次回は斜めや円など動きのあるデザインを取り入れていきたいと考えています。',
            },

        ],
    },
]


const WorksMain = () => {

    const [showModal, setShowModal] = useState(null);

    const handleButtonClick = (index) => {
        setShowModal(index);
    };

    const [index, setIndex] = useState(0);

    return (
        <article className='w-full min-h-screen mx-auto'>
            <div className="container mx-auto">
                <div className='mx-2 sm:mx-6 lg:mx-12 pb-12 lg:pb-20'>
                    <motion.div
                        className='text-center pb-0 xl:pb-10'
                        // スクロールアニメーション
                        variants={fadeInUp}
                        exit={{ opacity: 0 }}
                        initial="offscreen"
                        whileInView="onscreen"
                        viewport={{ once: true, amount: "0.4" }}
                    >
                        <h2 className='pb-5 text-4xl sm:text-5xl lg:text-8xl 2xl:text-9xl font-normal '>-WORKS- <span className='text-xl sm:text-2xl xl:text-3xl align-middle'>〜これまでの実績〜</span></h2>
                    </motion.div>
                    <div className='h-full xl:mx-10 2xl:mx-12 pt-10 xl:py-0 '>
                        <div className="container mx-auto px-4 md:px-12"></div>
                        <div>
                            <motion.div
                                className='flex justify-center gap-x-7 xs:gap-x-8 md:gap-x-12 xl:gap-x-14 2xl:gap-x-20 xl:mx-0 mb-4 xl:mt-6 xl:mb-8'
                                // スクロールアニメーション
                                variants={fadeInUp}
                                exit={{ opacity: 0 }}
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: "0.4" }}
                            >
                                {/* 選択項目 */}
                                {WorksData.map((item, itemIndex) => {
                                    return <button
                                        key={itemIndex}
                                        className={`${index === itemIndex ? 'text-navy after:w-[100%] after:bg-navy after:transition-all after:duration-500' : 'text-dark-black'
                                            } tracking-widest cursor-pointer button-reset font-semibold text-xl hover:after:bg-navy hover:text-navy sm:text-2xl xl:text-3xl relative after:w-8 after:h-[2px] after:bg-dark-black after:absolute after:-bottom-1 after:left-0 duration-500 after:duration-500`}
                                        onClick={() => setIndex(itemIndex)}
                                    >
                                        {/* 項目 */}
                                        {item.title}
                                    </button>
                                })}
                            </motion.div>

                            {/* 作品画像（グリッド） */}
                            <div className=' h-full lg:grid grid-cols-2 justify-items-center gap-x-24 2xl:gap-x-28 mx-auto mt-10 mb-10 drop-shadow-lg'>
                                {WorksData[index].contents.map((item, itemIndex) => {
                                    return <button
                                        key={itemIndex}
                                        className='button-reset m-4 lg:m-0 w-full flex-1 flex flex-col md:flex-row max-w-max mx-auto mb-2 text-xs sm:text-sm md:text-base  text-dark-black'
                                        onClick={() => handleButtonClick(itemIndex)}
                                    >
                                        <article>
                                            <div className='overflow-hidden'>
                                                <Image
                                                    width={500}
                                                    height={300}
                                                    alt={item.alt}
                                                    className="object-cover block hーauto w-auto hover:scale-110 duration-500"
                                                    src={item.imageUrl}
                                                    unoptimized
                                                />
                                            </div>

                                            <div className=" items-center justify-between leading-tight py-1">
                                                <p className="text-xs sm:text-sm md:text-base text-deep-gray bg-pale-gray p-2 inline-block my-2 rounded py-1 ">{item.type}</p>
                                                <h3 className=" font-normal text-xs sm:text-sm md:text-base pb-4 2xl:pb-12">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </article>
                                    </button>
                                })}
                            </div>

                            {/* モーダル */}
                            {WorksData[index].contents.map((item, itemIndex) => (
                                <Modal key={itemIndex} isVisible={showModal === itemIndex} onClose={() => setShowModal(null)}>
                                    <div className='p-16'>
                                        <div>
                                            <h1 className='text-2xl sm:text-3xl font-medium my-3'>{item.title}</h1>
                                            <ul className='text-xs md:text-xl text-dark-black font-medium'>
                                                <li className='mb-2'>
                                                    <span className='text-gray-400'>コーディング/デザイン：</span>
                                                    {item.author}
                                                </li>
                                                <li className='break-all mb-2'>
                                                    <div className='text-gray-400 flex'>
                                                        <span className=' whitespace-nowrap'>使用した技術：</span>
                                                        <div className='text-dark-black break-all'>
                                                            {item.technology}
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='mb-2'>
                                                    <span className='text-gray-400'>制作期間：</span>
                                                    {item.productionPeriod}
                                                </li>
                                                <li className='break-all'>
                                                    <span className='text-gray-400'>URL：</span>
                                                    <a href={item.url} target='_blank' rel='noopener noreferrer' className='text-sea-blue'>{item.url}</a>
                                                </li>
                                            </ul>
                                            <div className='my-10 mx-auto w-full md:w-4/5'>
                                                <h3 className='text-sm md:text-xl border-b-2 border-dark-black mb-2'>作品について</h3>
                                                <p className='text-xs md:text-base text-dark-black break-all leading-loose md:leading-[30px] tracking-wider'>
                                                    {item.comment.split('\n').map((line, index) => (
                                                        <span key={index}>
                                                            {line}
                                                            <br />
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className='mx-auto my-10 drop-shadow-lg'>
                                                <Image
                                                    width={750}
                                                    height={500}
                                                    alt={item.alt}
                                                    className="object-contain block hーauto w-auto mx-auto"
                                                    src={item.modalImageUrl}
                                                    unoptimized
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </Modal>
                            ))}

                        </div>

                    </div>
                </div>
            </div>
        </article>
    )
}

export default WorksMain