/* Open/close mobile menu */
var header = document.getElementById('header')
var mobileMenu = document.getElementById('mobile-menu')
var headerHeight = header.clientHeight

mobileMenu.onclick = () => {
    var isClosed = header.clientHeight === headerHeight
    if (isClosed) {
        header.style.height = 'auto'
    } else {
        header.style.height = null
    }
}

/* Auto close menu when clicking on a child element in menu (except 'More') */
var menuItems = document.querySelectorAll('#nav li a[href*="#"]')
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i]

    menuItem.onclick = function () {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav')
        if (isParentMenu) {
            event.preventDefault()
        } else {
            header.style.height = null
        }
    }
}