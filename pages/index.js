import Head from "next/head"
import Header from "../components/Header"
import Welcome from "../components/Welcome"
export default function Home() {
    return (
        <div>
            <Head>
                <title>NFT Drop Dapp || testnet minting site of goerli network</title>
                <meta name="description" content="testnet minting site of goerli network" />
                <link rel="icon" href="/nftdroptest32.ico" />
            </Head>
            <Header />
            <Welcome />
        </div>
    )
}
