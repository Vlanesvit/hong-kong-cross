/*
Документация слайдера: https://swiperjs.com/
*/

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Перечень слайдов
	if (document.querySelector('.rs-picture-block__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-picture-block');
		sliderBlocks.forEach(sliderBlock => {
			const sliderImg = sliderBlock.querySelector('.rs-picture-block__mask_slider');
			const sliderContent = sliderBlock.querySelector('.rs-picture-block__desc_slider');

			const pagination = sliderBlock.querySelector('.rs-picture-block__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-picture-block__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-picture-block__button-prev');

			const sliderSwiperContent = new Swiper(sliderContent, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				autoHeight: true,

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				slidesPerView: 1,
			});

			const sliderSwiperImg = new Swiper(sliderImg, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				loop: true,

				// Анимация переключения
				effect: 'fade',

				// Курсор
				grabCursor: true,

				slidesPerView: 1,
			});

			// "Связка" слайдеров
			sliderSwiperImg.controller.control = sliderSwiperContent;
			sliderSwiperContent.controller.control = sliderSwiperImg;
		});
	}

	if (document.querySelector('.rs-slider-block__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-slider-block');

		sliderBlocks.forEach(slider => {
			const arrowPrev = slider.querySelector('.rs-slider-block__button-prev');
			const arrowNext = slider.querySelector('.rs-slider-block__button-next');
			const pagination = slider.querySelector('.rs-slider-block__pagination');
			console.log(slider.classList.contains('rs-news'));

			if (slider.classList.contains('rs-news')) {
				const sliderSwiper = slider.querySelectorAll('.rs-slider-block.rs-news .rs-slider-block__slider');

				sliderSwiper.forEach(swiper => {
					const swiperMain = new Swiper(swiper, {
						// // Автопрокрутка
						// autoplay: {
						// 	// Пауза между прокруткой
						// 	delay: 10000,
						// 	// Закончить на последнем слайде
						// 	stopOnLastSlide: false,
						// 	// Отключить после ручного переключения
						// 	disableOnInteraction: false,
						// },

						// Обновить свайпер
						// при изменении элементов слайдера
						observer: true,
						// при изменении родительских элементов слайдера
						observeParents: true,
						// при изменении дочерних элементов слайдера
						observeSlideChildren: true,

						// Скорость смены слайдов
						speed: 500,

						// Включение/отключение
						// перетаскивание на ПК
						simulateTouch: true,
						allowTouchMove: true,
						// Чувствительность свайпа
						touchRadio: 1,
						// Угол срабатывания свайпа/перетаскивания
						touchAngle: 45,
						touchStartPreventDefault: true,

						// Цикличность слайдера
						// loop: true,

						// Анимация переключения
						// effect: 'fade',

						// Курсор перетаскивания
						grabCursor: true,

						// Стрелки
						navigation: {
							prevEl: arrowPrev,
							nextEl: arrowNext,
						},

						// Пагинация
						pagination: {
							el: pagination,
							clickable: true,
						},

						breakpoints: {
							0: {
								slidesPerView: 1.1,
								spaceBetween: 16,
							},
							539.98: {
								slidesPerView: 1.5,
								spaceBetween: 16,
							},
							767.98: {
								slidesPerView: 2,
								spaceBetween: 24,
							},
							991.98: {
								slidesPerView: 1.73837,
								spaceBetween: 24,
							},
						},
					});
				});
			}

			if (slider.classList.contains('rs-features')) {
				const sliderSwiper = slider.querySelectorAll('.rs-slider-block.rs-features .rs-slider-block__slider');

				sliderSwiper.forEach(swiper => {
					const swiperMain = new Swiper(swiper, {
						// // Автопрокрутка
						// autoplay: {
						// 	// Пауза между прокруткой
						// 	delay: 10000,
						// 	// Закончить на последнем слайде
						// 	stopOnLastSlide: false,
						// 	// Отключить после ручного переключения
						// 	disableOnInteraction: false,
						// },

						// Обновить свайпер
						// при изменении элементов слайдера
						observer: true,
						// при изменении родительских элементов слайдера
						observeParents: true,
						// при изменении дочерних элементов слайдера
						observeSlideChildren: true,

						// Скорость смены слайдов
						speed: 500,

						// Включение/отключение
						// перетаскивание на ПК
						simulateTouch: true,
						allowTouchMove: true,
						// Чувствительность свайпа
						touchRadio: 1,
						// Угол срабатывания свайпа/перетаскивания
						touchAngle: 45,
						touchStartPreventDefault: true,

						// Цикличность слайдера
						// loop: true,

						// Анимация переключения
						// effect: 'fade',

						// Курсор перетаскивания
						grabCursor: true,

						// Стрелки
						navigation: {
							prevEl: arrowPrev,
							nextEl: arrowNext,
						},

						// Пагинация
						pagination: {
							el: pagination,
							clickable: true,
						},

						breakpoints: {
							0: {
								slidesPerView: 1.1,
								spaceBetween: 16,
							},
							539.98: {
								slidesPerView: 1.5,
								spaceBetween: 16,
							},
							767.98: {
								slidesPerView: 2,
								spaceBetween: 24,
							},
							991.98: {
								// slidesPerView: 2.6697,
								slidesPerView: 'auto',
								spaceBetween: 24,
							},
						},
					});
				});
			}
		});
	}

	if (document.querySelector('.rs-media-block__slider')) {
		const sliderBlocks = document.querySelectorAll('.rs-media-block');
		sliderBlocks.forEach(sliderBlock => {
			const slider = sliderBlock.querySelector('.rs-media-block__slider');
			const pagination = sliderBlock.querySelector('.rs-media-block__pagination');
			const arrowNext = sliderBlock.querySelector('.rs-media-block__button-next');
			const arrowPrev = sliderBlock.querySelector('.rs-media-block__button-prev');

			const sliderSwiper = new Swiper(slider, {
				// // Автопрокрутка
				// autoplay: {
				// 	// Пауза между прокруткой
				// 	delay: 10000,
				// 	// Закончить на последнем слайде
				// 	stopOnLastSlide: false,
				// 	// Отключить после ручного переключения
				// 	disableOnInteraction: false,
				// },

				// Обновить свайпер
				// при изменении элементов слайдера
				observer: true,
				// при изменении родительских элементов слайдера
				observeParents: true,
				// при изменении дочерних элементов слайдера
				observeSlideChildren: true,

				// Скорость смены слайдов
				speed: 500,

				// Включение/отключение
				// перетаскивание на ПК
				simulateTouch: true,
				// Чувствительность свайпа
				touchRadio: 1,
				// Угол срабатывания свайпа/перетаскивания
				touchAngle: 45,

				// Цикличность слайдера
				// loop: true,

				// Анимация переключения
				// effect: 'fade',

				// Курсор
				grabCursor: true,

				// Пагинация
				pagination: {
					el: pagination,
					clickable: true,
					// dynamicBullets: true
				},

				// Стрелки
				navigation: {
					nextEl: arrowNext,
					prevEl: arrowPrev,
				},

				slidesPerView: 1,
			});

			const tabTitles = sliderBlock.querySelectorAll('[data-slider-tabs-title]');
			// Добавим обработчики событий на кнопки навигации
			tabTitles.forEach((tabTitle, index) => {
				tabTitle.addEventListener('click', function () {
					// Устанавливаем активный класс для нажатой кнопки и убираем у остальных
					tabTitles.forEach(title => title.classList.remove('_tab-active'));
					tabTitle.classList.add('_tab-active');

					sliderSwiper.slideTo(index);
				});
			});

			// Обновляем активный класс навигации при смене слайда (например, при свайпе)
			sliderSwiper.on('slideChange', function () {
				const activeIndex = sliderSwiper.activeIndex;
				tabTitles.forEach(title => title.classList.remove('_tab-active'));
				tabTitles[activeIndex].classList.add('_tab-active');
			});

		});
	}
}

// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	if (document.querySelector('.swiper')) {
		initSliders();
	}
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});