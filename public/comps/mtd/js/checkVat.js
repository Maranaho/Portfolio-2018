//https://vatlayer.com/dashboard
//Valid VATs https://www.braemoor.co.uk/software/vattestx.php
//Valid VAT :  LV40008000225
//Valid VAT :  LU26375245

  const
  vatLayerBaseUrl = 'http://apilayer.net/api/validate?access_key=',
  apiKey = 'b128281b7e169eae4b8e785bce785eea',
  validFormat = 'This VAT number is valid',
  invalidFormatTxt = 'The format is not valid',
  invalidNumber = 'This VAT number is not valid',
  vatInput = document.getElementById('vatInput'),
  continueElt = document.getElementById('continue'),
  vat_number = document.getElementById('vat_number'),
  company_name = document.getElementById('company_name'),
  company_address = document.getElementById('company_address'),
  bigCheck = document.getElementById('bigCheck'),
  headsUp = document.getElementById('headsUp'),
  customerInfo = document.getElementById('customerInfo');

  let validData;
  let validFormatData;
  let validAddressData;
  let validCompanyData;

  //Evts
  //vatInput.addEventListener('keyup',handleInputChange);
  vatInput.addEventListener('change',handleInputChange);
  vatInput.addEventListener('focus',handleInputFocus);
  vatInput.addEventListener('blur',handleInputBlur);



  function validateVat(userInput) {
    fetch(vatLayerBaseUrl + apiKey + '&vat_number=' + userInput.split(' ').join(''))
    .then(response => response.json())
    .then(d => {
      handlePromise(userInput,d);
    });
  }


  function handlePromise(val,data) {
    setData(data);
    checkFormat(val);
  }

  function setData(data) {
    validData = data.valid;
    validFormatData = data.format_valid;
    validCompanyData = data.company_name;
    validAddressData = data.company_address;
  }



  function handleInputChange() {
    const val = this.value.split(' ').join('').toUpperCase();
    if (val !== '') {
      vat_number.innerText = val;
      validateVat(val);
    }
  }

  function fieldisEmpty(val) {
    if (val.length) {
      if (headsUp.classList.contains('invisible')) {
        headsUp.classList.remove('invisible');
      }
    } else {
      if (!headsUp.classList.contains('invisible')) {
        headsUp.classList.add('invisible');
      }
    }
  }

  function handleAllValid() {
    headsUp.innerText = validFormat;
    headsUp.classList.add('valid');
    if (!bigCheck.classList.contains('shoot')) {
      bigCheck.classList.add('shoot');
    }
  }

  function printCompanyDetails() {
    company_name.innerText = validAddressData;
    company_address.innerText = validCompanyData;
  }

  function handleInvalidData(){
    headsUp.innerText = invalidNumber;
    if (headsUp.classList.contains('valid')) {
      headsUp.classList.remove('valid');
    }
    if (bigCheck.classList.contains('shoot')) {
      bigCheck.classList.remove('shoot');
    }
  }

  function handleInvalidFormat(){
    headsUp.innerText = invalidFormatTxt;
    if (headsUp.classList.contains('valid')) {
      headsUp.classList.remove('valid');
    }
    if (bigCheck.classList.contains('shoot')) {
      bigCheck.classList.remove('shoot');
    }
  }

  function enableCTA() {
    continueElt.removeAttribute('disabled');
  }

  function formatIsValid(val) {
    if (validFormatData) {
      if (validData) {
        handleAllValid();
        printCompanyDetails();
        enableCTA();
      } else { handleInvalidData(); }
    } else { handleInvalidFormat(); }
  }

  function checkFormat(val) {
    fieldisEmpty(val);
    formatIsValid(val);
  }


  function handleInputFocus(e) {
    if (e.target.value === '') {
      customerInfo.classList.add('show');
      setTimeout(function () {
        customerInfo.classList.remove('opac');
      },500);
    }
  }

  function closeField() {
    customerInfo.classList.add('opac');
    headsUp.classList.add('invisible');
    vat_number.innerText = '';
    setTimeout(function () {
      customerInfo.classList.remove('show');
    },200);
  }


  function handleInputBlur(e) {
    if (e.target.value === '') {
      closeField();
    }
  }
