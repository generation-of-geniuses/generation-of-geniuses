(() => {
    const menuList = document.getElementById('menu-list');
    const menuBtn = document.getElementById('menu-btn');

    let menuListVisible = false;
    menuBtn.addEventListener('click', () => {
        if (menuListVisible) {
            menuList.classList.remove('nav__list--visible');
        }
        else {
            menuList.classList.add('nav__list--visible');
        }
        menuListVisible = !menuListVisible;
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            menuList.classList.remove('nav__list--visible');
            menuListVisible = false;
        }
    });
})();