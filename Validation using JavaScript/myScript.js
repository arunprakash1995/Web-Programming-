function pageLoad() {
		document.getElementById("val").onclick = myFunction;
}
function myFunction(){
		var x, text;
		x = document.getElementById("Uname").value;
		var y;
		y = document.getElementById("password").value;
		var z;
		z = document.getElementById("phone").value;
		if (x == "" || y == "" || z == ""){
			text = "You should enter values for all input fields" ;
			document.getElementById("msg").style.color = "red";
		} else {
			text = "Success";
			document.getElementById("msg").style.color = "green";
		} 
		document.getElementById("msg").innerHTML = text;
}

window.onload = pageLoad;