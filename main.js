import { inputsDiv } from "./modules/inputDiv.js";
import { replayBtn } from "./modules/replayBtn.js";
import { genImgDiv } from "./modules/genImgDiv.js";
import { restartBtn } from "./modules/restart.js";
const container = document.getElementById("container");

inputsDiv();
let genBtn = document.getElementById("genBtn");

const generate = () => {
  const keyword = document.getElementById("keyword").value;
  document.getElementById("tutorial").remove();
  genImgDiv();
  document.getElementById("inputsDiv").remove();
  replayBtn();

  restartBtn();
  document.getElementById("restartBtn").addEventListener("click", () => {
    window.location.reload();
  });

  document.getElementById("replayBtn").addEventListener("click", () => {
    document.querySelector("#picDiv > img").remove();

    const imageA = document.createElement("img");
    const randomNumb = Math.floor(Math.random() * 999);
    imageA.src = `https://source.unsplash.com/random/?${keyword}&${randomNumb}`;
    picDiv.appendChild(imageA);
  });
};

genBtn.addEventListener("click", generate);
