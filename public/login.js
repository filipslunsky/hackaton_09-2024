const postData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
};

document.getElementById('login-button').addEventListener('click', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const url = 'http://127.0.0.1:3200/users/login';
    const options = {
        method: 'POST',
        headers: {
                'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    };
    try {
        const data = await postData(url, options);
        
        if (data.success && data.passwordMatch) {
            sessionStorage.setItem('token', data.token);
            sessionStorage.setItem('firstName', data.firstName);
            sessionStorage.setItem('lastName', data.lastName);
            sessionStorage.setItem('email', data.email);
            console.log('Login successful:', data);
            window.location.href = 'index.html';
        } else if (data.success && !data.passwordMatch) {
            console.log('Login failed: wrong password');
        } else {
            console.log('login failed: user does not exist')
        }
    } catch (error) {
        console.log(error);
    }
});



