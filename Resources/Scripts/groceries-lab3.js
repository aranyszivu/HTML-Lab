
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "Broccoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		category: "vegetables"
	},
	{
		name: "Bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		category: "grains"
	},
	{
		name: "Chicken Breast",
		vegetarian: false,
		glutenFree: true,
		price: 9.99,
		category: "meat"
	},
	{
		name: "Microwave Dinner",
		vegetarian: false,
		glutenFree: true,
		price: 12.49,
		category: "frozen"
	},
	{
		name: "Raspberries",
		vegetarian: true,
		glutenFree: true,
		price: 3.49,
		category: "fruit"
	},
	{
		name: "Ribeye Steak",
		vegetarian: false,
		glutenFree: true,
		price: 15.45,
		category: "meat"
	},
	{
		name: "Olive Oil",
		vegetarian: true,
		glutenFree: true,
		price: 6.99,
		category: "cooking"
	},
	{
		name: "Cod Fillet",
		vegetarian: false,
		glutenFree: true,
		price: 8.99,
		category: "meat"
	},
	{
		name: "Bagels",
		vegetarian: true,
		glutenFree: false,
		price: 4.99,
		category: "grains"
	},
	{
		name: "Breaded Chicken Wings",
		vegetarian: false,
		glutenFree: false,
		price: 11.99,
		category: "frozen"
	}
];



// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = []; 
	for (let i = 0; i < prods.length; i += 1) {
		if (prods[i].vegetarian == false && restriction[0]) {
			continue;
		}
		if (prods[i].glutenFree == false && restriction[1]) {
			continue;
		}
		product_names.push(prods[i]);
	} 
	
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i = 0; i < products.length; i += 1) {
		if (chosenProducts.indexOf(products[i].name) > -1) {
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

function changeOrganic(pref) {
	var flag = document.getElementById("prefOrganic");
	if (document.getElementById("organicPrefYes").checked) {
		flag.innerHTML = "<i>Organic Items will be included if available!</i>";
	}
	else {
		flag.innerHTML = "";
	}
}

function filterItems() {
	var includes = [
		document.getElementById("fltrFruit").checked,
		document.getElementById("fltrVeg").checked,
		document.getElementById("fltrGrain").checked,
		document.getElementById("fltrMeat").checked,
		document.getElementById("fltrFrozen").checked,
		document.getElementById("fltrCooking").checked
	]
	var classes = [ "fruit", "vegetables", "grains", "meat", "frozen", "cooking" ];
	//Hide/Show for each category
	for (i = 0; i < includes.length; i++) {
		var hideList = document.getElementsByClassName(classes[i]);
		for (j = 0; j < hideList.length; j++) {
			if (!includes[i]) {
				hideList.item(j).style.display = "none";
			}
			else {
				hideList.item(j).style.display = "";
			}
		}
	}
}