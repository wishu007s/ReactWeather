var React   = require("react");

var WeatherForm     = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();
        var locationRef = this.refs.location,
            location    = locationRef.value;
        if(typeof location === 'string' && location.length > 0){
            locationRef.value = '';
            this.props.onSearch(location);
        }
    },
    render: function(){
        return (
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" placeholder=" Enter city" ref="location"/>
                    <button>Submit</button>
                </form>
            </div>
            );
    }
});

module.exports = WeatherForm;