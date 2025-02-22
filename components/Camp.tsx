'use client'
import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import { motion, useInView } from 'framer-motion'
import { useRef } from "react";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subtitle, peopleJoined }: CampProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-3xl 2xl:rounded-[40px]`}>
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-green-500 p-4">
            <Image
              src='/folded-map.svg'
              alt=""
              width={28}
              height={28}
            />
          </div>

          <div className="flex flex-col gap-1">
            <h4 className="text-[18px] font-bold text-white">{title}</h4>
            <p className="text-[14px] text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map(url => (
              <Image
                className="h-10 w-10 rounded-full inline-block"
                src={url}
                key={url}
                alt='person'
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="font-bold text-[16px] text-white md:text-[20px]">{peopleJoined}</p>
        </div>
      </div>
    </div>
  )
}

const Camp = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    amount: 0.2,
    once: true
  })
  return (
    <motion.section className='maxContainer relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20'>
      <div className='flex h-[340px] w-screen items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        <CampSite
          backgroundImage='bg-[url("/img-1.png")]'
          title='Kullu Manali Camp'
          subtitle='Himachal Pradesh, India'
          peopleJoined='50+ Joined' />

        <CampSite
          backgroundImage='bg-[url("/img-2.png")]'
          title='Mountain View Camp'
          subtitle='Somewhere in the Wilderness'
          peopleJoined='63+ Joined' />
      </div>

      <motion.div
        ref={ref}
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }} // Animate based on isInView
        transition={{ duration: 0.8, type: 'spring' }}
        className="flex items-end justify-end mt-10 px-6 lg:-mt-60 lg:mr-6"
      >
        <div className="bg-green-500 p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-[40px] xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="capitalize text-[24px] md:text-[32px] 2xl:text-[64px] text-white">
            <strong>Feeling lost </strong>
            and not knowing the way?
          </h2>

          <p className="text-[14px] xl:text-[16px] mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new climbing location, the possibility of getting lost is very large. That's why we are here for those of you who want to start an adventure
          </p>

          <Image
            src='/quote.svg'
            alt="camp-2"
            width={186}
            height={219}
            className="absolute bottom-0 -right-5"
          />
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Camp
