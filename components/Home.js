const React = require('react');
const Page = require('./Page')
function Home(props) {
    return (
        <div>
            <div>This is home</div>
            <button onClick={() => {alert("6666")}}>click me</button>
            <Page/>
        </div>
    )
}
module.exports = Home