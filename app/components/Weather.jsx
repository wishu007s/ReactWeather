var React       = require("react"),
    WeatherForm = require("WeatherForm"),
    WeatherMessage = require("WeatherMessage"),
    openWeatherMap = require("openWeatherMap");
var ErrorModal      = require("ErrorModal");
    

var Weather    = React.createClass({
    getInitialState: function(){
        return {
            isLoading: false
        };
    },
    handleSearch: function(location){
        var that = this;
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });
        
        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
            location: location,
            temp: temp,
            isLoading: false
        });
        }, function(err){
            that.setState({
                isLoading: false,
                errorMessage: err.message
            });
        });
    },
    componentDidMount: function(){
      var location = this.props.location.query.location;
      if(location && location.length > 0){
          window.location.hash = '#/';
          this.handleSearch(location);
      }
    },
    componentWillReceiveProps: function(newProps){
      var location = newProps.location.query.location;
      if(location && location.length > 0){
          window.location.hash = '#/';
          this.handleSearch(location);
      }
    },
    render: function(){
        var {isLoading, temp, location, errorMessage} = this.state;
        function renderMsg(){
            if(isLoading){
                return <h3 className="text-center">Fetching Weather...</h3>;
            } else if(location && temp) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        }
        function renderError(){
            if(typeof errorMessage === 'string'){
                return <ErrorModal message={errorMessage}/>
            }
        }
        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMsg()}
                {renderError()}
            </div>
            );
    }
});

module.exports = Weather;