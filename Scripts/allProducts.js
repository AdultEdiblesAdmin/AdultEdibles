
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
	data.Products.forEach(AddProductToList);

	
}

function AddProductToList(product, i) {
	
	var parser = new DOMParser();

	fetch("https://adultediblesadmin.github.io/AdultEdibles/Controls/ProductItemView.html")
      .then(response => {
        return response.text();
    })
      .then(data => {
		
		var dom = parser.parseFromString(data, 'text/html');
		var imageLocation = "../Images/" + product.Image;
		var price = "$" + parseFloat(product.Price).toFixed(2);
		$(dom.getElementsByTagName("div")[0]).find("#ImageLocation").attr("src",imageLocation);
		$(dom.getElementsByTagName("div")[0]).find("#ProductName").text(product.ProductName);
		$(dom.getElementsByTagName("div")[0]).find("#Description").text(product.Description);
		$(dom.getElementsByTagName("div")[0]).find("#Price").html("<strong>Price: </strong>" + price);
		$(dom.getElementsByTagName("div")[0]).find("#THCContent").html("<strong>THC Content: </strong>" + product.THCContent);
		$(dom.getElementsByTagName("div")[0]).find("#Category").html("<strong>Category: </strong>" + product.Category);
		$(dom.getElementsByTagName("div")[0]).find("#Tags").html("<strong>Tags: </strong>" + product.Tags);

		
		var productItemView = $(dom.getElementsByTagName("div")[0]);

		
		$('.AllProductsList').append(productItemView);


    });
	
}





