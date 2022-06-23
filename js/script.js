const menuBtn = document.querySelector('.menu-btn');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
})

//JavaScript for video slide:

 const btns = document.querySelectorAll('.nav-btn');
 const slides = document.querySelectorAll('.video-slide');

 var sliderNav = function(manual){
    btns.forEach((btn) => {
        btn.classList.remove('active');
    })

    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    btns[manual].classList.add('active');
    slides[manual].classList.add('active');
 }

 btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        sliderNav(i);
    })
 })