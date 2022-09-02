// ============ Problem ============
/* 
function log(data: string | number ): string | number{
	return data
}


function log2(data: number ): string | number{
	return data
}
*/

// ============ SOLVE ============
function log<T>(data: T): T{
	return data
}

log<string>("Hello world")

// ============ EXAMPLE 1 ============
function log2<T, K>(data: T, arr: K[]):K[] {
	return arr
}
console.log(log2<string, number>('Hello world', [12, 3, 4, 3]))

// ============ EXAMPLE 2 ============
interface IHasLength {
	length: string
}

function log3<T extends IHasLength, K>(data: T, arr: K[]):K[] {
	console.log(data.length)
	return arr
}