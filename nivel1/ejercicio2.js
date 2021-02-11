//Arregla el error del siguiente bloque de código:
var users = [
	{ Firstname: "Homero ", Lastname: " Simpson " },
	{ Firstname: "Margen", Lastname: "Simpson" },
	{ Firstname: "Bart", Lastname: "Simpson" },
	{ Firstname: "Lisa", Lastname: "Simpson" },
	{ Firstname: "Maggie", Lastname: "Simpson" },
];

users.map(function (user) {
	console.log(user.Firstname);
});

// El problema era el orden ;D
