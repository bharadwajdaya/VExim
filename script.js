
// Pages
document.querySelectorAll('.logo').forEach(logo => {
    logo.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'block'
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'none'
    })
})

document.querySelectorAll('.login').forEach(loginBtn => {
    loginBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'block'
        document.querySelector('.signup-page').style.display = 'none'
    })
})

document.querySelectorAll('.signup').forEach(signupBtn => {
    signupBtn.addEventListener('click', () => {
        document.querySelector('.front-page').style.display = 'none'
        document.querySelector('.login-page').style.display = 'none'
        document.querySelector('.signup-page').style.display = 'flex'
    })
})
// End of Pages

// Navigation
const dropdownItems = document.querySelectorAll('.dropdown-hover')

if(window.innerWidth < 1000) {
    const menuIcon = document.querySelector('.menu')
    const navbar = document.querySelector('.navbar')
    
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('change')

        if(!navbar.classList.contains('change')) {
            document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
                dropdown.style.left = '-20rem'
            })
        }
    })

    document.querySelectorAll('.show-dropdown').forEach(link => {
        link.addEventListener('click', () => {
            link.nextElementSibling.style.left = '0'
        })
    })

    document.querySelectorAll('.dropdown-heading-link').forEach(headingLink => {
        headingLink.addEventListener('click', () => {
            headingLink.parentElement.parentElement.style.left = '-20rem'
        })
    })
} else {
    dropdownItems.forEach(dropdownItem => {
        dropdownItem.addEventListener('mouseover', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 1; visibility: visible'
            document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to top,rgba(0, 224, 101, 0.7),rgba(0, 119, 69, 0.6));'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
        })
        dropdownItem.addEventListener('mouseout', () => {
            dropdownItem.lastElementChild.style.cssText = 'opacity: 0; visibility: hidden'
            document.querySelector('.navbar-wrapper').style.background = 'none'
            dropdownItem.firstElementChild.firstElementChild.style.transform = 'rotate(0)'
        })
    })
}

window.addEventListener('resize', () => {
    window.location.reload()
})

// End of Navigation

const track=document.querySelector('.carousal__track');
const slides=Array.from(track.children);
const nextButton=document.querySelector('.carousal__button--right');
const prevButton=document.querySelector('.carousal__button--left');
const dotsNav=document.querySelector('.carousal__nav');
const dots=Array.from(dotsNav.children);

const slideSize=slides[0].getBoundingClientRect();
const slideWidth=slideSize.width;



const updateDots=(currentDot,targetDot)=>{
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


const setSlidePosition = (slide,index)=>{
    slide.style.left=slideWidth*index+'px';
};


slides.forEach(setSlidePosition);


const moveToSlide =(track,currentSlide,targetSlide)=>{
    track.style.transform='translateX(-'+targetSlide.style.left+')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}
prevButton.addEventListener('click',e=>{
    const currentSlide=track.querySelector('.current-slide');
    const prevSlide=currentSlide.previousElementSibling;
    const currentDot=dotsNav.querySelector('.current-slide');
    const prevDot=currentDot.previousElementSibling;
    moveToSlide(track,currentSlide,prevSlide);
    updateDots(currentDot,prevDot);
});

nextButton.addEventListener('click',e=>{
    const currentSlide=track.querySelector('.current-slide');
    const nextSlide=currentSlide.nextElementSibling;
    const currentDot=dotsNav.querySelector('.current-slide');
    const nextDot=currentDot.nextElementSibling;
    moveToSlide(track,currentSlide,nextSlide);
    updateDots(currentDot,nextDot);
});

dotsNav.addEventListener('click',e=>{
    const targetDot=e.target.closest('button');
    if(!targetDot) return;
    const currentSlide =track.querySelector('.current-slide');
    const currentDot=dotsNav.querySelector('.current-slide');
    const targetIndex=dots.findIndex(dot=> dot===targetDot);
    const targetSlide = slides[targetIndex];
    moveToSlide(track,currentSlide,targetSlide);
    updateDots(currentDot,targetDot);
});





