function login() {
  // Usuario de prueba
  const user = {
    name: "josue",
    password: "1234"
  }
  // Accion de formulario
  const $form = document.getElementById("form-login");
  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const {name, password} = user;
    if($form.usuario.value == name && $form.contra.value == password) {
      return window.location.href = "dasInicio.html";
    }
    if($form.usuario.value == "" && $form.contra.value == "") {
      alert("Ingrese los datos requeridos");
      return window.location.reload();
    }
    alert("El usuario o contraseña es incorrecta");
    window.location.reload();
  })
}




document.addEventListener("DOMContentLoaded", e => {
  login();
})