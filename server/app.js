import {render} from "./utils";
const express = require('express');
const React = require('react');
const app = express()
require("node-jsx").install()
app.use(express.static('dist'))

// 随意添加一个数据接口,用于Home 异步动作渲染 ..
app.get('/api/list', function(req, res, next) {
    res.json({
        data: [11 * Math.round(Math.random() * 100),22 * Math.round(Math.random() * 100),33 * Math.round(Math.random() * 100)]
    })
})
app.use('*', function(req, res, next){
    if(req.baseUrl === '/favicon.ico') return res.end()
    console.log("请求路径: "+ req.baseUrl)
    render(req,res)
})




app.listen(3002,(error) => {
    if(!error) {
        console.log("listing on port 3001")
    }
    else {
        console.log("occur error" + error)
    }
})

