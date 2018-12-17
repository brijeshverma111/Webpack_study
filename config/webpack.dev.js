const path = require("path")
module.exports = {
    entry:{
        main:["./src/main.js"]  //use array for multiple files webpack will concat them
    },
    mode:'development',
    output:{
        filename:"[name]-bundle.js",
        path:path.resolve(__dirname,"../dist/"),
        publicPath: "/"
    },
    devServer: {
        contentBase :"dist",
        overlay: true
    },

    module :{
        rules:[
            {
                test: /\.js$/,
                use: [
                    {
                        loader: "babel-loader"
                    },
                ],
                exclude: /node_modules/ 
            },
            {
                test : /\.css$/,
                use :[
                    {
                        loader: "style-loader"
                    },
                    {
                        loader:"css-loader"
                    }
                ]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader : "file-loader",
                        options : {
                            name : "[name].html"
                        }
                    },
                    {
                        loader : "extract-loader"
                    },
                    {
                        loader: "html-loader",
                        options : {
                            attrs :["img:src"]
                        }
                    }
                ]
            },
            {
                test:/\.(png|jpg)$/,
                use : [
                    {
                        loader: "file-loader",
                        options: {
                            name :"images/[name].[ext]"
                        }
                    }
                ]
            }
        ]
    }
}