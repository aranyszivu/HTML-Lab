// This function is called when any of the tab is clicked
// It is adapted from https://www.w3schools.com/howto/howto_js_tabs.asp

function openInfo(evt, tabName) {

	// Get all elements with class="tabcontent" and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = "none";
	}

	// Get all elements with class="tablinks" and remove the class "active"
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" active", "");
	}

	// Show the current tab, and add an "active" class to the button that opened the tab
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " active";
	if (document.getElementById(tabName) == "Products") {

	}
}



// generate a checkbox list from a list of products
// it makes each product name as the label for the checkbos

function populateListProductChoices(slct2) {
	var s2 = document.getElementById(slct2);

	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
	s2.innerHTML = "";

	//Initialize Empty Product Table
	var productTable = document.createElement("table");
	productTable.id = "productTable";

	var tHeader = document.createElement("tr");
	tHeader.id = "tableHeader"
	var nameHdr = document.createElement("th");
	nameHdr.innerHTML = "Product";
	var priceHdr = document.createElement("th");
	priceHdr.innerHTML = "Price";

	tHeader.appendChild(document.createElement("th", {id: "imageCell"})); //Image Header
	tHeader.appendChild(nameHdr);
	tHeader.appendChild(priceHdr);
	tHeader.appendChild(document.createElement("th")); //Selection Checkbox Header
	productTable.appendChild(tHeader);

	s2.appendChild(productTable);


	// obtain a reduced list of products based on restrictions
	var getVeg = document.getElementById("prefVeg").checked;
	var getGlut = document.getElementById("prefGlut").checked;
	var restrictions = [getVeg, getGlut]

	var optionArray = restrictListProducts(products, restrictions);
	//Order list by price
	optionArray.sort( (a,b) => (a.price >= b.price) ? 1 : -1 );

	//Generate table rows
	/*	<tr id="oddRow/evenRow">
	 *		<td><img src=".." /></td>
	 *		<td>Name</td>
	 *		<td>Price</td>
	 *		<td><input type="checkbox" name="product" value=Name /></td>
	 *	</tr>
	 */
	for (i = 0; i < optionArray.length; i++) {
		var product = optionArray[i];
		
		var newRow = document.createElement("tr");
		newRow.id = (i % 2 == 1) ? "oddRow" : "evenRow";

		var imageThumb = document.createElement("img");
		imageThumb.src = "Resources/Images/groceryLogo.png";
		imageThumb.class = "groceryThumbImg";
		var imgThumbWrapper = document.createElement("td");
		imgThumbWrapper.appendChild(imageThumb);
		imgThumbWrapper.id = "imageCell";
		newRow.appendChild(imgThumbWrapper);

		var productName = document.createElement("td");
		productName.innerText = product.name;
		newRow.appendChild(productName);

		var productPrice = document.createElement("td");
		productPrice.innerText = product.price;
		newRow.appendChild(productPrice);

		var checkBoxWrapper = document.createElement("td");
		var checkBox = document.createElement("input");
		checkBox.type = "checkbox";
		checkBox.name = "product";
		checkBox.value = product.name;
		checkBoxWrapper.appendChild(checkBox);
		newRow.appendChild(checkBoxWrapper);

		productTable.appendChild(newRow);
	}
}

// This function is called when the "Add selected items to cart" button in clicked
// The purpose is to build the HTML to be displayed (a Paragraph) 
// We build a paragraph to contain the list of selected items, and the total price

function selectedItems() {

	var ele = document.getElementsByName("product");
	var chosenProducts = [];

	var c = document.getElementById('displayCart');
	c.innerHTML = "";

	// build list of selected item
	var productTable = document.createElement("table");
	productTable.id = "productTable";
	var tHeader = document.createElement("tr");
	tHeader.id = "tableHeader"
	var nameHdr = document.createElement("th");
	nameHdr.innerHTML = "Product";
	tHeader.appendChild(nameHdr);
	productTable.appendChild(tHeader);
	c.appendChild(productTable);

	para.appendChild(document.createElement("br"));
	var j = 0;
	for (i = 0; i < ele.length; i++) {
		if (ele[i].checked) {
			j++;
			var newRow = document.createElement("tr");
			newRow.id = (j % 2 == 1) ? "oddRow" : "evenRow";
			var productName = document.createElement("td");
			productName.innerText = ele[i].value;
			newRow.appendChild(productName);
			productTable.appendChild(newRow);
		}
	}

	c.style = "padding:5px;";
	c.appendChild(document.createElement("br"))
	// add paragraph and total price
	c.appendChild(document.createTextNode("Total Price is " + getTotalPrice(chosenProducts)));

}
