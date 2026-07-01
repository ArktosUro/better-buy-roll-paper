// =========================
// State
// =========================
const products = [];

// =========================
// DOM Elements
// =========================
const nameInput = document.getElementById("product-name");
const priceInput = document.getElementById("price");
const sheetsInput = document.getElementById("sheets");

const addBtn = document.getElementById("add-btn");
const resetBtn = document.getElementById("reset-btn");

const winnerCard = document.querySelector(".winner-card");
const productList = document.getElementById("product-list");

// =========================
// Utils
// =========================
const formatUSD = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);

// =========================
// Events
// =========================
addBtn.addEventListener("click", addProduct);
resetBtn.addEventListener("click", handleReset);

// =========================
// Core Logic
// =========================
function addProduct() {
  const name = nameInput.value.trim();
  const price = Number(priceInput.value);
  const sheets = Number(sheetsInput.value);

  if (!name || price <= 0 || sheets <= 0) {
    alert("Please fill in all fields.");
    return;
  }

  const costPer100Sheets = (price / sheets) * 100;

  products.push({ name, price, sheets, costPer100Sheets });

  products.sort((a, b) => a.costPer100Sheets - b.costPer100Sheets);

  render();
  clearInputs();
}

function handleReset() {
  const confirmReset = confirm("Clear all products?");
  if (!confirmReset) return;

  resetApp();
}

function resetApp() {
  products.length = 0;

  renderWinner();
  renderProducts();
  clearInputs();
}

// =========================
// Rendering
// =========================
function render() {
  renderWinner();
  renderProducts();
}

function renderWinner() {
  if (products.length === 0) {
    winnerCard.innerHTML = getEmptyWinnerHTML();
    return;
  }

  const winner = products[0];

  const savingsText = getSavingsText();

  winnerCard.innerHTML = `
    <span class="badge">🏆 BEST VALUE</span>
    <h2>${winner.name}</h2>
    <p class="winner-price">${formatUSD(winner.costPer100Sheets)}</p>
    <p class="winner-savings">${savingsText}</p>
  `;
}

function getSavingsText() {
  if (products.length < 2) {
    return "Add another product to compare";
  }

  const winner = products[0];
  const second = products[1];

  const savings =
    ((second.costPer100Sheets - winner.costPer100Sheets) /
      second.costPer100Sheets) *
    100;

  return `${savings.toFixed(1)}% cheaper than the next option`;
}

function renderProducts() {
  productList.innerHTML = "";

  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <div>
        <h4>${index === 0 ? "🏆 " : ""}${product.name}</h4>
        <small>${product.sheets.toLocaleString()} sheets</small>
      </div>
      <strong>${formatUSD(product.costPer100Sheets)}</strong>
    `;

    productList.appendChild(card);
  });
}

// =========================
// Helpers
// =========================
function clearInputs() {
  nameInput.value = "";
  priceInput.value = "";
  sheetsInput.value = "";
  nameInput.focus();
}

function getEmptyWinnerHTML() {
  return `
    <span class="badge">🏆 BEST VALUE</span>
    <h2>No products yet</h2>
    <p class="winner-price">Add products to see the best deal</p>
    <p class="winner-savings">—</p>
  `;
}
