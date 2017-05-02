var names = ['wishu', 'Geetha', 'swetha'];

// names.forEach((name) => console.log(name));

// var returnMe = (name) => console.log(name + '!');

// returnMe('viswa');

var person = {
    name: 'roxy',
    greet: function(){
        names.forEach(function(name) {console.log(this.name + ' says hai to ' + name);});
        names.forEach((name) => console.log(this.name + ' says hai to ' + name));
    }
};

person.greet();