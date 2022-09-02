const user_name = "Diyorbek"
// LITERAL TYPE
let literType: "type_hi" = 'type_hi'

// =========== EXAMPLE 1 ===========
type typeDirection = 'left' | 'right'
function moveDir(direction: typeDirection){
	switch(direction) {
		case 'left':
			return -1
		case 'right':
			return 1
		default:
			return 0
	}
}

console.log(moveDir('left'))

// =========== EXAMPLE 2 ===========
const connection = {
	host: "localhost",
	protocol: "https" as "http",
}

function connect(host: string, protocol: 'http' | "https"): {host: string, protocol: string}{
	return {host, protocol}
}

console.log(connect(connection.host, connection.protocol))