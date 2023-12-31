import Mintingcomponent from "./Mintingcomponent"
import Disclaimer from "./Disclaimer"
import { useState, useEffect } from "react"
import { useNetwork } from "wagmi"

export default function Welcome() {
    const { chain } = useNetwork()

    const [chainnow, setchainnow] = useState("Goerli")
    useEffect(() => {
        if (chain) {
            if (chain["id"] == 1) {
                setchainnow(chain["name"])
            }
            if (chain["id"] == 5) {
                setchainnow(chain["name"])
            }
            if (chain["id"] == 80001) {
                setchainnow(chain["name"])
            }
        }
    }, [chain])

    return (
        <div className="scroll-smooth">
            <div>
                {/* <div className="grid items-center justify-items-center bg-cover bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 relative"> */}
                <div className="grid items-center justify-items-center bg-cover bg-[#79bee9] relative">
                    <Disclaimer/>
                    <hr />
                    <div className="mt-20">
                        <Mintingcomponent />
                    </div>
                </div>
            </div>
        </div>
    )
}
