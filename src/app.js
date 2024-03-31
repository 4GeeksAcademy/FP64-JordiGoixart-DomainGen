//Almacenar selecciones
let selectedEntrante = null;
let selectedEntranteDescription = "";
let selectedPrimero = null;
let selectedPrimeroDescription = "";
let selectedBebida = null;
let selectedBebidaDescription = "";
let selectedPostre = null;
let selectedPostreDescription = "";

// Función seleccionar entrante
function selectEntrante(option) {
  selectedEntrante = option;
  hideElement("entrante_form");
  showElement("primeros_form");

  // Asigna descripcion e imagen a entrante
  switch (option) {
    case 1:
      selectedEntranteDescription = "Ensalada César.";
      showEntranteImage("src/img/Cesar.png");
      break;
    case 2:
      selectedEntranteDescription = "Patatas Bravas.";
      showEntranteImage("src/img/Bravas.png");
      break;
    case 3:
      selectedEntranteDescription = "Alitas Picantes.";
      showEntranteImage("src/img/Alitas.png");
      break;
    default:
      selectedEntranteDescription = "Descripción por defecto del entrante";
      showEntranteImage("default.png");
      break;
  }
  updateOrder();
}

// Función mostrar imagen entrante
function showEntranteImage(imageSrc) {
  document.getElementById(
    "starter_img"
  ).innerHTML = `<img src="${imageSrc}" alt="Entrante ${selectedEntrante}" style="width: 100%;">`;
}

// Función seleccionar primero
function selectPrimero(option) {
  selectedPrimero = option;
  hideElement("primeros_form");
  showElement("bebidas_form");

  // Asigna descripción e imagen a primero.
  switch (option) {
    case 1:
      selectedPrimeroDescription = "Spaghetti a la Bolognesa.";
      showPrimeroImage("src/img/Pasta.png");
      break;
    case 2:
      selectedPrimeroDescription = "Boss Burger con Patatas.";
      showPrimeroImage("src/img/Burger.png");
      break;
    case 3:
      selectedPrimeroDescription = "Burrito Mexicano.";
      showPrimeroImage("src/img/Burrito.png");
      break;
    default:
      selectedPrimeroDescription = "Descripción por defecto del primero";
      showPrimeroImage("default.png");
      break;
  }
  updateOrder();
}

// Función mostrar imagen primero
function showPrimeroImage(imageSrc) {
  document.getElementById(
    "main_img"
  ).innerHTML = `<img src="${imageSrc}" alt="Primero ${selectedPrimero}" style="width: 100%;">`;
}

// Función seleccionar bebida
function selectBebida(option) {
  selectedBebida = option;
  hideElement("bebidas_form");
  showElement("postres_form");

  // Asigna descripción e imagen bebida
  switch (option) {
    case 1:
      selectedBebidaDescription = "Coca-Cola Original.";
      showBebidaImage("src/img/Coke.png");
      break;
    case 2:
      selectedBebidaDescription = "Sprite.";
      showBebidaImage("src/img/Sprite.png");
      break;
    case 3:
      selectedBebidaDescription = "Agua Cabreiroá.";
      showBebidaImage("src/img/Agua.png");
      break;
    default:
      selectedBebidaDescription = "Descripción por defecto de la bebida";
      showBebidaImage("default.png");
      break;
  }
  updateOrder();
}

// Función mostrar imagen bebida
function showBebidaImage(imageSrc) {
  document.getElementById(
    "drink_img"
  ).innerHTML = `<img src="${imageSrc}" alt="Bebida ${selectedBebida}" style="width: 100%;">`;
}

// Función seleccionar postre
function selectPostre(option) {
  hideElement("postres_form");
  showElement("boton");
  showElement("post_menu");

  // Asigna descripción e imagen postre
  switch (option) {
    case 1:
      selectedPostreDescription = "Brownie de Chocolate con Nata y Topping.";
      showPostreImage("src/img/Brownie.png");
      break;
    case 2:
      selectedPostreDescription = "Crepe de Chocolate con Frutos Rojos.";
      showPostreImage("src/img/Crepe.png");
      break;
    case 3:
      selectedPostreDescription = "Helado de Vainilla con Galleta y Brownie.";
      showPostreImage("src/img/Helado.png");
      break;
    default:
      selectedPostreDescription = "Descripción por defecto del postre";
      showPostreImage("default.png");
      break;
  }
  updateOrder();
}

// Función mostrar imagen postre
function showPostreImage(imageSrc) {
  document.getElementById(
    "dessert_img"
  ).innerHTML = `<img src="${imageSrc}" alt="Postre ${selectedPostre}" style="width: 100%;">`;
}

// Función actualizar el pedido
function updateOrder() {
  document.getElementById(
    "starter_info"
  ).innerText = selectedEntranteDescription;
  document.getElementById("main_info").innerText = selectedPrimeroDescription;
  document.getElementById("drink_info").innerText = selectedBebidaDescription;
  document.getElementById("dessert_info").innerText = selectedPostreDescription;
}

// Funciones mostrar y ocultar elementos
function showElement(id) {
  document.getElementById(id).style.display = "block";
}

function hideElement(id) {
  document.getElementById(id).style.display = "none";
}

// Oculta elementos al cargar la página
window.onload = function() {
  hideElement("primeros_form");
  hideElement("boton");
  hideElement("bebidas_form");
  hideElement("postres_form");
  hideElement("post_menu");
};
