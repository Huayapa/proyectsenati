class CardOfertaComponent extends HTMLElement {
  constructor() {
    super();
    this.titleCard = "";
    this.imgCard = "";
    this.priceCard = "";
    this.idCard = "";
    this.attachShadow({ mode: 'open' });
  }
  async connectedCallback() {
    this.titleCard = this.getAttribute("titleCard") || "";
    this.imgCard = this.getAttribute("imgCard") || "";
    this.priceCard = this.getAttribute("priceCard") || "";
    this.idCard = this.getAttribute("idCard") || "";
    await this.templateCSS();
    this.render();
    this.templateJS();
  }

  render() {
    this.shadowRoot.innerHTML += `
    <article class="ofertacard">
      <img src="${this.imgCard}" alt="${this.titleCard}">
      <div>
        <h2>${this.titleCard}</h2>
        <strong class="price">S/ ${this.priceCard}.00</strong>
        <h3>Delivey gratis</h3>
        <button class="btnStyleBase" id="btn_prod">Ordenar ahora</button>
      </div>
    </article>
    `;
  }
  
  async templateCSS() {
    await fetch('./components/cardOferta/cardOfertaComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }

  templateJS() {
    this.detallesProducto();
  }

  detallesProducto() {
    const $btnprod = this.shadowRoot.getElementById("btn_prod");
    $btnprod.addEventListener("click", () => {
      location.href = `detalleProducto.html?idprod=${this.idCard}`;
    })
  } 
}

window.customElements.define("cardoferta-component", CardOfertaComponent);