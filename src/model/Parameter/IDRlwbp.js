const influx = require("../config");

function idrlwbp(){
    const value = influx.selectall('idr_lwbp')
    .then(res=>{
        let idrlwbp = res[0].last_value
        return JSON.stringify({idrlwbp})
    })
    return value
}

idrlwbp().then(res=>console.log(res))

module.exports = idrlwbp
