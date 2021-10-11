const influx = require("../config");

function kwhreal(){
    const value = influx.selectlast('kwhS')
    .then(res=>{
        let kwh = res[0]
		let kwhValue =[]
        kwhValue.push(kwh)
        return ({kwhValue})
    })
    return value
}

kwhreal().then(res=>console.log(res))

module.exports = kwhreal
