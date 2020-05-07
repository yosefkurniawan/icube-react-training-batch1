import Navigation from './navigation';
import Head from 'next/head';

const Layout = ({children, pageConfig}) => {
    const { title, className } = pageConfig;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <header>
                <Navigation />
            </header>
            <div className={`content ${className}`}>
                {children}
            </div>
            <footer>
                &copy;2020
            </footer>
        </>
    )
}

export default Layout;