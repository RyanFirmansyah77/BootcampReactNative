var readBooksPromise = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]
let time = 10000
let i = 0

readBooksPromise(time , books[i])
	.then(function read(sisawaktu){
		if(i != books.length - 1 && time != 0){
			i+=1
			time -= sisawaktu
			readBooksPromise(sisawaktu,books[i])
				.then(read)
		}
	
	})
	.catch(function read(sisawaktu){
		console.log("selesai")
	})
