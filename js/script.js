let id_daily = 1;
let id_important = 1;
let id_most_important = 1;

takeTask();


function takeTask(){       
    let buttonDOM = document.querySelector('#buttonsent')
    buttonDOM.addEventListener("click",addButton);    
}

function addButton(){           
    event.preventDefault()  
    createTable()     
}

function createTable(){
    
    let table1 = document.querySelector("#table1")
    let table2 = document.querySelector("#table2")
    let table3 = document.querySelector("#table3")
    let enteredTaskDOM = document.querySelector("#enteredTask")
    let selectDOM = document.querySelector("#select");  

    if(enteredTaskDOM.value.length == 0){
        window.alert("Please enter your task!!!")
    }else{         
        if(selectDOM.value==1){
            createTask(table1,id_daily,enteredTaskDOM.value,"table-danger","first")
        }else if(selectDOM.value==2){
            createTask(table2,id_important,enteredTaskDOM.value,"table-warning","second")                       
        }else{
            createTask(table3,id_most_important,enteredTaskDOM.value,"table-info","third")
        }          
        enteredTaskDOM.value="";
        
        
        
      
        
    }     
}
function createTask(table,id,task,color,which){
     table.classList.remove("invisible");
     table.classList.add("visible");
     let trElement = document.createElement('tr');
     let tbodyElement = document.createElement('tbody');
     let id_element = document.createElement('td');
     let task_element = document.createElement('td');
     let done_element = document.createElement('td');
     let checkbox = document.createElement("INPUT")
     checkbox.setAttribute("id","checkbox");
     checkbox.setAttribute("type","checkbox");
     checkbox.setAttribute("onchange","onClicked(checkbox)");
     checkbox.classList.add("form-check-input");
     trElement.classList.add(color)
     trElement.appendChild(id_element);
     trElement.appendChild(task_element);
     trElement.appendChild(done_element);
     done_element.appendChild(checkbox);
     tbodyElement.appendChild(trElement);
     table.appendChild(tbodyElement); 
     id_element.innerHTML = id
     task_element.innerHTML = task; 
     if(which == "first"){
        id_daily++
     } else if(which == "second"){
        id_important++
     }else if(which == "third"){
        id_most_important++
     }    
     
     onClicked(checkbox)
        
}
function onClicked(checkbox){
    if(checkbox.checked==true){
        

     }else{
        console.log("basılmadı")
     }
 }

