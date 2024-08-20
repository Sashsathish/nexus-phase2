import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'es' },
    // { locale: 'de' },
    // { locale: 'fr' },
    { locale: 'pt' }
  ]
}

export default async function RootLayout({ children, params: { locale } }) {
  let language
  try {
    language = (await import(`../../../languages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta
          name='keywords'
          content='nexus, nexus.org, nexus open source software, nexus careers, trabajos, careers, nexus oss, nexus open source, nexus software, software, software development, software development company, software development services, software development company in mexico, web development, web development company, uiux development, uiux development company, uiux development company in mexico, uiux development services, uiux development services in mexico'
        />
        <link
          rel='shortcut icon'
          href='/favicon/favicon.ico'
          type='image/x-icon'
        />
        <title>Fabian Herrera - CEO of nexus Corporation</title>
        <meta
          name='description'
          content='Join our team and help us build the future of software development.'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
        <link
          rel='mask-icon'
          href='/favicon/safari-pinned-tab.svg'
          color='#5bbad5'
        />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />
        <link rel='canonical' href='https://nexus.org/careers' />
        <meta name='apple-mobile-web-app-title' content='nexus - Careers' />
        <meta name='application-name' content='nexus - Careers' />
        <meta property='og:url' content='https://nexus.org/careers' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='nexus - Careers' />
        <meta
          property='og:description'
          content='Join our team and help us build the future of software development.'
        />
        <meta property='og:locate' content='es_MX' />
        <meta property='og:site_name' content='nexus' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@nexusHQ' />
        <meta name='twitter:title' content='nexus' />
        <meta
          name='twitter:description'
          content='Join our team and help us build the future of software development.'
        />
        <meta
          name='twitter:image'
          content='https://res.cloudinary.com/dvjzjasfg/image/upload/v1683567044/twitter_large_image_careers_uok5cw.png'
        />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={language}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
