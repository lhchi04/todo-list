// import _ from 'date-fns';
// import add from 'date-fns/add';
import { formatDistance, subDays } from 'date-fns';
import './style.css';

const todoList = [];
const content = document.getElementById('content');

class Todo {
  constructor(title, description, dueDate, priority, notes) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
  }

  titleInfo() {
    return this.title;
  }

  descriptionInfo() {
    return this.description;
  }

  dueDateInfo() {
    return this.dueDate;
  }

  priorityInfo() {
    return this.priority;
  }

  noteInfo() {
    return this.notes;
  }
}

function addToList() {
  const i = todoList.length - 1;
  console.log(todoList);
  const task = new Todo(todoList[i].title, todoList[i].description, todoList[i].dueDate, todoList[i].priority, todoList[i].notes);
  return task;
}

function printPreview(task, position) {
  if (position === 0) return task.titleInfo();
  if (position === 1) return task.descriptionInfo();
  if (position === 2) return task.dueDateInfo();
  if (position === 3) return task.priorityInfo();
  return task.noteInfo();
}

const addTask = (form, taskPreview, title, description, dueDate, priority, notes) => {
  form.preventDefault();
  const newTask = {
    title: title.value,
    description: description.value,
    dueDate: dueDate.value,
    priority: priority.options[priority.selectedIndex].text,
    notes: notes.value,
  };
  todoList.push(newTask);
  const index = todoList.indexOf(newTask);
  const myNewTask = addToList();
  // Add task preview
  const previewContainer = document.createElement('div');
  previewContainer.classList.add('preview-container');
  // Add check button
  const checkBtn = document.createElement('button');
  checkBtn.classList.add('checkbtn');
  previewContainer.appendChild(checkBtn);
  checkBtn.addEventListener('click', () => {
    checkBtn.parentElement.style.opacity = 0;
    checkBtn.parentElement.remove();
    todoList.splice(index, 1);
  });

  // Add task preview container
  const preview = document.createElement('div');
  preview.classList.add('preview');
  previewContainer.appendChild(preview);
  const titlePreview = document.createElement('h2');
  const descriptionPreview = document.createElement('h3');
  const dueDatePreview = document.createElement('h4');
  const priorityPreview = document.createElement('h4');
  const notePreview = document.createElement('h4');
  preview.append(titlePreview, descriptionPreview, dueDatePreview, priorityPreview);

  // Add task view
  const viewAllContainer = document.createElement('div');
  viewAllContainer.classList.add('view-all-container');
  const viewContainer = document.createElement('div');
  viewContainer.classList.add('view-container');
  // Add shadow for expand view option
  const shadow = document.createElement('div');
  shadow.classList.add('shadow');
  content.appendChild(shadow);
  content.appendChild(viewAllContainer);
  const mainViewContainer = document.createElement('div');
  mainViewContainer.classList.add('main-view-container');
  const sideViewContainer = document.createElement('div');
  sideViewContainer.classList.add('side-view-container');
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('viewbtn');
  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.classList.add('cancelbtn');
  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.classList.add('savebtn');
  buttonContainer.append(cancelBtn, saveBtn);
  viewContainer.append(mainViewContainer, sideViewContainer);
  viewAllContainer.append(viewContainer, buttonContainer);
  const titleView = document.createElement('h2');
  const descriptionView = document.createElement('h3');
  const dueDateView = document.createElement('h4');
  const priorityView = document.createElement('h4');
  const noteView = document.createElement('h4');

  titleView.textContent = titlePreview.textContent = printPreview(myNewTask, 0);
  descriptionView.textContent = descriptionPreview.textContent = printPreview(myNewTask, 1);
  dueDateView.textContent = dueDatePreview.textContent = printPreview(myNewTask, 2);
  priorityView.textContent = priorityPreview.textContent = printPreview(myNewTask, 3);
  noteView.textContent = notePreview.textContent = printPreview(myNewTask, 4);
  taskPreview.appendChild(previewContainer);

  mainViewContainer.append(titleView, descriptionView, noteView);
  sideViewContainer.append(dueDateView, priorityView);

  saveBtn.disabled = true; // the default state is 'disabled'
  function buttonState() {
    if (titleView.textContent === "") {
      saveBtn.disabled = true;
    } else {
      saveBtn.disabled = false;
    }
  }
  viewAllContainer.addEventListener("keyup", buttonState);

  cancelBtn.addEventListener('click', () => {
    viewAllContainer.style.display = 'none';
    const shadowMain = content.querySelector('.shadow');
    shadowMain.style.display = 'none';
  });
  saveBtn.addEventListener('click', () => {
    viewAllContainer.contentEditable = 'false';
    todoList[index].title = titleView.textContent = titlePreview.textContent = titleView.innerHTML;
    todoList[index].description = descriptionView.textContent = descriptionPreview.textContent = descriptionView.innerHTML;
    todoList[index].dueDate = dueDateView.textContent = dueDatePreview.textContent = dueDateView.innerHTML;
    todoList[index].priority = priorityView.textContent = priorityPreview.textContent = priorityView.innerHTML;
    todoList[index].notes = noteView.textContent = notePreview.textContent = noteView.innerHTML;
    viewAllContainer.style.opacity = 0;
    const shadowMain = content.querySelector('.shadow');
    shadowMain.style.opacity = 0;
  });
  return { viewAllContainer, previewContainer, viewContainer };
};

function closeForm() {
  document.querySelector('.new-form-container').style.opacity = 0;
  document.querySelector('.addbtn').style.opacity = 1;
}

function resetForm(title, description, dueDate, priority, notes, formSubmitBtn) {
  title.value = '';
  title.focus();
  description.value = '';
  dueDate.value = '';
  priority.value = '0';
  notes.value = '';
  formSubmitBtn.disabled = true;
}

const view = (createdTask) => {
  const shadowMain = content.querySelector('.shadow');
  shadowMain.style.display = 'block';
  createdTask.viewAllContainer.style.opacity = 1;
  createdTask.viewAllContainer.style.display = 'flex';
  createdTask.viewAllContainer.contentEditable = 'true';
  // document.addEventListener('click', (event) => {
  //   const withinBoundaries = event.composedPath().includes(createdTask.viewContainer);
  //   if (withinBoundaries) {
  //     createdTask.viewContainer.style.display = 'flex';
  //   } else {
  //     createdTask.viewContainer.style.display = 'none';
  //   }
  // });
};

const createMainContainer = () => {
  // Add task container
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  const taskPreview = document.createElement('div');
  taskPreview.classList.add('task-preview');
  taskContainer.appendChild(taskPreview);
  content.appendChild(taskContainer);
  // Add container to add task
  const addContainer = document.createElement('div');
  addContainer.classList.add('add-container');
  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('addbtn');
  addTaskBtn.textContent = 'Add task';
  addContainer.appendChild(addTaskBtn);
  taskContainer.appendChild(addContainer);
  // Add form
  const formContainer = document.querySelector('.form-container');
  const formClone = formContainer.cloneNode(true);
  formClone.classList.add('new-form-container');
  addContainer.appendChild(formClone);
  formClone.style.opacity = 0;
  const title = formClone.querySelector('.title');
  const description = formClone.querySelector('.description');
  const dueDate = formClone.querySelector('.due-date');
  const priority = formClone.querySelector('.priority');
  const notes = formClone.querySelector('.notes');
  const formSubmitBtn = formClone.querySelector('.submit');
  // Open form button
  addTaskBtn.addEventListener('click', () => {
    addTaskBtn.style.opacity = 0;
    formClone.style.opacity = 1;
    title.focus();
  });
  // Close form button
  const closeFormBtn = formClone.querySelector('.close');
  closeFormBtn.addEventListener('click', closeForm);
  // Submit form button
  formSubmitBtn.disabled = true; // the default state is 'disabled'
  function buttonState() {
    if (title.value === "") {
      formSubmitBtn.disabled = true;
    } else {
      formSubmitBtn.disabled = false;
    }
  }
  title.addEventListener("keyup", buttonState);

  const submitForm = (e) => {
    const createdTask = addTask(e, taskPreview, title, description, dueDate, priority, notes);
    resetForm(title, description, dueDate, priority, notes, formSubmitBtn);
    createdTask.previewContainer.addEventListener('click', () => {
      view(createdTask);
    });
  };

  formClone.addEventListener('submit', (e) => {
    submitForm(e);
  });
  return { addContainer, addTaskBtn, taskPreview };
};

function mainView() {
  // Add header
  const header = document.createElement('div');
  header.classList.add('header');
  content.appendChild(header);
  const mainContainer = createMainContainer();
  return content;
}

document.body.appendChild(mainView());
