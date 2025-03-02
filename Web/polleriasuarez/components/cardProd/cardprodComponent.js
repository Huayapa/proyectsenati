class CardProdComponent extends HTMLElement {
  constructor() {
    super();
    this.titleCard = "";
    this.imgCard = "";
    this.priceCard = "";
    this.descriptCard = "";
    this.idCard = "";
    this.attachShadow({ mode: 'open' });
  }
  async connectedCallback() {
    this.titleCard = this.getAttribute("titleCard") || "Cargando";
    this.imgCard = this.getAttribute("imgCard") || "";
    this.priceCard = this.getAttribute("priceCard") || "0";
    this.descriptCard = this.getAttribute("descriptCard") || "";
    this.idCard = this.getAttribute("idCard") || "";
    await this.templateCSS();
    this.render();
    this.templateJS();
  }

  render() {
    this.shadowRoot.innerHTML += `
    <section class="cardprodmain">
      <img src="${this.imgCard}" alt="${this.titleCard}">
      <div class="prod_info">
        <h3>${this.titleCard}</h3>
        <div class="prod_descript">
          ${this.descriptCard}
        </div>
        <div class="flex_prod">
          <strong class="price">S/ ${this.priceCard}.00</strong>
          <button class="btnStyleBase" id="btn_prod">Agregar</button>
        </div>
      </div>
    </section>
    `;
  }
  
  async templateCSS() {
    await fetch('./components/cardProd/cardprodComponent.css')
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

window.customElements.define("cardprod-component", CardProdComponent);