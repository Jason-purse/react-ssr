/**
 * 代码分割 ...
 * @constructor
 */
import {useEffect, useState} from "react";

export default function CodeSplitExample() {
    let [state, setState] = useState(1);
    let [func,setFunc] = useState({func: null})
    return (
        <div>
            <h1>显示state</h1>
            <button onClick={event => {
                if(!func.func) {
                    import("./CodeSplit.js").then(({add}) => {
                        setFunc({func: add})
                    }).catch(error => {
                        console.log("error occur")
                    })
                }
               setTimeout(() => {
                   if(func.func) {
                       let add1 = func.func(state, state);
                       setState(add1)
                   }
               })
            }}>点击执行代码加载</button>
            <div>{state}</div>
            <div>{JSON.stringify(func)}</div>
        </div>
    )

}