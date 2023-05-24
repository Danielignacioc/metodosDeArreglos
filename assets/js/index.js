const tareas = [
  { id: 1, task: "primera tarea", status: false },
  { id: 2, task: "segunda tarea", status: false },
  { id: 3, task: "tercera tarea", status: false },
];




function agregarTarea() {
const spanHtml = document.querySelector("#inner_texto");
const inTarea = document.querySelector("input");

  let htmlRow = "";
  let con = 3;


  for (let tarea of tareas) {
    con++;
    htmlRow += `
    <tr>
        <td>${tarea.id}</td>
        <td>${tarea.task}</td>
        <td>${tarea.status}</td>
    </tr>`;

  }
spanHtml.innerHTML = htmlRow;

}

const boton = document.querySelector("#nuevaTarea");

boton.addEventListener("click", () => {
  tareas.push(con, inTarea.value, true);
  agregarTarea();
});