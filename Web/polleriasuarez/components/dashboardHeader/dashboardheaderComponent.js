class DashboardHeaderComponent extends HTMLElement {
  rutas = {
    inicio: {nombre: "Inicio", ruta: "dasInicio.html"},
    productos: {nombre: "Productos", ruta: "#"},
    pedidos: {nombre: "Pedidos", ruta: "#"},
    clientes: {nombre: "Clientes", ruta: "#"},
    reportes: {nombre: "Reportes", ruta: "#"},
    salir: {nombre: "Salir", ruta: "index.html"},
  };
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  // Método que se ejecuta cuando el componente se agrega
  async connectedCallback() {
    await this.templateCSS();
    this.render();
  }
  // Método para renderizar el contenido del componente
  render() {
    const {inicio, productos, pedidos, clientes, reportes, salir} = this.rutas;
    this.shadowRoot.innerHTML += `
      <header id="header">
        <div class="logo"></div>
        <nav>
          <a href="${inicio.ruta}">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-home">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
              <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
              <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
            </svg>
            <p>
            ${inicio.nombre}
            </p>
          </a>
          <a href="${productos.ruta}">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-layout-dashboard">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M5 4h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
              <path d="M5 16h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
              <path d="M15 12h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1" />
              <path d="M15 4h4a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a1 1 0 0 1 1 -1" />
            </svg>
            <p>
            ${productos.nombre}
            </p>
          </a>
          <a href="${pedidos.ruta}">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
            <p>
            ${pedidos.nombre}
            </p>
          </a>
          <a href="${clientes.ruta}">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-users">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              <path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
            </svg>
            <p>
            ${clientes.nombre}
            </p>
          </a>
          <a href="${reportes.ruta}">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-report">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
              <path d="M18 14v4h4" />
              <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
              <path d="M8 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
              <path d="M18 18m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
              <path d="M8 11h4" />
              <path d="M8 15h3" />
            </svg>
            <p>
            ${reportes.nombre}
            </p>
          </a>
          <a href="${salir.ruta}">
            <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-logout-2">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 8v-2a2 2 0 0 1 2 -2h7a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-7a2 2 0 0 1 -2 -2v-2" />
              <path d="M15 12h-12l3 -3" />
              <path d="M6 15l-3 -3" />
            </svg>
            <p>
            ${salir.nombre}
            </p>
          </a>
        </nav>
      </header>
    `;
  }
  
  async templateCSS() {
    await fetch('./components/dashboardHeader/dashboardHeaderComponent.css')
      .then(response => response.text())
      .then(css => this.shadowRoot.innerHTML += `<style>${css}</style>`);
  }

}


window.customElements.define('dashboardheader-component', DashboardHeaderComponent);