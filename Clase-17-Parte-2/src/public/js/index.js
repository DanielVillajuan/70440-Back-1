const contenedor = document.querySelector("#contenedor");
const buttonFilter = document.querySelector('#button_filtro');

let dataFallback = null

const pintarContenedorConProductos = (container) => (product) => {
    const {
      titulo,
      descripcion,
      descuento,
      precioConDescuento,
      precio,
      imagen,
    } = product;
    const imageParse = imagen.split('public')[1]
    const div = document.createElement("div");
    div.innerHTML = `
            <img src=${imageParse} width="250px">
            <p>${titulo}</p>
            <p>${descripcion}</p>
            <p>${
              descuento ? precioConDescuento : precio
            }</p>
        `;
    container.appendChild(div)
  } 

const traerProductos = async () => {
  const response = await fetch("http://localhost:8080/api/product");
  const data = await response.json();
  dataFallback = data
  data.payload.forEach(pintarContenedorConProductos(contenedor));
};

traerProductos();


buttonFilter.addEventListener('click', async () => {
    const inputValue = document.querySelector('#filtro').value
    if(inputValue){
        const response = await fetch("http://localhost:8080/api/product/filter?titulo="+inputValue)
        const data = await response.json()
        contenedor.innerHTML=''

        data.payload.forEach(pintarContenedorConProductos(contenedor));
    }
})
