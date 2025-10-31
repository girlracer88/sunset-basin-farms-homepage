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
// DOM Manipulation: Select elements and add event listeners
document.addEventListener('DOMContentLoaded', function() {  // Wait for DOM load
    const thumbs = document.querySelectorAll('#thumbnails img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;
    const images = Array.from(thumbs).map(img => ({ thumb: img.src, full: img.dataset.full, alt: img.alt }));

    // Function to open modal (DOM update)
    function openModal(index) {
        currentIndex = index;
        modalImg.src = images[index].full;
        modalImg.alt = images[index].alt;  // Dynamic alt for accessibility
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        modalImg.style.display = 'block';
        document.body.style.overflow = 'hidden';  // Prevent scroll
        modalImg.focus();  // Focus management
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }

    // Next/Prev navigation
    function changeImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        openModal(currentIndex);
    }

    // Event listeners (device-independent: click + keydown)
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => openModal(index));
        thumb.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(index); } });
    });
    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeModal(); } });
    prevBtn.addEventListener('click', () => changeImage(-1));
    nextBtn.addEventListener('click', () => changeImage(1));
    prevBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter') changeImage(-1); });
    nextBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter') changeImage(1); });

    // Close on Escape key or outside click
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'block') closeModal(); });
});// DOM Manipulation: Select elements and add event listeners
document.addEventListener('DOMContentLoaded', function() {  // Wait for DOM load
    const thumbs = document.querySelectorAll('#thumbnails img');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const closeBtn = document.getElementById('close-modal');
    const prevBtn = document.getElementById('prev');
    const nextBtn = document.getElementById('next');
    let currentIndex = 0;
    const images = Array.from(thumbs).map(img => ({ thumb: img.src, full: img.dataset.full, alt: img.alt }));

    // Function to open modal (DOM update)
    function openModal(index) {
        currentIndex = index;
        modalImg.src = images[index].full;
        modalImg.alt = images[index].alt;  // Dynamic alt for accessibility
        modal.style.display = 'block';
        modal.setAttribute('aria-hidden', 'false');
        modalImg.style.display = 'block';
        document.body.style.overflow = 'hidden';  // Prevent scroll
        modalImg.focus();  // Focus management
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = 'auto';
    }

    // Next/Prev navigation
    function changeImage(direction) {
        currentIndex = (currentIndex + direction + images.length) % images.length;
        openModal(currentIndex);
    }

    // Event listeners (device-independent: click + keydown)
    thumbs.forEach((thumb, index) => {
        thumb.addEventListener('click', () => openModal(index));
        thumb.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openModal(index); } });
    });
    closeBtn.addEventListener('click', closeModal);
    closeBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeModal(); } });
    prevBtn.addEventListener('click', () => changeImage(-1));
    nextBtn.addEventListener('click', () => changeImage(1));
    prevBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter') changeImage(-1); });
    nextBtn.addEventListener('keydown', (e) => { if (e.key === 'Enter') changeImage(1); });

    // Close on Escape key or outside click
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && modal.style.display === 'block') closeModal(); });
});

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
