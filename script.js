document.getElementById('appointmentForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.name.value;
    const phone = this.phone.value;
    const datetime = this.datetime.value;
    alert(`Appointment request submitted!\nName: ${name}\nPhone: ${phone}\nDate & Time: ${datetime}`);
    this.reset();
});

document.getElementById('workForm').addEventListener('submit', function(e){
    e.preventDefault();
    const name = this.name.value;
    const phone = this.phone.value;
    const email = this.email.value;
    alert(`Application submitted!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`);
    this.reset();
});

document.getElementById('bookBtn').addEventListener('click', function(){
    document.getElementById('appointmentForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('workBtn').addEventListener('click', function(){
    document.getElementById('workForm').scrollIntoView({ behavior: 'smooth' });
});
function validatePhone(input) {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(input);
}

document.getElementById('appointmentForm').addEventListener('submit', function(e){
    e.preventDefault();
    const phone = this.phone.value;
    if (!validatePhone(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    alert(`Appointment request submitted!\nName: ${this.name.value}\nPhone: ${phone}\nDate & Time: ${this.datetime.value}`);
    this.reset();
});

document.getElementById('workForm').addEventListener('submit', function(e){
    e.preventDefault();
    const phone = this.phone.value;
    if (!validatePhone(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }
    alert(`Application submitted!\nName: ${this.name.value}\nPhone: ${phone}\nEmail: ${this.email.value}`);
    this.reset();
});

const hero = document.querySelector('.hero');
const heroBg = hero.querySelector('::before'); // pseudo-element can't be selected directly
const heroElement = document.querySelector('.hero');

const heroImages = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=1200&q=80"
];

let currentHero = 0;

function changeHeroBackground() {
    heroElement.style.backgroundImage = `url('${heroImages[currentHero]}')`;
    heroElement.style.transition = "background-image 1s ease-in-out";
    currentHero = (currentHero + 1) % heroImages.length;
}

changeHeroBackground(); // initial load
setInterval(changeHeroBackground, 5000); // change every 5 seconds

// Service Card Modal
const serviceCards = document.querySelectorAll('.service-card');
const modal = document.getElementById('serviceModal');
const modalTitle = document.getElementById('modalTitle');
const modalInfo = document.getElementById('modalInfo');
const closeBtn = document.querySelector('.modal .close');

serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        modalTitle.textContent = card.dataset.title;
        modalInfo.textContent = card.dataset.info;
        modal.style.display = "flex";
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});

// Mobile Menu Toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".navbar nav");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
