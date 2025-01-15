import Image from 'next/image'
import Button from './Button'

const GetApp = () => {
  return (
    <section className='flex items-center justify-center w-full flex-col pb-[100px] maxContainer'>
      <div className='maxcontainer relative flex w-full flex-col justify-between gap-32 overflow-hidden bg-cover bg-center bg-no-repeat px-6 py-12 text-white sm:flex-row sm:gap-12 sm:py-24 lg:px-20 xl:max-h-[598px] 2xl:rounded-[40px]' style={{ backgroundImage: 'url(/pattern.png)' }}>
        <div className="z-20 flex flex-1 w-full flex-col items-start justify-center gap-12">
          <h2 className="text-white text-[40px] font-bold lg:text-[64px] xl:max-w-[320px]">Get for free now!</h2>
          <p className="text-gray-300">Available on IOS and Android, download now.</p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type='button'
              title='App Store'
              icon='/apple.svg'
              variant='btn_white'
              full />
            <Button
              type='button'
              title='Play Store'
              icon='/android.svg'
              variant='btn_dark'
              full />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src='/phones.png' alt=''
            width={550} height={870} />
        </div>

      </div>
    </section>
  )
}

export default GetApp
