// funcion de menu apenas ingrese el usuario
function menulista () {

    let opcionmenu = ""; 
    
    while (opcionmenu !== '5') {
        opcionmenu = prompt('Seleccione un número del menu\n 1. Agregar tarea\n 2. Ver total de tareas\n 3. Ver número de tareas\n 4. Eliminar tarea\n 5. Salir del menu');
        console.log('Su elección elegida fue: ', opcionmenu)

    switch (opcionmenu) {

        case '1':
            agregartarea();
            break;
        case '2':
            vertotal();
            break;
        case '3':
            vernumero();
            break;
        case '4':
            eliminartarea();
            break;
        case '5':
            alert('¡Gracias por usar nuestro to-do list!');
            break;
        default:
            console.log('Opcion equivocada, por favor intenta de nuevo');
            break;
        }
    }
}
// array de agregar tareas

const tareas = [];

function agregartarea() {

    let tarea = prompt('Ingrese su nueva tarea');
    if (tarea) {
        tareas.push(tarea);
        console.log(tareas)
        alert('Su tarea nueva ha sido agregada correctamente') 
    } 
    else {
        alert('No se registró ninguna tarea');
    }

}

// ver total de tareas

function vertotal() {

    alert("Tareas actuales:\n" + tareas.join("\n"));
    console.log("Tareas actuales:", tareas);
}

// ver número de tareas



function vernumero() {
    alert('Tienes '+tareas.length + ' tareas en total');
    console.log('Total de tareas: ', tareas.length);
}

// si no hay tareas mensaje
function eliminartarea() {
    if (tareas.length === 0) {
        alert("No hay tareas para eliminar.");
        return;
    }
// mostrar menu de tareas por el momento
    let mensaje = "Tareas actuales:\n";
    for (let i = 0; i < tareas.length; i++) {
        mensaje += (i + 1) + ". " + tareas[i] + "\n";
    }

    let entrada = prompt(mensaje + "\nIngrese el número de la tarea que desea eliminar:");
    let seleccion = parseInt(entrada);

    // Comprobamos que lo ingresado no sea vacío, y esté en el rango
    if (entrada !== "" && seleccion >= 1 && seleccion <= tareas.length) {
        let tareaEliminada = tareas.splice(seleccion - 1, 1);
        alert('Tarea eliminada: "' + tareaEliminada[0] + '"');
    } else {
        alert("Número inválido. No se eliminó ninguna tarea.");
    }
    console.log('Sus tareas actuales son: ', tareas);
}

menulista();
