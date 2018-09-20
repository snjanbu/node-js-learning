var event=require('events');
var util=require('util');

var Person=function(name){
    this.name=name;
}

var x=new Person('x');
var y=new Person('y');
var z=new Person('z');
util.inherits(Person,event.EventEmitter);
var people=[x,y,z];
people.forEach(function(person){
    person.on('talk',function(response){
        console.log(`${this.name} talks ${response}`);
    })
});

x.emit('talk','good');
y.emit('talk','English');
z.emit('talk','Tamil');