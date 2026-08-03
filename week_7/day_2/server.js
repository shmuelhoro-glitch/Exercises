import express from "express";


const app = express();

app.use(express.urlencoded({extended:true}));


app.get("/register", (req, res) =>{
    res.sendFile('register.html', {root: './'})
})


app.post("/register", (req, res) => {
  console.log(req.body);
  const { fullName, email, password, age, role, agree } = req.body;
  if (!fullName || !email){
    return res.status(400).send("invalid request")
  };
  res.status(201).send({ message: "נרשמת!", user: { fullName, email, role } });
});

app.listen(3000, ()=>{
    console.log("server listening...")
})