import { CHANGE_LIST } from "./constant";
const initState = {
    name: 'mj_chang',
    list: [],
}

// 这是一个 reducer ...
export default function(state = initState, action = {}) {
    switch(action.type){
        case CHANGE_LIST:
            // 更新过后的store state ...
            return {
                ...state,
                list: action.payload || []
            }
        default:
            return state
    }
}
