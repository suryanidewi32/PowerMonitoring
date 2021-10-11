const influx = require("../config");

function wbp(){
    const value = influx.selectall('wbp')
    .then(res=>{
        let wbpRes = res
		let wbpValue =[]
        wbpValue.push(wbpRes)
        return ({wbpValue})
    })
	
    return value
}

wbp().then(res=>console.log(res))

module.exports = wbp
