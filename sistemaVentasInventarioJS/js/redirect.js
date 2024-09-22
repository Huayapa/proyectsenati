export function redirectUrl(btnAction, urlDirection) {
  const $btnAction = document.getElementById(btnAction);
  $btnAction.addEventListener("click", ()=> {
    location.href = urlDirection;
  })

}