
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
		
		$(dom.getElementsByTagName("div")[0]).find("#ImageLocation").attr("src",imageLocation);
		$(dom.getElementsByTagName("div")[0]).find("#ProductName").text(product.ProductName);

		
		var productItemView = $(dom.getElementsByTagName("div")[0]);

		
		$('.AllProductsList').append(productItemView);


    });
	
}





