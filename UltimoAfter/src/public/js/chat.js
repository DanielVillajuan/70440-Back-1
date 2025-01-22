const socket = io()

let userName = null;

Swal.fire({
    title: 'Log',
    input: 'text',
    text: 'Necesitas ingresar un usuario',
    inputValidator: (value) =>{
        return !value && 'Es necesario un usuario'
    },
    allowOutsideClick: false
}).then( result => {
    const userContainer = document.querySelector("#user-name")
    userName = result.value
    userContainer.innerText = 'Bienvenido ' + result.value + '!'
})


const chatUser = document.querySelector("#message-user")

chatUser.addEventListener('keyup', (e)=>{
    if(e.key === "Enter" && chatUser.value.trim().length > 0){
        socket.emit("message",{user: userName, message: chatUser.value })
        chatUser.value = ''
    }
})

socket.on('logs', (data) => {
    console.log(data)
    const containerChats = document.querySelector("#container-chats")
    containerChats.innerHTML = '<h2 class="text-xl text-gray-400 font-bold">Mensajes:</h2>'
    data.forEach(message =>{
        const div = document.createElement("div")
        div.classList.add("flex")
        div.innerHTML = `
            <span class="text-sm font-bold text-neutral-800">${message.user}:</span> 
            <span class="text-sm text-black">${message.message}</span>
        `
        containerChats.appendChild(div)
    })
})