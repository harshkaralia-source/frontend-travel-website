import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Features = () => {
  return (
    <section className='flex items-center justify-center flex-col overflow-hidden py-24'>
      <div className="maxContainer flex paddingContainer relative w-full justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src='/phone.png'
            alt='phone'
            width={440}
            height={0}
            className='hidden lg:flex rotate-12'
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src='/camp.svg'
              alt=''
              width={50}
              height={50}
              className='absolute -left-[5px] -top-[28px] w-10 lg:w-[50px]'
            />
            <h2 className="font-bold text-[40px] lg:text-[64]">Our Features</h2>
          </div>
          <ul className='mt-10 grid gap-10 md:grid-cols-2 lg:gap-12 '>
            {FEATURES.map(feature => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

type FeatureProps = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start">
      <div className="rounded-full p-4 lg:p-7 bg-green-500">
        <Image
          src={icon}
          alt=''
          width={28}
          height={28}
        />
      </div>
      <h2 className="font-bold text-[20px] lg:text-[32px] mt-5 capitalize">
        {title}
      </h2>
      <p className="mt-5 bg-white/80 text-gray-500 lg:mt-[30px] lg:bg-transparent">
        {description}
      </p>
    </li>
  )
}

export default Features
