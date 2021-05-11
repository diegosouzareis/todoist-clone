const loading = document.querySelector('.loading-app');
const buttonAdd = document.querySelector('.add-tasks-controller-button');
const formTask = document.querySelector('.tasks-form');
const cancelButton = document.querySelector('.cancel-task-button');

setTimeout(function() {
    loading.classList.add('fade-out');
}, 1000);

setTimeout(function() {
    loading.setAttribute('style','display:none');
}, 1200);

buttonAdd.addEventListener('click', function() {
    buttonAdd.setAttribute('style','display:none;');
    formTask.setAttribute('style','display:block;');
});

cancelButton.addEventListener('click', function() {
    buttonAdd.setAttribute('style','display:flex;');
    formTask.setAttribute('style','display:none;');
});