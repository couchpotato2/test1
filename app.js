for(let i=0; i<20; i++){
    console.log(i);
}
<link rel="javascript" href="./app.js"></link>
let task = new Task(isImportant,title,desc,priority,dueDate,contact,participants,color);
console.log ("task manager");
$
function display(task){
    console.log (task.title);

    let syntax= '<div class="task">
    <div class="head">
        
    <h5>${task.title}</h5>
    <p>${task.description}</p>'
    </div>';
    $("#task-list").append(syntax);
}
function init(){
    console.log('Task manager')
    $('#btnSave').click(saveTask);
    $('#iImportant') .click(toggleImportant);
    $('#')
}