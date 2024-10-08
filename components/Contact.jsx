'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import toast, { Toaster } from 'react-hot-toast'
import Image from 'next/image'
import ReCAPTCHA from 'react-google-recaptcha'
import { useTranslations } from 'next-intl'

export const Contact = () => {
  const t = useTranslations('Index')
  const form = useRef()
  const captchaRef = useRef(null)
  const [captcha, setCaptcha] = useState(null)

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_SERVICES_EMAIL_ID}`,
        `${process.env.NEXT_PUBLIC_SERVICES_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_SERVICES_USER_ID}`
      )
      .then(
        (result) => {
          if (captchaRef.current.getValue()) {
            console.log(result.text)
            form.current.reset()
            toast.success('Message sent successfully!')
            setCaptcha(true)
          } else {
            console.log('The user has not verified the CAPTCHA.')
            setCaptcha(false)
          }
        },
        (error) => {
          console.log(error.text)
          toast.error('Something went wrong!')
          setCaptcha(true)
        }
      )
  }

  const onChange = () => {
    if (captchaRef.current.getValue()) {
      console.log('The user has verified the CAPTCHA.')
      setCaptcha(true)
    }
  }

  return (
    <section id='contact' className='text-white body-font relative my-10'>
      <Toaster />
      <div className='container px-5 mx-auto'>
        <div className='flex items-center justify-center flex-col mt-10 mb-10'>
          <Image
            src='/3.webp'
            className='w-12 select-none'
            alt='2'
            width={100}
            height={100}
          />
          <h2 className='contact text-6xl lg:text-8xl font-[GilroyBold] tracking-normal p-4 opacity-90 select-none'>
            {t('Contact.title')}
          </h2>
          <p className='text-gray-100/50 text-md px-6 text-center lg:text-xl font-[GilroyRegular]'>
            {t('Contact.csubtitle1')}
          </p>
          <p className='text-gray-100/50 text-md px-6 text-center lg:text-xl font-[GilroyRegular]'>
            {t('Contact.csubtitle2')}
          </p>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <div className='lg:w-1/2 md:w-2/3 mx-auto'>
            <div className='flex flex-wrap -m-2'>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    forhtml='name'
                    className='leading-7 text-[20px] text-white font-[GilroyRegular]'
                  >
                    {t('Contact.form.name')}
                  </label>
                  <input
                    required
                    type='text'
                    name='user_name'
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 text-lg font-[GilroyRegular] outline-none text-black py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-1/2'>
                <div className='relative'>
                  <label
                    forhtml='email'
                    className='leading-7 text-[20px] text-white font-[GilroyRegular]'
                  >
                    {t('Contact.form.email')}
                  </label>
                  <input
                    required
                    type='email'
                    name='user_email'
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 text-lg outline-none text-black font-[GilroyRegular] py-2 px-3 leading-8 transition-colors duration-200 ease-in-out'
                  />
                </div>
              </div>
              <div className='p-2 w-full'>
                <div className='relative'>
                  <label
                    forhtml='message'
                    className='leading-7 text-[20px] text-white font-[GilroyRegular]'
                  >
                    {t('Contact.form.message')}
                  </label>
                  <textarea
                    required
                    name='message'
                    className='w-full bg-gray-100 rounded border border-gray-300 focus:border-sky-600 h-32 text-xl outline-none text-black py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out font-[GilroyRegular]'
                  />
                </div>
              </div>
              <div className='ml-2'>
                <ReCAPTCHA
                  sitekey= "6Le9UyoqAAAAAGH2mHcz2POPFrTgoVkVu3oASVxJ"
                  onChange={onChange}
                  theme='dark'
                  ref={captchaRef}
                />
                {captcha === false && (
                  <p className='text-red-500 font-[GilroyRegular] mt-2'>
                    CAPTCHA verification failed. Please try again.
                  </p>
                )}
              </div>
              <div className='p-2 w-full'>
                <button
                  type='submit'
                  value='Send'
                  className='flex mx-auto btn-contact'
                >
                  {t('Contact.form.send')}
                </button>
              </div>
            </div>
          </div>
        </form>
        <div className='mt-5'>
          <p className='text-gray-100/40 text-lg px-6 text-center font-[GilroyRegular] my-4'>
            {t('Contact.contact-info1')} <br />{' '}
            <span>
              <a
                href='mailto:nexusinfo.in'
                className='underline decoration-gray-500/50 hover:decoration-white hover:text-white transition duration-200 ease-in-out'
              >
                nexusinfo.in
              </a>
              &nbsp; or &nbsp;
              <a
                href='mailto:nexusinfo@gmail.com'
                className='underline decoration-gray-500/50 hover:decoration-white hover:text-white transition duration-200 ease-in-out'
              >
                nexusinfo@gmail.com
              </a>
            </span>
            &nbsp; {t('Contact.contact-info2')}
          </p>
        </div>
      </div>
    </section>
  )
}
