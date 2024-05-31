import Head from "next/head";

export default function Layout({ children }) {
    return (
        <div>
            <Head>
                <title>TANN TRIM</title>
                <meta name="description" content="Website for bags" />
            </Head>
            <header className="bg-black text-white p-4">
                <h1 className="text-xl">TANN TRIM</h1>
            </header>
            <main className="p-4">{children}</main>
        </div>
    );
}
