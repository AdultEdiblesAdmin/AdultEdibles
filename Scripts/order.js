
//Adultediblescatalog@gmail.com

function UpdateTotal() {
	
	console.log("Fired");
	
	var totalOrderCost = 0;
	$('#CatalogTable tbody tr').each(function() { 
		var quantity = $(this).find(".Quantity").val();
		var price = parseFloat($(this).find(".Price").text().substring(1));
		
		var total = $(this).find(".TotalPrice");
		
		totalOrderCost = totalOrderCost + (price*quantity);
		total.text('$' + price*quantity);
		
		console.log(total.text());
	});
	
	$("#OrderCost").text('$' + totalOrderCost);
}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

function CheckoutOrder() {
	

	var body = `
			<ul class="nav">
			  <li><a href="index.html">Home Page</a></li>
			  <li><a href="OrderProducts.html">Order</a></li>
			  <li><a href="AllProducts.html">Products</a></li>
			  <li style="float:right"><a href="https://adultediblesadmin.github.io/AdultEdibles/">About</a></li>
			</ul>`;


	window.open("mailto:Adultediblescatalog@gmail.com?subject=Order Number: " + uuidv4() + "&body=" + encodeURIComponent(body));
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
	
	data.Products.forEach(AddProductToCatalog);

	
}

function AddProductToCatalog(product, i) {
	var tr = document.createElement("tr");
	
	//Column
	var td = document.createElement("td");
	td.classList.add("hover_img");
	td.classList.add("ProductName");
	var imageLocation = "../Images/" + product.Image;
	
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





