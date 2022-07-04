import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Rout from "./router/Router";

const App = () => {
    return (
        <BrowserRouter>
            <Rout />
        </BrowserRouter>
    )
}
// 通过这个给 app 进行注水 ...
ReactDom.hydrate(<App />, document.getElementById('root'))