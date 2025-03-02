class HeaderComponent extends HTMLElement {
  // ESPECIFICAR RUTAS
  rutas = {
    inicio: {nombre: "Inicio", ruta: "index.html"},
    productos: {nombre: "Productos", ruta: "#"},
    servicios: {nombre: "Servicios", ruta: "#"},
    ubicacion: {nombre: "Ubicación", ruta: "#"},
    fqa: {nombre: "FQA", ruta: "#"},
    nosotros: {nombre: "Nosotros", ruta: "nosotros.html"},
  };
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  // Método que se ejecuta cuando el componente se agrega
  async connectedCallback() {
    await this.templateCSS();
    this.render();
    this.templateJS();
  }
  // Método para renderizar el contenido del componente
  render() {
    const {inicio, productos, servicios, ubicacion, fqa, nosotros} = this.rutas;
    this.shadowRoot.innerHTML += `
      <header id="header">
        <a href="${inicio.ruta}" class="header_logo">
          <object type="image/svg+xml" data="assets/svg/logomuebles.svg"></object>
        </a>
        <section class="header_nav">
          <nav class="nav">
            <a href="${inicio.ruta}">${inicio.nombre}</a>
            <a href="${productos.ruta}">${productos.nombre}</a>
            <a href="${nosotros.ruta}">${nosotros.nombre}</a>
            <a href="${servicios.ruta}">${servicios.nombre}</a>
            <a href="${ubicacion.ruta}">${ubicacion.nombre}</a>
            <a href="${fqa.ruta}">${fqa.nombre}</a>
          </nav>
          <button type="menu" aria-label="Abrir menú" class="menu-btn">
            <div class="center">
              <div></div>
            </div>
          </button>
        </section>
      </header>
    `;
  }
  // CSS
  async templateCSS() {
    await fetch('./componentes/header/headerComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }
  // AQUI VAN TODAS LAS FUNCIONES JS
  templateJS() {
    this.eventBtnMenu();
  }
  // EVENTO PARA ACTIVAR LA BARRA DE NAVEGACIÓN MOBILE
  eventBtnMenu() {
    const menuBtn = this.shadowRoot.querySelector('.menu-btn');
    const menuMobile = this.shadowRoot.querySelector('.nav');
    menuBtn?.addEventListener('click', () => {
      menuBtn.classList.toggle('activeBtn');
      menuMobile.classList.toggle('activeBtn');
    });

  }
}


window.customElements.define('header-component', HeaderComponent);