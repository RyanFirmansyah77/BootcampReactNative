//Soal 1 

console.log('LOOPING PERTAMA')

var flag = 2 ;

while(flag <= 20 ){
	console.log(flag + " - I love coding")
	flag += 2 ;
}

console.log('LOOPING KEDUA')

var flag2 = 20 ;

while(flag2 >= 2 ){
	console.log(flag2 + " - I love coding")
	flag2 -= 2 ;
}

console.log("===============================================")

//soal 2 
var index = 1 
for(var index = 1 ; index <= 20 ; index++){
	if(index % 3 == 0 && index % 2 == 1 ){
		console.log(index + " - I Love Coding")
	}else if(index % 2 == 1 ){
		console.log(index + " - Santai")
	}else if(index % 2 == 0 ){
		console.log(index + " - Berkualitas")
	}
}
console.log("===============================================")
//soal 3 
var baris = 4
var kolum = 8
for(var i = 1 ; i <= baris ; i++){
	var pagar = ''
	for(var j = 1 ; j <=kolum ; j++){
		pagar += '#'
	}
	console.log(pagar)
}
console.log("===============================================")
//soal 4 
var alas =  7 
for(var i = 1 ; i <= alas ; i++){
	var pagar = ''
	for(var j = 1 ; j <= i ; j++){
		pagar += '#'
	}
	console.log(pagar)
}
console.log("===============================================")
//soal 5 

var baris = 8
var kolum = 8
for(var i = 1 ; i <= baris ; i++){
	var pagar = ''
	for(var j = 1 ; j <=kolum ; j++){
    var jumlah = i+j;
    if(jumlah % 2 == 0){
      pagar += ' '
    }else{
      pagar += '#'
    }
		
	}
	console.log(pagar)
}