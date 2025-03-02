class CardLocationComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.titleCard = "";
    this.directionCard = "";
    this.horarioCard = "";
    this.mapurlCard = "";
  }
  // Método que se ejecuta cuando el componente se agrega
  async connectedCallback() {
    this.titleCard = this.getAttribute("titleCard") || "";
    this.directionCard = this.getAttribute("directionCard") || "";
    this.horarioCard = this.getAttribute("horarioCard") || "";
    this.mapurlCard = this.getAttribute("mapurlCard") || "";
    await this.templateCSS();
    this.render();
    this.templateJS();
  }
  // Método para renderizar el contenido del componente
  render() {
    this.shadowRoot.innerHTML += `
    <article class="card_map">
      <div class="map_info">
        <h2>${this.titleCard}</h2>
        <p class="direccion">${this.directionCard}</p>
        <p>${this.horarioCard}</p>
      </div>
      <a href="${this.mapurlCard}" target="_blank" class="map_btn">
        <button>
          <svg width="30" height="30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z"/>
          </svg>
        </button>
      </a>
    </article>
    `;
  }
  // CSS
  async templateCSS() {
    await fetch('./componentes/cardlocation/cardlocationComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }
  // AQUI VAN TODAS LAS FUNCIONES JS
  templateJS() {
  }

}

window.customElements.define("cardlocation-component", CardLocationComponent)