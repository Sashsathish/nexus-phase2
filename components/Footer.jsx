'use client'

import Link from 'next/link'
import DropdownLang from './Dropdown-lang'
import { useState } from 'react'
import { Sun, Moon, System } from './Icons'
import { useTranslations } from 'next-intl'

export default function FooterOSS() {
  const t = useTranslations('Footer')
  const [theme, setTheme] = useState('system')
  const options = [
    {
      icon: <Sun />,
      text: 'light'
    },
    {
      icon: <Moon />,
      text: 'dark'
    },
    {
      icon: <System />,
      text: 'system'
    }
  ]

  return (
    <footer className='bg-black border-t border-gray-100/10'>
      <div className='grid grid-cols-2 gap-8 px-6 py-8 md:grid-cols-5'>
        
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[GilroyBold]'>
            {t('title2')}
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link
                href='https://www.linkedin.com/company/boxode-software-pvt-ltd/'
                target='_blank'
                className='hover:underline'
              >
                LinkedIn
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link
                href='https://api.whatsapp.com/send?phone=918778993293'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                WhatsApp
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link
                href='https://www.facebook.com/people/boxode-Info/61560989377318/?mibextid=LQQJ4d&rdid=mmdnd3YLlI51gBEg&share_url=https%253A%252F%252Fwww.facebook.com%252Fshare%252FchBu6tfu8D9P88vq%252F%253Fmibextid%253DLQQJ4d'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Facebook
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link
                href='https://www.instagram.com/boxodeinfo.in/'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Instagram
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[GilroyBold]'>
            {t('title3')}
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link href='/oss' className='hover:underline'>
                {t('OSS')}
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link href='/oss/contributing' className='hover:underline'>
                {t('OSSC')}
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link href='/oss/coc' className='hover:underline'>
                {t('OSSCO')}
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link
                href='https://github.com/boxode'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                Github
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[GilroyBold]'>
            {t('title4')}
          </h2>
          <ul className='text-gray-100/80 text-[11px]'>
            <li className='mb-4 font-[GilroyRegular] flex flex-row items-center gap-1'>
              <Link href='/careers' className='hover:underline'>
                {t('Careers')}
              </Link>
              <span className='flex bg-slate-100/20 px-3 py-[2px] rounded-full text-orange-300 font-[GilroyRegular] font-semibold no-underline'>
                new
              </span>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link href='/ceo' className='hover:underline'>
                CEO
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link href='/about' className='hover:underline'>
                {t('Aboutboxode')}
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <Link href='/privacy' className='hover:underline'>
                {t('PrivacyAB')}
              </Link>
            </li>
            <li className='mb-4 font-[GilroyRegular] flex flex-row items-center gap-1'>
              <Link href='/brand' className='hover:underline'>
                Brand
              </Link>
              <span className='flex bg-slate-100/20 px-3 py-[2px] rounded-full text-orange-300 font-[GilroyRegular] font-semibold no-underline'>
                new
              </span>
            </li>
          </ul>
        </div>
        <div>
          <h2 className='mb-6 text-[15px] font-medium text-gray-100/80 uppercase font-[GilroyBold]'>
            {t('title5')}
          </h2>
          <ul className='text-gray-100/80 text-[11px] inline-flex flex-col items-center justify-center'>
            <li className='mb-16 font-[GilroyRegular] text-left'>
              <DropdownLang />
            </li>
            <li className='mb-4 font-[GilroyRegular]'>
              <div className='relative inline-flex items-center justify-end p-0.5 mb-2 mr-2 overflow-hidden rounded-full group bg-gradient-to-br from-[#b8b8b8e1] to-[#3b3b3bcc] focus:ring-4 focus:outline-none'>
                <div
                  className='bg-black rounded-full flex items-center justify-center gap-4 border border-gray-100/40 px-3 py-2 select-none'
                  role='radiogroup'
                >
                  {options?.map((opt) => (
                    <button
                      key={opt.text}
                      onClick={() => setTheme(opt.text)}
                      className={`text-white/30 transition-colors duration-150 hover:text-white ${
                        theme === opt.text && 'text-white/100'
                      }`}
                      aria-checked='false'
                      aria-label='Toggle theme'
                      data-version='v1'
                      role='radio'
                      type='button'
                    >
                      <span>{opt.icon}</span>
                    </button>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className='px-5 md:px-6 py-6 bg-black md:flex md:items-center md:justify-between'>
        <picture>
          <source
            media='(prefers-color-scheme: dark)'
            srcSet='/svg/plex-svgrepo-com.svg'
          />
          <source
            media='(prefers-color-scheme: light)'
            srcSet='/svg/plex-svgrepo-com.svg'
          />
          <img
            alt='boxode Logo'
            src='/svg/plex-svgrepo-com.svg'
            width='100'
            height='40'
          />
        </picture>
        <div className='inline-block md:flex mt-4 space-x-3 sm:justify-center md:mt-0 font-[GilroyRegular]'>
          <Link
            href='/contactus'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('ContactB')}
          </Link>
          <Link
            href='/sitemap'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('Sitemap')}
          </Link>
          <Link
            href='/privacystatement'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('PrivacyS')}
          </Link>
          <Link
            href='/trademarks'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('Trademarks')}
          </Link>
          <Link
            href='/security-and-eco'
            className='text-[11px] text-gray-100/80 hover:underline'
          >
            {t('SYE')}
          </Link>
          <span className='text-[11px] text-gray-100/80 sm:text-center'>
            © boxode, Ltd. <span id='year'>2024</span>
          </span>
        </div>
      </div>
    </footer>
  )
}
