const socket = io()

const containerProduct = document.querySelector("#container-products")

socket.on('onchangeProduct', data => {
    containerProduct.innerHTML = ''
    data.forEach(product => {
        const divCard = document.createElement("div")
        divCard.classList.add("tile", "max-w-sm", "rounded", "overflow-hidden", "shadow-lg")
        divCard.innerHTML = `
            <img class="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">${product.title}</div>
                <p class="text-gray-700 text-base">
                    ${product.description}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-100 rounded-full px-3 py-2 text-xl font-semibold text-gray-800 mr-2 mb-2">
                    $${product.price}
                </span>
            </div>
        `
        containerProduct.appendChild(divCard)
    })  

})