var btn = document.querySelector('#btn')
var sidebar = document.querySelector('.sidebar')
var searchBtn = document.querySelector('.bx-search')

btn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})

searchBtn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
})