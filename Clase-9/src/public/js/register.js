const nombreInput = document.querySelector('#nombre');
const correoInput = document.querySelector('#correo');
const passwordInput = document.querySelector('#password');
const enviarButton = document.querySelector('#enviar');

const user = {
    nombre: '',
    correo: '',
    password: ''
}

const handleChange = (e) => {
    const { name, value } = e.target;

    user[name] = value;
}

nombreInput.addEventListener('input',handleChange)

correoInput.addEventListener('input', handleChange)

passwordInput.addEventListener('input',handleChange)


enviarButton.addEventListener('click', () => {
    fetch('http://localhost:8080/api/usuario',{
        method:'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(result => console.log(result))
})
