const express = require('express')
const app = express()
const config = require('./port')
const port = config.port


app.listen(port, () => console.log('Server runs on port',port))

/*********************************************************************/
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
/*********************************************************************/
//const idrlwbp = require('../Parameter/IDRlwbp')
//const idrwbp = require('../Parameter/IDRwbp')
const kwhreal = require('../Parameter/KWHreal')
const kwhselisih = require('../Parameter/KWHselisih')
const lwbp = require('../Parameter/LWBP')
const wbp = require('../Parameter/WBP')
const CEK = require('../Parameter/cek')
/*********************************************************************/


// Data Processing for get 
//app.get('/idrlwbp', async(req, res) => {
//   const idrlwbpp = await idrlwbp()
//    res.status(200).json(idrlwbpp)
//})

//app.get('/idrwbp', async(req, res) => {
//     const idrwbpp = await idrwbp()
//     res.status(200).json(idrwbpp)
//})

app.get('/kwhreal', async(req, res) => {
     const kwhreall= await kwhreal()
     res.status(200).json(kwhreall)
})

app.get('/kwhselisih', async(req, res) => {
     const kwhselisihh= await kwhselisih()
     res.status(200).json(kwhselisihh)
})

app.get('/', async(req, res) => {
    const lwbpp= await lwbp()
    res.status(200).json(lwbpp)
})

app.get('/wbp', async(req, res) => {
    const wbpp= await wbp()
    res.status(200).json(wbpp)
})

app.get('/cek', async(req, res) => {
    const CEKK= await CEK()
    res.status(200).json(CEKK)
})






