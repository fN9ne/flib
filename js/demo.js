const copyButton = document.querySelectorAll('.demo__copy');

copyButton.forEach(item => {
	item.addEventListener('click', () => {
		const code = item.closest('.demo__block').querySelector('.demo__code');
		const temp = document.createElement('textarea');
		document.querySelector('body').append(temp);
		temp.value = code.innerHTML;
		temp.select();
		document.execCommand('copy');
		temp.remove();
	});
});