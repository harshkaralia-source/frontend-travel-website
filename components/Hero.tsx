import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
    return (
        <section className='maxContainer paddingContainer flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'>

            <div className='hero-map' />

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <Image
                    src='/camp.svg'
                    className='absolute -left-[5px] -top-[30px] w-10 lg:w-[50px]'
                    width={50} height={50}
                    alt='' />

                <h1 className='lg:text-[88px] text-[52px] font-[700] leading-[120%]'>Putuk Truno <br /> Camp Area</h1>

                <p className="text-base mt-6 text-gray-500 xl:max-w-[520px]">We want to be on each of your journeys seeking the satisfaction of seeing the in corruptible beauty of nature. We can help you on an adventure around the world in just one app.</p>

                <div className="my-11 flex flex-wrap gap-5">
                    <div className="flex items-center gap-2">
                        {Array(5).fill(1).map((_, index) => (
                            <Image
                                key={index}
                                src='/star.svg'
                                width={24}
                                height={24}
                                alt=''
                            />
                        ))}

                        <p className="text-base font-[700] lg:text-[18px]">
                            198k
                            <span className='font-normal ml-1 underline'>
                                Good Reviews
                            </span>
                        </p>
                    </div>
                    <div className="flex w-full gap-3 sm:flex-row">
                        <Button
                            type='button'
                            title='Download App'
                            variant='btn_green' />
                        <Button
                            type='button'
                            icon='./play.svg'
                            title='How we work?'
                            variant='btn_white' />
                    </div>
                </div>
            </div>

            <div className="flex flex-1 items-start relative">
                <div className="relative z-20 w-[268px] flex flex-col gap-8 rounded-3xl bg-zinc-800 px-7 py-8">
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between">
                            <p className="text-gray-300">Location</p>
                            <Image
                                src='/close.svg'
                                alt=''
                                width={24}
                                height={24}
                            />
                        </div>
                        <p className="text-[20px] font-bold text-white">Aguas Calientes</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                            <p className=" text-gray-300">Distance</p>
                            <p className="text-[20px] font-bold text-white">173.28 km</p>
                        </div>
                        <div className="flex flex-col">
                            <p className=" text-gray-300">Elevation</p>
                            <p className="text-[20px] font-bold text-white">2.040 km</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
