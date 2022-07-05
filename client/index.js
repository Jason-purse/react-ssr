import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import Rout from "./router/Router";
import {getClientStore} from './store'
import {Provider} from "react-redux";

const App = () => {
    return (
        <Provider store={getClientStore()}>
            <BrowserRouter>
                <Rout />
            </BrowserRouter>
        </Provider>

    )
}
// 通过这个给 app 进行注水 ...
ReactDom.hydrate(<App />, document.getElementById('root'))
