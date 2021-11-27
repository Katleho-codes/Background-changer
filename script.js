let btn = document.querySelector("button");

random = (number) => {
  return Math.floor(Math.random() * (number + 1));
};

btn.addEventListener(
  "click",
  (colorChanger = () => {
    const colorChange =
      "rgb( " + random(255) + " ," + random(255) + " , " + random(255) + " )";
    document.body.style.backgroundColor = colorChange;
  })
);
