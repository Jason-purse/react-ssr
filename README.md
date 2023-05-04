# react-ssr
## 简单服务端渲染
参考文档: https://zhuanlan.zhihu.com/p/157214413
通过 nodeJs 服务器结合 react 进行服务端渲染
    - 主要是node-jsx
    - nodemon 监控文件,并重启服务器
    - 通过node-jsx.install 方法获得编译react组件的能力 ...

## 添加事件支持
    - 本质上也就是说需要进行同构 https://zhuanlan.zhihu.com/p/157214413
    - ReactDom.hydrate 进行水合(拿到服务器端渲染代码进行 客户端重用添加事件) ...
    - 但是我们需要将客户端的运行js代码 交给服务端返回,并在合适的机会进行执行

## 添加路由
    根目录下的Router.js

# react 项目
    学习官方的一些高级特性,例如代码分割 .. 上下文 / 错误边界 / 转发 ref / 片段 / 高阶组件 /优化性能等 ...



# ssr 参考
https://github.com/MinjieChang/react-ssr.git


