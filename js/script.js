let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
let sections = document.querySelectorAll('section');

if( menuLinks.length > 0){
    console.log(menuLinks);

    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuClick)
    });

    function onMenuClick(e){
        const menuLink = e.target;

        sections.forEach( value => {
            if (value.classList.contains('active'))
            {
                value.classList.remove('active');
            }
        });




        console.log(menuLink);
        console.log(' | ' + menuLink.dataset.goto + ' | ' + document.querySelector('.' + menuLink.dataset.goto));

        if(menuLink.dataset.goto && document.querySelector('.' + menuLink.dataset.goto)){

            const gotoBlock = document.querySelector('.' + menuLink.dataset.goto);

            gotoBlock.classList.add('active');

            // console.log('gotoBlock | ' + gotoBlock);

            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            // console.log(gotoBlockValue);

            // if(iconMenu.classList.contains('_active')){
            //     document.body.classList.remove('_lock');
            //     iconMenu.classList.remove('_active');
            //     menuBody.classList.remove('_active');
            // }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();

        }
    }
}
