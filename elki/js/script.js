var goodsCards = document.querySelectorAll('.goods_cards');

goodsCards.forEach(items => {
    items.addEventListener('click', function () {
        items.classList.toggle('active');
    })
})