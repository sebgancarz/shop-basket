const settings = {
	lists: {
		productList: document.querySelector('#products-list'),
		basketList: document.querySelector('#basket-list'),
	},

	buttons: {
		buyButtons: document.querySelectorAll('[data-name]'),
		placeOrderBtn: document.querySelector('.place-order'),
	},

	values: {
		totalValue: document.querySelector('#total-value'),
	},

	forms: {
		addProductForm: document.querySelector('.add-product-form'),
	},

	inputs: {
		productName: document.querySelector('[name="product-name"]'),
		productPrice: document.querySelector('[name="product-price"]'),
	},
};
