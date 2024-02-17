import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Footer = () => {
    const navItems = [
        { label: 'HOME', path: '/' },
        { label: 'ABOUT', path: '/about/' },
        { label: 'WORKS', path: '/works/' },
        { label: 'CONTACT', path: '/contact/' },
    ];
    const navigation = usePathname();

    return (
        <footer className='overflow-hidden p-0 '>
            <section className='w-full my-0 py-16 bg-dark-black'>
                <div className='max-w-[1000px] w-11/12 md:w-3/4 mx-auto '>
                    <div className='my-4'>
                        <ul className={"flex justify-center items-center gap-10 text-xl"}
                        >
                            {navItems.map((item, index) => (
                                <li key={index} className='text-white-gray hover:text-dark-black duration-500 text-sm xs:text-lg md:text-xl'>
                                    <Link
                                        className={`${item.path === navigation && 'text-deep-gray '} relative flex items-center group hover:text-deep-gray  transition-all duration-500`}
                                        href={item.path}
                                        // ページ遷移をした際,ページトップに行かないようにfalse
                                        scroll={false}
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='text-center my-2 mx-auto'>
                        <small className='text-white-gray text-xs xs:text-sm font-light'>&copy;2024 Taiki Kureshima Portfolio All Rights Reserved.</small>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer