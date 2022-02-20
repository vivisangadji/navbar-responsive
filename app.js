const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLink = document.querySelectorAll('.nav-links li');
    burger.addEventListener('click', ()=>{
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Animate Links
        navLink.forEach((link, index)=> {
    
            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
            
        });

        burger.classList.toggle('toggle');
    });
}

navSlide();