const inputName = document.forms.signup.name;
const inputEmail = document.forms.signup.email;
// const btnSubmit = document.forms.signup.btn;
const btnSubmit = document.querySelector('[type="submit"]');

btnSubmit.addEventListener('click', handleBtnSubmitClick);

function handleBtnSubmitClick(event) {
  event.preventDefault();
  console.log(`Customer info: ${inputName.value}, ${inputEmail.value}`);
}

function handleInputNameKeyUp(event) {
    console.log(event.target.value);
}

inputName.addEventListener('keyup', handleInputNameKeyUp);

function handleInputEmailChange(event) {
    if(validateEmail(event.target.value)) {
      event.target.classList.remove('input-error');
    } else {
     event.target.classList.add('input-error');
    }
}

inputEmail.addEventListener('change', handleInputEmailChange);

// https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }