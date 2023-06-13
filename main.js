function habilitarValidacionEnTiempoReal1() {
  document.getElementById('divisaVender').addEventListener('input', actualizarResultado);
  document.getElementById('monedaTienes').addEventListener('change', actualizarResultado);
  document.getElementById('monedaQuieres').addEventListener('change', actualizarResultado);
}

document.getElementById('calcularBtn').addEventListener('click', actualizarResultado);

document.getElementById('monedaTienes').value = 'pesos_chilenos';
document.getElementById('monedaQuieres').value = 'dolar';
document.getElementById('divisaVender').value = 1;

function realizarCalculo(cantidad, monedaTienes, monedaQuieres) {
  let tiposDeCambio = [
      // euro, dolar, pesos_chilenos, pesos_argentinos, soles
      [1, 1.2, 800, 100, 4.5],         // euro
      [0.8, 1, 650, 80, 3.6],           // dolar
      [0.0012, 0.0015, 1, 0.12, 0.005], // pesos_chilenos
      [0.008, 0.012, 8, 1, 0.04],       // pesos_argentinos
      [0.22, 0.28, 220, 25, 1]          // soles
  ];

  let monedaTienesIndex, monedaQuieresIndex;

  switch (monedaTienes) {
      case 'euro':
          monedaTienesIndex = 0;
          break;
      case 'dolar':
          monedaTienesIndex = 1;
          break;
      case 'pesos_chilenos':
          monedaTienesIndex = 2;
          break;
      case 'pesos_argentinos':
          monedaTienesIndex = 3;
          break;
      case 'soles':
          monedaTienesIndex = 4;
          break;
  }

  switch (monedaQuieres) {
      case 'euro':
          monedaQuieresIndex = 0;
          break;
      case 'dolar':
          monedaQuieresIndex = 1;
          break;
      case 'pesos_chilenos':
          monedaQuieresIndex = 2;
          break;
      case 'pesos_argentinos':
          monedaQuieresIndex = 3;
          break;
      case 'soles':
          monedaQuieresIndex = 4;
          break;
  }

  let tipoCambio = tiposDeCambio[monedaTienesIndex][monedaQuieresIndex];
  let resultado = cantidad * tipoCambio;

  return resultado;
}

function actualizarResultado() {
  let cantidad = parseFloat(document.getElementById('divisaVender').value);
  let monedaTienes = document.getElementById('monedaTienes').value;
  let monedaQuieres = document.getElementById('monedaQuieres').value;

  let resultado = realizarCalculo(cantidad, monedaTienes, monedaQuieres);

  if (isNaN(resultado)) {
      document.getElementById('resultado').textContent = '';
  } else {
      let mensaje;

      if (monedaQuieres === 'dolar') {
          mensaje = 'El resultado de la operación es: ' + resultado + ' USD';
      } else if (monedaQuieres === 'soles') {
          mensaje = 'El resultado de la operación es: ' + resultado + ' soles';
      } else {
          mensaje = 'El resultado de la operación es: ' + resultado + ' ' + monedaQuieres;
      }

      document.getElementById('resultado').textContent = mensaje;
  }
}



habilitarValidacionEnTiempoReal1();




function habilitarValidacionEnTiempoReal() {
  let nombreInput = document.getElementById('nombre');
  let edadInput = document.getElementById('edad');
  let rutInput = document.getElementById('rut');
  let emailInput = document.getElementById('email');

  nombreInput.addEventListener('input', validarNombre);
  edadInput.addEventListener('input', validarEdad);
  rutInput.addEventListener('input', validarRut);
  emailInput.addEventListener('input', validarEmail);

  function validarNombre() {
      let nombre = nombreInput.value;
      let nombreValido = esNombreValido(nombre);

      if (!nombreValido) {
          nombreInput.classList.add('campo-incorrecto');
      } else {
          nombreInput.classList.remove('campo-incorrecto');
      }
  }

  function validarEdad() {
      let edad = parseInt(edadInput.value);
      let edadValida = esEdadValida(edad);

      if (!edadValida) {
          edadInput.classList.add('campo-incorrecto');
      } else {
          edadInput.classList.remove('campo-incorrecto');
      }
  }

  function validarRut() {
      let rut = rutInput.value;
      let rutValido = esRutValido(rut);

      if (!rutValido) {
          rutInput.classList.add('campo-incorrecto');
      } else {
          rutInput.classList.remove('campo-incorrecto');
      }
  }

  function validarEmail() {
      let email = emailInput.value;
      let emailValido = esEmailValido(email);

      if (!emailValido) {
          emailInput.classList.add('campo-incorrecto');
      } else {
          emailInput.classList.remove('campo-incorrecto');
      }
  }
}

function esNombreValido(nombre) {
  let nombreSinEspacios = nombre.trim();
  return nombreSinEspacios.length >= 3 && nombreSinEspacios.length <= 12 && /^[a-zA-Z]+$/.test(nombre);
}

function esEdadValida(edad) {
  return !isNaN(edad) && edad >= 18 && edad <= 110;
}

function esRutValido(rut) {
  let rutRegex = /^[0-9]{7,8}-[0-9Kk]$/;
  return rutRegex.test(rut);
}

function esEmailValido(email) {
  let regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return regex.test(email);
}
habilitarValidacionEnTiempoReal();






actualizarResultado();
// script.js
document.addEventListener('DOMContentLoaded', function() {
  let filtroInput = document.getElementById("filtro");
  let sucursales = document.getElementById("sucursales");
  let mensaje = document.getElementById("mensaje");

  let listaSucursales = [
    "santiago centro",
    "recoleta",
    "providencia C",
    "independencia",
    "san miguel",
    "vitacura",
    "lo barnechea",
    "renca",
    "valparaiso",
    "viña del mar",
    "mancera",
    "maipo",
    "San jose del maipo",
    "macul",
    "san fernando",
    "arica",
    "punta arenas",
    "chiloe",
    "antofagasta",
    "conchali"
  ];

  filtroInput.addEventListener("input", function() {
    let filtro = filtroInput.value.toLowerCase();

    sucursales.innerHTML = "";
    mensaje.textContent = ""; // Limpia el mensaje anterior

    for (let i = 0; i < listaSucursales.length; i++) {
      let sucursal = listaSucursales[i];

      if (sucursal.toLowerCase().indexOf(filtro) > -1) {
        let li = document.createElement("li");
        li.textContent = sucursal;
        sucursales.appendChild(li);

        // Agregar evento de clic a cada elemento de la lista
        li.addEventListener("click", function() {
          let seleccion = li.textContent;
          mostrarMensaje(seleccion);
        });
      }
    }
  });

  function mostrarMensaje(sucursal) {
    mensaje.textContent = "Has seleccionado la sucursal: " + sucursal;
  }
});