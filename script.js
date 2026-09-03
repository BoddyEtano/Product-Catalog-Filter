const products = [
  { name: "Laptop", price: 800, category: "Electronics" },
  { name: "Desk", price: 150, category: "Furniture" },
  { name: "Mouse", price: 25, category: "Electronics" },
];

const productContainer = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");

// Función para renderizar productos
function renderProducts(productsToRender) {
  productContainer.innerHTML = ""; // Limpia el contenedor

  if (productsToRender.length === 0) {
    productContainer.innerHTML = '<p class="no-results">No products found</p>';
    return;
  }

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className = "product-card";
    productCard.innerHTML = `
            <h2>${product.name}</h2>
            <p>Price: $${product.price}</p>
            <p>Category: ${product.category}</p>
        `;
    productContainer.appendChild(productCard);
  });
}

// Renderiza todos los productos al cargar
renderProducts(products);

// Event listener: se dispara cada vez que el usuario escribe
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value.toLowerCase(); // Obtiene el valor y lo convierte a minúsculas

  // Filtra los productos que coincidan con el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm),
  );

  // Re-renderiza con los productos filtrados
  renderProducts(filteredProducts);
});
