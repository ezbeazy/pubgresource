import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'

export default {
    logo: <span>PUBG Resource</span>,
    project: {
      link: 'https://github.com/shuding/nextra'
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="PUBG Resource" />
        <meta property="og:description" content="Gaming resources for PUBG players" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1013496822643101"
     crossorigin="anonymous"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LM2LLSD1XB"></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-LM2LLSD1XB');
          `}
        </script>
        
      </>
    ),
    feedback: {
      useLink: ()=>{
        return 'https://pubgresource.com/contact'
      } 
    },
    
  }