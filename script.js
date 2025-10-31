// ====== SUNSET BASIN FARMS INTERACTIVITY ======

// 1️⃣ FAQ Section Toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const answer = button.nextElementSibling;
    const expanded = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', !expanded);
    answer.hidden = expanded;
  });
});

// 2️⃣ Dynamic Image Gallery
const galleryImages = [
  { src: 'egg-basket.jpg', alt: 'Fresh brown and white eggs in a basket' },
  { src: 'farm-sunset.jpg', alt: 'Sunset over the hills and farm' },
  { src: 'chickens-yard.jpg', alt: 'Free-range chickens on the pasture' },
  { src: 'tractor-field.jpg', alt: 'Tractor plowing field at sunrise' }
];

const gallery = document.getElementById('image-gallery');
const loadBtn = document.getElementById('loadImages');

if (loadBtn) {
  loadBtn.addEventListener('click', () => {
    gallery.innerHTML = ''; // clear before adding new images
    galleryImages.forEach(imgData => {
      const img = document.createElement('img');
      img.src = imgData.src;
      img.alt = imgData.alt;
      img.classList.add('gallery-img');
      gallery.appendChild(img);
    });
    loadBtn.textContent = 'Photos Loaded!';
    loadBtn.disabled = true;
  });
}

// 3️⃣ Form Validation
const form = document.getElementById('farmForm');
const feedback = document.getElementById('form-feedback');

if (form) {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      feedback.textContent = '⚠️ Please fill out all fields before submitting.';
      feedback.style.color = 'red';
      return;
    }

    // Simple email pattern check
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
      feedback.textContent = '⚠️ Please enter a valid email address.';
      feedback.style.color = 'red';
      return;
    }

    feedback.textContent = '✅ Thank you, your message has been sent!';
    feedback.style.color = 'green';
    form.reset();
  });
}
/* === FAQ Styling === */
#faq button {
  display: block;
  width: 100%;
  background-color: #f0e6d2;
  border: none;
  padding: 12px;
  text-align: left;
  font-size: 1.1rem;
  cursor: pointer;
  font-weight: bold;
  border-bottom: 1px solid #ccc;
}

#faq button:hover {
  background-color: #f7f3e8;
}

.faq-answer {
  padding: 10px 15px;
  background-color: #fffdf8;
  border-left: 3px solid #b8860b;
}

/* === Gallery === */
.gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.gallery-img {
  width: 200px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.2);
}

/* === Contact Form === */
#contact-form form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #fffdf5;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
