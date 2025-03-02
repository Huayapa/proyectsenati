class CardProdComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.titleprod = "";
    this.urlprod = "";
    this.priceprod = "0";
    this.idprod = "";
  }
  // Método que se ejecuta cuando el componente se agrega
  async connectedCallback() {
    this.titleprod = this.getAttribute("titleprod") || "";
    this.urlprod = this.getAttribute("urlprod") || "";
    this.priceprod = this.getAttribute("priceprod") || "0";
    this.idprod = this.getAttribute("idprod") || "";
    await this.templateCSS();
    this.render();
    this.templateJS();
  }
  // Método para renderizar el contenido del componente
  render() {
    this.shadowRoot.innerHTML += `
        <section class="card_prod">
          <img src="${this.urlprod}" alt="${this.titleprod}">
          <div class="prod_info">
            <h3>${this.titleprod}</h3>
            <div>
              <button id="btnDetails">Añadir</button>
              <span>S/ ${this.priceprod}</span>
            </div>
          </div>
        </section>
    `;
  }
  // CSS
  async templateCSS() {
    await fetch('./componentes/cardprod/cardprodComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }
  // AQUI VAN TODAS LAS FUNCIONES JS
  templateJS() {
    this.showDetails();
  }

  showDetails() {
    const $btn = this.shadowRoot.querySelector("#btnDetails");
    $btn.addEventListener("click", e => {
      location.href = `./detallesprod.html?name=${this.titleprod}`;
    })
  }
}


window.customElements.define('cardprod-component', CardProdComponent);