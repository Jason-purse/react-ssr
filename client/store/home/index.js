import {CHANGE_CONTEXT, CHANGE_LIST} from "./constant";

const initState = {
    name: 'mj_chang',
    list: [],
    context: undefined // 服务端需要使用的上下文
}

// 这是一个 reducer ...
export default function (state = initState, action = {}) {

    switch (action.type) {
        case CHANGE_LIST:
            // 更新过后的store state ...
            return evaluate(state,'list', action.payload,[])
        case CHANGE_CONTEXT:
            return evaluate(state,'context', action.payload,{})
        default:
            return state
    }
}

function evaluate(state, field, data,defaultValue) {
    return {
        ...state,
        [field]: data || defaultValue
    };
}
