//maybe
//close
const
modal = document.getElementById('modal'),
close = document.getElementById('close'),
maybe = document.getElementById('maybe'),
dismiss = document.getElementById('dismiss'),
noThanks = document.getElementById('noThanks'),
yeaPlease = document.getElementById('yeaPlease');

let cookie = false;

//Events
close.addEventListener('mouseover',showUp);
maybe.addEventListener('mouseover',showUp);
modal.addEventListener('click',vireLaModale);
noThanks.addEventListener('click',vireLaModale);
dismiss.addEventListener('click',vireLaModale);
yeaPlease.addEventListener('click',vireLaModale);
modal.children[0].addEventListener('click',stopPropagation);

function vireLaModale() {
  modal.classList.remove('show');
}

function stopPropagation(e) {
    e.stopPropagation();
}

function showUp() {
  if (!cookie) {
    modal.classList.add('show');
    cookie = true;
  }
}
