var outputEl = document.getElementById("outputDiv1");


// filters the products in the JSON based on their category ID;
function filterCategory(value, numberz) {
		return value.category_id === numberz
};


// Takes an array and outputs the array to the DOM
function createOutput(array, cat_id_string) {
	for (var i = 0; i < array.length; i++) {

		var 	product = array[i],
			newDiv = document.createElement("div"),
			name = document.createElement("h1"),
			price = document.createElement("h2");
			category = document.createElement("p")

			name.innerText = product.name;
			price.innerText = product.price;
			category.innerText = cat_id_string;

			newDiv.appendChild(name);
			newDiv.appendChild(price);
			newDiv.appendChild(category);

			outputEl.appendChild(newDiv);
	};
};




function loadProductJson(eventObject) {
	// These are the basic variables taken from the JSON;
	var products = JSON.parse(eventObject.target.response);
	var products = products.products
	

	// Creates an array from the JSON based on their categorie 1, 2, or 3
	var categoryOne = products.filter(function(product) {
		var numberz = filterCategory(product, 1);
		return numberz 
	});

	var categoryTwo = products.filter(function(product) {
		var numberz = filterCategory(product, 2);
		return numberz 
	});

	var categoryThree = products.filter(function(product) {
		var numberz = filterCategory(product, 3);
		return numberz 
	});

	createOutput(categoryOne, "Apparel");
	createOutput(categoryTwo, "Furniture");
	createOutput(categoryThree, "Household")
};


var selectNumber = null;
selectSeason.addEventListener("change", function(){
	selectNumber = selectSeason.value;
	console.log(selectNumber)
});

function calcuteDiscount







var productRequest = new XMLHttpRequest();

productRequest.addEventListener("load", loadProductJson);

productRequest.open("GET", "products.json");
productRequest.send();