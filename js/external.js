//for h2 color
const titleStyle = document.getElementsByTagName('h2');
for (const h2 of titleStyle) {
  h2.style.color = '#052d55';
}

//for backpack header background color
//using query selector
// const backpackHeader = document.querySelector('#backpack-header');
// backpackHeader.style.backgroundColor = '#D8BFD8';

//using getElementById
// const backpackHeader = document.getElementById('backpack-header');
// backpackHeader.style.backgroundColor = '#D8BFD8';

//for border radius of cards
const cards = document.getElementsByClassName('card');
for (const card of cards) {
  card.style.borderRadius = '30px';
}

//for footer button
// function check() {
//   console.log('footer checked');
// }

//for BuyNow button
const buttons = document.querySelectorAll('.btn-panda');
for (const button of buttons) {
  button.addEventListener('click', function () {
    button.style.display = 'none';
  });
}

//for functional submit button
document.getElementById('email-form').addEventListener('keyup', function (event) {
  const confirmButton = document.getElementById('confirm-btn');
  if (event.target.value == 'Email') {
    confirmButton.removeAttribute('disabled');
  }
  else {
    confirmButton.setAttribute('disabled', true);
  }
});
//for pasting element
document.getElementById('email-form').addEventListener('change', function (event) {
  const confirmButton = document.getElementById('confirm-btn');
  if (event.target.value == 'Email') {
    confirmButton.removeAttribute('disabled');
  }
  else {
    confirmButton.setAttribute('disabled', true);
  }
});

//for first shoe cart
function changePicOne() {
  document.getElementById('myImg').src = "images/shoes/shoe-2.png";
}
function changePicTwo() {
  document.getElementById('myImg').src = "images/shoes/shoe-1.png";
}
//for second shoe cart
function changePicThree() {
  document.getElementById('mySecondImg').src = "images/shoes/shoe-3.png";
}
function changePicFour() {
  document.getElementById('mySecondImg').src = "images/shoes/shoe-2.png";
}
//for Third shoe cart
function changePicFive() {
  document.getElementById('myThirdImg').src = "images/shoes/shoe-1.png";
}
function changePicSix() {
  document.getElementById('myThirdImg').src = "images/shoes/shoe-3.png";
}