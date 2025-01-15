import { NAV_LINKS } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between maxContainer paddingContainer relative z-30 py-5'>
            <Link href='/'>
                <Image src='/hilink-logo.svg' width={74} height={74} alt='' />
            </Link>

            <ul className='hidden lg:flex gap-12'>
                {NAV_LINKS.map(item => (
                    <Link
                        href={item.href}
                        key={item.key}
                        className='text-gray-500 text-[16px]'>
                        {item.label}
                    </Link>
                ))}
            </ul>

            <div className="hidden lg:flex">
                <Button
                    type='button'
                    title='Login'
                    icon='./user.svg'
                    variant='btn_dark' />
            </div>

            <Image
            className='lg:hidden inline-block cursor-pointer'
                src='/menu.svg'
                width={32}
                height={32}
                alt='' />
        </nav>
    )
}

export default Navbar
