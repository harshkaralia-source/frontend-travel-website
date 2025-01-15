import Image from 'next/image'

const Guide = () => {
  return (
    <section className='flex items-center justify-center flex-col'>
      <div className="paddingContainer maxContainer w-full pb-24">
        <Image
          src='/camp.svg'
          alt=''
          width={50}
          height={50} />

        <p className="uppercase text-[18px] -mt-1 mb-3 text-green-400">
          we are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="font-bold text-[40px] lg:text-[64px] xl:max-w-[390px]">Guide You to Easy Path</h2>
          <p className="text-[16px] text-gray-500 xl:max-w-[520px]">Only with the Hilink application you wil no longer get lost and get lost again, because we already support offline maps when there is internet connection in the field. Invite your friends and relatives to have fun in the wilderness through the valley and reach the top of the mountain.</p>
        </div>
      </div>

      <div className="flex items-center justify-center maxContainer relative w-full">
        <Image
          src='/boat.png'
          alt='boat'
          width={1440}
          height={580}
          className='w-full object-cover object-center 2xl:rounded-[40px]'
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src='/meter.svg'
            alt=''
            width={16}
            height={158}
            className='h-full w-auto' />
          <div className="flex items-center justify-between flex-col">
            <div className="flex flex-col w-full">
              <div className="flex items-center justify-between w-full">
                <p className="text-[16px] text-gray-500">Destination</p>
                <p className="text-[16px] font-bold text-green-500">48 min</p>
              </div>

              <p className="text-[20px] font-bold mt-2">Aguas Calientes</p>
            </div>

            <div className="flex flex-col w-full">
              <p className="text-[16px] text-gray-500">Start track</p>
              <h4 className="text-[20px] font-bold mt-2 whitespace-nowrap">Wonorejo Pasuruan</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Guide
