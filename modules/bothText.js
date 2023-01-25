export function bothText() {
  let topEntry = document.createElement("h2");
  topEntry.classList.add("topEntry");
  topEntry.innerHTML = input1.value;
  picDiv.appendChild(topEntry);

  let botEntry = document.createElement("h2");
  botEntry.classList.add("botEntry");
  botEntry.innerHTML = input2.value;
  picDiv.appendChild(botEntry);
}
