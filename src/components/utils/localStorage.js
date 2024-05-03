export function showTask() {
  items = localStorage.getItem("data");
}
function saveData() {
  localStorage.setItem("data", items);
}
