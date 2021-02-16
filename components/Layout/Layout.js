import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

const Layout = ({children, title = "Crypto-Tracker"})=>{
    return(
        <div className="layout">
                <Head>
        <title>{title}</title>
      </Head>

      <header className="header">
    {/* Es similar a lo que usamos en React-Dom o en Gatsby=>  */}
    <Link href="/" passHref>

        <a>
          <Image src="/logo2.svg" layout="fixed" width={100} height={100} alt="logo" className="logo" />

        </a>

    </Link>

      </header>
    <h1 className="title">Crypto-Tracker</h1>
    <p className="text">Track your cripto here 🖥 </p>

      <main>{children}</main>
        </div>
    )
}
export default Layout