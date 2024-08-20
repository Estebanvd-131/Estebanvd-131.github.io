/* Se adicciona un "event listener" para cuando se cargue todo el contenido
de la pagina*/
document.addEventListener("DOMContentLoaded", () => {

    //se obtiene referencia a la lista dinamica:
    const taskList = document.getElementById("taskList");

    //referencia al elemento seleccionado de la lista:
    let selectedTask = null;

    // se adicciona event listener para cuando se haga click en el boton de agregar tarea:
    document.getElementById("addTask").addEventListener(  "click",() => {
      const textoTarea = prompt("Ingrese el nombre de la tarea");
      if(textoTarea)
      {
        //crea un nuevo elemento HTML de tipo "li"
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = textoTarea;
        //se le adicciona el handler de seleccion a la nueva tarea creada:
        taskList.appendChild(nuevaTarea);
        selectTaskHandler(nuevaTarea);

      }
    } );
    // se adicciona event listener para cuando se haga click en el boton de editar tarea
    document.getElementById("deleteTask").addEventListener( "click", () => {
      if(selectedTask)
      {
        taskList.removeChild(selectedTask);
        selectedTask = null;
      }
      else{
        alert("no ha seleccionado ninguna tarea");
      }
    } );


    document.getElementById("editTask").addEventListener( "click", () => {
      if(selectedTask)
      {
        const nuevoTexto = prompt("Modificar la tarea", selectedTask.textContent);
        if(nuevoTexto)
        {
          selectedTask.textContent = nuevoTexto;
        }
      }
      else{
        alert("Seleccione una tarea para editar");
      }
    } );


    function selectTaskHandler(task)
      {
        task.addEventListener("click", () => {
          selectedTask = task;
        });
      }

    //manejo de lenguajes de programacion:
    const languajeList = document.getElementById("languajeList");
    let selectedLanguaje = null;

    document.getElementById("addLanguaje").addEventListener( "click", () => {
      const nuevoLenguaje = prompt("Ingrese el nombre del lenguaje");
      if(nuevoLenguaje)
      {
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nuevoLenguaje;
        languajeList.appendChild(nuevoElemento);
        selectedLanguajeHandler(nuevoElemento);
      }
    } );

    function selectLanguajeHandler(languaje) {
      languaje.addEventListener("click", () => {
        selectedLanguaje = languaje;
      })
    }
  } );
