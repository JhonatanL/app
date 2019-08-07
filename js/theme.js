var cuerpo = document.getElementById('body');
storagetheme = localStorage.getItem("storagetheme");

if(storagetheme == 'oscuro'){
	cuerpo.classList.add("dark");
}

function myTheme() {
	cuerpo.classList.toggle("dark");
	revisartema();
}

function revisartema(){
	storagetheme = localStorage.getItem("storagetheme");
	if(storagetheme == 'oscuro'){
		localStorage.setItem("storagetheme", "claro");
		return false;
	}
	if(storagetheme == 'claro'){
		localStorage.setItem("storagetheme", "oscuro");
	}
	if(storagetheme == null){
		localStorage.setItem("storagetheme", "oscuro");
	}
}