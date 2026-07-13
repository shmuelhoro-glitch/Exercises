import express from "express"

const app = express()
// // 1
app.use((req, res, next) =>{
    req.requestTime = new Date().toISOString()
    next()
})
// // 2
app.get('/time',(req, res) =>{
    res.send(`Request received at: ${req.requestTime}`)
})

// // 3
// app.use(express.json())

// app.use((req, res, next) =>{
//     if (req.body === undefined){
//         return res.status(400).json({message:"Body cannot be empty"})
//     }
//     next()
// })

// // 4
app.post('/data', (req, res) => {
    res.send({message:"Data received"})
})


// // 5

app.post('/register', (req, res) => {
    const {password} = req.body
    if (password.length < 8){
        res.status(400).send("Password must be at least 8 chars.")
    }

})

// // 6
app.use((req, res, next) => {
    const {admin} = req.query
    if (admin != "true"){
        const error = new Error("Forbidden: admins only")
        error.statusCode = 403
        next(error)
    }
    next()
})







// // 29

app.get('/format', (req, res, next) => {
    if (req.body === undefined){
        const error = new Error("Database failed")
        error.status = 500
        next(error)
    }
    else return res.send("ok")
})





function errorHandler(err, req, res, next){
    const error = {"message":err.message}
    res.status(err.status ||500).json(error)
    next()
}
app.use(errorHandler)



app.listen(3000,() => {
    console.log("listening on port 3000")
})