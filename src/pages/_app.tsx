import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import { useRouter } from 'next/router';
import { IntlProvider } from 'react-intl';
import koMessages from '../content/lang/ko.json';
import enMessages from '../content/lang/en.json';

type ObjType = {
  [index: string]: {}
}
const messages:ObjType = {
  ko: koMessages,
  en: enMessages,
};
function MyApp({ Component, pageProps }: AppProps) {
  const { locale, defaultLocale } = useRouter();
  return (
    locale && 
    <IntlProvider 
      locale={locale} messages={messages[locale]} defaultLocale={defaultLocale}>
      <ThemeProvider attribute="class">
        <div>
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </IntlProvider>
  )
}
export default MyApp
