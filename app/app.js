//모듈
const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// 라우팅
const home = require("./src/routes/home");

//앱 세팅
app.set("views", "./src/views/home");
app.set("view engine", "ejs");
//dirname은 app의 현재 위치이다.
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
//URL을 통해서 전달되는 데이터에 한글, 공백 등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제 해결
app.use(bodyParser.urlencoded({ extended: true }));
//ejs는 html파일이다.

app.use("/", home);

module.exports = app;
