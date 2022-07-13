import Storage from './storage.js';
import { expand } from './expand.png';
import { trash } from './trash.png';

export default class Operations {
  static getTaskList() {
    const taskList = Storage.getData('taskList');
    if (taskList === null) {
      return;
    }
    const ul = document.getElementById('list');
    ul.innerHTML = ' ';
    for (let i = 0; i < taskList.length; i += 1) {
      const li = document.createElement('li');
      const cbx = document.createElement('input');
      const span = document.createElement('input');
      const anchor = document.createElement('a');
      const img = document.createElement('img');
      span.type = 'text';
      span.id = taskList[i].index;
      li.id = taskList[i].index;
      anchor.id = taskList[i].index;
      cbx.type = 'checkbox';
      cbx.checked = taskList[i].completed;
      cbx.id = taskList[i].index;
      cbx.classList.add('checkbox');
      cbx.addEventListener('change', (e) => this.cbxHandler(e));
      span.addEventListener('change', (e) => this.updateValue(e));
      span.addEventListener('click', (e) => this.changeIcon(e));
      span.addEventListener('blur', (e) => this.resetIcon(e));
      anchor.addEventListener('click', (e) => this.deleteFromList(e.target));
      img.src = expand;
      anchor.appendChild(img);
      span.value = taskList[i].description;
      li.appendChild(cbx);
      li.appendChild(span);
      li.appendChild(anchor);
      ul.appendChild(li);
    }
  }

  static addToList(taskObj) {
    let deserializedTaskList = Storage.getData('taskList');

    if (deserializedTaskList === null) {
      deserializedTaskList = [];
    }

    if (deserializedTaskList !== null) {
      deserializedTaskList.push(taskObj);
      Storage.saveData(deserializedTaskList);
    }

    Operations.getTaskList();
  }

  static removeFromList() {
    const taskList = Storage.getData('taskList');
    const temp = taskList.filter((item) => item.completed !== true);
    let i = 0;
    temp.forEach((element) => {
      i += 1;
      element.index = i;
    });
    Storage.saveData(temp);
    Operations.getTaskList();
  }

  static deleteFromList(e) {
    const index = parseInt(e.parentElement.id, 10);
    const taskList1 = Storage.getData('taskList');
    const temp1 = taskList1.filter((item) => item.index !== index);
    Storage.saveData(temp1);

    const taskList = Storage.getData('taskList');
    const temp = taskList;
    let i = 0;
    temp.forEach((element) => {
      i += 1;
      element.index = i;
    });

    Storage.saveData(temp);
    Operations.getTaskList();
  }

  static cbxHandler(e) {
    const index = parseInt(e.target.id, 10);
    const taskListObj = Storage.getData('taskList');
    const task = taskListObj.find((t) => t.index === index);
    task.completed = e.target.checked;
    Storage.saveData(taskListObj);
  }

  static updateValue(e) {
    const index = parseInt(e.target.id, 10);
    const taskListObj = Storage.getData('taskList');
    const task = taskListObj.find((task) => task.index === index);
    task.description = e.target.value;
    Storage.saveData(taskListObj);
  }

  static changeIcon(e) {
    e.target.parentElement.querySelector('img').src = trash;
  }

  static resetIcon(e) {
    e.target.parentElement.querySelector('img').src = expand;
  }
}
