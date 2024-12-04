const button = document.querySelector('.brand-slider__button')
const sliderContainer = document.querySelector('.brand-slider__wrapper')
const sliderItems = document.querySelector('.brand-slider__items')

if (window.screen.width < 768) {
	new Swiper('.brand-slider', {

		slidesPerView: 'auto',
		spaceBetween: 16,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	button.remove()
	sliderContainer.remove()
}

button.addEventListener('click', {

})








