const form = document.querySelector('#form');
const checkbox = document.querySelector('#check');
const emailPhone = document.querySelector('#emailPhone');

/* // Validate form
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastName').value;

    if (name === '' || lastName === '') {
        alert('Please fill in all fields');
    } else {
        console.log(name, lastName);
    }
}); */


// Show email input
checkbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        emailPhone.style.display = 'block';
    } else {
        emailPhone.style.display = 'none';
    }
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value;
    const lastName = document.querySelector('#lastName').value;

    if (name === '' || lastName === '') {
        alert('Please fill in all fields');
    } else {
        document.querySelector('.form').style.display = 'none';
        document.querySelector('.welcome').style.display = 'block';
        document.querySelector('.welcome').innerHTML = `Welcome ${name} ${lastName}`;
        document.querySelector('.container').style.display = 'flex';
    }
});