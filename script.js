const NAVBAR = document.querySelector('.navbar');
const Remove = document.querySelector('.cancel_icon')
const Harmburger = document.querySelector('.bared');
const faqs = document.querySelectorAll('.faq');
Harmburger.addEventListener('click', showmenu);

function showmenu(){
	NAVBAR.style.display = "flex";
}

Remove.addEventListener('click', clear)

function clear(){
	NAVBAR.style.display ="none"
}

faqs.forEach(faq=>{
	faq.addEventListener('click', ()=>{
		faq.classList.toggle('open');

		// change icon
		const icon = faq.querySelector('.faq_icon i');
		if (icon.className === 'fa-solid fa-caret-down'){
			icon.className = 'fa-solid fa-caret-up';	
		} else{
			icon.className = "fa-solid fa-caret-down";
		}
	})
})
