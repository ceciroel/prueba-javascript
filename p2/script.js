function suma_arreglo(arr) {
	return arr.reduce(function(t,e){
		return t += isNaN(e) ? 0 : e;
	}, 0);
}

var mi_arreglo = [1,2,3,4,5,6];
console.log(suma_arreglo(mi_arreglo));
