let btnnext = document.querySelector('.next');
let btnback = document.querySelector('.back');

let container = document.querySelector('.container');
let list = document.querySelector('.container .list');
let thumb = document.querySelector('.container .thumb');

btnnext.onclick = () => moveItemsOnClick('next');
btnback.onclick = () => moveItemsOnClick('back');

function moveItemsOnClick(type) {
    let listItems = document.querySelectorAll('.list .list-item');
    let thumbItems = document.querySelectorAll('.thumb .thumb-item');

    if(type === 'next'){
        // Mover o primeiro item para o final
        list.appendChild(listItems[0]);
        thumb.appendChild(thumbItems[0]);
        container.classList.add('next');
    } else {
        // Mover o último item para o início
        list.prepend(listItems[listItems.length - 1]);
        thumb.prepend(thumbItems[thumbItems.length - 1]);
        container.classList.add('back');
    }

    // Remover as classes 'next' e 'back' após 3 segundos
    setTimeout(() => {
        container.classList.remove('next');
        container.classList.remove('back');
    }, 3000);
}
