class Basket {
	constructor() {
		this.items ? this.getFromLocalStorage() : [];
	}

	add(item) {
		this.items.push(item);
	}

	getTotalValue() {
		return this.items
			.reduce((prev, product) => prev + product.price, 0)
			.toFixed(2);
	}

	getBasketSumary() {
		return this.items.map((item, index) => {
			return {
				id: index,
				text: `${index + 1}. ${item.name} - ${item.price.toFixed(2)} zł.`,
			};
		});
	}

	remove(index) {
		this.items.splice(index, 1);
	}

	clear() {
		this.items.length = 0;
	}

	getFromLocalStorage() {
		JSON.parse(localStorage.getItem('basket'));
	}

	saveToLocalStorage() {
		localStorage.setItem('basket', JSON.stringify(basket.items));
	}
}

class Product {
	constructor(productName, productPrice) {
		(this.name = productName), (this.price = productPrice);
	}

	setNewPrice(newPrice) {
		this.price = newPrice;
	}
}
