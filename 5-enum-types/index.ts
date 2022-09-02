type role = 'user' | 'admin'
enum Role {
	USER='admin',
	ADMIN='admin',
	MODERATOR='modartor',
	SUPERADMIN='superadmin'
}

interface IUser {
	user_name: string
	user_age?: string | number
	user_role: Role
}

const newUser: IUser = {
	user_name: "Diyorbek",
	user_role: Role.ADMIN,
}

function logUser(user: IUser){
	console.log(user)
}

logUser(newUser)