const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server')

require("node-jsx").install()
const Home =  require('../components/Home');
const app = express()
const content = renderToString(React.createElement(Home));
app.use('/', function(req, res, next){
    res.send(
        `
     <html lang="en">
       <head>
         <title>ssr</title>
       </head>
       <body>
         <div id="root">${content}</div>
       </body>
     </html>
    `
    );
})

app.listen(3002,(error) => {
    if(!error) {
        console.log("listing on port 3001")
    }
    console.log("occur error" + error)
})