

const form = document.getElementById('form');
const emailInput = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = emailInput.value;
  const url = 'https://www.freecodecamp.com/email-submit';
  const data = new FormData();
  data.append('email', email);

  fetch(url, {
    method: 'POST',
    body: data
  })
  .then((response) => {
    if (response.ok) {
      alert('Email submitted successfully!');
    } else {
      thrownew Error('Failed to submit email');
    }
  })
 .catch((error) => {
    console.error(error);
  });
});