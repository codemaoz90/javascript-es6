// usar reduce
var epic = [
	"a",
	"long",
	"time",
	"agosto",
	"in a",
	"galaxy",
	"faro faro",
	"away",
];

const textoReducido = epic.reduce((texto, char) => {
	return texto + " " + char;
});
console.log(textoReducido);
