import {render} from "./utils";
const express = require('express');
const React = require('react');
const app = express()
require("node-jsx").install()
app.use(express.static('dist'))


app.use('*', function(req, res, next){
    res.send(render(req));
})

app.listen(3002,(error) => {
    if(!error) {
        console.log("listing on port 3001")
    }
    else {
        console.log("occur error" + error)
    }
})