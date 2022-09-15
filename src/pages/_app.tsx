import "../../styles/globals.css"
// import "../../public/content.min.css"
import type { AppProps } from 'next/app'
import '../../styles/Tailwindcssunreset.scss'
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
