
//Adultediblescatalog@gmail.com
var TotalOrderCost = 0;
var OrderedProductsList = [];

function UpdateTotal() {
	
	console.log("Fired");
	OrderedProductsList = [];
	
	TotalOrderCost = 0;
	$('#CatalogTable tbody tr').each(function() {
		var productName = $(this).find(".ProductName a").text();
		var quantity = $(this).find(".Quantity").val();
		var price = parseFloat($(this).find(".Price").text().substring(1));
		
		var total = $(this).find(".TotalPrice");
		
		if (Number(quantity) > 0) {
			var product = {};
				product.Name = productName;
				product.Quantity = quantity;
				product.Price = price*quantity;

		
				OrderedProductsList.push(product);
		}
		
		TotalOrderCost = TotalOrderCost + (price*quantity);
		total.text('$' + price*quantity);
		
		console.log(total.text());
	});
	
	$("#OrderCost").text('$' + TotalOrderCost);
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function CheckoutOrder() {
	
	if (OrderedProductsList.length > 0) {
		var x = 0;
		
		OrderedProductsList.forEach(function(product) {
			x += product.Quantity;
		});
				
		if (x < 3) {
			alert("Please selected a minimum of 3 products in your order.");
			return;
		}
		var body = "Please, tell us how you heard about us?\r\n\r\n";
		
		body += "Total Order:\r\n";
		OrderedProductsList.forEach(function(product) {
			
			body += `(${product.Quantity}) ${product.Name}: $${product.Price}\r\n`;
			
		});
		
		body += `\r\n\r\n Total Cost: $${TotalOrderCost}`;
	
		body = encodeURIComponent(body);
	
		window.open("mailto:Adultediblescatalog@gmail.com?subject=Order Number: " + uuidv4() + "&body=" + body);
	} else {
		
		alert("No products selected.");
		
	}
}


//<tr>
//	<td class="ProductTitle hover_img">Pineapple Dummies</td>
//		<a href="#">Show Image<span><img src="Images/1.JPG" alt="image" height="90vw"/></span></a>
//	</td>
//	<td class="THCContent">500mg THC</td>
//	<td class="Price">$22.00</td>
//	<td><input type="number" class="Quantity" min=0 max=20 value="0" onchange="UpdateTotal();" ></td>
//	<td class="TotalPrice">$0.00</td>
//</tr>
					
function LoadProducts() {
	
	
	var data = JSON.parse(ProductData);
	
	data.Products.sort((a, b) => (a.Price < b.Price) ? 1 : -1);
	data.Products.forEach(AddProductToCatalog);

	
}

function AddProductToCatalog(product, i) {
	var tr = document.createElement("tr");
	
	//Column
	var td = document.createElement("td");
	td.classList.add("hover_img");
	td.classList.add("ProductName");
	var imageLocation = "../Images/" + product.ImageURL;
	
	var a = document.createElement("a");
	a.setAttribute("href", imageLocation);
	var span = document.createElement("span");
	var image = document.createElement("img");
	image.setAttribute("src", imageLocation);
	image.setAttribute("alt", "image");
	image.classList.add("imageThumbnail");
	
	span.append(image);
	a.append(product.ProductName);
	a.append(span);
	td.append(a);
	tr.appendChild(td);
	
	//Column
	td = document.createElement("td");
	td.classList.add("THCContent");
	td.innerHTML = product.THCContent;
	tr.appendChild(td);
	
	//Column
	td = document.createElement("td");
	td.classList.add("Price");
	td.innerHTML = '$' + parseFloat(product.Price);
	tr.appendChild(td);
	
	//Column
	td = document.createElement("td");
	var input = document.createElement("input");
	input.classList.add("Quantity");
	input.setAttribute("type", "number");
	input.setAttribute("min", "0");
	input.setAttribute("max", "20");
	input.setAttribute("value", "0");
	input.addEventListener("change", UpdateTotal);
	td.append(input);
	tr.appendChild(td);
	
		//Column
	td = document.createElement("td");
	td.classList.add("TotalPrice");
	td.innerHTML = '$0.00';
	tr.appendChild(td);
	

	
	$('#CatalogTable tbody').append(tr);
}





