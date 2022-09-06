let a = "Hello world";
if(typeof a == 'string'){
	console.log(a)
}

let b: typeof a = "Hello world" // other types not working


// IN THE TYPE
type Coord  = {
	lat: number,
	long: number

}