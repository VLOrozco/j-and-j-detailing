const cards = document.querySelectorAll('.card');

const handleMouseOver = function(event) {
  const card = event.currentTarget;
  const cardParagraph = card.querySelector('.card-text p');
  cardParagraph.style.color = 'var(--white-color)';
}

const handleMouseOut = function(event) {
  const card = event.currentTarget;
  const cardParagraph = card.querySelector('.card-text p');
  cardParagraph.style.color = '';
}

cards.forEach((card) => {
  card.addEventListener('mouseover', handleMouseOver);
  card.addEventListener('mouseout', handleMouseOut);
});
