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
      <a href="#" class="btn btn-primary">Посмотреть цену</a>
      <a href="#" class="btn btn-danger">Удалить</a>
    </div>
  </div>
</div>`

function render() {
    const html = toys.map(toHTML).join('')
    document.querySelector('#toys').innerHtml = html

}

render()


const modal = $.modal({
    title: 'Best window modal',
    closable: true,
    content: `
        <h4>Modal is working</h4>
        <p>Lorem ipsum dolor sit.</p>`,
    width: '400px'
    footerButtons: [
        {text: 'Ok', type: 'primary', handler() {
            console.log('Primary btn clicked')
            modal.closed()
        }},
        {text: 'Cancel', type: 'primary', handler() {
            console.log('Danger btn clicked')
            modal.closed()
        }}
    ]
})