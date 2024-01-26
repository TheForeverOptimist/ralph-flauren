import type { NextPage } from 'next';
import type {AppProps} from 'next/app'
import '../styles/globals.css'; // Import global styles
import MainLayout from '../app/layouts/MainLayout'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
}

export default MyApp;
