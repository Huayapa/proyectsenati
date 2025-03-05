document.addEventListener("DOMContentLoaded", e => {
// Obtiene el valor de los parámetros
let params = new URLSearchParams(window.location.search);
let name = params.get('name');
// Hacer la peticion a una API
fetch(`https://furniture-api.fly.dev/v1/products?name=${name}`)
  .then(rest => rest.json())
  .then(json => {
    if(!json.data[0]) location.href = "index.html";
    console.log(json);
    
    // QUE HACER CUANDO SE OBTIENE LOS DATOS
    const $content = document.querySelector(".content_prod");
    const $img = $content.querySelector("img");
    const $content_info = $content.querySelector(".content_info");
    const {name, image_path, description, category, price, stock} = json.data[0];

    $img.src = image_path;
    $img.alt = name;

    $content_info.innerHTML = `
      <h1>${name}</h1>
      <p>
        ${description}
      </p>
      <div class="stock">Disponible: <strong>${stock}</strong></div>
      <div class="content_interaction">
        <div class="content_price">
          <div>
            <button id="mas">+</button>
            <span class="cantidad">0</span>
            <button id="menos">-</button>
          </div>
          <span class="price">S/ ${price}.00</span>
        </div>
        <button class="btn_buy">Comprar</button>
      </div>
    `;
    addContador(stock);
  })

  // Funcion para agregar el contador
  function addContador(stock) {
    const $mas = document.getElementById("mas");
    const $menos = document.getElementById("menos");
    const $cantidad = document.querySelector(".cantidad");
    $mas.addEventListener("click", () => {
      const cantidad_num = Number($cantidad.textContent);
      if(cantidad_num < stock) {
        $cantidad.textContent = cantidad_num + 1;
      }
    })
    $menos.addEventListener("click", () => {
      const cantidad_num = Number($cantidad.textContent);
      if(cantidad_num > 0) {
        $cantidad.textContent = cantidad_num - 1;
      }
    })
  }
});