let unionVariable: number | string = 10
function getNum(num: number | string): number | string {
	if (typeof num == 'number') return num + 10
	if (typeof num == 'string') return num + 10
	return 0
}

console.log(getNum(unionVariable))

function helloUser(user: string | string[]) {
	if(Array.isArray(user)){
		user.map((name: string) => console.log(`Hi, ${name}`))
	}
	return `Hi, ${user}`
}

helloUser(["Diyorbek", "Abduhalil"])