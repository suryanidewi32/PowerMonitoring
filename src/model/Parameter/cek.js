const influx = require("../config");

function parameter(){
    const value = influx.selectlastall('parameter')
    .then(res=>{
        var ampere    = res[0].last_ampere
		var freq      = res[0].last_freq
		var kvar      = res[0].last_kvar
		var pf        = res[0].last_pf
		var watt      = res[0].last_watt
		var data 	  = ampere +","+ freq +","+ kvar +","+ pf +","+ watt
		var change    = parseInt(data)
		let parameterValue = []
		parameterValue.push(data)
		var data = parseInt(parameterValue)
        return ({parameterValue})
    })
    return value
}


//function cek(){
//    const data = influx.selectlastall('parameter')
//    .then(res=>{
//        let cekRes = res[0].cek
//		let idrlwbp =[]
//        idrlwbp.push(cekRes)
		
		
//		let cek2 = res[0].cek1
//		let idrwbp =[]
//        idrwbp.push(cek2)
//        return ({idrlwbp,idrwbp})
//    })
//    return (data)
//}

parameter().then(res=>console.log(res))

module.exports = parameter
