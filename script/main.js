const arrImages = [	
    'img/01.jpg', 'img/02.jpg', 'img/03.jpg', 'img/04.jpg', 'img/05.jpg',
];

const eleSlider = document.querySelector('.slider');
const eleBtnTop = document.querySelector('.btn-top');
const eleBtnBottom = document.querySelector('.btn-bottom');

for (let i = 0; i < arrImages.length; i++) {
	const eleImg = document.createElement('img');
	eleImg.src = arrImages[i];
	eleImg.classList.add('slider-img');

	if (i === 0) {
		eleImg.classList.add('active');
	}

	eleSlider.append(eleImg);
}

const listEleImg = document.querySelectorAll('.slider-img');

let activeCounter = 0

eleBtnBottom.addEventListener('click', function () {

    listEleImg[activeCounter].classList.remove('active');

    activeCounter++;

    listEleImg[activeCounter].classList.add('active');

});

eleBtnTop.addEventListener('click', function () {
	listEleImg[activeCounter].classList.remove('active');

	activeCounter--;

	listEleImg[activeCounter].classList.add('active');

});


