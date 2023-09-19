import './styles.css'
import Script from 'next/script'
 
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1013496822643101"
     crossOrigin="anonymous" />
    <Script async src="https://www.googletagmanager.com/gtag/js?id=G-LM2LLSD1XB" />
    <Script id="google-analytics">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-LM2LLSD1XB');
      `}
    </Script>
    </>
  )
};