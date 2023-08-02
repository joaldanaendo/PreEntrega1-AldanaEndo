// Inicio de interacción entre el usuario y la tienda
let cliente = prompt("Ingrese su usuario");
let password = prompt("Ingrese su contraseña");

// Validación de credenciales
while (cliente !== "karen" || password !== "mwmw") {
    alert("Credenciales incorrectas");
    cliente = prompt("Ingrese su usuario");
    password = prompt("Ingrese su contraseña");
}

// Solicitud de productos a llevar
let productos = parseInt(prompt("Indique la cantidad de productos a llevar"));

// Validación de cantidad de prodcutos
while (isNaN(productos) || productos === 0) {
    alert("Verifique la cantidad por favor");
    productos = parseFloat(prompt("Indique la cantidad de productos a llevar"));
}

// Declaración de variables a usar 
let total;
let promo = prompt("Indique su promoción");

// Función para evaluar el pago final en función a la cantidad de productos y una promoción
function precioFinal(productos, promo, total) {

    switch (promo) {
        case "1":
            total = 1000 * productos;
            alert(`Gracias, ${cliente}, tu pago final es de $${total}`);
            break;
        case "2":
            total = 850 * productos;
            alert(`Felicitaciones, ${cliente}, tu pago final es de $${total}`);
            break;
        default:
            total = 2000 * productos;
            alert(`Gracias por tu compra, ${cliente}, paga $${total}`)
    }
    return total;
}

// Invocación de la función
precioFinal(productos, promo);

// Cierre de interacción
alert(`¡Vuelve pronto (=*.*=) !`);
