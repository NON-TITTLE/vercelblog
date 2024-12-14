export default function Home() {
    return (
        <div>
            <h1>¡Hola, Next.js!</h1>
            <p>Bienvenido a tu primera página con Next.js</p>
        </div>
    );
}
import { VercelToolbar } from '@vercel/toolbar/next';
import { useIsEmployee } from 'lib/auth'; // Your auth library

export default function MyApp({ Component, pageProps }) {
    const isEmployee = useIsEmployee();

    return (
        <>
            <Component {...pageProps} />
            {isEmployee ? <VercelToolbar /> : null}
        </>
    );
}