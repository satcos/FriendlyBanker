function myFunction(event){
	event = event || window.event
	var target = event.target || event.srcElement;
	var id = target.id
	console.log(document.getElementById(id).value * 1000)
	
	switch (id)	{
		case "di1000":
			document.getElementById("do1000").value = document.getElementById("di1000").value * 1000
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
		default:
			void(0)
	}
	document.getElementById("dototal").value = Number(document.getElementById("do1000").value) +
		Number(document.getElementById("do500").value) +
		Number(document.getElementById("do100").value) +
		Number(document.getElementById("do50").value) +
		Number(document.getElementById("do20").value) +
		Number(document.getElementById("do10").value) +
		Number(document.getElementById("do5").value) +
		Number(document.getElementById("docoins").value)
	
	document.getElementById("docash").value = document.getElementById("dicash").value - document.getElementById("dototal").value
	
	
}