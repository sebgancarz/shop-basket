const productList = settings.lists.productList;
const addProductForm = settings.forms.addProductForm;
const productName = settings.inputs.productName;
const productPrice = settings.inputs.productPrice;

const addNewProduct = (event) => {
	event.preventDefault();

	const name = productName.value;
	const price = Number(productPrice.value);

	const newProduct = document.createElement('li');
	const span = document.createElement('span');
	const btn = document.createElement('button');
	const priceText = document.createTextNode(` - ${String(price.toFixed(2))}`);

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

	createBasketUi();

	addProductForm.reset();
};

addProductForm.addEventListener('submit', addNewProduct);
