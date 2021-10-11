const influx = require("../config");

function kwhselisih(){
    const value = influx.selectall('kwh1')
    .then(res=>{
        let kwh      = res
		let kwhValue = []
		kwhValue.push(kwh)
        return ({kwh})
    })
    return value
}

kwhselisih().then(res=>console.log(res))

module.exports = kwhselisih
