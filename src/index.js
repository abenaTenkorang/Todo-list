/* eslint-disable no-loop-func */
import './style.css';
import completeArray from './module/complete-array.js';

let Array = [1];

const container = document.querySelector('#list');

const createTask = () => {
  for (let i = 0; i < Array.length; i += 1) {
    const task = document.createElement('div');
    task.classList.add('fisrt_todo');
    container.append(task);

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    task.append(checkbox);

    const paragraph = document.createElement('p');
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
Array = JSON.parse(localStorage.getItem('Array')) || [];
createTask();
