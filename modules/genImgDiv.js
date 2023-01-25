import { bothText } from "./bothText.js";
const container = document.getElementById("container");

export function genImgDiv() {
  const picDiv = document.createElement("div");
  picDiv.setAttribute("id", "picDiv");
  container.appendChild(picDiv);

  const keyword = document.getElementById("keyword").value;

  const imageA = document.createElement("img");
  const randomNumb = Math.floor(Math.random() * 999);
  imageA.src = `https://source.unsplash.com/random/?${keyword}&${randomNumb}`;
  picDiv.appendChild(imageA);

  bothText();
}
