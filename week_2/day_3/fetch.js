// // 1
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then(res => res.json())
// .then(data => console.log(data.title))

// // 2
// fetch('https://jsonplaceholder.typicode.com/notfound')
// .then(res => {
//     if (!res.ok) throw new Error(console.log(res.status))
//     return res
// })
// .catch(err => console.error(err))

// // 3
// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res => res.json())
// .then(data => data.map((post) => post.title))
// .then(titles => console.log(titles))

// // 4
// fetch('https://jsonplaceholder.typicode.com/posts',{
//     method:"POST",
//     headers:{"Content-Type":"application/json"},
//     body: JSON.stringify({
//         title:"new title",
//         body:"post`s body",
//         userId: 1
//     })
// })
// .then(response => console.log(response.status,response.statusText))
// .catch(console.error)

// // 5

// function getUserById(id) {
//    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.status, res.statusText);
//       } else return res;
//     })
//     .then((res) => res.json())
//     .catch((err) => console.error(err));
// }

// // 6
// function getPostAndUser() {
//   let postTitle = "";
//    fetch("https://jsonplaceholder.typicode.com/posts/1")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(err);
//       }
//       return res.json();
//     })
//     .then((post) => {
//       postTitle = post.title;
//       return getUserById(post.userId);
//     })
//     .then((user) => {
//       console.log(`user name: ${user.name} | post title: ${postTitle}`);
//     })
//     .catch((err) => console.log(err));
// }
// getPostAndUser();



// // 7













