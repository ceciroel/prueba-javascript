
var n = prompt("Escribe el numero de filas")
var m = prompt("Escribe el numero de columnas")


for(var r=0;r<n;r=r+1){
	str='';
	for(var c=0;c<Math.min(r+1,m);c=c+1){
		str+='*';
	}
	console.log(str);
}
