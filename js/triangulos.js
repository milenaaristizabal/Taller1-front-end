
let lado1 = prompt('Digite el valor del primer lado')
let lado2 = prompt('Digite el valor del segundo lado')
let lado3 = prompt('Digite el valor del tercer lado')

if (lado1 == lado2 && lado1 == lado3){
    alert("Es un  triangulo equilátero \n Los lados que digitó fueron : " +lado1+ ", "+lado2+ ", " +lado3);
}

else if(lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
    alert("Es un  triangulo isósceles \n Los lados que digitó fueron : " +lado1+ ", "+lado2+ ", " +lado3);
}

else {
    alert("Es un  triangulo escaleno \n Los lados que digitó fueron : " +lado1+ ", "+lado2+ ", " +lado3);
}