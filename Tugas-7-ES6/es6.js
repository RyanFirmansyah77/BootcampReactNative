//soal 1 
goldenFunction = () =>{					// ES6
	console.log("this is golden!!")
}

goldenFunction()

console.log("===================================")

//soal 2 


const newfunction = (firstname, lastname) => {
    return {
        fullname() { 
        	return `${firstname} ${lastname}` }
    }
}
   
 
console.log(newfunction("William", "Imoh").fullname())

console.log("===================================")
//soal 3 
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const { firstName , lastName , destination ,occupation ,spell }  = newObject;
console.log(firstName, lastName, destination, occupation)
console.log("===================================")
//soal 4
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
//const combined = west.concat(east) // normal JS

const combined = [... west , ... east] //es6
//Driver Code
console.log(combined)
console.log("===================================")
//soal 5
const planet = "earth"
const view = "glass"

const before = `Lorem ${view} dolor sit amet,consectetur adipiscing elit ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enimad minim veniam`

// Driver Code
console.log(before) 

