import Rout from '../client/router/Router'
import { renderToString } from 'react-dom/server';
//重要是要用到StaticRouter
import { StaticRouter } from "react-router-dom/server";
import React from 'react'

export const render = (req) => {
    console.log("render ..................")
    //构建服务端的路由
    const content = renderToString(
        <StaticRouter location={req.baseUrl}>
            <Rout />
        </StaticRouter>
    );
    console.log(content)

    return `
    <html lang="en">
      <head>
        <title>ssr</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `
}