let ethers = require('ethers')
let utils = ethers.utils
let T_b = require('./T_b.json')

let T_b_ABI = T_b.abiDefinition;
// let T_b_BCODE = T_b.code;

let provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

const contractAddress = "0x587709cab8b84b9f2046f71ff99d9db7db95353a"

let contract = new ethers.Contract(contractAddress, T_b_ABI, provider.getSigner())

exports.tip = async (address) => {
    let tx = await contract.tip(address, {
        value : utils.parseUnits('1023000', 'gwei')
    } )
    return tx
}

exports.checkBalance = async()=> {
    let balance = await contract.checkBalance()
    console.log("contract -- balance", Number(balance))
    return Number(balance)
}




