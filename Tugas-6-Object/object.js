//soal 1
function  arrayToObject(people) {
	var age = 0
	var now = new Date()
	var thisYear = now.getFullYear()
	for(var i = 0 ; i < people.length ; i++){
		if(people[i][3] == null || people[i][3] > thisYear){
			age = "Invalid Birth Year"
		}else{
			age = thisYear - people[i][3]
		}
		var list = {
		    firstName: people[i][0],
	        lastName: people[i][1],
        	gender: people[i][2],
        	age: age
		}
		console.log(list.firstName + " " + list.lastName+ ":")
		console.log(list)
	}	
}
var people2 = [ 
	["Tony", "Stark", "male", 1980], 
	["Pepper", "Pots", "female", 2023] 
]

var people = [ 
	["Bruce", "Banner", "male", 1975], 
	["Natasha", "Romanoff", "female"] 
]
arrayToObject(people)
arrayToObject(people2) 

console.log("====================================================")

//soal 2
function shoppingTime(memberId, money){
	var barang = [
		["Sepatu Stacattu",1500000],
		["Baju Zoro",500000],
		["Baju H&N" ,250000],
		["Sweater Uniklooh",175000],
		["Casing Handphone" , 50000]
	]

	var output = {
		memberId : memberId , 
		money : money,
		listPurchased :[],
		changemoney : 0
	}

   	if(memberId == null && money ==null){
		return "Mohon maaf, toko X hanya berlaku untuk member saja"
	}else if(money < 50000){
		return "Mohon maaf, uang tidak cukup"
	}else if(memberId == null){
		return "Mohon maaf, toko X hanya berlaku untuk member saja"
	}else{	
		for(var i = 0 ; i < barang.length ; i++){
			if(money >= barang[i][1]){
				output.listPurchased.push(barang[i][0])
				money -= barang[i][1]
				output.changemoney = money
			}
		}
		return output
	}

	
}
console.log(shoppingTime('1820RzKrnWn08', 2475000));
console.log(shoppingTime('82Ku8Ma742', 170000));
console.log(shoppingTime('', 2475000));
console.log(shoppingTime('234JdhweRxa53', 15000));
console.log(shoppingTime());
console.log("====================================================")
//soal 3
function naikAngkot(listPenumpang){
	var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
	var harga = []

	for(var i = 0 ; i < listPenumpang.length ; i++){
		var start = rute.indexOf(listPenumpang[i][1])
		var finish =  rute.indexOf(listPenumpang[i][2])
		var output = {
			penumpang : listPenumpang[i][0],
			naikDari : listPenumpang[i][1],
			tujuan : listPenumpang[i][2],
			bayar : (finish - start) * 2000
		}
		harga.push(output)
	}
	return harga


}
console.log(naikAngkot([
		['Dimitri', 'B', 'F'], 
		['Icha', 'A', 'B']
	]));
console.log(naikAngkot([]));