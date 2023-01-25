export function replayBtn() {
  const replayBtn = document.createElement("button");
  replayBtn.innerHTML = "generate new image";
  replayBtn.setAttribute("id", "replayBtn");
  container.appendChild(replayBtn);
  replayBtn.classList.add("btn");
  replayBtn.classList.add("btn-success");
}
