const links = document.querySelectorAll('a')

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((e) => {
            e.classList.remove('active')
        })

        link.classList.toggle('active')
    })
})

const menuBar = document.querySelector('#menu-bar')
const sidebar = document.querySelector('.sidebar')
const mainContent = document.querySelector('.main-content')
const sidebarBrand = document.querySelector('.sidebar-brand h2')

menuBar.addEventListener('click', () => {
    sidebar.classList.toggle('collapse')
    mainContent.classList.toggle('collapse')
    sidebarBrand.classList.toggle('collapse')
})