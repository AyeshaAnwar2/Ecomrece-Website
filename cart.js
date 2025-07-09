
// function showCartItems() {
//   const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//   const container = document.getElementById('cart-container');

//   if (cartItems.length === 0) {
//     container.innerHTML = "<p class='text-center text-lg'>Your cart is empty.</p>";
//     return;
//   }

//   container.innerHTML = cartItems.map(item => `
//     <div class="bg-white p-4 shadow-md rounded-lg">
//       <img src="${item.image}" alt="${item.name}" class="w-full h-48 object-cover rounded-md mb-4" />
//       <h2 class="text-xl font-semibold mb-2">${item.name}</h2>
//       <p class="text-amber-700 font-bold">${item.price}</p>
//     </div>
//   `).join('');
// }

// showCartItems();


function showCartItems() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const container = document.getElementById('cart-container');

  if (cartItems.length === 0) {
    container.innerHTML = "<p class='text-center text-lg'>Your cart is empty.</p>";
    return;
  }

  container.innerHTML = cartItems.map(item => `
    <div class="bg-white p-4 w-70 shadow-md rounded-lg">
      <img src="${item.image}" alt="${item.name}" class="w-50 h-50 object-cover rounded-md mb-4" />
      <h2 class="text-xl text-center font-semibold mb-2">${item.name}</h2>
       <p>Butternut Squash, Carrot, Peas, Red Lentil</p>
      <p class="text-amber-700 font-bold">${item.price}</p>
     
    </div>
  `).join('');
}

showCartItems();