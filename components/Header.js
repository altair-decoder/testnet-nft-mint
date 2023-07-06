import { ConnectButton } from "@rainbow-me/rainbowkit"
import styles from "../styles/Home.module.css"
import Navbar from "./Navbar"
 
export default function Header() {
    return (
        <div>
            <Navbar/>
            {/* <nav className={styles.navBar}>
                <div className="flex items-center ">
                    <div className="text-white font-bold font-Rubik lg:text-2xl sm:text-lg">
                        NFT Drop Dapp
                    </div>
                </div>
                <ConnectButton
                    accountStatus={{
                        smallScreen: "address",
                        largeScreen: "address",
                    }}
                />
            </nav> */}
        </div>
    )
}
