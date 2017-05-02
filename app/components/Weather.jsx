var React       = require("react"),
    WeatherForm = require("WeatherForm"),
    WeatherMessage = require("WeatherMessage"),
    openWeatherMap = require("openWeatherMap");
    //http://api.openweathermap.org/data/2.5/weather?q=hindupur&units=metric&appid=4207dce8507d799da6b96bf8ed08b848
    //4207dce8507d799da6b96bf8ed08b848

var Weather    = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    handleSearch: function(location){
        var that = this;
        this.setState({isLoading: true});
        
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
            location: location,
            temp: temp,
            isLoading: false
        });
        }, function(err){
            that.setState({isLoading: false});
            alert(err);
        });
    },
    render: function(){
        var {isLoading, temp, location} = this.state;
        function renderMsg(){
            if(isLoading){
                return <h3>Fetching Weather...</h3>;
            } else if(location && temp) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        return (
            <div>
                <h2>Weather Component</h2>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMsg()}
            </div>
            );
    }
});

module.exports = Weather;