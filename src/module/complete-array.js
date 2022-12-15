class AddArray {
  constructor(description, completed, id) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

const completeArray = (Array) => {
  const taskValue = document.querySelector('#input').value;
  const completed = false;
  const id = Array.length;
  const taskDetails = new AddArray(taskValue, completed, id);
  Array = JSON.parse(localStorage.getItem('Array')) || [];
  if (taskValue !== '') {
    Array.push(taskDetails);
  }
  localStorage.setItem('Array', JSON.stringify(Array));
};
export { completeArray as default };
