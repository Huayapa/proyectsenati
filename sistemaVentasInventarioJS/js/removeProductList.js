/*
El proposito de esta funcion es que se de clic a un boton
este entrara en un estado de "borrar", cuando se seleccione
un registro de la lista de productos se envia una alerta para
la confirmacion de borrar la lista
*/

export function clickCancelProd(IdBtnCancel, IdListBody, nameStorageListBody) {
  //luego de la alerta, los valores de stock se sumara a la lista general y se removera de la lista de la tabla
  //Y si esos datos se encuentrar en el producto temporal, tambien se modificara
  /*
  Definir el boton para remover y la lista general para cambiarlo de color
  */
  const $btnCancel = document.getElementById(IdBtnCancel),
    $ListBody = document.getElementById(IdListBody);
  $btnCancel.addEventListener("click", (e) => {
    e.preventDefault(); 
    //verificar que existan el storage principal
    if(!localStorage.getItem(nameStorageListBody)) {return alert("No existe ningun producto en la lista para borrar")}
    /*
    Este evento desabilitara el btn y indicara con diseño cual producto seleccionara
    */
    $btnCancel.textContent = "Selecciona un producto";
    $btnCancel.disabled = true;
    $ListBody.classList.add("isRemove");
    /*
    Aplicar a cada lista un evento de click
    */
   $ListBody.querySelectorAll("tr").forEach(regist => {
    regist.addEventListener("click", e => {
      //crear objeto con los valores de la lista
      const prodsValueForm = regist.querySelectorAll("td");
      const modeltable = ["id", "product", "descript", "amount", "price", "stock"];
      let prodListCheck = new Object();
      prodsValueForm.forEach((prodDetail, index) => {
        prodListCheck[modeltable[index]] = prodDetail.textContent;
      })
      //Confirmacion de remover producto
      let isRemove = confirm("Esta seguro de quitar el producto de la boleta?");
      if(!isRemove) {return location.reload()};
      //verificar que hay datos en el storage
      if(!localStorage.getItem("prods") || !localStorage.getItem("storageprod")) {
        return alert("No estan los datos correspondiente en el storage")
      }
      //definir una variable todos los datos del storage
      const ProdsList = JSON.parse(localStorage.getItem("prods"));
      const OrdenVenta = JSON.parse(localStorage.getItem(nameStorageListBody));
      const ProdData = JSON.parse(localStorage.getItem("storageprod"));
      //verificar que esos datos coincidan con la lista general
      if(!ProdsList.filter((prod) => prod.id == prodListCheck.id)) {
        return alert("Este producto no existe en la lista general");
      }
      //verificar que esos datos coincidad con la orden de ventas
      let indice = 0;
      if(!OrdenVenta.filter((prod, index) => {
        indice = index;
        return prod == prodListCheck;
      })) {
        return alert("Este producto no existe en la orden de ventas");
      }
      //lista sin el objeto que se va remover en la orden de ventas
      let newOrdenVenta = OrdenVenta.filter((prod, index) => index != indice);
      //revolver la cantidad al stock del producto
      let newList = [];
      ProdsList.forEach((prod) => {
        if(prod.id == prodListCheck.id) {
          prod.stock += parseInt(prodListCheck.amount);
        }
        newList.push(prod);
      })
      //actualizar si la lista esta ahi
      if(ProdData[0].id == prodListCheck.id) {
        ProdData[0].stock += parseInt(prodListCheck.amount);
        localStorage.setItem("storageprod", JSON.stringify(ProdData));
      }
      //guardar la nueva orden de ventas donde esta eliminado el producto
      localStorage.setItem(nameStorageListBody, JSON.stringify(newOrdenVenta));
      //actualizar la lista general
      localStorage.setItem("prods", JSON.stringify(newList));
      location.reload();
    })
   });
  })
  
}