window.onload = () => {
	const tablaMultiplicar = () => {
		const n1 = document.getElementById("n1").value,
			n2 = document.getElementById("n2").value,
			table = document.getElementById("table");
		for (let index = 1; index <= n2; index++) {
			//console.log(`${n1} * ${index} = ${n1 * index}`);
			let tr = document.createElement("tr");

			let td = document.createElement("td");
		}
	};

	document.getElementById("btn").addEventListener("click", tablaMultiplicar);
};
