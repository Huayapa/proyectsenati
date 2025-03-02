class HeaderComponent extends HTMLElement {
  rutas = {
    inicio: {nombre: "Inicio", ruta: "index.html"},
    menus: {nombre: "Menús", ruta: "menus.html"},
    locales: {nombre: "Locales", ruta: "locales.html"},
    nosotros: {nombre: "Nosotros", ruta: "nosotros.html"},
    login: {nombre: "Iniciar Sesión", ruta: "login.html"},
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
    const {inicio, menus, locales, nosotros, login} = this.rutas;
    this.shadowRoot.innerHTML += `
      <header id="header">
        <article class="header__left">
          <a href="${inicio.ruta}" aria-label="Ir a la página de inicio">
            <object type="image/svg+xml" data="assets/svg/logo.svg" class="logo"></object>
          </a>
          <nav>
            <a href="${inicio.ruta}">${inicio.nombre}</a>
            <a href="${menus.ruta}">${menus.nombre}</a>
            <a href="${locales.ruta}">${locales.nombre}</a>
            <a href="${nosotros.ruta}">${nosotros.nombre}</a>
          </nav>
        </article>

        <article class="header__right">
          <span>Delivery <strong>898-321-321</strong></span>
          <a href="${login.ruta}" class="login">
            <button type="button">Iniciar Sesión</button>
          </a>
          <object type="image/svg+xml" data="assets/svg/cart.svg" class="cart"></object>
          <button type="menu" aria-label="Abrir menú" class="menu-btn">
            <div class="center">
              <div></div>
            </div>
          </button>
        </article>
      </header>

      <article id="menu-mobile">
        <nav id="menu">
          <a href="${inicio.ruta}">${inicio.nombre}</a>
            <a href="${menus.ruta}">${menus.nombre}</a>
            <a href="${locales.ruta}">${locales.nombre}</a>
            <a href="${nosotros.ruta}">${nosotros.nombre}</a>
        </nav>
        <section>
          <a href="${login.ruta}" class="login">
            <button type="button">Iniciar Sesión</button>
          </a>
          <span>Delivery <strong>898-321-321</strong></span>
        </section>
      </article>
    `;
  }
  
  async templateCSS() {
    await fetch('./components/header/headerComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }

  templateJS() {
    this.eventBtnMenu();
  }

  eventBtnMenu() {
    const menuBtn = this.shadowRoot.querySelector('.menu-btn');
    const menuMobile = this.shadowRoot.querySelector('#menu-mobile');
    menuBtn?.addEventListener('click', () => {
      menuBtn.classList.toggle('activeBtn');
      menuMobile.classList.toggle('activeBtn');
    });

  }
}


window.customElements.define('header-component', HeaderComponent);