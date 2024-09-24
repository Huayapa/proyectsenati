export function activeForm(btnActive, classElement) {
  const $btnActive = document.getElementById(btnActive), 
    $elements = document.querySelectorAll(classElement);
  $btnActive.addEventListener("click", e => {
    e.preventDefault();
    $elements.forEach(el => {
      el.removeAttribute("disabled");
    })
  })
}

export function borrarVenta(btnActive, classElement) {
  const $btnActive = document.getElementById(btnActive), 
    $elements = document.querySelectorAll(classElement);
  $btnActive.addEventListener("click", e => {
    e.preventDefault();
    $elements.forEach(el => {
      el.setAttribute("disabled", "");
      if(el.classList.contains("input")) {
        el.value = "";
      }
    })
  })
}

export function activeFormInit(classElement) {
  const $elements = document.querySelectorAll(classElement);
  $elements.forEach(el => {
    el.removeAttribute("disabled");
  })
}
