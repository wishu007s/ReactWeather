var React   = require("react");

var WeatherMessage     = ({temp, location}) => {
        // var {temp, location} = props;
        return (
            <div>
               <h3 className="text-center">It's {temp} in the {location}</h3>
            </div>
            );
};

module.exports = WeatherMessage;