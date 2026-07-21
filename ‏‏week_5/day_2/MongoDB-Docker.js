import express from "express"
import { MongoClient,ObjectId } from "mongodb"
// import "dotenv/config"

const app = express()

app.use(express.json())

const client = new MongoClient(
    'mongodb://root:root@localhost:27017/blog?authSource=admin'
)

await client.connect()

const db = client.db('blog')

const posts = db.collection('posts')

function createPostBody(title, content, author, published= false, createdAt=new Date()){
    return {title, content, author, published, createdAt}
}

// // 1
// const post1 = createPostBody("one", "anything", "shmuel", true)
// const post2 = createPostBody("two", "something", "avi")
// const post3 = createPostBody("three", "everything", "ron")

// const result = posts.insertMany([post1, post2, post3])
// console.log(await result)

// // 2
app.get('/posts', async (req,res) => {
    const result = await posts.find({published:true}).toArray()
    res.send(result)
})


// // 3
app.post('/posts', async (req,res) =>{
    const {title, content, author, published} = req.body
    if (!title || !content || !author){
        res.status(400).send("Invalid request")
    }
    const postBody = createPostBody(title, content, author, published)
    const result = await posts.insertOne(postBody)
    res.status(201).send({"access":true,"data":"the post created successfully"})
    
})


// // 4





















































app.listen(4500, () =>{
    console.log("listening 4500");
})
