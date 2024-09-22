const passwordRepeatField = document.getElementById('passwordRepeat');
passwordRepeatField.addEventListener('input', () => {
    const passwordValue = document.getElementById('password').value;
    const passwordRepeatValue = passwordRepeatField.value;
    const resultParagraph = document.getElementById('matchPassword');
    if (passwordValue !== passwordRepeatValue) {
        resultParagraph.innerText = 'The passwords do not match';
    } else {
        resultParagraph.innerText = 'The passwords match';
    }
});


document.getElementById('register').addEventListener('click', async (e) => {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;

    const url = 'http://127.0.0.1:3200/users/register';
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({firstName, lastName, email, password})
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data);
        window.location.href = 'login.html';

    } catch (error) {
        console.log(error);
    }
});
