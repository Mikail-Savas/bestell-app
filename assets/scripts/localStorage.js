function saveToLocalStorage(key, item) {
  localStorage.setItem(key, JSON.stringify(item));
}

function getArrayFromLocalStorage(key) {
  let result = localStorage.getItem(key);
  return result ? JSON.parse(result) : [];
}