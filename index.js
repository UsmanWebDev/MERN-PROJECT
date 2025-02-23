import express from 'express'
import morgan from 'morgan';
const app = express()


app.set("view engine", "ejs"); // Set EJS as the templating engine


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public"))


// Use Morgan middleware for logging
app.use(morgan("dev")); // Logs requests in 'dev' format

const port = 3000

app.get('/', (req, res) => {
    res.render("index", { title: "MERN_PROJECT", message: " Register Hear please.. " });

})

app.get('/about', (req, res) => {
    res.send('About Page')
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})


app.post('/form-data', (req, res) => {
    console.log(req.body);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})