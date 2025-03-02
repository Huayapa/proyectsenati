class BlogComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.titleBlog = "";
    this.urlBlog = "";
    this.dateBlog = "";
    this.idblog = "";
  }
  // Método que se ejecuta cuando el componente se agrega
  async connectedCallback() {
    this.titleBlog = this.getAttribute("titleBlog") || "";
    this.urlBlog = this.getAttribute("urlBlog") || "";
    this.dateBlog = this.getAttribute("dateBlog") || "00/00/00";
    this.idblog = this.getAttribute("idblog") || "";
    await this.templateCSS();
    this.render();
    this.templateJS();
  }
  // Método para renderizar el contenido del componente
  render() {
    this.shadowRoot.innerHTML += `
        <section class="blogcard">
          <img src="${this.urlBlog}" alt="${this.titleBlog}">
          <div>
            <span>${this.dateBlog}</span>
            <h3>${this.titleBlog}</h3>
          </div>
        </section>
    `;
  }
  // CSS
  async templateCSS() {
    await fetch('./componentes/blog/blogComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }
  // AQUI VAN TODAS LAS FUNCIONES JS
  templateJS() {
    this.showDetailsBlog();
  }

  showDetailsBlog() {
    const $card = this.shadowRoot.querySelector(".blogcard");
    $card.addEventListener("click", e => {
      location.href = `./detallesblog.html?id=${this.idblog}`;
    })
  }
}

window.customElements.define("blog-component", BlogComponent)