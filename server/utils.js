import Rout, {routes} from '../client/router/Router'
import {renderToString} from 'react-dom/server';
//重要是要用到StaticRouter
import {StaticRouter} from "react-router-dom/server";
import React from 'react'
import {Provider} from "react-redux";
import {getServerStore} from '../client/store'
import {matchRoutes} from "react-router-dom";

// 改造这里 服务端做数据预取
const loadBranchData = (pathname, store) => {
    // 使用 matchRoutes api做路由匹配
    const branch = matchRoutes(routes, pathname) || []

    const promises = branch.map(({route, match}) => {
        // 判断匹配的路由是否挂载有异步加载数据逻辑
        return route.loadData
            ? route.loadData(store, match) // 把store 和 match 传入数据预取函数
            : Promise.resolve(null)
    })

    return Promise.all(promises)
}

// 不考虑 服务端数据加载
// export const render = (req) => {
//     console.log("render ..................")
//     //构建服务端的路由
//     const content = renderToString(
//         <Provider store={getServerStore()}>
//             <StaticRouter location={req.baseUrl}>
//                 <Rout />
//             </StaticRouter>
//         </Provider>
//     );
//     console.log(content)
//
//     return `
//     <html lang="en">
//       <head>
//         <title>ssr</title>
//       </head>
//       <body>
//         <div id="root">${content}</div>
//         <script src="/index.js"></script>
//       </body>
//     </html>
//   `
// }

export const render = (req, res) => {
    const store = getServerStore()
    const context = {css: []};
    loadBranchData(req.baseUrl, store).then(data => {
        const string = getRenderString(req, store,context)
        res.send(string);
    }).catch(error => {
        console.log(error)
        res.send('loadBranchData_error')
    })
}

function getRenderString(req, store, context) {
    const content = renderToString(
        // Warning 这里的 store 一定要和 loadBranchData 的store一致，因为预取的数据要在流到组件中，组件再被生成字符串返回
        // 如果这两个store不一致，将即使数据预取成功，也没有再次流到组件中
        <Provider store={store}>
            <StaticRouter location={req.baseUrl} context={context}>
                <Rout/>
            </StaticRouter>
        </Provider>
    );
    // 服务端的 renderToString执行完后 context中已经被注入了数据
    const cssStr = context.css.length ? context.css.join('\n') : '';
    // 数据注水
    const hydrate = `
      window.initialState = ${JSON.stringify(store.getState())};
    `
    return `
      <html>
        <head>
          <title>ssr</title>
          <style>${cssStr}</style>
        </head>
        <body>
          <div id="root">${content}</div>
          <script>
            // Warning 这个script一定不能放到后面，它必须在客户端代码执行之前注水数据
            ${hydrate}
          </script>
          <script src="/index.js"></script>
        </body>
      </html>
    `
}
