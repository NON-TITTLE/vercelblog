export default function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}
import { VercelToolbar } from '@vercel/toolbar/next';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <VercelToolbar />
        </>
    );
}