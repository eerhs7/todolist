let stuffs = document.getElementById("stuffs");
let addTaskbtn = document.getElementById("add");


showTasks();
addTask.addEventListener("click", function() {
    let addTaskVal = stuffs.value;
    if (addTaskVal.trim() != 0) {
        let webtask = localStorage.getItem('localTask');

        //checking array
        if (webtask == null) {
            taskObj = []; //creating
        } else {
            taskObj = JSON.parse(webtask);
        }

        taskObj.push(addTaskVal); //adding to array
        localStorage.setItem('localTask', JSON.stringify(taskObj));
    } else {
        alert("Please enter task!");
    }

    stuffs.value = '';


    console.log(addTaskVal);
    showTasks();
})

function showTasks() {
    let webtask = localStorage.getItem('localTask');

    //checking array
    if (webtask == null) {
        taskObj = []; //creating
    } else {
        taskObj = JSON.parse(webtask);
    }


    let html = '';
    let taskslist = document.getElementById('container-list');

    if (taskObj.length == 0) {
        console.log("no data");
        html = `<div id="items">
        <p class="empty">No tasks present in your list</p></div>`;
    } else {
        taskObj.forEach((item, index) => {
            html = html + `<div id="items">
            <p class="form-input1">${item}</p>
            <div class="buttons">
                <button class="edit-button" id="edit" onclick="editTask(${index})">Edit</button>
                <button class="delete-button" id="delete" onclick="deleteTask(${index})">Delete</button>
            </div>

        </div> `

        });
    }


    taskslist.innerHTML = html;
} {
    /* <textarea class="form-input1" id='tasks' index=${index} readonly>${item}
                </textarea> */
}

function editTask(index) {
    let saveindex = document.getElementById('saveindex');
    let addtaskbtn = document.getElementById("addTask");
    let savetaskbtn = document.getElementById('saveTask');

    saveindex.value = index;

    let webtask = localStorage.getItem('localTask');
    let taskObj = JSON.parse(webtask);
    stuffs.value = taskObj[index];
    stuffs.focus();
    addtaskbtn.style.display = "none";
    savetaskbtn.style.display = "block";
}


// function editTask(index) {
//     let saveindex = document.getElementById('saveindex');
//     saveindex.value = index;
//     let taskedit = document.querySelectorAll('.edit-button')[index];
//     console.log(taskedit);

//     let webtask = localStorage.getItem('localTask');
//     let taskObj = JSON.parse(webtask);

//     var editC = document.querySelectorAll('.form-input1')[index];


//     if (taskedit.innerText.toLowerCase() == "edit") {
//         console.log("save");
//         var editC = document.querySelectorAll('.form-input1')[index];
//         editC.readOnly = false;
//         editC.focus();
//         taskedit.innerText = "save";



//     } else {

//         var editC = document.querySelectorAll('.form-input1')[index];
//         console.log(editC.value);
//         editC.readOnly = true;
//         taskedit.innerText = "edit";

//         taskObj[index] = editC.value;
//         localStorage.setItem('localTask', JSON.stringify(taskObj));
//         console.log(taskObj);

//         showTasks();

//     }




// }


//save task
let savetaskbtn = document.getElementById('saveTask');
savetaskbtn.addEventListener("click", function() {
    let addtaskbtn = document.getElementById("addTask");
    let saveindex = document.getElementById('saveindex').value;

    let webtask = localStorage.getItem('localTask');
    let taskObj = JSON.parse(webtask);

    taskObj[saveindex] = stuffs.value;
    addtaskbtn.style.display = "block";
    savetaskbtn.style.display = "none";

    stuffs.value = '';

    localStorage.setItem('localTask', JSON.stringify(taskObj));

    console.log(taskObj);

    showTasks();


});

function deleteTask(index) {
    // let saveindex = document.getElementById('saveindex').value;
    let webtask = localStorage.getItem('localTask');
    let taskObj = JSON.parse(webtask);

    taskObj.splice(index, 1);

    localStorage.setItem('localTask', JSON.stringify(taskObj));

    showTasks();
}