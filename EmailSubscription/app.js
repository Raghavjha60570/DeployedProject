const scriptURL = 'https://script.google.com/macros/s/AKfycbwsJ_7sLv1MOVOEVhb9qXN72N8llhcGYs9Gl6O8EyBgvARjA4l3ew45HmNFSh4W8-ZO/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        console.log("Success =>Response")
        msg.innerHTML = "Thank you for subscribing!";
        setTimeout(() => msg.innerHTML = "", 2000);
        form.reset();
      })
      .catch(error => {
        msg.innerHTML = "Something went wrong. Please try again.";
        console.error('Error!', error.message);
      });
  });
} else {
  console.error("Form not found. Check the form name.");
}
