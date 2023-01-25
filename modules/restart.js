export function restartBtn() {
  const restartBtn = document.createElement("button");
  restartBtn.innerHTML = "restart meme generator";
  restartBtn.setAttribute("id", "restartBtn");
  restartBtn.classList.add("btn");
  restartBtn.classList.add("btn-danger");
  container.appendChild(restartBtn);
}
