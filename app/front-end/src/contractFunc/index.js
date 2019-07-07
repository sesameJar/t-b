let ethers = require('ethers')
let utils = ethers.utils
let T_b = require('./T_b.json')

class tubfunc{
    constructor(){
        this.provider =""
        this.contractAddress=""
        this.contract=""
    }

    async tip (address,amount) {
        console.log(`
            Tip function trigered :
            receiver : ${address} 
            tipAmount : ${amount}
        `)
        let tx = await this.contract.tip(address, {
            value : utils.parseUnits(amount, 'gwei')
        } )
        return tx
    }
    
   async checkBalance () {
        let balance = await this.contract.checkBalance()
        console.log("contract -- balance", Number(balance))
        return Number(balance)
    }

    async initialized() {
        let T_b_ABI = T_b.abiDefinition;

         this.provider = new ethers.providers.Web3Provider(window.web3.currentProvider);

        this.contractAddress = "0x587709cab8b84b9f2046f71ff99d9db7db95353a"

        this.contract = new ethers.Contract(this.contractAddress, T_b_ABI, this.provider.getSigner())

    }
}

module.exports = tubfunc







