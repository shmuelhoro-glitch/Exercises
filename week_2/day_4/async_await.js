// // 5
// const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
// const data = await res.json();
// console.log(data);

// // 6
// async function returnDone() {
//   return "Done";
// }
// console.log(await returnDone());

// // 7
// async function squared(num) {
//   const result = num ** 2;
//   return result;
// }
// console.log(await squared(5));

// // 14
// async function towCalls() {
//   const res1 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//   ).json();
//   const res2 = await (
//     await fetch("https://jsonplaceholder.typicode.com/posts/2")
//   ).json();
//   return { res1, res2 };
// }

// console.log(await towCalls());

// // 15
// async function someCalls() {
//   const res1 = fetch("https://jsonplaceholder.typicode.com/posts/1").catch(
//     (err) => new Error(err),
//   );
//   const res2 = fetch("https://jsonplaceholder.typicode.com/posts/2").catch(
//     (err) => new Error(err),
//   );
//   const res3 = fetch("https://jsonplaceholder.typicode.com/posts/3").catch(
//     (err) => new Error(err),
//   );
//   const responses = await Promise.all([res1, res2, res3]);
//   const result = Promise.all(
//     responses.map(async (data) => {
//       if (!data || !data.ok) {
//         return "the call failed";
//       }
//       return await data.json();
//     }),
//   );
//   return result;
// }
// console.log(await someCalls());

// // 18

// async function fetchInLoop() {
//   const data = [];
//   const URLs = [
//     "https://jsonplaceholder.typicode.com/posts/1",
//     "https://jsonplaceholder.typicode.com/posts/2",
//     "https://jsonplaceholder.typicode.com/posts/3",
//   ];
//   for (let url of URLs) {
//     try {
//       let res = await fetch(url);
//       data.push(await res.json());
//     } catch {
//       (err) => err.message;
//     }
//   }
//   return data;
// }
// console.log(await fetchInLoop());
