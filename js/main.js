const contenedorProductos = document.querySelector('#contenedor-productos');
//console.log(contenedorProductos)

const mostrarProductos = (data)=>{
  data.forEach(producto =>{
    const cardProducto = document.createElement('article');
    cardProducto.setAttribute('id', 'tarjeta-producto');
    cardProducto.innerHTML = `
                            <img class="prod-img" src="${producto?.img}" alt="${producto?.marca}" style="width: 75px"
                            <div class="prod-description">
                              <h5 class="vino-nombre">${producto?.marca}</h5>
                              <h5 class="vino-cepa">${producto?.cepa}</h5>
                              <button id='${producto.id}' class="btn-compra">COMPRAR</button>
                            </div>
                            `;
    contenedorProductos.appendChild(cardProducto);
  })
  const btnComprar = document.querySelectorAll(".btn-compra");
  btnComprar.forEach(el => {
    el.addEventListener('click', (e) => {
      agregarAlCarrito(e.target.id);
    })
  })
}

mostrarProductos(productos);

const carrito = [];

function agregarAlCarrito(id){

  let prodEncontrado = productos.find( prod => prod.id === parseInt(id));

  carrito.push(prodEncontrado);
  console.log(carrito);

}