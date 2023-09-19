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