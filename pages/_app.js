import { StaticKitProvider } from '@statickit/react';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <StaticKitProvider site="{your-site-id}">
      <Component {...pageProps} />
    </StaticKitProvider>
  );
}
