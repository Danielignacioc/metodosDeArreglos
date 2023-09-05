document.addEventListener("DOMContentLoaded", main(false)) ;

function main(validated) {
  let hr = new Date();
  console.log(hr);
  
  const task = document.querySelector('#addTaskTxt');
 

  if ((validated != 'false') || (validated != 0) || (validated != undefined )|| (validated != null) ) {
  
    console.log('[+][+][+]FUNCION CARGADA[+][+][+]');
    console.log(task);
    }
    
    else {
      val(task, validated)
      validated = false;
      return (task, validated);
    }
    
    function val(task, validated) {

    if ((task.value != '') || (task.value != undefined) || (task.value != null)) {
      validated = true;
      return(task, validated);
    }

    else {
      validated = false;
      return main(validated);
    }

    function getData(task)
    {
      for (const i in task) {
        if (Object.hasOwnProperty.call(task, i)) {
          const tasks =+ task[i];
          
        }
      }

      function render(){}

    }


    function setData(){
      const 
    };
  }


}








//FUNCION INNECESARIA 
/* task.addEventListener('', getData());
  function getData(task)
  {
    let formatdata = [];                          
    formatdata 
    return formatData;
  } 
}


*/


/* const inTarea = document.querySelector("input");

const tareas = [
  { id: 1, task: "primera tarea", status: false },
  { id: 2, task: "segunda tarea", status: false },
  { id: 3, task: "tercera tarea", status: false },
];




function agregarTarea() {
const spanHtml = document.querySelector("#inner_texto");

  let htmlRow = "";
  let con = 3;


  for (let tarea of inTareas) {
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
});}
 */


/* const inTarea = document.getElementsByTagName("input");
tskVal = inTarea[0].value;

console.log(inTarea[0].checkValidity);  /* crear funcion que agregue la propiedad checked y ocuparla para validar */


