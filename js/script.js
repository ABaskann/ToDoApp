let id_daily = 1
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
    if(enteredTaskDOM.value.length ==0){
        window.alert("Please enter your task!!!")
    }else{
         
        if(selectDOM.value==1){
            createTask(table1,id_daily,enteredTaskDOM.value,"table-danger")

        }else if(selectDOM.value==2){

            createTask(table2,id_important,enteredTaskDOM.value,"table-warning")            
            
        }else{
            createTask(table3,id_most_important,enteredTaskDOM.value,"table-info")
        }          
        enteredTaskDOM.value=""  
             
    }     
}
function createTask(table,id,task,color){
    table.classList.remove("invisible");
    table.classList.add("visible");
    let row1 = table.insertRow();
    row1.classList.add(color)       
    let cel11 = row1.insertCell();
    let cel12 = row1.insertCell();    
    // let cel13 = document.createElement("INPUT");  
    // cel13.setAttribute("id","checkbox");
    // cel13.setAttribute("type","checkbox");
    // cel13.setAttribute("onclick","onClicked()");
    // cel13.classList.add("form-check-input","mt-2" );
    // row1.appendChild(cel13);
    //console.log(cel13)        
    cel11.innerHTML = id;
    cel12.innerHTML = task;  
    id++;
    console.log(id)    
    //onClicked()
    
}


// function onClicked(){
//     let checkBox = document.querySelector("#checkbox");
//     if(checkBox.checked==true){
//         cel.classList.add("text-decoration-line-through")
//         console.log("clicked")
//     }else{
//         cel.classList.remove("text-decoration-line-through")
//     }   
// }



