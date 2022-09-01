//1.1 Variable to type
let user_name: string = '@diyorbekrustamjonov'
let user_birth_year: number = 2005
let user_age: number =
	Number(new Date().getFullYear()) - Number(user_birth_year)

//=============== 1.2 Array types string =============== 
let elemNumbers: number[] = [1, 2, 3, 4, 5]
let elemString: string[] = ['Apple', 'Orange']

//=============== 1.3 tuples =============== 
let elemTuple: [number, string, boolean] = [1, 'Hello world', true]
elemTuple.push("4 elem")
elemTuple[0]

// =============== 1.4 Any ===============
let a: any = 10
a = 20
a = "Hello"

let anyArray: any[] = ["Hello world", 10, true]

//=============== 1.5 function ===============
function great(name: string): string{
	return `Hi, ${name}`
}
// 1.5.1 Anonymous functions 
let names: string[] = ["Diyorbek", "Abduhalil"]
names.map((x: string) => console.log(x))



// =============== 1.6 Object types =============== 
function objCoord(coord: {lat?: number, long?: number}): {lat?: number, long?: number}{
	return coord
} 

console.log(objCoord({
	lat: 66.6,
	long: 11.3
}))