class CardLocationComponent extends HTMLElement {
  constructor() {
    super();
    this.distritoCard = "";
    this.directionCard = "";
    this.imgCard = "";
    this.horariosCard = "";
    this.numberCard = "";
    this.urlCard = "";
    this.attachShadow({ mode: 'open' });
  }
  async connectedCallback() {
    this.distritoCard = this.getAttribute("distritoCard") || "";
    this.directionCard = this.getAttribute("directionCard") || "";
    this.imgCard = this.getAttribute("imgCard") ||  "";
    this.horariosCard = this.getAttribute("horariosCard") || "";
    this.numberCard = this.getAttribute("numberCard") || "";
    this.urlCard = this.getAttribute("urlCard") || "";
    await this.templateCSS();
    this.render();
    this.templateJS();
  }

  render() {
    this.shadowRoot.innerHTML += `
    <section class="card_location">
        <div class="location_img">
          <img src="${this.imgCard}" alt="">
          <div class="location_fondo"></div>
          <h2>${this.distritoCard}</h2>
        </div>
        <div class="location_info">
          <p class="info_p">
            ${this.directionCard}
          </p>
          <h3 class="info_subtitle">Horario</h3>
          <ul class="info_horarios">
            ${this.horariosCard}
          </ul>
          <div class="info_tel_location">
            <a href="">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 3a1 1 0 0 1 .877 .519l.051 .11l2 5a1 1 0 0 1 -.313 1.16l-.1 .068l-1.674 1.004l.063 .103a10 10 0 0 0 3.132 3.132l.102 .062l1.005 -1.672a1 1 0 0 1 1.113 -.453l.115 .039l5 2a1 1 0 0 1 .622 .807l.007 .121v4c0 1.657 -1.343 3 -3.06 2.998c-8.579 -.521 -15.418 -7.36 -15.94 -15.998a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg>
              <strong>${this.numberCard}</strong>
            </a>
            <button class="btnStyleBase" id="btn-location">
              <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-map-pin"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" /></svg>
            </button>
          </div>
        </div>
      </section>
    `;
  }
  
  async templateCSS() {
    await fetch('./components/cardLocation/cardlocationComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }

  templateJS() {
    // Redireccion a la ubicación por google maps
    const $idbtn = this.shadowRoot.getElementById("btn-location");
    $idbtn.addEventListener("click", () => {
      window.open(this.urlCard, "_blanck")
    })
  }
}

window.customElements.define("cardlocation-component", CardLocationComponent);