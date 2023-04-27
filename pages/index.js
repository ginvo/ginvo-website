import Head from 'next/head'
// import HeaderMain from "../components/header-main/header-main"
import Hero from "../components/hero/hero"
import SectionFeature from '../components/section/section-feature'

export default function Home() {
  return (
    <>
      <Head>
        <title>El generador de facturas | Ginvo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/brand/isotype/main.svg" />
        <link rel="mask-icon" href="/img/brand/isotype/main.svg" />
        <meta charSet="utf-8" />
        {/* Mobile behavior */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Soy Ginvo y quiero ser el facturador con el que disfrutes crear facturas electrónicas para tus clientes." />
        {/* Apple Homescreen */}
        <meta name="apple-mobile-web-app-title" content="Galarce" />
        <link rel="apple-touch-icon" href="/img/brand/isotype/main-apple.png" />
      </Head>
      <div className='background-main'>
        <div className='layout'>
          {/* Activar HeaderMain cuando haya menu */}
          {/* <HeaderMain
                text1="Discover"
                text2="How it works"
                text3="Features"
                text4="Contact"
              /> */}
          <Hero
            title1="Disfruta tu negocio"
            title2="Disfruta facturar"
            body="Soy Ginvo y quiero ser el facturador con el que disfrutes crear facturas electrónicas para tus clientes."
          />
          <SectionFeature
            title1='Emite facturas más rápido'
          />
          <div className='space'></div>
        </div>
      </div>
    </>
  )
}