let precioTotal = 0;
let cantidadTotal = 0;
let seguirComprando = true;
let carrito = [];

const stockGeneral = [
    {id: 1, nombre: "Spy Family", precio: 2300},
    {id: 2, nombre: "Berserk", precio: 2200},
    {id: 3, nombre: "Dragon Ball", precio: 4400}
];

function buscarProducto(nombre) {
    return stockGeneral.find(item => item.nombre.toLowerCase() === nombre.toLowerCase());
}

do {
    let producto = prompt(`¿Qué manga desea comprar?\n\n1) Spy Family\n2) Berserk\n3) Dragon Ball\n\nEscriba el nombre o el número del manga (o 'salir' para finalizar la compra):`);

    if (producto.toLowerCase() === 'salir') {
        break;
    }

    let mangaSeleccionado;

    if (isNaN(producto)) {
        mangaSeleccionado = buscarProducto(producto);
    } else {
        mangaSeleccionado = stockGeneral.find(item => item.id.toString() === producto);
    }

    if (!mangaSeleccionado) {
        alert("Producto no válido");
        continue;
    }

    let cantidad = parseInt(prompt(`Elija la cantidad de "${mangaSeleccionado.nombre}" que desee:`));

    while (isNaN(cantidad) || cantidad <= 0) {
        alert("Ingrese una cantidad válida.");
        cantidad = parseInt(prompt(`Elija la cantidad de "${mangaSeleccionado.nombre}" que desee:`));
    }

    let precioTotalProducto = mangaSeleccionado.precio * cantidad * 1.21;
    precioTotal += precioTotalProducto;
    cantidadTotal += cantidad;

    alert(`Has agregado ${cantidad} "${mangaSeleccionado.nombre}"(s) al carrito. Total a pagar: $${precioTotalProducto.toFixed(2)}`);

    carrito.push({ nombre: mangaSeleccionado.nombre, cantidad, precioTotalProducto });

    seguirComprando = confirm("¿Quieres añadir otro producto?");
} while (seguirComprando);

if (cantidadTotal > 0) {
    let listaProductos = "";
    for (const producto of carrito) {
        listaProductos += `\n- Producto: ${producto.nombre}\n- Cantidad: ${producto.cantidad}\n- Precio total: $${producto.precioTotalProducto.toFixed(2)}\n`;
    }

    const mensajeFinal = seguirComprando
        ? "Has cancelado la compra."
        : `Resumen de la compra:\n${listaProductos}\nCantidad total de productos: ${cantidadTotal}\nPrecio total a pagar: $${precioTotal.toFixed(2)}`;

    alert(mensajeFinal);
} else {
    alert("No se ha realizado ninguna compra.");
}