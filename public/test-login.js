document.addEventListener('DOMContentLoaded', () => {
    const token = sessionStorage.getItem('token');
    
    if (token) {
        console.log('User is logged in');
    } else {
        window.location.href = 'login.html';
    }
});
console.log('you are logged in');

const firstName = sessionStorage.getItem('firstName');
const lastName = sessionStorage.getItem('lastName');
const email = sessionStorage.getItem('email');

console.log(`Welcome ${firstName} ${lastName}! Your email is ${email}.`);

