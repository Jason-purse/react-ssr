import React from 'react';
import {hydrateRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom'
import Rout from "./router/Router";
import {getClientStore} from './store'
import {Provider} from "react-redux";
import StyleContext from 'isomorphic-style-loader/StyleContext'

const insertCss = (...styles) => {
    const removeCss = styles.map(style => style._insertCss())
    return () => removeCss.forEach(dispose => dispose())
}
const App = () => {
    return (
        <StyleContext.Provider value={{insertCss}}>
            <Provider store={getClientStore()}>
                <BrowserRouter>
                    <Rout/>
                </BrowserRouter>
            </Provider>
        </StyleContext.Provider>
    )
}
// 通过这个给 app 进行注水 ...
hydrateRoot(document.getElementById('root'), <App />)
