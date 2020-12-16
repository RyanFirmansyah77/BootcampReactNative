var readBooks = require('./callback.js')

var books = [
	{name : 'LOTR' , timeSpent : 3000} , 
	{name : 'Fidas' , timeSpent : 2000} ,
	{name: 'Kalkulus' , timeSpent:4000}
]

let time = 10000
let i = 0 
readBooks(time , books[i] , function read(sisawaktu){
	if(i != books.length - 1 && time != 0 ){
		i+=1
		time -= sisawaktu
		readBooks(sisawaktu,books[i],read)
	}
})



