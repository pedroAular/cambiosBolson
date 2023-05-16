let nombre = prompt("Ingrese su nombre:");
let nombreValido = false;

while (!nombreValido) {
  if (esNombreValido(nombre) && esSoloLetras(nombre)) {
    console.log ("nombre de usuario: " +nombre);
    nombreValido = true;
  } else {
    alert("El nombre ingresado no es válido. Inténtelo nuevamente.");
    nombre = prompt("Ingrese su nombre nuevamente:");
  }
}
function esNombreValido(nombre) {
  let nombreSinEspacios = nombre.trim();
  if (nombreSinEspacios.length === 0) {
    return false;
  }
  if (nombreSinEspacios.length < 3 || nombreSinEspacios.length > 12) {
    return false;
  }
  return true;
}
function esSoloLetras(nombre) {
  return /^[a-zA-Z]+$/.test(nombre);
}
let edad = parseInt(prompt("Ingrese su edad:"));
let edadValida = false;

while (!edadValida) {
  if (esEdadValida(edad)) {
    console.log("Edad: " + edad);
    edadValida = true;
  } else {
    alert("La edad ingresada no es válida. Inténtelo nuevamente.");
    edad = parseInt(prompt("Ingrese su edad nuevamente:"));
  }
}

function esEdadValida(edad) {
  return edad >= 18 && edad <= 99;
}
let rut = prompt("Ingrese su RUT:");
let rutValido = false;

while (!rutValido) {
  if (esRutValido(rut)) {
    console.log("RUT válido: " + rut);
    rutValido = true;
  } else {
    alert("El RUT ingresado no es válido. Inténtelo nuevamente.");
    rut = prompt("Ingrese su RUT nuevamente:");
  }
}

function esRutValido(rut) {
  rut = rut.replace(/[^\dkK]/g, ''); 
  
  if (!/^(\d{1,8}([0-9Kk]))$/.test(rut)) {
    return false;
  }

  const rutNumero = parseInt(rut.slice(0, -1)); 
  const rutDV = rut.slice(-1).toUpperCase();

  let suma = 0;
  let factor = 2;

  for (let i = rutNumero.toString().length - 1; i >= 0; i--) {
    suma += parseInt(rutNumero.toString().charAt(i)) * factor;
    factor = factor === 7 ? 2 : factor + 1;
  }

  const modulo = suma % 11;
  const digitoCalculado = 11 - modulo === 10 ? 'K' : (11 - modulo).toString();

  return digitoCalculado === rutDV;
}



let email = prompt("Ingrese su correo electrónico (o escriba 'salir' para salir):");
let emailValido = false;

while (!emailValido) {
  if (email.toLowerCase() === "salir" || email.toLowerCase() === "exit") {
    console.warn("usuario no desea agregar e-mail");
    break; 
  }

  if (validarEmail(email)) {
    console.log("Correo electrónico válido: " + email);
    emailValido = true;
  } else {
    alert("El correo electrónico ingresado no es válido. Inténtelo nuevamente.");
    email = prompt("Ingrese su correo electrónico nuevamente (o escriba 'salir' para salir):");
  }
}

function validarEmail(email) {
  const exReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return exReg.test(email);
}

alert(`Bienvenido ${nombre}!, a continuacion le mostraremos las divisas disponibles, por favor
siga las instrucciones:`); 

let divisas = obtenerOpcionValida(
  `Ingrese el número correspondiente a la divisa que desea comprar:
  1.- Euro
  2.- Dólar Americano
  3.- Pesos Chilenos
  4.- Pesos Argentinos
  5.- Soles Peruanos`
);

let moneda = obtenerOpcionValida(
  `Ingrese el número correspondiente a su moneda local:
  1.- Euro
  2.- Dólar Americano
  3.- Pesos Chilenos
  4.- Pesos Argentinos
  5.- Soles Peruanos`
);

if (divisas === moneda) {
  alert("Tienes un serio problema. Por favor, inténtalo nuevamente.");
  divisas = obtenerOpcionValida(
    `Ingrese el número correspondiente a la divisa que desea comprar, RECUERDE QUE NO DEBE SER LA MISMA:
    1.- Euro
    2.- Dólar Americano
    3.- Pesos Chilenos
    4.- Pesos Argentinos
    5.- Soles Peruanos`
  );
}

let cantidad;
while (true) {
  cantidad = prompt("Ingrese la cantidad en números que desea comprar, sin puntos ni comas.");
  if (!isNaN(cantidad)) {
    break;
  } else {
    alert("La cantidad ingresada no es un número válido. Por favor, inténtelo nuevamente.");
  }
}

function obtenerOpcionValida(mensaje) {
  let opcion = prompt(mensaje);
  while (!esOpcionValida(opcion)) {
    alert("El número ingresado no es válido. Por favor, vuelva a intentarlo.");
    opcion = prompt(mensaje);
  }
  return opcion;
}

function esOpcionValida(opcion) {
  return ["1", "2", "3", "4", "5"].includes(opcion);
}

const tipoCambios = {
  euroDolar: 1.10033,
  euroPesoChileno: 850,
  euroPesoArgentino: 250,
  euroSol: 4.45,
  dolarEuro: 1 / 1.10033,
  dolarPesoChileno: 1 / 1.10033 * 850,
  dolarPesoArgentino: 1 / 1.10033 * 250,
  dolarSol: 1 / 1.10033 * 4.45,
  pesoChilenoEuro: 1 / 850,
  pesoChilenoDolar: 1 / 850 / 1.10033,
  pesoChilenoPesoArgentino: 1 / 850 * 250,
  pesoChilenoSol: 1 / 850 * 4.45,
  pesoArgentinoEuro: 1 / 250,
  pesoArgentinoDolar: 1 / 250 / 1.10033,
  pesoArgentinoPesoChileno: 1 / 250 * 850,
  pesoArgentinoSol: 1 / 250 * 4.45,
  solEuro: 1 / 4.45,
  solDolar: 1 / 4.45
}

if (divisas === "1") {
  if (moneda === "2") {
    // Euro a Dólar Americano
    const resultado = cantidad * tipoCambios.euroDolar;
    alert(cantidad + " euros equivalen a " + resultado + " dólares americanos");
    console.log("Lo que debe cancelar en dólares americanos es: " + resultado + " dólares");
  } else if (moneda === "3") {
    // Euro a Pesos Chilenos
    const resultado = cantidad * tipoCambios.euroPesoChileno;
    alert(cantidad + " euros equivalen a " + resultado + " pesos chilenos");
    console.log("Lo que debe cancelar en pesos chilenos es: " + resultado + " pesos chilenos");
  } else if (moneda === "4") {
    // Euro a Pesos Argentinos
    const resultado = cantidad * tipoCambios.euroPesoArgentino;
    alert(cantidad + " euros equivalen a " + resultado + " pesos argentinos");
    console.log("Lo que debe cancelar en pesos argentinos es: " + resultado + " pesos argentinos");
  } else if (moneda === "5") {
    // Euro a Soles Peruanos
    const resultado = cantidad * tipoCambios.euroSol;
    alert(cantidad + " euros equivalen a " + resultado + " soles peruanos");
    console.log("Lo que debe cancelar en soles peruanos es: " + resultado + " soles peruanos");
  }
} else if (divisas === "2") {
  if (moneda === "1") {
    // Dólar Americano a Euro
    const resultado = cantidad * tipoCambios.dolarEuro;
    alert(cantidad + " dólares americanos equivalen a " + resultado + " euros");
    console.log("Lo que debe cancelar en euros es: " + resultado + " euros");
  } else if (moneda === "3") {
    // Dólar Americano a Pesos Chilenos
    const resultado = cantidad * tipoCambios.dolarPesoChileno;
    alert(cantidad + " dólares americanos equivalen a " + resultado + " pesos chilenos");
    console.log("Lo que debe cancelar en pesos chilenos es: " + resultado + " pesos chilenos");
  } else if (moneda === "4") {
    // Dólar Americano a Pesos Argentinos
    const resultado = cantidad * tipoCambios.dolarPesoArgentino;
    alert(cantidad + " dólares americanos equivalen a " + resultado + " pesos argentinos");
    console.log("Lo que debe cancelar en pesos argentinos es: " + resultado + " pesos argentinos");
  } else if (moneda === "5") {
    // Dólar Americano a Soles Peruanos
    const resultado = cantidad * tipoCambios.dolarSol;
    alert(cantidad + " dólares americanos equivalen a " + resultado + " soles peruanos");
    console.log("Lo que debe cancelar en soles peruanos es: " + resultado + " soles peruanos");
  }
} if (divisas === "3") {
  if (moneda === "1") {
    // Pesos Chilenos a Euro
    const resultado = cantidad * tipoCambios.pesoChilenoEuro;
    alert(cantidad + " pesos chilenos equivalen a " + resultado + " euros");
    console.log("Lo que debe cancelar en euros es: " + resultado + " euros");
  } else if (moneda === "2") {
    // Pesos Chilenos a Dólar Americano
    const resultado = cantidad * tipoCambios.pesoChilenoDolar;
    alert(cantidad + " pesos chilenos equivalen a " + resultado + " dólares americanos");
    console.log("Lo que debe cancelar en dólares americanos es: " + resultado + " dólares");
  } else if (moneda === "4") {
    // Pesos Chilenos a Pesos Argentinos
    const resultado = cantidad * tipoCambios.pesoChilenoPesoArgentino;
    alert(cantidad + " pesos chilenos equivalen a " + resultado + " pesos argentinos");
    console.log("Lo que debe cancelar en pesos argentinos es: " + resultado + " pesos argentinos");
  } else if (moneda === "5") {
    // Pesos Chilenos a Soles Peruanos
    const resultado = cantidad * tipoCambios.pesoChilenoSol;
    alert(cantidad + " pesos chilenos equivalen a " + resultado + " soles peruanos");
    console.log("Lo que debe cancelar en soles peruanos es: " + resultado + " soles peruanos");
  }
} else if (divisas === "4") {
  if (moneda === "1") {
    // Pesos Argentinos a Euro
    const resultado = cantidad * tipoCambios.pesoArgentinoEuro;
    alert(cantidad + " pesos argentinos equivalen a " + resultado + " euros");
    console.log("Lo que debe cancelar en euros es: " + resultado + " euros");
  } else if (moneda === "2") {
    // Pesos Argentinos a Dólar Americano
    const resultado = cantidad * tipoCambios.pesoArgentinoDolar;
    alert(cantidad + " pesos argentinos equivalen a " + resultado + " dólares americanos");
    console.log("Lo que debe cancelar en dólares americanos es: " + resultado + " dólares");
  } else if (moneda === "3") {
    // Pesos Argentinos a Pesos Chilenos
    const resultado = cantidad * tipoCambios.pesoArgentinoPesoChileno;
    alert(cantidad + " pesos argentinos equivalen a " + resultado + " pesos chilenos");
    console.log("Lo que debe cancelar en pesos chilenos es: " + resultado + " pesos chilenos");
  } else if (moneda === "5") {
    // Pesos Argentinos a Soles Peruanos
    const resultado = cantidad * tipoCambios.pesoArgentinoSol;
    alert(cantidad + " pesos argentinos equivalen a " + resultado + " soles peruanos");
    console.log("Lo que debe cancelar en soles peruanos es: " + resultado + " soles peruanos");
  }
}
