import { addProductListNotFormClick } from "./addProductList.js";
import { activeForm, activeFormInit, borrarVenta } from "./gestionform.js"
import { recuperarData } from "./getdataStorage.js";
import { mostrarProdsTable } from "./mostrarProducts.js";
import { redirectUrl } from "./redirect.js";

document.addEventListener("DOMContentLoaded", e => {
  mostrarProdsTable("productos-factura", "prodsBoleta");
  addProductListNotFormClick("addTicketProd","cantidad", "prodsBoleta");
  activeForm("newventa", ".elementVenta");
  borrarVenta("borrarventa", ".elementVenta");
  redirectUrl("btnProduct", "./gestionproductos.html");
  recuperarData("storageprod", ".local-storage", ["product", "descript", "amount", "price", "stock"]);
  if(localStorage.getItem("storageprod") != undefined) {
    activeFormInit(".elementVenta");
    
  }
})