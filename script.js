const hamMenu=document.querySelector('.ham-menu');

const offScrennMenu=document.querySelector('.off-screen-menu');

const liItems = document.querySelectorAll('.off-screen-menu li');

hamMenu.addEventListener('click',()=>{
    hamMenu.classList.toggle('active');
    offScrennMenu.classList.toggle('active');
})

// liItem.addEventListener('click',()=>{
//      offScrennMenu.classList.toggle('active');
//      hamMenu.classList.toggle('active');
// })


liItems.forEach(item => {
    item.addEventListener('click', () => {
        hamMenu.classList.remove('active');
        offScrennMenu.classList.remove('active');
    });
});
