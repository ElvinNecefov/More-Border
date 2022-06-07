let i = 0;
document.querySelector('.square').addEventListener('click', e => {
	i+=2;
	e.target.style.border = i +'px solid black';
});