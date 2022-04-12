const express = require("express");

const app = express();

app.use(express.static("public"));


app.get("/Home", (request, response) => {
    response.sendFile((__dirname + '/views/home-page.html'))
})

app.get("/About", (request, response) => {
    response.sendFile((__dirname + '/views/about-page.html'))
})

app.get("/Works", (request, response) => {
    response.sendFile((__dirname + '/views/works-page.html'))
})

app.get("/photoGallery", (request, response) => {
    response.sendFile((__dirname + '/views/photo-gallery-page.html'))
})


app.listen(3000, () => console.log("RUNNING"));