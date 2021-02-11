window.onload = () => {
	const n1 = prompt("Ingrese numero del 1 al 10");
	const n2 = prompt("Ingrese numero del 1 al 10");

	for (let index = 1; index <= n2; index++) {
		console.log(`${n1} * ${index} = ${n1 * index}`);
	}
};
