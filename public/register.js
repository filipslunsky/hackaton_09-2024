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

