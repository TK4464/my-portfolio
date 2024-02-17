import React from 'react'
import { useState } from 'react';
import Modal from '../Modal';
import { motion } from 'framer-motion';
import { fadeInImageUp, fadeInUp } from '../fadeIn';
import Image from 'next/image';

const WorksData = [
    {
        title: 'ALL',
        contents: [
            {
                imageUrl: '/images/works-image2.png',
                title: '就活掲示板 Reboot',
                type: 'Webapp',
                alt: 'works-image2',
                modalImageUrl: '/images/works-image2.png',
                author: '呉島 大暉',
                technology: 'Next.js/TailwindCSS/Illustrator/Photoshop/XD/VSCode/Supabase',
                productionPeriod: '2024.1~ / 1 month',
                url: 'https://internet-forum-mocha.vercel.app/',
                comment: '将来、フロントエンドエンジニアという選択肢を視野に入れた時に、動的なWebアプリを作れるようになっておいた方が良いと考えたこと、また、日頃から自分のようなエンジニアを目指している就業経験有りの学生に対する就活情報が少ないと感じていたため、同じような境遇の人たちと情報交換できたら良いのではないかと考え、就活用掲示板のようなものを制作しました。\nフロント側ではNext.js14を使い、バックエンド側では知識が乏しいこともあり、Supabaseを使用しました。とはいえ、まだまだSupabaseの知識自体も乏しく、とにかく動的なものを作るということで手一杯になったため、今後さらに勉強し、単なる掲示板ではなく就活Webアプリとして使えるようにオリジナルの機能を追加していきたいと思います。',
            },
            {
                imageUrl: '/images/works-image1.png',
                title: 'Taiki Kureshima Portfolio',
                type: 'Website',
                alt: 'works-image1',
                modalImageUrl: '/images/works-image1.png',
                author: '呉島 大暉',
                technology: 'Next.js/TailwindCSS/Illustrator/Photoshop/AfterEffects/Figma/VSCode',
                productionPeriod: '2023.11~ / 2 months',
                url: 'https://taiki-kureshima.com/',
                comment: '0からポートフォリオサイトの制作を行いました。\nデザイン面においてはシンプルさを意識して見る人にとってわかりやすくすることを意識しました。\n技術面おいては初めてNext.jsを使用してのWeb制作で手探りだったこともあり、配列を使ってコードの簡略化などを試みたものの全体的にコードが複雑になってしまった点や、FramerMotionを使用したページ遷移時のアニメーションの動きがnext13のAppRouterを使用した際に上手く行かず結果的にPagesRouterでのサイト制作になった点は今後の課題だと考えています。\nまた、今回はvercelを使用しないで next export で静的サイトとしてレンタルサーバーにデプロイしたため、今後はレンタルサーバーにNode.jsをインストールし、Nodemailer等でコンタクトページ内に本格的なフォームを作成できるようにバックエンド側の部分を改善していきたいと考えています。\nNext.jsに触れる機会は今後も確実にあると思うのでSSRやCSR、SSGなどについてや、動的なサイトを作るための技術などについても更に学んでいきたいと考えています。',
            },
            {
                imageUrl: '/images/works-image3.png',
                title: 'Boulangerie HAL',
                type: 'Website',
                alt: 'works-image3',
                modalImageUrl: '/images/works-image3.png',
                author: '呉島 大暉',
                technology: 'HTML/CSS/JavaScript/jquery/Illustrator/Photoshop/Figma/VSCode',
                productionPeriod: '2024.1~ / 2 weeks',
                url: 'https://taikikureshima.com/BoulangerieHAL/',
                comment: 'ブーランジェリーサイトの制作を行いました。\nコンセプトは、「伝統と洗練」。ターゲットは 「高品質な食材や製法など食にこだわりを持つ25歳以上の大人」です。\nまずデザインにおいては、紺や白を落ち着いた色を主体としつつも、あえてグレーの背景の左側に白を残すなど、単調にならないように工夫しました。技術面においては、今回は生のJavaScriptだけでなくjQueryも使用しました。\n今後に向けた課題としては、毎回シンプルな色構成のサイトを制作することが多いので派手目な色を使用したデザインにも挑戦し、デザインの引き出しを増やしていきたいと考えています。',
            },
            {
                imageUrl: '/images/works-image4.png',
                title: 'アーティストサイト',
                type: 'Website',
                alt: 'works-image4',
                modalImageUrl: '/images/works-image4.png',
                author: '呉島 大暉',
                technology: 'React.js/Tailwind CSS/Illustrator/Photoshop/Blender/XD/VSCode',
                productionPeriod: '2023.7~ / 1 month',
                url: 'https://tk4464.xsrv.jp/',
                comment: '※こちらのサイトは著作権の関係でアクセス制限をかけています。閲覧する場合は以下のユーザー名とパスワードをリンク先で入力してください。\nユーザー名：artistsite\nパスワード：hal30169\n\nアーティストサイトを制作しました。\nデザイン面に関しては特に、アーティストのイメージに合致し、尚且つ安っぽさが出ないカラー選択をすることにかなり苦戦しましたが、最終的に緑系の色を使用することで落ち着きました。\nまた、フッターの部分がシンプルすぎて面白みに欠けていたのでBlenderで簡単な3Dモデルを作成し、React-Three-Fiverで3Dモデルを描写してみるなど独自性が出るように少し遊んでみました。\n技術面においては、初めてReact.jsを使用したのですが、複数のページがあるサイトだったためルーティングのことなどを考えると、Next.jsといった別のフレームワークを使用した方が結果的には良かったと感じました。\nただ、技術選定の仕方など今後何か新規開発していくにあたって、かなり勉強になったと思います。',
            },
            {
                imageUrl: '/images/works-image6.png',
                title: 'ECサイト',
                type: 'Website',
                alt: 'works-image6',
                modalImageUrl: '/images/works-image6.png',
                author: '呉島 大暉',
                technology: 'WordPress/Elementor/CSS/WooCommerce/Photoshop',
                productionPeriod: '2024.2~ / 1 week',
                url: 'https://taikikureshima.blog/',
                comment: '※こちらのサイトはダミーのECサイトのためアクセス制限をかけています。閲覧する場合は以下のユーザー名とパスワードをリンク先で入力してください。\nユーザー名：tk4464\nパスワード：ecsite\n\n今回は制作を短期間で行ったことや、1度WordPressでのサイト制作も経験しておきたかったことからWordPressのホームページビルダープラグインであるElementorを使用し、ダミーのECサイトを制作をしました。\nデザインの観点では、石鹸を扱うサイトという設定にしたため、黒と白を基調に淡い青色を所々に使用することで、スタイリッシュな印象を与えつつも清潔感を大切にしました。\n技術的なことに関しては、慣れないElementorでの操作やバグの対処、既にテーマに設定されているCSSを一度打ち消して独自のCSSを組み込むことなどに苦戦しました。\n今後は、フルサイト編集などでカスタマイズして、WordPressでも更に本格的なサイトを制作できるスキルを磨いていきたいと考えています。',
            },
            {
                imageUrl: '/images/works-image5.png',
                title: 'Café de paris',
                type: 'Website',
                alt: 'works-image5',
                modalImageUrl: '/images/works-image5.png',
                author: '呉島 大暉',
                technology: 'HTML/CSS/JavaScript/Illustrator/Photoshop/Figma/VSCode',
                productionPeriod: '2023.11~ / 2 weeks',
                url: 'https://taikikureshima.com/Caf%c3%a9%20de%20paris/',
                comment: 'カフェサイトの制作を行いました。\nコンセプトは、「明るさと清潔感」。ターゲットは「都市部に住む若者・ビジネスパーソン」です。\nデザインにおいては、最初にサイトを見たときにインパクトが出るようにフルスクリーンで店内の写真を切り替えて表示させるようにしました。また、カフェということでメニューや店内の写真が目立つように使用するカラーを主に白と黒とし、フォントも日本語に明朝体を使用することでシンプルかつ綺麗めに仕上げました。\n技術面においては,今回あえて生のJavaScriptとjQueryに依存しないライブラリのみ使用して制作しました。\n今後に向けた課題としては、今のままだと要素が綺麗に並んでるだけで、サイトのデザインとして動きがないので、次回は曲線など何かしらサイトに動きが生まれるようなデザインに挑戦していきたいです。',
            },
            {
                imageUrl: '/images/works-image7.png',
                title: 'Hair Salon バナー',
                type: 'Design',
                alt: 'works-image7',
                modalImageUrl: '/images/works-image7.png',
                author: '呉島 大暉',
                technology: 'Illustrator',
                productionPeriod: '2023.11~ / 1 week',
                url: '',
                comment: 'ヘアーサロンのバナーを制作しました。画像を含めて全体的に黒色・白色に統一した上で、強調したい部分には赤色を使用し、「スタイリッシュなメンズヘアーサロン」というイメージでバナーを制作しました。今後の課題としては、文章や図形が全て理路整然と並んでいて殆ど動きのないデザインになってしまったので、次回は斜めや円など動きのあるデザインを取り入れていきたいと考えています。',
            },
        ],
    },
    {
        title: 'WEB',
        contents: [
            {
                imageUrl: '/images/works-image2.png',
                title: '就活掲示板 Reboot',
                type: 'Webapp',
                alt: 'works-image2',
                modalImageUrl: '/images/works-image2.png',
                author: '呉島 大暉',
                technology: 'Next.js/TailwindCSS/Illustrator/Photoshop/XD/VSCode/Supabase',
                productionPeriod: '2024.1~ / 1 month',
                url: 'https://internet-forum-mocha.vercel.app/',
                comment: '将来、フロントエンドエンジニアという選択肢を視野に入れた時に、動的なWebアプリを作れるようになっておいた方が良いと考えたこと、また、日頃から自分のようなエンジニアを目指している就業経験有りの学生に対する就活情報が少ないと感じていたため、同じような境遇の人たちと情報交換できたら良いのではないかと考え、就活用掲示板のようなものを制作しました。\nフロント側ではNext.js14を使い、バックエンド側では知識が乏しいこともあり、Supabaseを使用しました。とはいえ、まだまだSupabaseの知識自体も乏しく、とにかく動的なものを作るということで手一杯になったため、今後さらに勉強し、単なる掲示板ではなく就活Webアプリとして使えるようにオリジナルの機能を追加していきたいと思います。',
            },
            {
                imageUrl: '/images/works-image1.png',
                title: 'Taiki Kureshima Portfolio',
                type: 'Website',
                alt: 'works-image1',
                modalImageUrl: '/images/works-image1.png',
                author: '呉島 大暉',
                technology: 'Next.js/TailwindCSS/Illustrator/Photoshop/AfterEffects/Figma/VSCode',
                productionPeriod: '2023.11~ / 2 months',
                url: 'https://taiki-kureshima.com/',
                comment: '0からポートフォリオサイトの制作を行いました。\nデザイン面においてはシンプルさを意識して見る人にとってわかりやすくすることを意識しました。\n技術面おいては初めてNext.jsを使用してのWeb制作で手探りだったこともあり、配列を使ってコードの簡略化などを試みたものの全体的にコードが複雑になってしまった点や、FramerMotionを使用したページ遷移時のアニメーションの動きがnext13のAppRouterを使用した際に上手く行かず結果的にPagesRouterでのサイト制作になった点は今後の課題だと考えています。\nまた、今回はvercelを使用しないで next export で静的サイトとしてレンタルサーバーにデプロイしたため、今後はレンタルサーバーにNode.jsをインストールし、Nodemailer等でコンタクトページ内に本格的なフォームを作成できるようにバックエンド側の部分を改善していきたいと考えています。\nNext.jsに触れる機会は今後も確実にあると思うのでSSRやCSR、SSGなどについてや、動的なサイトを作るための技術などについても更に学んでいきたいと考えています。',
            },
            {
                imageUrl: '/images/works-image3.png',
                title: 'Boulangerie HAL',
                type: 'Website',
                alt: 'works-image3',
                modalImageUrl: '/images/works-image3.png',
                author: '呉島 大暉',
                technology: 'HTML/CSS/JavaScript/jquery/Illustrator/Photoshop/Figma/VSCode',
                productionPeriod: '2024.1~ / 2 weeks',
                url: 'https://taikikureshima.com/BoulangerieHAL/',
                comment: 'ブーランジェリーサイトの制作を行いました。\nコンセプトは、「伝統と洗練」。ターゲットは 「高品質な食材や製法など食にこだわりを持つ25歳以上の大人」です。\nまずデザインにおいては、紺や白を落ち着いた色を主体としつつも、あえてグレーの背景の左側に白を残すなど、単調にならないように工夫しました。技術面においては、今回は生のJavaScriptだけでなくjQueryも使用しました。\n今後に向けた課題としては、毎回シンプルな色構成のサイトを制作することが多いので派手目な色を使用したデザインにも挑戦し、デザインの引き出しを増やしていきたいと考えています。',
            },
            {
                imageUrl: '/images/works-image4.png',
                title: 'アーティストサイト',
                type: 'Website',
                alt: 'works-image4',
                modalImageUrl: '/images/works-image4.png',
                author: '呉島 大暉',
                technology: 'React.js/TailwindCSS/Illustrator/Photoshop/Blender/XD/VSCode',
                productionPeriod: '2023.7~ / 1 month',
                url: 'https://tk4464.xsrv.jp/',
                comment: '※こちらのサイトは著作権の関係でアクセス制限をかけています。閲覧する場合は以下のユーザー名とパスワードをリンク先で入力してください。\nユーザー名：artistsite\nパスワード：hal30169\n\nアーティストサイトを制作しました。\nデザイン面に関しては特に、アーティストのイメージに合致し、尚且つ安っぽさが出ないカラー選択をすることにかなり苦戦しましたが、最終的に緑系の色を使用することで落ち着きました。\nまた、フッターの部分がシンプルすぎて面白みに欠けていたのでBlenderで簡単な3Dモデルを作成し、React-Three-Fiverで3Dモデルを描写してみるなど独自性が出るように少し遊んでみました。\n技術面においては、初めてReact.jsを使用したのですが、複数のページがあるサイトだったためルーティングのことなどを考えると、Next.jsといった別のフレームワークを使用した方が結果的には良かったと感じました。\nただ、技術選定の仕方など今後何か新規開発していくにあたって、かなり勉強になったと思います。',
            },
            {
                imageUrl: '/images/works-image6.png',
                title: 'ECサイト',
                type: 'Website',
                alt: 'works-image6',
                modalImageUrl: '/images/works-image6.png',
                author: '呉島 大暉',
                technology: 'WordPress/Elementor/CSS/WooCommerce/Photoshop',
                productionPeriod: '2024.2~ / 1 week',
                url: 'https://taikikureshima.blog/',
                comment: '※こちらのサイトはダミーのECサイトのためアクセス制限をかけています。閲覧する場合は以下のユーザー名とパスワードをリンク先で入力してください。\nユーザー名：tk4464\nパスワード：ecsite\n\n今回は制作を短期間で行ったことや、1度WordPressでのサイト制作も経験しておきたかったことからWordPressのホームページビルダープラグインであるElementorを使用し、ダミーのECサイトを制作をしました。\nデザインの観点では、石鹸を扱うサイトという設定にしたため、黒と白を基調に淡い青色を所々に使用することで、スタイリッシュな印象を与えつつも清潔感を大切にしました。\n技術的なことに関しては、慣れないElementorでの操作やバグの対処、既にテーマに設定されているCSSを一度打ち消して独自のCSSを組み込むことなどに苦戦しました。\n今後は、フルサイト編集などでカスタマイズして、WordPressでも更に本格的なサイトを制作できるスキルを磨いていきたいと考えています。',
            },
            {
                imageUrl: '/images/works-image5.png',
                title: 'Café de paris',
                type: 'Website',
                alt: 'works-image5',
                modalImageUrl: '/images/works-image5.png',
                author: '呉島 大暉',
                technology: 'HTML/CSS/JavaScript/Illustrator/Photoshop/Figma/VSCode',
                productionPeriod: '2023.11~ / 2 weeks',
                url: 'https://taikikureshima.com/Caf%c3%a9%20de%20paris/',
                comment: 'カフェサイトの制作を行いました。\nコンセプトは、「明るさと清潔感」。ターゲットは「都市部に住む若者・ビジネスパーソン」です。\nデザインにおいては、最初にサイトを見たときにインパクトが出るようにフルスクリーンで店内の写真を切り替えて表示させるようにしました。また、カフェということでメニューや店内の写真が目立つように使用するカラーを主に白と黒とし、フォントも日本語に明朝体を使用することでシンプルかつ綺麗めに仕上げました。\n技術面においては,今回あえて生のJavaScriptとjQueryに依存しないライブラリのみ使用して制作しました。\n今後に向けた課題としては、今のままだと要素が綺麗に並んでるだけで、サイトのデザインとして動きがないので、次回は曲線など何かしらサイトに動きが生まれるようなデザインに挑戦していきたいです。',
            },
        ],
    },
    {
        title: 'AD',
        contents: [
            {
                imageUrl: '/images/works-image7.png',
                title: 'Hair Salon バナー',
                type: 'Design',
                alt: 'home-works-image7',
                modalImageUrl: '/images/works-image7.png',
                author: '呉島 大暉',
                technology: 'Illustrator',
                productionPeriod: '2023.11~ / 1 week',
                url: '',
                comment: 'ヘアーサロンのバナーを制作しました。画像を含めて全体的に黒色・白色に統一した上で、強調したい部分には赤色を使用し、「スタイリッシュなメンズヘアーサロン」というイメージでバナーを制作しました。今後の課題としては、文章や図形が全て理路整然と並んでいて殆ど動きのないデザインになってしまったので、次回は斜めや円など動きのあるデザインを取り入れていきたいと考えています。',
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
                                className='flex justify-center gap-x-7 xs:gap-x-8 md:gap-x-12 xl:gap-x-14 2xl:gap-x-20 xl:mx-0 mb-4 xl:mt-6 xl:mb-14'
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
                            <div className=' h-full lg:grid grid-cols-2 justify-items-center gap-x-24 2xl:gap-x-28 mx-auto mt-10 mb-10'>
                                {WorksData[index].contents.map((item, itemIndex) => {
                                    return <button
                                        key={itemIndex}
                                        className='button-reset m-4 lg:m-0 w-full flex-1 flex flex-col md:flex-row max-w-max mx-auto mb-2 text-xs sm:text-sm md:text-base  text-dark-black cursor-pointer'
                                        onClick={() => handleButtonClick(itemIndex)}
                                    >
                                        <motion.article
                                            variants={fadeInImageUp}
                                            exit={{ opacity: 0 }}
                                            initial="offscreen"
                                            whileInView="onscreen"
                                            viewport={{ once: true, amount: "0.4" }}
                                        >
                                            <div className='overflow-hidden drop-shadow-lg'>
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
                                                <p className="text-xs sm:text-sm md:text-base text-deep-gray bg-pale-gray p-2 inline-block my-2 rounded py-1 drop-shadow-lg">{item.type}</p>
                                                <h3 className=" font-semibold text-xs sm:text-sm md:text-base pb-4 2xl:pb-12">
                                                    {item.title}
                                                </h3>
                                            </div>
                                        </motion.article>
                                    </button>
                                })}
                            </div>

                            {/* モーダル */}
                            {WorksData[index].contents.map((item, itemIndex) => (
                                <Modal key={itemIndex} isVisible={showModal === itemIndex} onClose={() => setShowModal(null)}>
                                    <div className='p-6 xs:p-16'>
                                        <div className='xl:px-16 xl:mx-16'>
                                            <h1 className='text-2xl sm:text-3xl font-medium my-3'>{item.title}</h1>
                                            <ul className='text-xs md:text-xl text-dark-black font-medium'>
                                                <li className='mb-2'>
                                                    <span className='text-gray-400'>コーディング/デザイン：</span>
                                                    {item.author}
                                                </li>
                                                <li className=' mb-2'>
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
                                            <div className='my-10 mx-auto w-full '>
                                                <h3 className='text-sm md:text-xl border-b-2 border-dark-black mb-2'>作品について</h3>
                                                <p className='text-xs md:text-base text-dark-black break-all leading-loose md:leading-[30px] normal-case tracking-wider'>
                                                    {item.comment.split('\n').map((line, index) => (
                                                        <span key={index}>
                                                            {line}
                                                            <br />
                                                        </span>
                                                    ))}
                                                </p>
                                            </div>
                                            <div className='mx-auto my-10 max-w-[750px] drop-shadow-lg  w-full md:w-4/5'>
                                                <Image
                                                    width={750}
                                                    height={500}
                                                    alt={item.alt}
                                                    className="object-contain hーauto w-auto mx-auto"
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