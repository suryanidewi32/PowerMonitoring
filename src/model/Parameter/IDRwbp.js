const influx = require("../config");

function idrwbp(){
    const value = influx.selectall('idr_wbp')
    .then(res=>{
        let idrwbp = res[0].last_value
        return JSON.stringify({idrwbp})
    })
    return value
}

idrwbp().then(res=>console.log(res))

module.exports = idrwbp
