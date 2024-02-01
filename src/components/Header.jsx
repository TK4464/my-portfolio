import { useState } from 'react'
import Sns from './Sns'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';


const Header = () => {
    const [open, setOpen] = useState(false);

    const handleMenuOpen = () => {
        setOpen(!open);
    }

    const handleMenuClose = () => {
        setOpen(false);
    }

    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'ABOUT', path: '/about' },
        { label: 'WORKS', path: '/works' },
        { label: 'CONTACT', path: '/contact' },
    ];

    const navigation = usePathname();

    return (
        <header className='text-dark-black  bg-gradient-to-b from-white-2  w-full left-0 fixed top-0 z-20'>
            <div className='container flex mx-auto py-5 flex-row  w-full sm:w-11/12 items-center justify-between px-4 sm:px-0'>
                <div className='mb-0 mx-2 sm:mx-3 lg:mx-12'>
                    <Link href='/'>
                        <Image
                            width={500}
                            height={500}
                            alt="Taiki Kureshima Portfolio"
                            style={{ objectFit: 'contain' }}
                            className="block hーauto w-auto mx-auto h-[40px] sm:h-[60px] md:h-[70px] lg:h-[75px]"
                            src="/images/portfolio-mainlogo.png"
                            priority
                        />
                    </Link>
                </div>
                <div className='flex'>
                    <Sns />
                    <nav className={
                        // trueの時とfalseの時でcssを分ける
                        open
                            ? "z-[50] bg-navy/80 top-0 right-0 bottom-0 left-0 h-screen fixed flex flex-col"
                            : " right-[-100%] fixed"
                    }>
                        <ul className={
                            open
                                ? "flex h-screen justify-center items-center flex-col gap-10 text-xl"
                                : "block "
                        }
                        >
                            {navItems.map((item, index) => (
                                <li key={index} className='text-white-2 hover:text-deep-gray duration-500 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl'>
                                    <Link
                                        className={`${item.path === navigation && 'text-deep-gray'} relative flex items-center group hover:text-deep-gray transition-all duration-500`}
                                        onClick={handleMenuClose}
                                        href={item.path}
                                        // ページ遷移をした際,ページトップに行かないようにfalse
                                        scroll={false}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <button
                        className="z-[50] space-y-3 mx-3 sm:mx-5 lg:mr-12" onClick={handleMenuOpen}
                    >
                        <span className={
                            open
                                ? "block w-[24px] h-0.5 xs:w-8 xs:h-0.5 bg-white-gray translate-y-1 rotate-45 duration-500"
                                : "block w-[24px] h-0.5 xs:w-8 xs:h-0.5 bg-dark-black duration-500"
                        }
                        />
                        <span className={
                            open
                                ? "block w-[24px] h-0.5 xs:w-8 xs:h-0.5 bg-white-gray -translate-y-2.5 -rotate-45 duration-500"
                                : "block w-[24px] h-0.5 xs:w-8 xs:h-0.5 bg-dark-black duration-500"
                        }
                        />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default Header