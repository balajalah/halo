require('dotenv').config();
const express = require(`express`);
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');


const app = express();

const PORT = process.env.PORT;


//!Middleware
app.use(middlewareLogRequest)
app.use(express.json())

//!Route dengan method get CONTOH
//!Dan ini adalah basic routine di dalam express js
// app.method(path, handler);
// Dan di dalam parameternya, terdapat 3 parameter. Ada req, res, dan next

//!Route global
// app.use("/", (req, res, next) => {
//     res.send(`Ini adalah endpoint Global`)
// });

app.use("/users", usersRoutes);


app.listen(PORT, () => {
    console.log(`Server berhasil dijalankan di port ${PORT}`)
})