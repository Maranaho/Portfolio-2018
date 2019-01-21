const
userInputCtn = document.getElementById('userInputCtn'),
customer_name = document.getElementById('customer_name'),
userInput = document.getElementById('userInput'),
load = document.getElementById('load'),
sendName = document.getElementById('sendName');
let userName = '';


userInput.addEventListener('keyup',handleNameChange);
sendName.addEventListener('click',handleSubmit);


function handleNameChange(e) {
  const val = this.value;
  if (val === '' || val === ' ') {
    if (!sendName.hasAttribute('disabled')) {
      sendName.setAttribute('disabled','disabled');
    }
  } else {
    setName(val);
    if (e.keyCode === 13) {
      handleSubmit();
    }
    if (sendName.hasAttribute('disabled')) {
      sendName.removeAttribute('disabled');
    }
  }
}


function handleSubmit() {
  setCustomerName();
  load.classList.remove('hidden');
  setTimeout(changeScreen,600);
}

function setName(val) {
  userName = val;
}

function changeScreen() {
  load.classList.add('hidden');
  userInputCtn.classList.add('hidden');
  vatCheck.classList.remove('hidden');
}

function setCustomerName() {
  customer_name.innerText = userName;
}

console.log(userName);
