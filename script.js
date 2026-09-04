const products = [
  { name: "Laptop", price: 800, category: "Electronics", image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=85" },
  { name: "Desk", price: 150, category: "Furniture", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=900&q=85" },
  { name: "Mouse", price: 25, category: "Electronics", image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=85" },
  { name: "Ceramic Mug", price: 22, category: "Kitchen", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=85" },
  { name: "Canvas Backpack", price: 85, category: "Travel", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=85" },
  { name: "Desk Lamp", price: 68, category: "Lighting", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&w=900&q=85" },
  { name: "Wireless Headphones", price: 140, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85" },
  { name: "Linen Throw", price: 54, category: "Home", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=900&q=85" },
  { name: "Running Shoes", price: 120, category: "Sport", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85" },
  { name: "Analog Watch", price: 195, category: "Accessories", image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=900&q=85" },
  { name: "Scented Candle", price: 32, category: "Home", image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=900&q=85" },
  { name: "Leather Wallet", price: 65, category: "Accessories", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=85" },
  { name: "Mechanical Keyboard", price: 110, category: "Electronics", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=85" },
  { name: "Water Bottle", price: 28, category: "Sport", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=900&q=85" },
  { name: "Reading Chair", price: 320, category: "Furniture", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=900&q=85" },
  { name: "Plant Pot", price: 26, category: "Home", image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=85" },
  { name: "Travel Camera", price: 560, category: "Electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=85" },
  { name: "Wool Beanie", price: 35, category: "Accessories", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=900&q=85" },
  { name: "Oak Side Table", price: 180, category: "Furniture", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?auto=format&fit=crop&w=900&q=85" },
  { name: "Sketchbook", price: 18, category: "Stationery", image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=85" },
  { name: "Stone Diffuser", price: 48, category: "Home", image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=900&q=85" },
  { name: "Sunglasses", price: 75, category: "Accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=85" },
  { name: "Foldable Bike", price: 480, category: "Sport", image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?auto=format&fit=crop&w=900&q=85" },
  { name: "Bluetooth Speaker", price: 90, category: "Electronics", image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=900&q=85" },
  { name: "Daily Planner", price: 24, category: "Stationery", image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?auto=format&fit=crop&w=900&q=85" },
];

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const resultsCount = document.getElementById("resultsCount");

function renderProducts(productsToRender) {
  productContainer.innerHTML = "";
  resultsCount.textContent = `${productsToRender.length} ${productsToRender.length === 1 ? "product" : "products"}`;

  if (productsToRender.length === 0) {
    productContainer.innerHTML = '<p class="no-results">No products found. Try another search.</p>';
    return;
  }

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.name}" loading="lazy">
        <span class="product-category">${product.category}</span>
      </div>
      <div class="product-info">
        <h2>${product.name}</h2>
        <p class="product-price">$${product.price}</p>
      </div>
    `;
    productContainer.appendChild(productCard);
  });
}

renderProducts(products);

searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.trim().toLowerCase();
  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category}`.toLowerCase().includes(searchTerm),
  );
  renderProducts(filteredProducts);
});

document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    searchInput.focus();
  }
});
