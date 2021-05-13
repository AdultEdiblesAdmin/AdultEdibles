

function ValidateMe() {
	
	//Please don't look at this ;') , this is a simple site for a friend, nothing vulnerable is actually stored/used on this site
	var pass = prompt("Please enter the Admin Password", "");
		
	if (pass != null && pass == "AdultEdiblesAdmin") {
		
	} else {
		alert(pass + " Not Accepted");
	}
	
	
}


