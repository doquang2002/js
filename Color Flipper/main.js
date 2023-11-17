const btn = document.getElementById("btn"),
  bgText = document.getElementById("bg-text"),
  bg = document.getElementById("bg");

btn.addEventListener("click", () => {
  bgText.innerText = `Color hex: ${hexCode()}`;
  bg.style.background = `${hexCode()}`;
});

const hexCode = () => {
  let result = "";
  const characters = "ABCDEF0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < 6) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return "#" + result;
};
