export function inputsDiv() {
  const inputsDiv = document.createElement("div");
  inputsDiv.setAttribute("id", "inputsDiv");

  const div1 = document.createElement("div");
  const h2_1 = document.createElement("h3");
  h2_1.innerHTML = "Enter Top Text";
  const input1 = document.createElement("input");
  input1.setAttribute("id", "input1");
  div1.appendChild(h2_1);
  div1.appendChild(input1);

  const div2 = document.createElement("div");
  const h2_2 = document.createElement("h3");
  h2_2.innerHTML = "Enter Bottom Text";
  const input2 = document.createElement("input");
  input2.setAttribute("id", "input2");
  div2.appendChild(h2_2);
  div2.appendChild(input2);

  const genBtn = document.createElement("button");
  genBtn.innerHTML = "Generate";
  genBtn.setAttribute("id", "genBtn");
  genBtn.classList.add("btn");
  genBtn.classList.add("btn-primary");
  genBtn.classList.add("mt-2");

  const div3 = document.createElement("div");
  const h2_3 = document.createElement("h3");
  h2_3.innerHTML = "Image keyword";
  const keyword = document.createElement("input");
  keyword.setAttribute("id", "keyword");
  keyword.setAttribute("placeholder", "or leave it empty");
  div3.appendChild(h2_3);
  div3.appendChild(keyword);

  inputsDiv.appendChild(div1);
  inputsDiv.appendChild(div2);
  inputsDiv.appendChild(div3);
  inputsDiv.appendChild(genBtn);
  container.appendChild(inputsDiv);
}
