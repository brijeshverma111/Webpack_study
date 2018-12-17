require("babel-runtime/regenerator")
require("./main.css")
require("./index.html")

var a = async (args) =>{
    const { a,b } = args;
    await console.log("i am from future", a, b)
    console.log("running")
}

a({a:1,b:2});

