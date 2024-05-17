const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.style.color = "red";
p.textContent = "Hey I'm red!";

container.appendChild(p);

const h = document.createElement("h3");
h.style.color = "blue";
h.textContent = "Hey I'm blue h3!";

container.appendChild(h);

const div = document.createElement("div");
div.style.border = "solid black";
div.style.backgroundColor = "pink";

const h1 = document.createElement("h1");
h1.textContent = "Im in a div";

const p2 = document.createElement("p");
p2.textContent = "Me too";

div.appendChild(h1);
div.appendChild(p2);

container.appendChild(div);

div.addEventListener("click", function (e) {
    console.log(e.target);
  });