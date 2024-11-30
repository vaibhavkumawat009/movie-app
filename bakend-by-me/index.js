const express = require("express")
const app = express()
const {connectDb} = require("./config/dbConfig")
const routes = require("./routes/authenticateRoute")
var cors = require('cors')


// middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/api/v1",routes)




connectDb().then(()=>{
    app.listen(8080,()=>{
        console.log(`server is running on port ${8080} `)
    })

}).catch((error)=>{
    console.log(error)
})
