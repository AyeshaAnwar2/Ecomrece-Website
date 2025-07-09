

// navbar toggel bar
let navbtn = document.getElementById('menubtn')
let nav = document.getElementById ('mobile-menu')
navbtn.onclick = () =>{
  nav.classList.toggle('hidden');
}
function showSlide(index) {
    const slides = document.getElementById("slides");
    slides.style.transform = `translateX(-${index * 100}%)`;
  }



/* Scroll functions best seller section*/
  const gallery  = document.getElementById('gallery');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');

const scrollByPage = dir => {
  gallery.scrollBy({ left: dir * gallery.clientWidth, behavior: 'smooth' });
};

prevBtn.addEventListener('click', () => scrollByPage(-1));
nextBtn.addEventListener('click', () => scrollByPage(1));




// followus section
const gallery2 = document.getElementById('gallery2');
const prevBtn2 = document.getElementById('prevBtn2');
const nextBtn2 = document.getElementById('nextBtn2');

const scrollPage = dir => {
  gallery2.scrollBy({ left: dir * gallery2.clientWidth, behavior: 'smooth' });
};
prevBtn2.addEventListener('click', () => scrollPage(-1));
nextBtn2.addEventListener('click', () => scrollPage(1));

const updateButtonVisibility = () => {
  const maxScrollLeft = gallery2.scrollWidth - gallery2.clientWidth;
  prevBtn2.classList.toggle('hidden', gallery2.scrollLeft <= 0);
  nextBtn2.classList.toggle('hidden', gallery2.scrollLeft >= maxScrollLeft);
};
gallery2.addEventListener('scroll', updateButtonVisibility);
window.addEventListener('load', updateButtonVisibility);



let count = document.getElementById('cart-count');

// Load existing cart from localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
updateCartCount();

// Loop through Add to Cart buttons
document.querySelectorAll('.add-cart-btn').forEach((btn, index) => {
  const card = btn.closest('li');
  const itemName = card.querySelector('.item-name')?.textContent.trim();

  // ✅ Extract image from Tailwind bg-[url(...)] class
  const bgDiv = card.querySelector('div[class*="bg-[url"]');
  const className = bgDiv?.className;
  const match = className?.match(/bg-\[url\('?(.*?)'?\)\]/);
  let rawImage = match?.[1];
  const imageUrl = rawImage?.startsWith("src/") ? rawImage : "src/" + rawImage;

  // Pre-fill button text if already in cart
  if (cartItems.some(item => item.name === itemName)) {
    btn.textContent = 'Remove';
  }

  btn.addEventListener('click', function () {
    const existingIndex = cartItems.findIndex(item => item.name === itemName);

    if (existingIndex === -1) {
      // Add item
      const item = {
        name: itemName,
        image: imageUrl,
        price: "Rs 500"
      };
      cartItems.push(item);
      btn.textContent = 'Remove';
    } else {
      // Remove item
      cartItems.splice(existingIndex, 1);
      btn.textContent = 'Add to cart';
    }

    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount();
  });
});

function updateCartCount() {
  document.getElementById('cart-count').textContent = cartItems.length;
}
// follow button function 
let followbtn = document.getElementById('follow')
let followshow = () =>{
  alert('Welcome to Tin website  , thanks to follow us')
}
followbtn.addEventListener('click' , followshow)



// subscribe button

let subscribbtn = document.getElementById('subs')
let subscribeshow = () =>{
  alert('Welcome to Tin website  , thanks to subscribe us we offer 50% off to the new subscribers')
}
subscribbtn.addEventListener('click' , subscribeshow)

