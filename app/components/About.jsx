var React       = require("react");

// var About    = React.createClass({
//     render: function(){
//         return (
//             <h2>About Component</h2>
//             );
//     }
// });
var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application build on React. I have built this
                for the Complete React Web App Developer Course.</p>
            <p>Here are the some of Tools I Used:</p>
            <ul>
                <li>
                    <a href="http://facebook.github.io/React">React</a> - JavaScript framework.
                </li>
                <li>
                    <a href="http://openweathermap.org">OpenWeatherMap</a> - Weather API to search weather by city
                </li>
            </ul>
        </div>
        );
};

module.exports = About;