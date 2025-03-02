function sliderCardOfertas() {
  const carousel = document.querySelector('.home_slider');
  const articles = carousel.querySelectorAll('cardoferta-component'); //Lista de articulos
  const prevButton = document.getElementById('prev');
  const nextButton = document.getElementById('next');
  let indice = 0; //Posicion imagen
  console.log(articles.length);
  
  function movedArticle(index) { 
    let moved = -index * 100;
    articles.forEach(article => {
      article.style.transform = `translateX(${moved}%)`;
    });
  }

  nextButton.addEventListener('click', () => {
    indice = (indice < articles.length - 1) ? indice + 1 : 0;
    movedArticle(indice);
  });

  prevButton.addEventListener('click', () => {
    indice = (indice > 0) ? indice - 1 : articles.length - 1;
    movedArticle(indice);
  });
  setInterval(() => {
    indice = (indice < articles.length - 1) ? indice + 1 : 0;
    movedArticle(indice);
  }, 5000);
}


document.addEventListener("DOMContentLoaded", e=> {
  sliderCardOfertas();
})