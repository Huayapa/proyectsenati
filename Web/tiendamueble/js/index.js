document.addEventListener("DOMContentLoaded", e => {
  // Este script es para obtener las cards que se mostraran
  const $list_prods = document.querySelector(".list_prods");
  const $fragment = document.createDocumentFragment();
  fetch("https://furniture-api.fly.dev/v1/products?limit=3&page=1")
    .then(rest => rest.json())
    .then(json => {
      json.data.forEach(({name, image_path, price}) => {
        const $card = document.createElement("cardprod-component");
        $card.setAttribute("titleprod", name);
        $card.setAttribute("urlprod",image_path );
        $card.setAttribute("priceprod", price);
        $fragment.appendChild($card);
      });
      $list_prods.appendChild($fragment)
    })


  // ESTE SCRIPT SIRVE PARA MOSTRAR LOS BLOGS
  const $list_blog = document.querySelector(".list_blog");
  const $fragment2 = document.createDocumentFragment();
  fetch("api/blogs.json")
    .then(rest => rest.json())
    .then(json => {
      console.log(json);
      json.forEach(({title, urlBlog, date, id}) => {
        const $card = document.createElement("blog-component");
        $card.setAttribute("titleBlog", title);
        $card.setAttribute("urlBlog",urlBlog );
        $card.setAttribute("dateBlog", date);
        $card.setAttribute("idblog", id);
        $fragment2.appendChild($card);
      });
      $list_blog.appendChild($fragment2)
    })
});