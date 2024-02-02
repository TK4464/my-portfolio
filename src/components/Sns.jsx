import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const socialMediaLinks = [
    {
        name: 'Wantedly',
        href: 'https://www.wantedly.com/id/taiki_kureshima_',
        icon: '/Wantedly_Mark_LightBG.svg'
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com/tk_4464?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr',
        icon: '/snsinsta.svg'
    },
    {
        name: 'X',
        href: 'https://x.com/tk4464',
        icon: '/snsx.svg'
    },

];


const Sns = () => {
    return (
        <div>
            <ul className='flex justify-around mx-2 sm:mx-3 lg:mx-12'>
                {socialMediaLinks.map((socialMedia, index) =>
                (<li key={index} className='my-1 first:mt-[3.3px] first:sm:mt-[3px] first:-mr-[6px] mt-[5px] last:sm:ml-8 last:lg:ml-14 ml-4 last:mt-1 sm:ml-6 lg:ml-12'>
                    <Link href={socialMedia.href} target='_blank' rel='noopener noreferrer'>
                        <Image
                            width={50}
                            height={50}
                            style={{ objectFit: 'contain' }}
                            className="h-6 xs:h-7 sm:h-9 xl:h-10 w-auto"
                            src={socialMedia.icon}
                            alt={`${socialMedia.name}アカウント`}
                            unoptimized
                        />
                    </Link>
                </li>))
                }
            </ul>
        </div>
    )
}

export default Sns