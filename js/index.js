const buttonAdd = document.querySelector('.add-tasks-controller-button');
const formTask = document.querySelector('.tasks-form');
const noTasks = document.querySelector('.no-task');

const inputTask = document.querySelector('.add-task-input'); //Input da Tarefa
const addTask = document.querySelector('.add-task-button'); //Adicionar Tarefa
const cancelTask = document.querySelector('.cancel-task-button'); //Cancelar Tarefa
const listTask = document.querySelector('.tasks'); //Lista de Tarefas

const tasks = [];
let id = 0;

const animationFadeOut = () => {
    setTimeout(function() {
        noTasks.classList.remove('fade-in');
        noTasks.classList.add('fade-out');
    }, 100);
    setTimeout(function() {
        noTasks.setAttribute('style','display:none');
    }, 300);
};

const animationFadeIn = () => {
    setTimeout(function() {
        noTasks.classList.remove('fade-out');
        noTasks.classList.add('fade-in');
    }, 100);
    setTimeout(function() {
        noTasks.setAttribute('style','display:block');
    }, 300);
};

function appLoading() {
    const loading = document.querySelector('.loading-app');
    const logoSvg = document.querySelector('.logo-svg');

    setTimeout(function() {
        loading.classList.add('fade-out');
        logoSvg.classList.add('fade-out');
    }, 1000);
    
    setTimeout(function() {
        loading.setAttribute('style','display:none');
    }, 1200);

    if(tasks.length == 0){
        animationFadeIn();
    } else {
        animationFadeOut();
    }
    
}

function openTaskTab(){
    buttonAdd.setAttribute('style','display:none;');
    formTask.setAttribute('style','display:block;');
}

function closeTaskTab() {
    buttonAdd.setAttribute('style','display:flex;');
    formTask.setAttribute('style','display:none;');
}

function createTask(task) {
    inputTask.value = '';

    const li = document.createElement('li');
    li.innerText = task;
    li.id = `task-${id}`;
    li.classList.add('li-task');
    listTask.appendChild(li);

    const divDelete = document.createElement('div');
    const buttonDelete = document.createElement('button');
    buttonDelete.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="pointer-events: none;"><g fill="none" fill-rule="evenodd"><path d="M0 0h24v24H0z"></path><rect width="14" height="1" x="5" y="6" fill="currentColor" rx=".5"></rect><path fill="currentColor" d="M10 9h1v8h-1V9zm3 0h1v8h-1V9z"></path><path stroke="currentColor" d="M17.5 6.5h-11V18A1.5 1.5 0 0 0 8 19.5h8a1.5 1.5 0 0 0 1.5-1.5V6.5zm-9 0h7V5A1.5 1.5 0 0 0 14 3.5h-4A1.5 1.5 0 0 0 8.5 5v1.5z"></path></g></svg>';
    divDelete.appendChild(buttonDelete);
    li.appendChild(divDelete);

    //Styles
    divDelete.classList.add('div-control-delete');
    buttonDelete.classList.add('button-control-delete');
    
    tasks.push({
        id: 'task-' + id++,
        task: task
    });

    closeTaskTab();
    appLoading();
}

function deleteTask(taskId) {
    for(let task of tasks) {
        if(task.id === taskId) {
            //Tirando do DOM
            const elementTask = document.getElementById(taskId);
            elementTask.remove();
            //Tirar do array
            const indexTask = tasks.findIndex(x => x.id === taskId);
            tasks.splice(indexTask, 1);
        }
    }
    appLoading();
    return true
}

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('button-control-delete')) {
        const elementId = el.parentElement.parentNode.id;
        console.log('Seu id: ' + elementId);
        deleteTask(elementId);
    }  
});

cancelTask.addEventListener('click', function() {
    closeTaskTab();
});

buttonAdd.addEventListener('click', function() {
    openTaskTab();
    inputTask.focus();
    addTask.disabled = true;
});

inputTask.addEventListener('input', function()
{
    if(inputTask.value.length > 0){
        addTask.disabled = false;
    }

    if(inputTask.value.length == 0) {
        addTask.disabled = true;
    }
});

addTask.addEventListener('click', function() {
    if(!inputTask.value) return;
    createTask(inputTask.value);
});

appLoading();