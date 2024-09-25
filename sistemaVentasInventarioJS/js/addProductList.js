export function addProductList(idBtnList, FormMainAdd, ListModel) {
  //Defino los valores en elementos
  const $FormMain = document.getElementById(FormMainAdd),
    $listIdBody = document.getElementById(idBtnList);
  //evento cuando se envie el formulario con el boton correspondiente
  $FormMain.addEventListener("submit", e => {
    if(e.submitter != $listIdBody) {
      return;
    }
    e.preventDefault();
    //Si no existe en el localStorage "prods", se creara uno
    if(!window.localStorage.getItem("prods")) {
      let prods = formObject($FormMain, ListModel, false);   
      window.localStorage.setItem("prods", JSON.stringify([prods]));
      location.reload();
      return;
    }
    /*
    Si ya existe el localStorage:
    -tomara los valores de storage y lo almacenara en el nuevo arreglo
    -Usamos la funcion formObject para agrupar los datos del formulario
    -A ese nuevo arreglo agregamos el nuevo valor 
    y lo guardamos de nuevo en el localStorage
    */
    let products = JSON.parse(window.localStorage.getItem("prods"));
    let newProducts = [];
    products.forEach(product => {
      newProducts.push(product);
    });
    let prods = formObject($FormMain, ListModel, true);
    newProducts.push(prods);
    window.localStorage.setItem("prods", JSON.stringify(newProducts));
    location.reload();
    return;
  })
}

function formObject(formTarget, ListModel, isExist) {
  let newObject = {};
  const $inputsForm = formTarget.querySelectorAll("input");
  //generarId
  let newId = 1;
  if(isExist) {
    let ListProds = JSON.parse(window.localStorage.getItem("prods"));
    ListProds.forEach(el => {
      if(el.id == newId) {
        newId++;
      }
    });
  }
  newObject["id"] = newId;
  //El resto del input se guardar en el mismo objeto
  $inputsForm.forEach((input, indice) => {
    newObject[ListModel[indice]] = input.value;
  });
  return newObject;
}


export function addProductListNotFormClick(idBtnAdd, idAmountInput, nameStorage) {
  try {
    /*
    DEFINO LOS ELEMENTOS HTML
    */
   const $btnAdd = document.getElementById(idBtnAdd),
    $inputAmount = document.getElementById(idAmountInput);
  
    /*
    CREO EL EVENTO DE CLICK PARA AGREGAR EL PRODUCTO AL STORAGE
    */
   $btnAdd.addEventListener("click", e => {
    e.preventDefault();
    /*
      Verificar que existe el localStorage donde tomara el producto
    */
    if(!localStorage.getItem("storageprod")) {
      throw "No selecciono o se guardo ningun producto en el storage";
    }
    let prodList = JSON.parse(localStorage.getItem("storageprod"));
    //descontar el producto al stock y cambiar la cantidad
    prodList[0].amount = $inputAmount.value;
    if(prodList[0].stock <= 0 || (prodList[0].stock - $inputAmount.value) < 0) {
      throw "No tiene stock suficiente en el producto";
    }
    prodList[0].stock -= $inputAmount.value;
    /*
    Verificar que existe en el storage la lista de productos general
    */
    if(!localStorage.getItem("prods")) {
      throw "No se existe la lista de productos general";
    }
    let prodsLists = JSON.parse(localStorage.getItem("prods"));
    let indiceprod = 0;
    let prodListFilterId = [];
    prodsLists.forEach((prod, index) => {
      if(prod.id == parseInt(prodList[0].id)) {
        indiceprod = index;
        prodListFilterId[0] = prod;
      }
    });
    //Verificar que exista el id de el storage con la lista general
    if(prodListFilterId.length <= 0) {
      throw "Este producto no existe en la lista general";
    }
    
    //modificar esos datos de la lista general
    prodListFilterId[0].amount = $inputAmount.value;
    prodListFilterId[0].stock -= $inputAmount.value;
    prodsLists[indiceprod] = prodListFilterId;
    
    /*
    Verificar si existe ese storage
    */
    if(!localStorage.getItem(nameStorage)) {
      /*
      Como no existe el dato que esta almacenado en el storage
      , se creara y añadir el valor del producto storage
      */
      localStorage.setItem(nameStorage, JSON.stringify(prodList));
      location.reload();
      throw "No existe en el localStorage, se creara una";
    }
    /*Añadir al storage existido el producto*/
    const StorageMain = JSON.parse(localStorage.getItem(nameStorage));
    let ListArrayProd = StorageMain;
    ListArrayProd.push(prodList[0]);
    localStorage.setItem(nameStorage, JSON.stringify(ListArrayProd));
    //El producto tambien actualizarlo en los datos de formulario y el general
    localStorage.setItem("storageprod", JSON.stringify(prodList));
    localStorage.setItem("prods", JSON.stringify(prodsLists[0]));

    location.reload();
   })
  } catch (err) {
    console.log(err);
  }
}