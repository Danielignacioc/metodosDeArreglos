document.addEventListener("DOMContentLoaded", main(false)) ;


/* principal function where the program start and use the declarated functions */
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
    
    /* Make a validation with the pointed text entry and return for validated check boolean and the task in case its passed the val filter  */
    function val(task, validated) {

    if ((task.value != '') || (task.value != undefined) || (task.value != null)) {
      validated = true;
      return(task, validated);
    }

    else {
      validated = false;
      return main(validated);
    }


    /* RETURN AN ARRAY WITH THE DATA TO BE SETTED AND LATER, RENDERED */
    function getData(task)
    {
      console.log("[+] entering to getData function [+]");
      let tasks = '';
      
      for (const i in task) {
        if (task.hasOwnProperty.call(task, i)) {
          tasks += task[i];
          console.log("[+] entering to for on getData function  seeing the actual element on task: "+task[i]+" [+]");
        }
      }
      if (tasks != 'null' || tasks != 'undefined' || tasks != 0 || tasks != false || tasks != ''){
      console.log("[+] exiting of for iterator and/from getData function: "[+]");
      return (tasks);
    }

  }

      /* PUT THE TEMPLATE AND VALUES FROM INPUT TO HTML  */
      function render(){
        rerturn 0;
      }

    }



    /* SET THE DATA PREVIUSLY SELECTED [getData(task)]. Ask and return an ordered array */
    function setData(){ 
      return 0; 
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


