// // 1
// התפקיד של middleware זה לקבל את כל הקריאות לשרת לפני שהם עוברים לנתיבים שלהם 
// זה טוב למשל ללוגים ולבדיקת טוקן בכל קריאה לבדוק שהקריאה מגיעה ממקור מורשה

// // 2
// (req, res, next) נקסט מיועד להפעיל אותו אחרי הדברים שעושים במידלוור והשתיים השניים מגיעים בכל קריאה רגילה

// // 3
// אם לא מפעילים את נקסט בסוף הקריאה מסתיימת שם ולא ממשיכה לראוט המקורי שלשם נשלחה
// במקרה שאין למשל הרשאה למשתמש או במקרה שאני בכוונה רוצה שהתהליך יעצר אני יכול פשוט לא להפעיל את נקסט

// // 4
// use משמש לתפיסה של כל סוגי הקריאות
// use שמתחיל בנתיב מסוים יעבור דווקא אם הנתיב מתחיל כך
// החלק השלישי הוא ספציפי יותר ויעבוד דווקא בקריאת גט עם נתיב מסוים ויפעיל את הלוגר ואת הפונקציה השניה

// // 5
// הוא דואג לבנות חזרה את הבאדי של הבקשה כי הבאדי בעיקרון מגיע בחלקים קטנים 


// // 6
// function logger(req, res, next){
//     console.log(`${req.method} | ${req.url}`)
//     next()
// }

// // 7
// import express from "express"

// const app = express();

// app.use(express.json())

// app.post('/users', (req, res) => {

//   console.log(req.body)

//   res.json({ received: req.body });

// });




// // 8

// function auth(req, res, next){
//     const token = req.headers.authorization
//     if (token === undefined){
//         return res.status(401).json({message:"permission denied"})
//     }
//     next()
// }


// // 9

// app.use(logger);

// app.use('/api', auth);

// app.get('/home', (req, res) => res.send('Home'));

// app.get('/api/data', (req, res) => res.send('Data'));

// א. GET /home // יכנס ישר לאנדפוינט שלו ולא יעבור במידלוור

// ב. GET /api/data // ללא טוקן יוחזר ללקוח שגיאה 401 שאין הרשאת גישה

// ג. GET /api/data // עם יש טוקן המידלוור יפעיל את נקסט ואז האנדפוינט המקורי ישלח את דאטה


// // 10 
// // הפונקציה צריכה להחזיר אותה למידלוור עם ריטרן אחרת הקוד ימשיך לשורה שאחרי התנאי ותמיד יחזור שגיאה עם הקוד 403

// // 11
// app.use((req, res, next) => {
//     req.startTime = Date.now()
//     return next()
// })



// // 12

// import express from "express"

// const server = express()

// server.use(express.json())

// server.use((req, res, next) => {
//     console.log(`${req.method} | ${req.url}`)
//     return next()
// })


// server.get('/public',(req, res) =>{
//     res.json({message:'Public'})
// })

// function auth(req, res, next){
//     const token = req.headers.authorization
//     if (token === undefined){
//         return res.status(401).json({message:"permission denied"})
//     }
//     next()
// }

// server.get('/private', auth, (req, res) => {
//     res.json({message:"Secret"})
// })

// // 13

// function validateBody(arr){
//     return function(req, res, next){
//         const {name, email} = req.body
//         if (name === undefined || email === undefined){
//             return res.status(400).json({message:"missing dateils"})
//         }       
//         return next()
//     }
// }


// server.post('/users', validateBody(['name', 'email']), (req, res) => {

//   res.json({ created: req.body });

// });
















// server.listen(3000, () => {console.log("server listening on port 3000")})