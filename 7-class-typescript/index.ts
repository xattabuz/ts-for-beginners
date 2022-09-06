interface IPeople {
	user_first_name: string
	user_last_name: string
	user_age: number
}

class People implements IPeople {
	user_first_name!: string
	user_last_name!: string
	user_age!: number
	constructor({ user_first_name, user_last_name, user_age }: IPeople) {
		this.user_first_name = user_first_name
		this.user_last_name = user_last_name
		this.user_age = this.validationAge(user_age)
	}

	validationAge(age: number): number {
		if (age >= 18 && 45 <= age) {
			return age
		} else {
			return 0
		}
	}

	greeting() {
		return `Hi, I am People`
	}
}

interface IEmployee extends IPeople {
	user_job: string
	user_experience: number
}

class Employee extends People implements IEmployee {
	user_job!: string
	user_experience!: number
	constructor({
		user_first_name,
		user_last_name,
		user_age,
		user_job,
		user_experience,
	}: IEmployee) {
		super({
			user_first_name,
			user_last_name,
			user_age,
		} as IPeople)
		this.user_job = user_job
		this.user_experience = user_experience
	}

	override validationAge(age: number): number {
		if (age >= 18 && 50 <= age) {
			return age
		} else {
			return 0
		}
	}

	greeting() {
		return `Hi, I am Employee`
	}
}

const peopleUser = new People({
	user_first_name: 'Diyorbek',
	user_last_name: 'Rustamjonov',
	user_age: 18,
})
const employeeUser = new Employee({
	user_first_name: 'Diyorbek',
	user_last_name: 'Rustamjonov',
	user_age: 18,
	user_job: 'Web Developer',
	user_experience: 3,
})

console.log(peopleUser)
console.log(employeeUser)
