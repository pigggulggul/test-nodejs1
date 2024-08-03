//모듈
const express = require("express");
const app = express();

// 라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views/home");
app.set("view engine", "ejs");
//ejs는 html파일이다.

//dirname은 app의 현재 위치이다.
app.use(express.static(`${__dirname}/src/public`));
app.use("/", home);

module.exports = app;
