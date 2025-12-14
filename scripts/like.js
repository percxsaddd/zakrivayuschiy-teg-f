// like.js
const likeHeartArray = document.querySelectorAll('.like-icon');
const likeButtonArray = document.querySelectorAll('.card__like-button');
const iconButtonArray = document.querySelectorAll('.card__icon-button');

// Обработчики для иконок сердца
iconButtonArray.forEach((iconButton, index) => {
  iconButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleIsLiked(likeHeartArray[index], likeButtonArray[index]);
  });
});

// Обработчики для кнопок Like
likeButtonArray.forEach((button, index) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleIsLiked(likeHeartArray[index], button);
  });
});

function toggleIsLiked(heart, button) {
  heart.classList.toggle('is-liked');
  setButtonText(heart, button);
}

function setButtonText(heart, button) {
  const buttonText = button.querySelector('.button__text');
  if (!buttonText) return;
  
  if (heart.classList.contains('is-liked')) {
    setTimeout(() => {
      buttonText.textContent = 'Unlike';
    }, 500);
  } else {
    setTimeout(() => {
      buttonText.textContent = 'Like';
    }, 500);
  }
}