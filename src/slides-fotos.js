const slide = document.querySelectorAll('.slide');
const bntPrev = document.getElementById('prev-botao');
const bntNext = document.getElementById('next-botao');

let currentSlide = 0;

function hideSlide(){
    slide.forEach(item => item.classList.remove('on'))
}

function showSlide(){
    slide[currentSlide].classList.add('on')
}

function nextSlide(){
    hideSlide()
    if(currentSlide == slide.length -1) {
        currentSlide = 0
    } else{
        currentSlide++
    }
    showSlide()
}

function prevSlide(){
    hideSlide()
    if(currentSlide == 0) {
        currentSlide = slide.length -1
    } else{
        currentSlide--
    }
    showSlide()
}

bntNext.addEventListener('click', nextSlide)
bntPrev.addEventListener('click', prevSlide)

console.log(slide)

currentSlide = currentSlide + 1
currentSlide = currentSlide - 1