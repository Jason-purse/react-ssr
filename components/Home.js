import {connect} from "react-redux";
import {getHomeList} from "../client/store/home/actions";
import {Component} from "react";

const React = require('react');
const Page = require('./Page')

// 第一个ssr 最简单的例子,同构渲染,服务端渲染结构,客户端绑定事件
// function Home(props) {
//     return (
//         <div>
//             <div>This is home</div>
//             <button onClick={() => {alert("6666")}}>click me</button>
//             <Page/>
//         </div>
//     )
// }

class Home extends Component {
    componentDidMount() {
        this.props.getHomeList()
    }

    // 预加载数据，服务端调用
    static async loadData(store, match) {
        return store.dispatch(getHomeList())
    }

    render() {
        const props = this.props;
        return (
            <div>
                <hr/>
                <div>This is home</div>
                <div> {!!props.home.list.length && props.home.list.map(item => <div key={item}>{item}</div>)} </div>
                <button onClick={() => props.getHomeList()}>click me</button>
                <div>
                    <button onClick={() => alert('hhhhhh')}>alert</button>
                </div>
                <Page/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        home: state.home
    }
}
export  default connect(mapStateToProps, {
    getHomeList
})(Home);


