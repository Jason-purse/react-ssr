import React from 'react';
import {Link} from 'react-router-dom'
import Home from '../../components/Home';
import Login from '../../components/Login'
import {useRoutes} from 'react-router-dom'

// 没有进行服务端数据预加载之前的路由 ..
// export default function Rout(props){
//   return (
//       <div>
//           <div>
//               <Link to="/">home</Link>   | {" "} <Link to="/login">login</Link>
//           </div>
//           <Routes>
//               <Route path='/' exact element={< Home /> }/>
//               <Route path='/login' exact element={<Login />}/>
//           </Routes>
//       </div>
//   )
// }



export const routes = [
    {
        path: "/",
        // component: Root,
        element: <Root />,
        children: [
            {
                path: "/home",
                exact: true,   // router v6 没有这个说法 ...
                // component: Home,
                element: <Home />,
                loadData: Home.loadData,//服务端获取异步数据的函数
            },
            {
                path: "/login",
                // component: Login,
                element: <Login/>,
                exact: true,
                // routes: [
                //   {
                //     path: "/child/:id/grand-child",
                //     component: GrandChild
                //   }
                // ]
            },

            {
                path: "/*",
                // component: Root,
                element: <div>这是主页</div>
            },
            {
                path: "*/",
                element: <div>nothing ....</div>
            }
        ]
    },

];

function Root() {

    return (
        <div>
            <Link to="/home">home</Link> | {"   "}
            <Link to="/login">login</Link>
            <hr/>
            {useRoutes([... routes[0].children])}
        </div>
    )
}

export default Root;
