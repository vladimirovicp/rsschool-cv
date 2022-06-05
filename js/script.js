let menuLinks = document.querySelectorAll('.menu__link[data-goto]');
let menuLinksMob = document.querySelectorAll('.header__link[data-goto]');
let sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('.menu__icon');


    menuIcon.addEventListener('click', (event) => {
        menuIcon.classList.toggle("open");
        document.querySelector('.header__nav').classList.toggle('_active');
        document.body.classList.toggle('_lock');
    });


if( menuLinks.length > 0){
    // console.log(menuLinks);
    menuLinks.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuClick)
    });

    function onMenuClick(e){
        const menuLink = e.target;
        menuLinks.forEach(menuLink => {
            if (menuLink.classList.contains('active')) {
                menuLink.classList.remove('active');
            }
        });
        menuLink.classList.add('active');
        sections.forEach( value => {
            if (value.classList.contains('active'))
            {
                value.classList.remove('active');
            }
        });

        if(menuLink.dataset.goto && document.querySelector('.' + menuLink.dataset.goto)){
            const gotoBlock = document.querySelector('.' + menuLink.dataset.goto);
            gotoBlock.classList.add('active');

            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            });

            e.preventDefault();
        }
    }




}


if( menuLinksMob.length > 0) {

    menuLinksMob.forEach(menuLinks => {
        menuLinks.addEventListener("click", onMenuMobClick)
    });

    function onMenuMobClick(e){
        menuIcon.classList.toggle("open");
        document.querySelector('.header__nav').classList.toggle('_active');
        document.body.classList.toggle('_lock');

        sections.forEach( value => {
            if (value.classList.contains('active'))
            {
                value.classList.remove('active');
            }
        });

        const menuLinkMob = e.target;
        if(menuLinkMob.dataset.goto && document.querySelector('.' + menuLinkMob.dataset.goto)){
            const gotoBlockMob = document.querySelector('.' + menuLinkMob.dataset.goto);
            gotoBlockMob.classList.add('active');


            const gotoBlockValueMob = gotoBlockMob.getBoundingClientRect().top + scrollY - 20;
            window.scrollTo({
                top: gotoBlockValueMob,
                behavior: "smooth"
            });

            e.preventDefault();
        }

    }

}

// if( menuLinksMob.length > 0) {
//     // console.log(menuLinks);
//     menuLinksMob.forEach(menuLinks => {
//         menuLinks.addEventListener("click", onMenuMobClick)
//     });
//
//     function onMenuMobClick(e){
//         document.body.classList.toggle('_lock');
//         menuIcon.classList.toggle("open");
//         document.querySelector('.header__nav').classList.toggle('_active');
//
//         const menuLinkMob = e.target;
//         menuLinksMob.forEach(menuLink => {
//             if (menuLinkMob.classList.contains('active')) {
//                 menuLinkMob.classList.remove('active');
//             }
//         });
//         menuLinkMob.classList.add('active');
//         sections.forEach( value => {
//             if (value.classList.contains('active'))
//             {
//                 value.classList.remove('active');
//             }
//         });
//
//         if(menuLinkMob.dataset.goto && document.querySelector('.' + menuLinkMob.dataset.goto)){
//             const gotoBlockMob = document.querySelector('.' + menuLinkMob.dataset.goto);
//             gotoBlockMob.classList.add('active');
//
//             const gotoBlockValueMob = gotoBlockMob.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
//
//             window.scrollTo({
//                 top: gotoBlockValueMob,
//                 behavior: "smooth"
//             });
//
//             e.preventDefault();
//         }
//     }
//
// }
