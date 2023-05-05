const items = document.querySelector('.carousel-listing');
const item = document.querySelector('.recipe');
const itemWidth = item.offsetWidth + 10;
const numItems = items.children.length;
let currentPosition = 0;

function moveLeft() {
    if (currentPosition > 0) {
        currentPosition -= itemWidth;
    }
    items.style.transform = `translateX(${-currentPosition}px)`;
}

function moveRight() {
    const maxPosition = ((numItems - Math.round(items.offsetWidth * 1.8 / itemWidth)) * itemWidth);
    if (currentPosition < maxPosition) {
        currentPosition += itemWidth;
    } else {
        currentPosition = maxPosition;
    }
    items.style.transform = `translateX(${-currentPosition}px)`;
}