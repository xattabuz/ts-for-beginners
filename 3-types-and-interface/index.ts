type coord = { lat: number; long: number }

interface ICoord {
	lat: number
	long: number
}

type ID = number | string

function getCoord(coord: ICoord) {}


// ============= INHERITANCE =============

// interface extends Inheritance
interface IAnimal {
	name: string;
}

interface IDog extends IAnimal {
	tail?: boolean
}

const dog: IDog = {
	name: "Dog",
	tail: true
}


// type extends Inheritance
type People = {
	name: string
}

type Employee = People & {
	job: string
}

const developer: Employee = {
	name: "Diyorbek",
	job: "Back-end"
}


// ============= MERGE =============
// Merge declare interface 
interface ICar {
	name: string
} 

interface ICar {
	model?: string
} 

const car: ICar = {
	name: "BMW",
	model: "I8"
}
console.log(car)

// !!!!Merge declare types don't support!!!

// =========== EXAMPLE 1 =========== 
interface ICompany {
	readonly name: string
}

interface ISubCompany extends ICompany{
	// Pastda biriktirilgan obj ni ozgartirmaslig uchun readonly ishlatilinadi!
	readonly salary: number
}

let company: ISubCompany = {
	name: "Payme",
	salary: 300
}

console.log(company)