document.addEventListener("DOMContentLoaded", () => {
  // Initial clean up. DO NOT REMOVE.
  initialCleanup();

  // Hey! Pssst! In here ...
  function addLine() {
    for (let i = 0; i < 10; i++) {
      const newbox = document.createElement("div");
      newbox.addEventListener("click", (event) => wasClicked(event.target));
      newbox.addEventListener("mouseover", (event) => wasHovered(event.target));
      grid.appendChild(newbox);
    }
  }
  document.getElementById("btn-add-line").addEventListener("click", addLine); 

  function wasClicked(element) {
    element.style.backgroundColor = "green";
  }

  function wasHovered(element) {
    element.classList.add("hovered");
  }


  function addCallbackToAllCells() {
    for (const box of document.querySelectorAll("#grid>div")) {
      box.addEventListener("click", (event) => wasClicked(event.target));
      box.addEventListener("mouseover", (event) => wasHovered(event.target))
    }
  }
  addCallbackToAllCells();
});

/**
 * Cleans up the document so that the exercise is easier.
 *
 * There are some text and comment nodes that are in the initial DOM, it's nice
 * to clean them up beforehand.
 */
function initialCleanup() {
  const nodesToRemove = [];
  document.getElementById("grid").childNodes.forEach((node, key) => {
    if (node.nodeType !== Node.ELEMENT_NODE) {
      nodesToRemove.push(node);
    }
  });
  for (const node of nodesToRemove) {
    node.remove();
  }
}


function countsquares() {
  const clicked = document.querySelectorAll("#grid>div[style='background-color: green;']").length;
  const hovered = document.querySelectorAll("#grid>div[style='background-color: blue;']").length;
  const total = document.querySelectorAll("#grid>div").length
  const original = total - hovered - clicked

  
}
