import './style.css';
import refresh from './refresh.png';
import enter from './enter.png';
import expand from './expand.png';

const ToDoListData = [
  {
    description: 'Complete the project',
    completed: false,
    index: 1,
  },
  {
    description: 'Apply checks and linters',
    completed: true,
    index: 2,
  },
  {
    description: 'Fix errors',
    completed: false,
    index: 3,
  },
  {
    description: 'Deploy code',
    completed: false,
    index: 4,
  },
];

const getImage = () => {
  const imageHolder = document.getElementById('imageRefresh');
  imageHolder.src = refresh;

  const imageEnter = document.getElementById('imageEnter');
  imageEnter.src = enter;
};

const TodoComponent = () => {
  const ul = document.getElementById('list');
  for (let i = 0; i < ToDoListData.length; i += 1) {
    const li = document.createElement('li');
    const cbx = document.createElement('input');
    const span = document.createElement('span');
    const anchor = document.createElement('a');
    const img = document.createElement('img');    
    cbx.type = 'checkbox';
    cbx.checked = ToDoListData[i].completed;
    cbx.id = ToDoListData[i].index;
    img.src = expand;
    anchor.appendChild(img);
    span.innerHTML = ToDoListData[i].description;
    li.appendChild(cbx);
    li.appendChild(span);
    li.appendChild(anchor);
    ul.appendChild(li);
  }
 };

TodoComponent();
getImage();