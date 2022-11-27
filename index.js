let icons = Array.from(document.querySelectorAll('.nav-icon'));
let navmenu = Array.from(document.querySelectorAll('.nav-btn'));

navmenu.forEach((item)=>{
    item.classList.add('animate');
})

for(let i=0; i<icons.length; ++i){
    icons[i].addEventListener('mouseover', ()=>{
        navmenu[i].classList.remove('hide');
    })

    icons[i].addEventListener('mouseout', ()=>{
        navmenu[i].classList.add('hide');
    })
}