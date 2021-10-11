
const { default: axios } = require('axios');
var fs = require('fs');
const lastAPI = 'http://localhost:3002'

     axios.get(lastAPI)
        .then(res => {
          let data = (res.time)
		  // let run = "";
		  // let time = "";
		  // let ytime = "";
		  // let arrayT=[]
		  // let arrayR=[]
		  // let all =[]
		  // let machineName = "";
      //     for(let i =0;i<data.length;i++){
      //       machineName = data[i].time
			// }
		  // for(let j =0;j<data.length;j++){
      //       let machineName = data[j].run
			// run += machineName[machineName.length-1] + ","			 
			// }
      console.log(data)
  // let sliceTime = time.slice(0,-1)
  // let sliceRun  = run.slice(0,-1)
  // arrayR.push(sliceRun)
  // arrayT.push(machineName)
  // let  runNumber = arrayR.join('').split(',').map(item => parseInt(item))
  // let time1 = arrayT[0] 
  // all.push({time1, runNumber})
  // console.log(all)
})
