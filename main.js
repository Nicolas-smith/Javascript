let producto = ""
let precioTotal = 0
let cantidadTotal = 0
let seguirComprando = true

do {
    producto = prompt("¿Qué manga desea comprar?\n 1)Spy Family\n 2)Berserk\n 3)Dragon Ball");
    let cantidad = parseInt(prompt("Elija la cantidad que desee"));
    

    while(isNaN(cantidad) || cantidad <= 0){
        alert("Ingresá un número válido")
        cantidad = parseInt(prompt("Elija la cantidad que desee"));
        }

let precio = 0;

switch (producto) {
    case "Spy Family":
        precio = 2300;
        break;
    case "Berserk":
        precio = 2200;
        break;
    case "Dragon Ball":
        precio = 4400;
        break;
    default:
        alert("El producto ingresado no es válido");
        continue;
}

let precioTotalProducto = precio * cantidad;
precioTotal += precioTotalProducto;
cantidadTotal += cantidad;

alert('Has agregado '+cantidad+' '+producto+'(s)'+' al carrito. Total a pagar: $'+precioTotalProducto);

seguirComprando = confirm("¿Quieres añadir otro producto?")

if (!seguirComprando) {
    let finalizarCompra = confirm("¿Quiere finalizar la compra?")

    if (finalizarCompra) {
        alert("Has comprado "+cantidadTotal+" de productos por un total de $"+precioTotal+".")
    }else{
        alert("Hasta pronto!")
    }
}
} while (seguirComprando);
