import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'


export default {
    logo: <span className='logo'>PUBG Resource</span>,
    project: {
      link: 'https://github.com/shuding/nextra'
    },
    useNextSeoProps() {
      const { asPath } = useRouter()
      if (asPath !== '/') {
        return {
          titleTemplate: '%s – PUBG Resource'
        }
      } else {
        return {
          titleTemplate: 'PUBG Resource'
        }
      }
    },
    head: (
      <>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content="PUBG Resource" />
        <meta property="og:description" content="Gaming resources for PUBG players" />
        <link rel="icon" href="/img/favicon.png" />

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1013496822643101"
     crossOrigin="anonymous"></script>
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
      content: null,
    },
    sidebar: {
      defaultMenuCollapseLevel: 1,
    },
    footer: {
      text: (
        <span>
        <a href="https://pubgresource.com" target="_blank">
          PUBG Resource
        </a>
        {' '}©{' '}{new Date().getFullYear()} 
      </span>
      )
    }
    
  }