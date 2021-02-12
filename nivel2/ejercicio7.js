window.onload = () => {
	const tablaMultiplicar = () => {
		const n1 = document.getElementById("n1").value,
			n2 = document.getElementById("n2").value,
			data = document.getElementById("data");
		table = `<table class="table table-dark table-hover">
    <thead>
    <tr style="font-size:20px; text-align:center">
      <th>Tabla de multiplicar</th>
    </tr>
    </thead>
    `;
		for (let index = 1; index <= n2; index++) {
			//console.log(`${n1} * ${index} = ${n1 * index}`);
			table += `<tr style="font-size:20px; text-align:center">
      <td>${n1} x ${index} = ${n1 * index}</td>
      </tr>
      
      `;
			data.innerHTML = table;
		}
		table += "</table>";
	};

	document.getElementById("btn").addEventListener("click", tablaMultiplicar);
};
