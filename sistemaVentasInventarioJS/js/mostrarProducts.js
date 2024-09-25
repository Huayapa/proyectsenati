
export function mostrarProdsTable(idTableBody, nameStorage) {
  const $TableBody = document.getElementById(idTableBody);
  if(!window.localStorage.getItem(nameStorage)) {
    const $trnone = document.createElement("tr");
    $trnone.innerHTML = "<td colspan='6' style='text-align: center'>No existen productos</td>";
    $TableBody.appendChild($trnone);
    return;
  }
  const products = JSON.parse(localStorage.getItem(nameStorage));
  products.forEach(prod => {
    const $tr = document.createElement("tr");
    $tr.setAttribute("id", `${prod.id}-prod`);
    $tr.innerHTML = `
      <td>${prod.id}</td>
      <td>${prod.product}</td>
      <td>${prod.descript}</td>
      <td class="amount-row">${prod.amount}</td> 
      <td>${prod.price}</td>
      <td class="stock-row">${prod.stock}</td>
    `;
    $TableBody.appendChild($tr);
  });
}
