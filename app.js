// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Variables que tomo del HTML
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");

// Función para agregar un amigo
function agregarAmigo() {
  nombre = inputAmigo.value;
  if (nombre === "") {
    alert("Favor de ingresar un nombre válido");
    return;
  }

  const li = document.createElement("li");
  li.textContent = nombre;
  listaAmigos.appendChild(li);

  inputAmigo.value = "";
}

function sortearAmigo() {
  const amigos = listaAmigos.getElementsByTagName("li");
  if (amigos.length == 0) {
    alert("No hay amigos para sortear");
  }
  const aleatorio = Math.floor(Math.random() * amigos.length);
  const resultado = document.getElementById("resultado");
  const li = document.createElement("li");
  li.textContent = `Tu amigo secreto es: ${amigos[aleatorio].textContent}`;
  resultado.appendChild(li);
  listaAmigos.innerHTML = "";
}
