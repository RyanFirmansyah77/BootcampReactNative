//soal 1 

function range(startnum , finishnum){
	var array = [] 
	if(startnum < finishnum){
		for(var i = startnum ; startnum <= finishnum ; startnum++){
			array.push(startnum)
		}
		return array 
	}else if(startnum > finishnum){
		for(var i = startnum ; startnum >= finishnum ; startnum--){
			array.push(startnum)
		}
		return array
	}else if(startnum == null || finishnum == null){
		return -1 
	}
}

console.log(range(1, 10)) //[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(1)) // -1
console.log(range(11,18)) // [11, 12, 13, 14, 15, 16, 17, 18]
console.log(range(54, 50)) // [54, 53, 52, 51, 50]
console.log(range()) // -1 
console.log("=============================================================")
//soal 2 
function  rangeWithStep(startnum, finishnum, step) {
	var array = []

	if(startnum < finishnum){ 
		for(var i = startnum ; startnum <= finishnum ; startnum+= step){			
			array.push(startnum)
		}
		return array 
	}else if(startnum > finishnum){
		for(var i = startnum ; startnum >= finishnum ; startnum-= step){
			array.push(startnum)
		}
		return array
	}else if(startnum == null || finishnum == null){
		return -1 
	}
}
console.log(rangeWithStep(1, 10, 2)) // [1, 3, 5, 7, 9]
console.log(rangeWithStep(11, 23, 3)) // [11, 14, 17, 20, 23]
console.log(rangeWithStep(5, 2, 1)) // [5, 4, 3, 2]
console.log(rangeWithStep(29, 2, 4)) // [29, 25, 21, 17, 13, 9, 5] 
console.log("=============================================================")
//soal 3 
function sum(startnum, finishnum, step){
	var array = []
	var jumlah = 0 
	if(startnum == null && finishnum == null && step == null){
		return 0
	}else if(step == null){ // range
		if(startnum < finishnum){
			for(var i = startnum ; startnum <= finishnum ; startnum++){
				jumlah += startnum
			}
			return jumlah
		}else if(startnum > finishnum){
			for(var i = startnum ; startnum >= finishnum ; startnum--){
				jumlah += startnum
			}
			return jumlah
		}else if(startnum == null || finishnum == null){
			return 1 
		}  
	}else{		//range with step
		if(startnum < finishnum){ 
			for(var i = startnum ; startnum <= finishnum ; startnum+= step){			
				jumlah += startnum
			}
			return jumlah 
		}else if(startnum > finishnum){
			for(var i = startnum ; startnum >= finishnum ; startnum-= step){
				jumlah += startnum
			}
		return jumlah
		}else if(startnum == null || finishnum == null ){
			return 1 
		}
	}
}
console.log(sum(1,10)) // 55
console.log(sum(5, 50, 2)) // 621
console.log(sum(15,10)) // 75
console.log(sum(20, 10, 2)) // 90
console.log(sum(1)) // 1
console.log(sum()) // 0 
console.log("=============================================================")

//soal 4 
function dataHandling(){
	var input = [
        ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
        ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
        ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
        ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
    ];
  	/*for(var i = 0 ; i < input.length ; i++){
  		var innerarraylength = input[i].length
  		for(var j = 0 ; j < innerarraylength ; j++){ 
  			console.log(input[i][j])
  		}
  	}*/
  	console.log("Nomor ID: " + input[0][0] + "\n" +
  				"Nama Lengkap: " + input[0][1] + "\n" +
  				"TTL: " + input[0][2] + " " + input[0][3] + "\n" +
  				"Hobi: " + input[0][4] + "\n"
  	)
  	console.log("Nomor ID: " + input[1][0] + "\n" +
  				"Nama Lengkap: " + input[1][1] + "\n" +
  				"TTL: " + input[1][2] + " " + input[1][3] + "\n" +
  				"Hobi: " + input[1][4] + "\n"
  	)
  	console.log("Nomor ID: " + input[2][0] + "\n" +
  				"Nama Lengkap: " + input[2][1] + "\n" +
  				"TTL: " + input[2][2] + " " + input[2][3] + "\n" +
  				"Hobi: " + input[2][4] + "\n"
  	)
  	console.log("Nomor ID: " + input[3][0] + "\n" +
  				"Nama Lengkap: " + input[3][1] + "\n" +
  				"TTL: " + input[3][2] + " " + input[3][3] + "\n" +
  				"Hobi: " + input[3][4] + "\n"
  	)


}	
dataHandling()

console.log("=============================================================")
//soal 5 
function balikKata(kata){
	var katabaru = ''
	for(var i = kata.length - 1 ; i >= 0 ;i--){
		katabaru += kata[i];
	}
	return katabaru
}

console.log(balikKata("Kasur Rusak")) // kasuR rusaK
console.log(balikKata("SanberCode")) // edoCrebnaS
console.log(balikKata("Haji Ijah")) // hajI ijaH
console.log(balikKata("racecar")) // racecar
console.log(balikKata("I am Sanbers")) // srebnaS ma I 
console.log("=============================================================")
//soal 6 
function dataHandling2(input){
	//splice
	input.splice(4,1,"Pria", "SMA Internasional Metro");
	console.log(input);

	//split
    var bulan  = input[3].split("/");
    var angka = bulan[1] ;
    console.log(angka) // langsung ke dafault , saya bingung 
	switch(angka){
		case 01:
			console.log("Januari")
			break;
		case 02:
			console.log("Februari")
			break;
		case 03:
			console.log("Maret")
			break;
		case 04:
			console.log("April")
			break;
		case 05:
			console.log("Mei")
			break;
		case 06:
			console.log("Juni")
			break;
		case 07:
			console.log("Juli")
			break;
		case 08:
			console.log("Agustus")
			break;
		case 09:
			console.log("September")
			break;
		case 10:
			console.log("Oktober")
			break;
		case 11:
			console.log(+"November")
			break;
		case 12:
			console.log("Desember")
			break;
		default:
			console.log("Masukkan kembali bulan yang benar")
	}

	//sort descending
	var sort = bulan.sort(function (value1,value2){
		return value2 - value1
	});
	console.log(sort)

	//join
	var bulan  = input[3].split("/")
	var tanggal = bulan.join("-")
	console.log(tanggal)

	//slice
	var nama = input[1]
	nama = nama.slice(0,15)
	console.log(nama)
}

var input = ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"] ;
dataHandling2(input)