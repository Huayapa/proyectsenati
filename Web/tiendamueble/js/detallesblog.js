import { returnbtn } from "./functions/returnBtn.js";

document.addEventListener("DOMContentLoaded", e => {
// Obtiene el valor de los parámetros
let params = new URLSearchParams(window.location.search);
let idblog = params.get('id');
// Hacer la peticion a una API
fetch(`api/blogs.json`)
  .then(rest => rest.json())
  .then(json => {
    // Verificar que exista el blog
    
    const [data] = json.filter(blog => blog.id == idblog);
    if(!data) location.href = "index.html";
    const {id, title, urlBlog, date, descript} = data;
    // Cargar la imagen
    const $img = document.querySelector(".content_blog img");
    $img.src = urlBlog;
    $img.alt = title;
    // Mostrar la respuesta a los detalles
    console.log(data);
    const $info = document.querySelector(".content_blog .content_info");
    $info.innerHTML = `
      <h1>${title}</h1>
      <div class="date">${date}</div>
      <div class="content"> ${descript} </div>
      <div class="align-btn">
        <button class="btn_buy" id="btn_regresar">Regresar</button>
      </div>
    `;
    returnbtn();
  })

});