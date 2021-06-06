

function ValidateMe() {
	
	//Please don't look at this ;') , this is a simple site for a friend, nothing vulnerable is actually stored/used on this site
	var test = getCookie("AdminLoggedIn");
	if (test == "") {
	
		var pass = prompt("Please enter the Admin Password", "");
		
		if (pass != null && pass == "AdultEdiblesAdmin") {
			setCookie("AdminLoggedIn", "True", 1);
			window.open ('Admin.html','_self',false);
		} else {
			alert(pass + " Not Accepted");
		}
	} else {
		window.open ('Admin.html','_self',false);
	}
	
}


function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
}