// import http from "http"
// import URL from "url"

// // 1
// function extractId(url){
//     const parts = url.split("/");
//     console.log(Number(parts[2]))
// }


// extractId('/users/42')
// extractId('/users/1')
// extractId('/users')


// // 2
// function parseQuery(url){
//     const result = {}
//     const qs = url.split("?")[1] || "";
//     if (qs){
//     const pairs = qs.split("&")
//     for (const pair of pairs){
//         const [key, value] = pair.split("=")
//         result[key] = value;
//     }}
//     console.log(result);
    
// }

// parseQuery("/users?role=admin&page=2")
// parseQuery("/users")



// // 3
// const {URL} = require("url")

// function getQueryParams(rawUrl){
//     const parsed = new URL(rawUrl, "http://localhost")
//     const qs = parsed.searchParams
//     return {
//         page:qs.get("page") || "1",
//         limit:qs.get("limit") || "10",
//         sort:qs.get("sort"),
//     }
// }

// console.log(getQueryParams("/users?page=3&sort=name"))



// // 4
const users = [
    {id: 1, name: "Alice" },
    {id: 2, name: "Bob" },
]

function getParam(url, pattern){
    const pp = pattern.split("/")
    const up = url.split("/")
    const key = pp.find(s => s.startsWith(":"))?.slice(1)
    const idx = pp.findIndex(s.startsWith(":"))
    return {[key]:up[idx]}
}

const {id} = getParam(url, "/users/:id")
const user = user.find(u => u.id === +id)

























