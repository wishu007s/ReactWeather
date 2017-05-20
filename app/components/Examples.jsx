var React       = require("react");
var {Link}      = require("react-router");

var Examples    = (props) => {
        return (
            <div>
                <h1 className="text-center page-title">Examples</h1>
                <p>Here are the few few example locations to try out:</p>
                <ul>
                    <li>
                        <Link to="/?location=bengaluru">Bengaluru, KA</Link>
                    </li>
                    <li>
                        <Link to="/?location=delhi">Delhi, Delhi</Link>
                    </li>
                </ul>
            </div>
            );
};

module.exports = Examples;