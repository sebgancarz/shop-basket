const productList = settings.lists.productList;
const addProductForm = settings.forms.addProductForm;
const productName = settings.inputs.productName;
const productPrice = settings.inputs.productPrice;

const savePtoductToLocalStorage = (name, price) => {
	const productsList = JSON.parse(localStorage.getItem('shop-items')) ?? [];
	productsList.push({ name, price });
	localStorage.setItem('shop-items', JSON.stringify(productsList));
};

const addProductToList = (name, price) => {
	const newProduct = document.createElement('li');
	const span = document.createElement('span');
	const btn = document.createElement('button');
	const priceText = document.createTextNode(
		` - ${String(price.toFixed(2))} zł`
	);

	btn.innerText = 'Buy!';
	btn.classList.add('btn-product-buy');
	btn.dataset.name = name;
	btn.dataset.price = price;
	btn.addEventListener('click', addProductToBasket);
	span.innerText = name;

	newProduct.appendChild(span);
	newProduct.appendChild(priceText);
	newProduct.appendChild(btn);

	productList.appendChild(newProduct);

	addProductForm.reset();
	createBasketUi();
};

const loadProductsFromLocalStorage = () => {
	const productsList = JSON.parse(localStorage.getItem('shop-items')) ?? [];

	for (const { name, price } of productsList) {
		addProductToList(name, price);
	}
};

const handleAddProductFormSubmit = (event) => {
	event.preventDefault();

	const nameFromInput = productName.value;
	const priceFromInput = Number(productPrice.value);

	addProductToList(nameFromInput, priceFromInput);
	savePtoductToLocalStorage(nameFromInput, priceFromInput);
};

loadProductsFromLocalStorage();

addProductForm.addEventListener('submit', handleAddProductFormSubmit);
