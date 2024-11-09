/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/


const navList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');




// build Nav
function buildNav(){
    sections.forEach(section => {
        const navButton = document.createElement('li');
        navButton.insertAdjacentHTML("afterbegin",`<a href="#${section.id}" class="menu__link">${section.dataset.nav}</a>`);
        navList.appendChild(navButton);
        scrollBehavior(navButton, section);
    });
    navBar.appendChild(navList);
}
buildNav();




// Scroll to Anchor 
function scrollBehavior(navButton, section){
    navButton.addEventListener('click', function(event){
        event.preventDefault();
        window.scrollTo({
            top: section.offsetTop,
            behavior:"smooth"
        });
    });
}



// Section Active 
function activeSection (){
    const navActive = document.querySelectorAll(".menu__link")
    sections.forEach((section, i)=>{ 
        const sectionBond = section.getBoundingClientRect();
        if (sectionBond.top <= 380 && sectionBond.bottom >= 350){
            section.classList.add("your-active-class");
            navActive[i].classList.add("active_button");
        } else{
            section.classList.remove("your-active-class");
            navActive[i].classList.remove("active_button");
        }
    })
}


// Toggle NavBar 
function toggleNavBar(){
    let userScroll;
    header.style.cssText = 'opacity: 1; transition: ease 0.3s ;'
    window.clearTimeout( userScroll );
    userScroll = setTimeout(function() {    
        header.style.cssText = 'opacity: 0; transition: ease 0.3s ;'
    }, 6000);
}

window.addEventListener('scroll',(event)=>{
    activeSection();
    toggleNavBar();
})

//UP Button
const upButton = footer.insertAdjacentHTML("beforebegin", `<div Id="return_top" ></div>`);
document.getElementById("return_top").addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
});




