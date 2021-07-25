const buyButtons = settings.buyButtons;
const basketList = settings.basketList;
const totalValue = settings.totalValue;
const placeOrderBtn = settings.placeOrderBtn;

const basket = new Basket();
basket.getFromLocalStorage();

basket.items !== null ? basket.getFromLocalStorage() : (basket.items = []);

const createBasketUi = () => {
	basketList.innerHTML = '';

	basket.items.length > 0
		? placeOrderBtn.removeAttribute('disabled')
		: placeOrderBtn.setAttribute('disabled', 'disabled');

	for (const { id, text } of basket.getBasketSumary()) {
		const li = document.createElement('li');
		const btn = document.createElement('button');

		btn.textContent = 'Remove';
		btn.dataset.id = id;
		btn.addEventListener('click', removeItem, false);
		li.innerHTML = text;
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

	basket.saveToLocalStorage();
	createBasketUi();
};

const removeItem = (event) => {
	const id = Number(event.target.dataset.id);
	basket.remove(id);
	basket.saveToLocalStorage();
	createBasketUi();
};

const placeOrder = () => {
	alert(
		`Thank you for your order. Total value of ordered items is: ${basket.getTotalValue()} zł.`
	);
	basket.clear();
	basket.saveToLocalStorage();
	createBasketUi();
};

createBasketUi();

for (const button of buyButtons) {
	button.addEventListener('click', addProductToBasket, false);
}

placeOrderBtn.addEventListener('click', placeOrder, false);
