const socket = io()

const contenedorProductos = document.querySelector('.products-container')

socket.on('home', (data)=>{
    contenedorProductos.innerHTML = ''
    data.forEach(product => {
        const div = document.createElement('div')
        div.classList.add(`${product.id}`,'cart')

        const title = document.createElement('p')
        title.innerText = product.title
        const description = document.createElement('p')
        description.innerText = product.description
        const price = document.createElement('p')
        price.innerText = '$ ' + product.price
        
        div.appendChild(title)
        div.appendChild(description)
        div.appendChild(price)
        contenedorProductos.appendChild(div)
    });
} )