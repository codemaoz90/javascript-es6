// Tenemos un array de tareas y queremos conseguir un array que contenga únicamente los nombres de las tareas.

// - Usar .forEach () para obtener este array.

// - Usar .map () para obtener este array.
var tasks = [
	{
		Name: "Start React web",
		Duration: 120,
	},
	{
		Name: "Work out",
		Duration: 60,
	},
	{
		Name: "Procrastinate donde facebook",
		Duration: 240,
	},
];

var withForEach = [];
tasks.forEach((task) => withForEach.push(task.Name));

var withMap = tasks.map((task) => task.Name);
console.log(withMap);
