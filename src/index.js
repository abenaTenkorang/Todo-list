import './style.css';

const Array = [
  {
    description: 'washing dishes',
    completed: 'false',
    id: 1,
  },
  {
    description: 'sweep the room',
    completed: 'false',
    id: 2,
  },
  {
    description: 'eat',
    completed: 'false',
    id: 3,
  },
];
const container = document.querySelector('#list');
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
}