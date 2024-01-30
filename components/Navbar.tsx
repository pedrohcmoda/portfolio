import React from 'react';
import Image from 'next/image';
import { Socials } from '@/constants';
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-3 items-center">
                <Image
                src={"/pedromoda.jpeg"}
                alt="Pedro"
                width={100}
                height={100}
                className='rounded-full'
                ></Image>
                <h1 className='text-white text-[25px] font-semibold'>Pedro Henrique Cunha Moda</h1>
            </div>

            <div className='flex flex-row gap-5 mb-2'>
                {Socials.map((social) => (
                    <Link href={`${social.link}`} key={social.name} target='_blank'>
                        <Image
                            key={social.name}
                            src={social.src}
                            alt={social.name}
                            width={28}
                            height={28}
                        />
                    </Link>
                    
                ))}
            </div>
        </div>
    );
}

export default Navbar;
