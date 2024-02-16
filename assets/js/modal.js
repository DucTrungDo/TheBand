const buyBtns = document.querySelectorAll('.place-buy-btn');
const modal = document.querySelector('.modal');
const modalContainer = document.querySelector('.modal-container');
const closeBuyBtns = document.querySelectorAll(
  '.modal-close-header,.modal-close-footer'
);

const showBuyTickets = () => {
  modal.classList.add('open');
};

const closeBuyTickets = () => {
  modal.classList.remove('open');
};

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', showBuyTickets);
}

for (const closeBtn of closeBuyBtns) {
  closeBtn.addEventListener('click', closeBuyTickets);
}

modal.addEventListener('click', closeBuyTickets);

modalContainer.addEventListener('click', (event) => event.stopPropagation());
