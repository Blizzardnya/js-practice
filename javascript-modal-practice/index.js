let fruits = [
    {id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348'},
    {id: 2, title: 'Апельсины', price: 30, img: 'https://fashion-stil.ru/wp-content/uploads/2019/04/apelsin-ispaniya-kg-92383155888981_small6.jpg'},
    {id: 3, title: 'Манго', price: 40, img: 'https://itsfresh.ru/upload/iblock/178/178d8253202ef1c7af13bdbd67ce65cd.jpg'},
]
  
/*
* 1. Динамически на основе массива вывести список карточек
* 2. Показать цену в модалке (и это должна быть 1 модалка)
* 3. Модалка для удаления с 2мя кнопками
* ---------
* 4. На основе $.modal нужно сделать другой плагин $.confirm (Promise)
* */

const priceModal = $.modal({
    title: 'Цена',
    closable: true,
    content: '',
    width: '500px',
    footerButtons: [
        {
            text: 'Ок', 
            type: 'primary', 
            handler() {
                priceModal.close()
            }
        }
    ]
})

function renderFruits(items){
    const $row = document.querySelector('div #fruits')
    $row.innerHTML = ''

    for (let fruit of items){
        const $col = document.createElement('div')
        $col.classList.add('col')
        $col.insertAdjacentHTML('afterbegin', `
            <div class="card">
              <img class="card-img-top" style="height: 300px;" src="${fruit.img}">
              <div class="card-body">
                <h5 class="card-title">${fruit.title}</h5>
                <button class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</button>
                <button class="btn btn-danger" data-btn="delete" data-id="${fruit.id}">Удалить</button>
              </div>
            </div>
        `)

        $row.appendChild($col)
    }
}

document.addEventListener('click', event => {
    const btnType = event.target.dataset.btn
    const fruit = fruits.find(elem => elem.id === parseInt(event.target.dataset.id))

    if (btnType === 'price') {
        priceModal.setContent(fruit.price)
        priceModal.open()
    } else if (btnType === 'delete'){
        $.confirm({
            title: 'Удаление',
            content: 'Вы действительно хотите удалить запись?',
        })
        .then(() => {
            fruits = fruits.filter(elem => elem.id !== fruit.id)
            renderFruits(fruits)
        })
        .catch(() => {

        })
    }
})

renderFruits(fruits)