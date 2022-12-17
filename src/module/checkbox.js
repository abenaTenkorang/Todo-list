let Array = [];
const checking = (k) => {
  if (k.checked) {
    Array = JSON.parse(localStorage.getItem('Array')) || [];
    Array[k.id].completed = true;
    localStorage.setItem('Array', JSON.stringify(Array));
  } else {
    Array = JSON.parse(localStorage.getItem('Array')) || [];
    Array[k.id].completed = false;
    localStorage.setItem('Array', JSON.stringify(Array));
  }
  window.location.reload();
};
export { checking as default };