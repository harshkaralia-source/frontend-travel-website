'use client'
import { FEATURES } from '@/constants'
import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const Features = () => {
  const phoneRef = useRef(null)
  const listRef = useRef(null)

  const isPhoneInView = useInView(phoneRef, {
    once: true,
    amount: 0.5
  })

  const isListInView = useInView(listRef, {
    once: true,
    amount: 0.3 // Trigger when 30% of the element is visible
  })

  return (
    <section className='flex items-center justify-center flex-col overflow-hidden py-24'>
      <div className="maxContainer flex paddingContainer relative w-full justify-end">
        {/* Phone Image Animation */}
        <motion.div
          ref={phoneRef}
          initial={{ x: -200, opacity: 0 }}
          animate={isPhoneInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-1 lg:min-h-[900px]">
          <Image
            src='/phone.png'
            alt='phone'
            width={440}
            height={0}
            className='hidden lg:flex rotate-12'
          />
        </motion.div>

        {/* Features Section */}
        <div className="z-20 flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src='/camp.svg'
              alt=''
              width={50}
              height={50}
              className='absolute -left-[5px] -top-[28px] w-10 lg:w-[50px]'
            />
            <h2 className="font-bold text-[40px] lg:text-[64px]">Our Features</h2>
          </div>

          {/* Features List Animation */}
          <motion.ul
            ref={listRef}
            initial={{ x: 200, opacity: 0 }}
            animate={isListInView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className='mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12'>
            {FEATURES.map(feature => (
              <FeatureItem
                key={feature.title}
                title={feature.title}
                icon={feature.icon}
                description={feature.description} />
            ))}
          </motion.ul>
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
