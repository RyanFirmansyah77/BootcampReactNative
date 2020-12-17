//Release 0
class Animal {
    constructor(name){
    	this.name = name
    	//this.legs = 4 
    	//this.cold_blooded =false
    }
    get legs(){
    	return 4
    }
    get cold_blooded(){
    	return false
    }
}
 
var sheep = new Animal("shaun");
 
console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//Release 1
class Frog extends Animal{
	constructor(name){
		super(name)
	}
	jump(){
		console.log("hop-hop")
	}
}
class Ape extends Animal{
	constructor(name){
		super(name)
	}
	yell(){
		console.log("Auooo")
	}
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

class Clock {
    constructor({template}){
    	this.template = template
    }
    render(){
    	var date = new Date()
    	var hours = date.getHours()
    	if(hours < 10){
    		hours = '0' + hours
    	}
    	var mins = date.getMinutes()
    	if(mins < 10 ){
    		mins = '0' + mins
    	}
    	var sec = date.getSeconds()
    	if(sec < 10){
    		sec = '0' + sec
    	}
    	var output = this.template
    		.replace('h',hours)
    		.replace('m',mins)
    		.replace('s',sec);
    	console.log(output)
    }
    stop(){
    	clearInterval(this.timer)
    }
    start(){
    	this.render()
    	
    	this.timer = setInterval(()=> this.render(),1000) //1000ms = 1 s
    }
}

var clock = new Clock({template: 'h:m:s'});
clock.start();  