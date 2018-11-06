const myHeading = document.getElementById('myHeading');
const myTextInput = document.getElementById('myTextInput');
const button = document.getElementById('button');

button.addEventListener('click', () => {
  myHeading.style.color = myTextInput.value;
});
