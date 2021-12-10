var myCarousel = document.querySelector('#carouselMarian')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: false
})

console.log(carousel)

document.querySelector("#anterior").addEventListener('click', function(){
    carousel.prev()
})

document.querySelector("#seguent").addEventListener('click', function(){
    carousel.next()
})

// Modal
var myModal = document.getElementById('myModal')
var modal = new bootstrap.Modal(myModal, {
    backdrop:'static'
})
document.querySelector("#open-modal").addEventListener('click', function(){
    modal.show()
})