import './style.css';
import refresh from './refresh.png';
import enter from './enter.png';
import operations from './operations.js';
import data from './Data.js';
import storage from './storage.js';

const getImage = () => {
  const imageHolder = document.getElementById('imageRefresh');
  imageHolder.src = refresh;

  const imageEnter = document.getElementById('imageEnter');
  imageEnter.src = enter;
};

const btnSubmit = document.getElementById('addTask');

btnSubmit.addEventListener('click', () => {
  let index = 0;
  let description = ' ';
  let isChecked = false;
  let taskListObj = [];

  description = document.getElementById('task').value;

  taskListObj = storage.getData('taskList');

  if (taskListObj !== null && taskListObj.length > 0) {
    const lastObject = taskListObj[taskListObj.length - 1];
    index = lastObject.index + 1;
  } else {
    index = 1;
    taskListObj = [];
  }

  const addTasks = new data(description, isChecked, index);
  operations.addToList(addTasks);

  document.getElementById('task').value = '';
});

const btnRemove = document.getElementById('remove');

btnRemove.addEventListener('click', () => {
  operations.removeFromList();
});

getImage();
operations.getTaskList();