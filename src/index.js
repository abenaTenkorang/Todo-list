/* eslint-disable no-loop-func */
import './style.css';
import completeArray from './module/complete-array.js';
import checking from './module/checkbox.js';

let Array = [];

const container = document.querySelector('#list');

const createTask = () => {
  for (let i = 0; i < Array.length; i += 1) {
    const task = document.createElement('div');
    task.classList.add('first_todo');
    container.append(task);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = Array[i].id;
    checkbox.addEventListener('click', () => {
      checking(checkbox);
    });
    task.append(checkbox);

    const paragraph = document.createElement('p');
    if (Array[i].completed === true) {
      paragraph.classList.add('checked');
      checkbox.checked = true;
    } else if (paragraph.classList.contains('checked')) {
      paragraph.classList.remove('checked');
      checkbox.checked = false;
    }
    paragraph.contentEditable = true;
    paragraph.addEventListener('click', () => {
      const editBtn = document.createElement('button');
      editBtn.classList.add('editBtn');
      editBtn.innerText = 'Edit';
      task.append(editBtn);
      editBtn.addEventListener('click', () => {
        Array = JSON.parse(localStorage.getItem('Array')) || [];
        Array[i].description = paragraph.innerText;
        localStorage.setItem('Array', JSON.stringify(Array));
        task.remove(editBtn);
        window.location.reload();
      });
    });
    paragraph.classList.add('para');
    paragraph.innerText = Array[i].description;
    task.append(paragraph);

    const optButton = document.createElement('button');
    optButton.classList.add('optButton');
    task.append(optButton);

    const optIcon = document.createElement('i');
    optIcon.classList.add('fa-solid', 'fa-ellipsis-vertical');
    optButton.append(optIcon);
    optButton.id = Array[i].id;

    // task remove
    const removeTask = () => {
      const theTarget = optButton.id;
      Array.splice(theTarget, 1);
      let refreshId = 0;

      if (Array.length > 0) {
        Array.forEach((p) => {
          p.id = refreshId;
          refreshId += 1;
        });
      }
    };
    optButton.addEventListener('click', () => {
      Array = JSON.parse(localStorage.getItem('Array')) || [];
      removeTask();
      localStorage.setItem('Array', JSON.stringify(Array));
      window.location.reload();
    });
  }
};

const enterBtn = document.querySelector('.enter');
enterBtn.addEventListener('click', () => {
  completeArray(Array);
  window.location.reload();
});

const clearAll = document.querySelector('.clear_all');
clearAll.addEventListener('click', () => {
  Array = JSON.parse(localStorage.getItem('Array')) || [];
  Array = Array.filter((e) => e.completed === false);
  let refreshId = 0;

  if (Array.length > 0) {
    Array.forEach((p) => {
      p.id = refreshId;
      refreshId += 1;
    });
  }
  localStorage.setItem('Array', JSON.stringify(Array));
  window.location.reload();
});
Array = JSON.parse(localStorage.getItem('Array')) || [];
createTask();
