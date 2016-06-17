var selectSeason = document.getElementById("season");






var discountArray = [];

function discountLoaded(eventObject) {
	var discounts = JSON.parse(eventObject.target.response);
	
	for (var i = 0; i < discounts.categories.length; i++) {
		var newSelect = document.createElement("option");
		newSelect.setAttribute("value", discounts.categories[i].id);
		newSelect.innerText = discounts.categories[i].season_discount;
		selectSeason.appendChild(newSelect)
	};
	console.log(discounts)

	for (var i = 0; i < discounts.categories.length; i++) {
		console.log(discounts.categories[i].discount)
		discountArray.push(discounts.categories[i].discount);
	};
	console.log(discountArray)
};


var discounts = new XMLHttpRequest();
discounts.addEventListener("load", discountLoaded);
discounts.open("GET", "discounts.json");
discounts.send();

