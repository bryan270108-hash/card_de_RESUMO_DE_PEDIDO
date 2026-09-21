const paymentButton = document.querySelector(".payment-button");
const changeButton = document.querySelector(".change-button");
const cancelButton = document.querySelector(".cancel-button");

paymentButton.addEventListener("click", function () {
  alert("Pagamento selecionado!");
});

changeButton.addEventListener("click", function () {
  alert("Aqui você poderia escolher outro plano.");
});

cancelButton.addEventListener("click", function () {
  alert("Pedido cancelado.");
});
