const influx = require("../config");

function lwbp(){
    const value = influx.selectall('lwbp')
    .then(res=>{
        let lwbpRes = res
		let lwbpValue =[]
        lwbpValue.push(lwbpRes)
        return ({lwbpValue})
    })
    return value
}

lwbp().then(res=>console.log(res))

module.exports = lwbp
