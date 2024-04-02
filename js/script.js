window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    const gift = document.querySelector('#giftImage');
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.body.scrollHeight;

    console.log('Scroll position:', scrollPosition);
    console.log('Document height:', documentHeight);

    if (scrollPosition >= documentHeight) {
        console.log('Showing giftImage');
        gift.classList.remove('hidden');
    } else {
        console.log('Hiding giftImage');
        gift.classList.add('hidden');
    }
}
