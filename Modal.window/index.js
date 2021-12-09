const toys = [
    {id: 1, title: 'Золотая игрушка', price:10, img: 'https://ne-kurim.ru/forum/attachments/1577185158276-png.1085662/'},
    {id: 2, title: 'Зеленая игрушка', price:12, img: 'https://ds04.infourok.ru/uploads/ex/0af8/000faedf-6b4f5069/2/hello_html_m49c2fb29.png'},
    {id: 3, title: 'Красная игрушка', price:14, img: 'https://img-fotki.yandex.ru/get/4130/16969765.f2/0_6f96c_d34b53bd_orig.png'}
]

const toHTML = toys => `
<div class="col">
   <div class="card">
    <img class="card=img-top" style="height: 300px;" src="${toys.img}" alt="${fruit.title}">
    <div class="card-body">
      <h5 class="card-title">${toys.title}</h5>
      <a href="#" class="btn btn-primary" data-btn="price" data-id="${toys.id}=>Посмотреть цену</a>
      <a href="#" class="btn btn-danger">Удалить</a>
    </div>
  </div>
</div>`

function render() {
    const html = toys.map(toHTML).join('')
    document.querySelector('#toys').innerHtml = html

}

render()


const priceModal = $.modal({
    title: 'Цена на товар',
    closable: true,
    width: '400px'
    footerButtons: [
        {text: 'Закрыть', type: 'primary', handler() {
            priceModal.close()
        }},
    ]
})

document.addEventListener('click', event => {
    event.preventDefault()
    const priceModal = event.target.dataset.btn
    const id = +event.target.dataset.id
    
    if (btnType === 'price') {
        const toys = toys.find(f => f.id ===id)
        priceModal.setContent(`
        <p>Цена на ${toys.title}: <strong>${toys.price}$</strong></p>`)
        priceModal.open()
        
        console.log('toys')
        
    }
})