// Funcion para agregar el contador
export function addContador(stock) {
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