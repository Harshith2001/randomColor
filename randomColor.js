const body = document.querySelector("body");
const h1  = document.querySelector("h1");
//first we have to take control of the css of the body
body.style.textAlign= 'center';
const button = document.querySelector('button');
button.addEventListener('click', () => {
    a=Math.floor(Math.random() * 255);
    b=Math.floor(Math.random() * 255);
    c=Math.floor(Math.random() * 255);
    const newColor = `rgb(${a},${b},${c})`;
    body.style.backgroundColor = newColor;
    h1.innerText = `rgb(${a},${b},${c})`;
  });