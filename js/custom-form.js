const addProduceBtn = document.querySelector('.btn.plus');
const inputsContain = document.querySelector('.inputs');
addProduceBtn.addEventListener('click', () => {
	const toInsertHtml = document.querySelector(
		'.contact .inputs > .form-group.mt-3'
	).outerHTML;
	inputsContain.insertAdjacentHTML('beforeend', toInsertHtml);
});

// PAYSTACK
