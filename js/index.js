const button = document.querySelector('.brand-slider__button')


const sliderItems = document.querySelector('.brand-slider__items')
let buttonText = document.querySelector('.button-text')
let buttonIcon = document.querySelector('.icon--read-more')
let readMore = true

if (window.screen.width < 768) {


	new Swiper('.brand-slider', {
		loop: true,
		slidesPerView: 'auto',
		spaceBetween: 16,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		autoplay: {
			delay: 2000,
			disableOnIteration: false
		}
	});



}


button.addEventListener('click', () => {
	if (readMore) {
		sliderItems.style.maxHeight = '265px'
		buttonIcon.style.transform = 'rotate(180deg)'
		buttonText.textContent = 'Скрыть'

	} else {
		sliderItems.style.maxHeight = '160px'
		buttonIcon.style.transform = 'rotate(0deg)'
		buttonText.textContent = 'Показать все'

	}

	readMore = !readMore
})














