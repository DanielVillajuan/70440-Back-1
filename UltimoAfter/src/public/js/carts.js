import { api } from '../constants/environments.js'

const cartparam = document.querySelector('#param').innerText

fetch(api.base_url + api.endpoint_cart + cartparam)
	.then((res) => res.json())
	.then((data) => {
		
		const containerProduct = document.querySelector('#container-cart')
		data.productList.forEach(({product, quantity}) => {
			const divCard = document.createElement('div')
			divCard.classList.add(
				'tile',
				'max-w-sm',
				'rounded',
				'overflow-hidden',
				'shadow-lg'
			)
			divCard.innerHTML = `
            <img class="w-full" src="${product.thumbnail}" alt="Sunset in the mountains">
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">${product.title}</div>
                <p class="text-gray-700 text-base">
                    ${product.description}
                </p>
            </div>
            <div class="px-6 pt-4 pb-2 flex gap-x-4">
                <span class="inline-block bg-gray-100 rounded-full px-3 py-2 text-xl font-semibold text-gray-800 mr-2 mb-2">
                    $${product.price}
                </span>

				<span class=" font-semibold text-gray-400 mr-2 mb-2">
                    ${quantity}
                </span>
            </div>
        `
			containerProduct.appendChild(divCard)
		})
	})
