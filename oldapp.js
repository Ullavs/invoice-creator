const charge10 = document.getElementById("charge10");
const charge20 = document.getElementById("charge20");
const charge30 = document.getElementById("charge30");
const washCar = document.getElementById("wash-car");
const mowLawn = document.getElementById("mow-lawn");
const pullWeeds = document.getElementById("pull-weeds");
const displayTotal = document.getElementById("display-total");
const sendInvoice = document.getElementById("send-invoice");

// id's charge10 / charge20 / charge30 niet meer in HTML;
// washCar / mowLawn / pullWeeds (3x invoice-item) niet meer in HTML

let servicesRequested = [];
let totalAmount = 0;

charge10.addEventListener("click", function updateInvoice10() {
  if (!washCar.children[0]) {
    totalAmount += 10;
  }
  washCar.innerHTML = `
    <div class="item">
      <h3>Wash Car</h3>
      <span id="remove10">Remove</span>
    </div>
    <span class="price"><em>€</em>10</span>`;
  updateTotalAmount();
});

charge20.addEventListener("click", function updateInvoice20() {
  if (!mowLawn.children[0]) {
    totalAmount += 20;
  }
  mowLawn.innerHTML = `
     <div class="item">
        <h3>Mow Lawn</h3>
        <span id="remove20">Remove</span>
      </div>
      <span class="price"><em>€</em>20</span>`;
  updateTotalAmount();
});

charge30.addEventListener("click", function updateInvoice30() {
  if (!pullWeeds.children[0]) {
    totalAmount += 30;
  }
  pullWeeds.innerHTML = `
      <div class="item">
        <h3>Pull Weeds</h3>
        <span id="remove30">Remove</span>
      </div>
      <span class="price"><em>€</em>30</span>
  `;
  updateTotalAmount();
});

function updateTotalAmount() {
  displayTotal.textContent = `€${totalAmount}`;
}

sendInvoice.addEventListener("click", () => {
  totalAmount = 0;
  washCar.innerHTML = ``;
  mowLawn.innerHTML = ``;
  pullWeeds.innerHTML = ``;
  displayTotal.textContent = ``;
});
