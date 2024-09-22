import { activeForm, borrarVenta } from "./gestionform.js"
import { redirectUrl } from "./redirect.js";

document.addEventListener("DOMContentLoaded", e => {
  activeForm("newventa", ".elementVenta");
  borrarVenta("borrarventa", ".elementVenta");
  redirectUrl("btnProduct", "./gestionproductos.html");
})