const Influx = require('influx');

//confifurasi influx
/********************************************************* */
const client = new Influx.InfluxDB({
  database: 'OTdummy',
  host: process.env.HOST,
  port: 8086,
  username: process.env.UNAME,
  password: process.env.PASSWORD,
})
/********************************************************* */


//select value//
/********************************************************* */
let selectall = async (measurement) => {
  try{
      const results = await client.query(
          `select * from ${measurement}`);
      return results
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */


//select last value//
/********************************************************* */
let selectlast = async (measurement) => {
  try{
      const results = await client.query(
          `select last(value) from ${measurement}`);
      return results
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */

let selectlastall = async (measurement) => {
  try{
      const results = await client.query(
          `select last(*) from ${measurement}`);
      return results
  } catch(err){
      console.log('err while processing $(err)')
  }
};

//select all by month//
/********************************************************* */
let selectOneMonth= async (measurement) => {
  var newDate = new Date();
  
  var month = newDate.getMonth() + 1;
  month = month.toString()
  if (month.length===1){
      month='0'+month
  }

  var year = newDate.getFullYear();

  try{
      const results = await client.query(
          `select * from ${measurement} WHERE time >= '${year}-${month}-01'`);
      return results;
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */


//select all by year//
/********************************************************* */
let selectYear= async (measurement) => {
  var newdate = new Date();

  var year = newdate.getFullYear();

  try{
      const results = await client.query(
          `select * from ${measurement} WHERE time >= '${year}-01-01' and time <= '${year}-12-31'`);
      return results;
  } catch(err){
      console.log('err while processing $(err)')
  }
};
/********************************************************* */



//get function//
/********************************************************* */
const influx = {
  selectall, selectlast, selectlastall, selectOneMonth,selectYear
}
/********************************************************* */

module.exports=influx