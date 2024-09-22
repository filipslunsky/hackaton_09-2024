document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded and parsed");
    const token = sessionStorage.getItem('token');

    if (token) {
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

        const updateButton = document.getElementById('update');
        console.log(updateButton);

        updateButton.addEventListener('click', async (e) => {
            e.preventDefault();
            const email = sessionStorage.getItem('email');
            const password = document.getElementById('password').value;
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;

            const url = 'http://127.0.0.1:3200/users';
            const options = {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ firstName, lastName, email, password })
            };

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                console.log(data);
                window.location.href = 'index.html';

            } catch (error) {
                console.log(error);
            }
        });
    } else {
        window.location.href = 'index.html';
    }
});