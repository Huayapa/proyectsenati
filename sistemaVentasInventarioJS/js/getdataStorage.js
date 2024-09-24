export function recuperarData(nameStorage, elementValue, modelDataValuesInsert) {
  const $elements = document.querySelectorAll(elementValue);
  let storage = localStorage.getItem(nameStorage);
  if(!storage) {
    return;
  }
  $elements.forEach((el, indice) => {
    let valueData = modelDataValuesInsert[indice];
    el.value = JSON.parse(storage)[0][valueData];
    if(el.name == "cantidad") {
      el.removeAttribute("disabled");
    }
  }); 
}