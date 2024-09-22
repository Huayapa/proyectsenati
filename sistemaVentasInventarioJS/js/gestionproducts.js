import { activeForm, borrarVenta } from "./gestionform.js"

document.addEventListener("DOMContentLoaded", e => {
  activeForm("newprod", ".elementInput");
  borrarVenta("deleteprod", ".elementInput");
})