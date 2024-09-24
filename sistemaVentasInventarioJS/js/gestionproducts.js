import { addProductList } from "./addProductList.js";
import { activeForm, borrarVenta } from "./gestionform.js"
import { mostrarProdsTable } from "./mostrarProducts.js";
import { addVentaRowTable } from "./tableselect.js";

document.addEventListener("DOMContentLoaded", e => {
  mostrarProdsTable("tables-data-prods", "prods");
  activeForm("newprod", ".elementInput");
  borrarVenta("deleteprod", ".elementInput");
  addVentaRowTable("tables-data-prods", "./index.html", "storageprod" ,["id", "product","descript", "amount", "price", "stock"]);
  addProductList("addprod","form-product", ["product","descript", "amount", "price", "stock"]);
})
