const gestorDeTareas = {
  tareas: [],
  
  agregarTarea: function(titulo, prioridad) {
    const nuevaTarea = {
      id: this.tareas.length + 1,
      titulo: titulo,
      prioridad: prioridad,
      completada: false
    };
    
    this.tareas.push(nuevaTarea);
    console.log("Tarea agregada: " + titulo);
  },

  completarTarea: function(idTarea) {
    let encontrada = false;
    
    for (let i = 0; i < this.tareas.length; i++) {
      if (this.tareas[i].id === idTarea) {
        this.tareas[i].completada = true;
        encontrada = true;
      }
    }
    
    if (encontrada) {
      console.log("Tarea completada con éxito.");
    } else {
      console.log("No se encontró la tarea.");
    }
  },

  obtenerConteoTareasPendientes: function() {
    let pendientes = 0;
    
    this.tareas.forEach(tarea => {
      if (tarea.completada === false) {
        pendientes++;
      }
    });
    
    return pendientes
  }
};

gestorDeTareas.agregarTarea("Estudiar JavaScript", "Alta");
gestorDeTareas.agregarTarea("Hacer ejercicio", "Media");
gestorDeTareas.completarTarea(1);
console.log("Tareas pendientes: " + gestorDeTareas.obtenerConteoTareasPendientes());