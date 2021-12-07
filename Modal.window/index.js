const fruits = [
    {id: 1, titile: 'Золотая игрушка', price:10, img: 'https://ne-kurim.ru/forum/attachments/1577185158276-png.1085662/'},
    {id: 2, titile: 'Зеленая игрушка', price:12, img: 'https://ds04.infourok.ru/uploads/ex/0af8/000faedf-6b4f5069/2/hello_html_m49c2fb29.png'},
    {id: 3, titile: 'Красная игрушка', price:14, img: 'https://img-fotki.yandex.ru/get/4130/16969765.f2/0_6f96c_d34b53bd_orig.png'}
]



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