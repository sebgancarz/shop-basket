const basketList = settings.lists.basketList;
const buyButtons = [...settings.buttons.buyButtons];
const placeOrderBtn = settings.buttons.placeOrderBtn;
const totalValue = settings.values.totalValue;

const basket = new Basket();

const createBasketUi = () => {
	basketList.innerHTML = '';

	basket.items.length > 0
		? placeOrderBtn.removeAttribute('disabled')
		: placeOrderBtn.setAttribute('disabled', 'disabled');

	for (const { id, text } of basket.getBasketSumary()) {
		const li = document.createElement('li');
		const btn = document.createElement('button');
		const span = document.createElement('span');

		btn.textContent = 'Remove';
		btn.dataset.id = id;
		btn.addEventListener('click', removeItem, false);
		span.innerHTML = text;
		li.appendChild(span);
		li.appendChild(btn);

		basketList.appendChild(li);
	}
	totalValue.textContent = basket.getTotalValue();
};

const addProductToBasket = (event) => {
	const name = event.target.dataset.name;
	const price = Number(event.target.dataset.price);

	const newProduct = new Product(name, price);
	basket.add(newProduct);

	createBasketUi();
};

const removeItem = (event) => {
	const id = Number(event.target.dataset.id);
	basket.remove(id);
	createBasketUi();
};

const placeOrder = () => {
	alert(
		`Thank you for your order. Total value of ordered items is: ${basket.getTotalValue()} zł.`
	);
	basket.clear();
	createBasketUi();
};

createBasketUi();

for (const button of buyButtons) {
	button.addEventListener('click', addProductToBasket, false);
}

placeOrderBtn.addEventListener('click', placeOrder, false);
