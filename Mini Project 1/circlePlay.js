// Json logic server - here lol

// get, post, delete 

const liveButtonLoginHolder = document.getElementById('liveButton-loginholder'); // Corrected variable name
const appendAlert = (message, type) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('');
  liveButtonLoginHolder.append(wrapper); // Corrected variable name
};

const alertTrigger = document.getElementById('liveAlertBtn');
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('Nice, you triggered this alert message!', 'success');
  });
}

// function fetchData() {

// }




