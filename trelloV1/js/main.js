var botonAgregar = document.getElementById("botonAgregar");
	botonAgregar.addEventListener("click", anadirLista);

function anadirLista(e){
	var cajaLista = document.getElementById("cajaLista");
	var cuadroTexto = document.createElement("input").setAttribute("placeholder","Añadir una lista");
	var botonAgregar = document.createElement("button");
		botonAgregar = document.createTextNode("Hola");
		cajaLista.appendChild(cuadroTexto);
		cajaLista.appendChild(botonAgregar);

	
	}

	// if ( agregar == 0 ){

	// 	alert("ingresa un texto");
	// 	console.log("no agrego texto");
	// 	return false;
	// }else{

// 		var listaUl = document.getElementById("listaUl");
// 		var lista = document.createElement("li");
// 		lista.classList.add("bg-primary");
// 		var check = document.createElement("input");
// 		check.setAttribute("type","checkbox");
// 		var spanTrash = document.createElement("span");
// 		spanTrash.classList.add("fa","fa-trash");
// 		lista.appendChild(check);
// 		lista.appendChild(textoArea);
// 		lista.appendChild(spanTrash);
// 		listaUl.appendChild(lista);

// 		spanTrash.onclick = function (){
// 		listaUl.removeChild(lista);
// 		};
// 		check.onclick = function(){
// 			listaUl.classList.toggle("delineado");
		
// 	document.getElementById("textoArea").value = "";

// 	}

// };




