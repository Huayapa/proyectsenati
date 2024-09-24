export function addVentaRowTable(tablaThebody, locationhref, nameStorage, modelDataValues) {
  const $mainRegist = document.getElementById(tablaThebody),
    $rowstable = $mainRegist.querySelectorAll("tr");  
  $rowstable.forEach(el => {
    el.addEventListener("click", e => {
      let valueId = el.getAttribute("id");
      if(valueId === null) {
        console.error("Este registro no tienen un identificador");
        return;
      }
      let dataProd = obtenerData(el, modelDataValues);
      localStorage.setItem(nameStorage, JSON.stringify([dataProd]));
      location.href = locationhref;
    })
  })
}

function obtenerData(lista, modelDataValues) {
  const $trContent = lista.querySelectorAll("td");
  console.log(modelDataValues);
  
  let newProd = new Object;
  $trContent.forEach((td, indice) => {
    newProd[modelDataValues[indice]] = td.textContent;
  });
  return newProd;
}