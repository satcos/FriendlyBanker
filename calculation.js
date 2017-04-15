function myFunction(event){
	event = event || window.event
	var target = event.target || event.srcElement;
	var id = target.id
	
	switch (id)	{
		case "di2000":
			document.getElementById("do2000").value = document.getElementById("di2000").value * 2000
		break;
		case "di500":
			document.getElementById("do500").value = document.getElementById("di500").value * 500
		break;
		case "di100":
			document.getElementById("do100").value = document.getElementById("di100").value * 100
		break;
		case "di50":
			document.getElementById("do50").value = document.getElementById("di50").value * 50
		break;
		case "di20":
			document.getElementById("do20").value = document.getElementById("di20").value * 20
		break;
		case "di10":
			document.getElementById("do10").value = document.getElementById("di10").value * 10
		break;
		case "di5":
			document.getElementById("do5").value = document.getElementById("di5").value * 5
		break;
		case "dicoins":
			document.getElementById("docoins").value = document.getElementById("dicoins").value
		break;
		case "disoiled":
			document.getElementById("dosoiled").value = document.getElementById("disoiled").value
		break;
		default:
			void(0)
	}
	document.getElementById("dototal").value = Number(document.getElementById("do2000").value) +
		Number(document.getElementById("do500").value) +
		Number(document.getElementById("do100").value) +
		Number(document.getElementById("do50").value) +
		Number(document.getElementById("do20").value) +
		Number(document.getElementById("do10").value) +
		Number(document.getElementById("do5").value) +
		Number(document.getElementById("docoins").value) +
		Number(document.getElementById("dosoiled").value)
	
	document.getElementById("docash").value = document.getElementById("dicash").value - document.getElementById("dototal").value
}

function arrivalCalc(event){
	event = event || window.event
	var target = event.target || event.srcElement;
	var id = target.id
	
	switch (id)	{
		case "ai2000":
		case "ao2000":
			document.getElementById("ab2000").value = document.getElementById("ai2000").value - document.getElementById("ao2000").value
		break;
		case "ai500":
		case "ao500":
			document.getElementById("ab500").value = document.getElementById("ai500").value - document.getElementById("ao500").value
		break;
		case "ai100":
		case "ao100":
			document.getElementById("ab100").value = document.getElementById("ai100").value - document.getElementById("ao100").value
		break;
		case "ai50":
		case "ao50":
			document.getElementById("ab50").value = document.getElementById("ai50").value - document.getElementById("ao50").value
		break;
		case "ai20":
		case "ao20":
			document.getElementById("ab20").value = document.getElementById("ai20").value - document.getElementById("ao20").value
		break;
		case "ai10":
		case "ao10":
			document.getElementById("ab10").value = document.getElementById("ai10").value - document.getElementById("ao10").value
		break;
		case "ai5":
		case "ao5":
			document.getElementById("ab5").value = document.getElementById("ai5").value - document.getElementById("ao5").value
		break;
		case "aicoins":
		case "aocoins":
			document.getElementById("abcoins").value = document.getElementById("aicoins").value - document.getElementById("aocoins").value
		break;
		case "aisoiled":
		case "aosoiled":
			document.getElementById("absoiled").value = document.getElementById("aisoiled").value - document.getElementById("aosoiled").value
		break;
		default:
			void(0)
	}
	document.getElementById("aitotal").value = Number(document.getElementById("ai2000").value) * 2000 +
		Number(document.getElementById("ai500").value) * 500 +
		Number(document.getElementById("ai100").value) * 100 +
		Number(document.getElementById("ai50").value) * 50 +
		Number(document.getElementById("ai20").value) * 20 +
		Number(document.getElementById("ai10").value) * 10+
		Number(document.getElementById("ai5").value) * 5 +
		Number(document.getElementById("aicoins").value) +
		Number(document.getElementById("aisoiled").value)
		
	document.getElementById("aototal").value = Number(document.getElementById("ao2000").value) * 2000 +
		Number(document.getElementById("ao500").value) * 500 +
		Number(document.getElementById("ao100").value) * 100 +
		Number(document.getElementById("ao50").value) * 50 +
		Number(document.getElementById("ao20").value) * 20 +
		Number(document.getElementById("ao10").value) * 10 +
		Number(document.getElementById("ao5").value) * 5 +
		Number(document.getElementById("aocoins").value) +
		Number(document.getElementById("aosoiled").value)
		
	document.getElementById("abtotal").value = document.getElementById("aitotal").value - document.getElementById("aototal").value
}
function saveSafe()	{
	console.log("save files")
	createCookie("ai2000", document.getElementById("ai2000").value)
	createCookie("ai500", document.getElementById("ai500").value)
	createCookie("ai100", document.getElementById("ai100").value)
	createCookie("ai50", document.getElementById("ai50").value)
	createCookie("ai20", document.getElementById("ai20").value)
	createCookie("ai10", document.getElementById("ai10").value)
	createCookie("ai5", document.getElementById("ai5").value)
	createCookie("aicoins", document.getElementById("aicoins").value)
	createCookie("aisoiled", document.getElementById("aisoiled").value)
}

function createCookie(name, value) {
	// var date = new Date();
	// date.setTime(date.getTime()+(days*24*60*60*1000));
	// var expires = "; expires="+date.toGMTString();
	// else 
	var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}