const services = document.querySelectorAll(".service");
const list = document.querySelector(".invoice-items");
const displayTotal = document.getElementById("display-total");
const sendInvoice = document.getElementById("send-invoice");

let invoiceItems = [];

function charge(event) {
  const type = event.target.getAttribute("data-type");
  const price = event.target.getAttribute("data-price");
  const alreadyCharged = invoiceItems.some((invoiceItem) => {
    return type === invoiceItem.type;
  });

  if (alreadyCharged) {
    return false;
  }

  invoiceItems.push({ type, price });
  showList();
  showTotalAmount();
  updateDisabled();
}

function showList() {
  let listHTML = "";

  invoiceItems.forEach((invoiceItem, index) => {
    listHTML += `
      <div class="invoice-item">
        <div class="item">
          <h3>${invoiceItem.type}</h3>
          <span data-index="${index}">Remove</span>
        </div>
        <span class="price"><em>€</em>${invoiceItem.price}</span>
      </div>`;
  });

  list.innerHTML = listHTML;
}

function showTotalAmount() {
  let totalAmount = 0;

  invoiceItems.forEach((invoiceItem) => {
    totalAmount += parseInt(invoiceItem.price);
  });

  displayTotal.innerHTML = `€${totalAmount}`;
}

function updateDisabled() {
  [...services].forEach((service) => {
    const alreadyCharged = invoiceItems.some((invoiceItem) => {
      return service.getAttribute("data-type") === invoiceItem.type;
    });

    service.disabled = alreadyCharged;
  });
}

[...services].forEach((service) => {
  service.addEventListener("click", charge);
});

sendInvoice.addEventListener("click", () => {
  invoiceItems = [];
  showList();
  showTotalAmount();
  updateDisabled();
});

list.addEventListener("click", (event) => {
  const index = event.target.getAttribute("data-index");

  if (index === null) {
    return false;
  }

  invoiceItems.splice(parseInt(index), 1);
  showList();
  showTotalAmount();
  updateDisabled();
});
