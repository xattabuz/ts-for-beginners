let a = "Hello world";
if(typeof a == 'string'){
	console.log(a)
}
let b: typeof a = "Hello world" // other types not working


// KEYOF
type Coord  = {
	lat: number,
	long: number
}

type P = keyof Coord
let obj: P = "lat"



// TYPE NULL
function log(a: string | null){
	// ? => optional chayning
	if(!a){
		return a?.toLowerCase()
	}
}


// TYPE BININT
const c: bigint = BigInt(111)