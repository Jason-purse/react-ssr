import axios from 'axios';
import { CHANGE_LIST } from "./constant";

//普通action
const changeList = list => ({
    type: CHANGE_LIST,
    payload: list
});

//异步操作的action(采用thunk中间件)
export const getHomeList = () => {
    return (dispatch) => {
        return axios.get('/api/list')
            .then((res) => {
                const list = res.data;
                console.log("获取数据: " + list.data)
                dispatch(changeList(list.data))
            });
    };
}
