import Partnerscomponent from "../components/Partnerscomponent"
import { useState, useEffect } from "react"
import abiJson from "../constants/erc721abi.json"
import { Collections } from "../constants/carousel"
import { useToasts } from "react-toast-notifications"
import {
    usePrepareContractWrite,
    useAccount,
    useContractRead,
    useNetwork,
    useSwitchNetwork,
    useContractWrite,
    useWaitForTransaction,
} from "wagmi"
import { ethers } from "ethers"
import Carousel from "react-grid-carousel"
export default function Home() {
    // const [msupply, setMsupply] = useState("10000")
    // const [tsupply, setTsupply] = useState("0")
    const [mintCostAmount, setMintCostAmount] = useState("0")
    const { address } = useAccount()
    const { addToast } = useToasts()
    const { chain } = useNetwork()
    const [collectiontype, setcollectiontype] = useState(1)
    const [chainnow, setchainnow] = useState("")
    const [messagejson, setMessagejson] = useState("")
    const { switchNetwork } = useSwitchNetwork()

    // const { data: totalSupplydata } = useContractRead({
    //     addressOrName: Collections.contractaddress,
    //     contractInterface: abiJson.abi,
    //     chains: Collections.chain,
    //     functionName: "totalSupply",
    //     watch: true,
    // })
    // const { data: maxSupplydata } = useContractRead({
    //     addressOrName: Collections.contractaddress,
    //     contractInterface: abiJson.abi,
    //     chains: Collections.chain,
    //     functionName: "maxSupply",
    //     watch: true,
    // })
    // useEffect(() => {
    //     if (collectiontype == 1) {
    //         pullerc721Json(Collections)
    //     }
    // }, [])
    // useEffect(() => {
    //     if (chain) {
    //         if (chain["id"] == 1) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(Collections)
    //             }
    //         }
    //         if (chain["id"] == 5) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(Collections)
    //             }
    //         }
    //         if (chain["id"] == 80001) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(erc721mumbai)
    //             }
    //         }
    //     }
    // }, [chain])
    // useEffect(() => {
    //     if (switchNetwork) {
    //         setchainnow(chain["id"])
    //         if (chain["id"] == 1) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(Collections)
    //             }
    //             // console.log(1)
    //         }
    //         if (chain["id"] == 5) {
    //             if (collectiontype == 1) {
    //                 pullerc721Json(Collections)
    //             }
    //             // console.log(1)
    //         }
    //     }
    // }, [chain])

    // useEffect(() => {
    //     if (totalSupplydata) {
    //         // console.log(totalSupplydata.toString())
    //         setTsupply(totalSupplydata.toString())
    //     }
    // }, [totalSupplydata])
    // useEffect(() => {
    //     if (maxSupplydata) {
    //         // console.log(maxSupplydata.toString())
    //         setMsupply(maxSupplydata.toString())
    //     }
    // }, [maxSupplydata])

    useEffect(() => {}, [])
    // let displayData
    // async function pullerc721Json(e) {
    //     console.log(e)
    //     displayData = await e.map(function (msg) {
    //         return (
    //             <Carousel cols={1} rows={1} gap={10} loop hideArrow scrollSnap autoplay={1000}>
    //                 <Carousel.Item>
    //                     {/* <img width="100%" src="https://picsum.photos/800/600?random=1" /> */}
    //                     <img
    //                         className="border-2 border-white rounded-2xl outline-3 mb-3"
    //                         src={msg.pic}
    //                         height="300"
    //                         width="300"
    //                     ></img>
    //                 </Carousel.Item>
    //             </Carousel>
    //             // <div
    //             //     key={msg.id}
    //             //     className="ml-4 mr-4 mt-4 mb-4 text-[#6d8ac9] font-Prompt rounded-2xl outline"
    //             // >
    //             //     <div className="ml-4 mr-4 mt-4 mb-4">
    //             //         <div className="ml-4 mr-4 mt-4 mb-4 text-md font-semibold text-[#3f5fa2]">{msg.name}</div>
    //             //         <div className="flex justify-center items-center">
    //             //             <img
    //             //                 className="border-2 border-white rounded-2xl outline-3 mb-3"
    //             //                 src={msg.pic}
    //             //                 height="300"
    //             //                 width="300"
    //             //             ></img>
    //             //         </div>
    //             //     </div>
    //             // </div>
    //         )
    //     })
    //     setMessagejson(displayData)
    // }
    return (
        <div className="scroll-smooth">
            <div className="h-full ...">
                <div className="roadmap items-center justify-items-center bg-cover bg-gradient-to-r from-indigo-500 via-blue-500 to-sky-400 relative">
                    <h1 className="absolute mb-[472px] text-[#fff] text-5xl">Available collections</h1>
                    <Carousel cols={3} rows={1} gap={10} loop hideArrow scrollSnap autoplay={2500}>
                        {Collections.map(({ name, symbol, pic, opensea }, i) => (
                            <Carousel.Item key={i}>
                                <img
                                    className="border-2 border-white rounded-2xl outline-3 mb-3"
                                    src={pic}
                                    height="300"
                                    width="300"
                                ></img>
                                <p className="text-[#fff] text-bold ml-3">{name}</p>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
