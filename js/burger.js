//Получение объектов
var menu = document.querySelector(".header__menu");
var button = document.querySelector(".header__burger");
var body = document.querySelector("body");
var header = document.querySelector(".header");
var wrapper = document.querySelector(".wrapper");

//Вспомогательные переменные
var startWidth = body.clientWidth;
var scrollWidth;
var isOpening = false;

//Обработка нажатий
button.onclick = function () {

	if(isOpening == false){
		startWidth = body.clientWidth;

		menu.classList.add('burger_active');
		body.classList.add('burger_active');
		header.classList.add('burger_active');
		button.classList.add('burger_active');

		//console.log(body.clientWidth);
		//console.log(body.clientWidth-startWidth);

		scrollWidth = body.clientWidth - startWidth;
		body.style.paddingRight = scrollWidth + "px";
		header.style.paddingRight = scrollWidth + "px";
		menu.style.paddingLeft = 0;
		isOpening = true;
	} else{

		menu.classList.remove('burger_active');
		body.classList.remove('burger_active');
		header.classList.remove('burger_active');
		button.classList.remove('burger_active');
		
		body.style.paddingRight = 0;
		header.style.paddingRight = 0;
		menu.style.paddingLeft = scrollWidth + "px";
		isOpening = false;
	}
}

window.onresize = function () {
	//console.log(window.innerWidth);
	if(isOpening == true){
		if(window.innerWidth > 768){
			menu.classList.remove('burger_active');
			body.classList.remove('burger_active');
			header.classList.remove('burger_active');
			button.classList.remove('burger_active');
			
			body.style.paddingRight = 0;
			header.style.paddingRight = 0;
			menu.style.paddingLeft = scrollWidth + "px";
			isOpening = false;
		} else
		body.style.paddingRight = scrollWidth + "px";
	}
}