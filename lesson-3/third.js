function find(array, value) {
	console.log(array.indexOf(value));
}

let products = [ "Ковбаса", "Вода", "Хліб", "Сік", "Сир", "Гречка", "Масло" ];
find(products, "Вода");
find(products, "Пиво");