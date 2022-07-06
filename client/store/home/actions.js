import {CHANGE_CONTEXT, CHANGE_LIST} from "./constant";
import {serverAxiosInstance} from "../../../server/utils/Request";

//普通action
const changeList = list => ({
    type: CHANGE_LIST,
    payload: list
});

export const changeContext = context => ({
    type: CHANGE_CONTEXT,
    payload: context
})
//异步操作的action(采用thunk中间件)
export const getHomeList = () => {
    return (dispatch) => {
        return serverAxiosInstance.get('/api/list')
            .then((res) => {
                const list = res.data;
                console.log("获取数据: " + list.data)
                dispatch(changeList(list.data))
            });
    };
}
