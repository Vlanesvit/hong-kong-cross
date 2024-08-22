function marquee() {
	const marquees = document.querySelectorAll('.marquee');

	marquees.forEach(marquee => {
		const list = marquee.querySelector('ul');
		const items = list.querySelectorAll('ul li');

		let scrollAmount = 0; // Переменная для отслеживания текущего смещения
		const speed = 10; // Базовая скорость прокрутки бегущей строки

		// Клонируем элементы для создания бесшовного эффекта
		for (let i = 0; i < 5; i++) {
			items.forEach(item => {
				const clone = item.cloneNode(true);
				list.appendChild(clone);
			});
		}

		// Обработчик прокрутки страницы
		let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
		
		window.addEventListener('scroll', () => {
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

			if (scrollTop > lastScrollTop) {
				// Прокрутка вниз - сдвиг вправо
				scrollAmount -= speed;
			} else {
				// Прокрутка вверх - сдвиг влево
				scrollAmount += speed;
			}

			lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Защита от негативных значений

			list.style.transform = `translateX(${scrollAmount}px)`;

			// Бесшовный эффект
			const firstItem = list.firstElementChild;
			const lastItem = list.lastElementChild;
			const firstItemWidth = firstItem.getBoundingClientRect().width;
			const lastItemWidth = lastItem.getBoundingClientRect().width;

			if (firstItem.getBoundingClientRect().right <= 0) {
				list.append(firstItem); // Перемещаем первый элемент в конец списка
				scrollAmount += firstItemWidth;
				list.style.transform = `translateX(${scrollAmount}px)`;
			}

			if (lastItem.getBoundingClientRect().left >= window.innerWidth) {
				list.prepend(lastItem); // Перемещаем последний элемент в начало списка
				scrollAmount -= lastItemWidth;
				list.style.transform = `translateX(${scrollAmount}px)`;
			}
		});

		// Начальное положение
		list.style.transform = `translateX(${scrollAmount}px)`;
	});
}

marquee();
