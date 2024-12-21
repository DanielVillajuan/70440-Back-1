const socket = io()
const user = {
    username: '',
    message: ''
}

socket.on('closeLogin', (userDisconnected) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "info",
        title: userDisconnected + " se fue porque tenia miedo"
      })
})

socket.on('newLogin', (userConnected) => {
    const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: userConnected + " a entrado al chat!"
      })
})

socket.on('messages_all', (messages)=> {
    const container = document.getElementById('contenedor-mensajes')
    container.innerHTML = ''
    messages.forEach(msg => {
        container.innerHTML += `
            <div>
                <p>${msg.username} - ${msg.date}: ${msg.message}</p>
            </div>
        `
    })
})

window.addEventListener('beforeunload', (e) =>{
    e.preventDefault()
    socket.emit('user_disconnect', user.username)
})

Swal.fire({
    title: "Quien sos?",
    input: "text",
    inputLabel: "Ingrese username",
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "Ingresa un valor!";
      }
      user.username = value
      document.getElementById('username').innerText = user.username
      socket.emit('newUser', user.username)
    }
  })

  document.getElementById('inputText').addEventListener('input',(e)=>{
    const { value } = e.target
    user.message = value
  })

  document.getElementById('enviar').addEventListener('click', () => {
    console.log(user)
    document.getElementById('inputText').value = ''
    socket.emit('message',user)
  })
