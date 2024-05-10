let login=document.querySelector("#login");
let content=document.querySelector("main");
console.log(content);

login.addEventListener('click',()=>{
    content.innerText='';
    const formContainer=document.createElement('div');
    const form = document.createElement('form');
    form.id = 'loginForm';

    const usernameLabel = document.createElement('label');
    usernameLabel.textContent = 'Username:';
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.id = 'username';
    usernameInput.required = true;

    const passwordLabel = document.createElement('label');
    passwordLabel.textContent = 'Password:';
    const passwordInput = document.createElement('input');
    passwordInput.type = 'password';
    passwordInput.id = 'password';
    passwordInput.required = true;

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Login';

    formContainer.classList.add("container");

    // Append form elements to the body
    document.body.appendChild(form);
    form.appendChild(usernameLabel);
    form.appendChild(usernameInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(passwordLabel);
    form.appendChild(passwordInput);
    form.appendChild(document.createElement('br'));
    form.appendChild(submitButton);
    formContainer.appendChild(form);
    content.appendChild(formContainer);

    



})