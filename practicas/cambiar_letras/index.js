const letras = document.querySelectorAll("p");
const lorem = document.querySelector(".lorem");

letras.forEach((l) => {
  l.addEventListener("click", () => {
    if (l.className === "courier-new") {
      lorem.style.fontFamily = 'Courier new';
    } else if (l.className === "monospace") {
      lorem.style.fontFamily = "monospace";
    } else if (l.className === "times") {
      lorem.style.fontFamily = "times";
    }
  });
});

//  console.log(letras)
