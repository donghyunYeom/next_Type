import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head";
import '../public/styles.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <>
  <Head>
    <title>Discord</title>
  </Head>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
