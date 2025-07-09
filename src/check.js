const cartIcon = document.getElementById('cart-icon');
  const cartCount = document.getElementById('cart-count');
  const cartItemsList = document.getElementById('cart-items');
  const cartModal = document.getElementById('cart-modal');
  const addToCartButtons = document.querySelectorAll('.add-to-cart');

  let cart = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const name = button.dataset.name;
      const price = parseFloat(button.dataset.price);
      const existingItem = cart.find(item => item.name === name);

      if (existingItem) {
        existingItem.qty++;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      updateCartDisplay();
    });
  });

  function updateCartDisplay() {
    cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
    cartItemsList.innerHTML = '';
    cart.forEach(item => {
      const li = document.createElement('li');
      li.textContent = `${item.name} x ${item.qty} - $${item.price * item.qty}`;
      cartItemsList.appendChild(li);
    });
  }

  cartIcon.addEventListener('click', () => {
    cartModal.classList.toggle('hidden');
  });