import abi from './abi.js' assert {type: "json"}

const connect = new Promise((res, rej) => {
    if (typeof window.ethereum == "undefined") {
        rej("Install MetaMask")
    }
    window.ethereum.request({ method: "eth_requestAccounts" })
})

export default connect