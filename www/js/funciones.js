var clave;
$( document ).ready(function() {
	cargarDatos();
	$('#insertar').submit(function() {
		if (typeof(Storage) != "undefined") {
		    // Almacenamiento
			var objeto = $("#name").val()+"::"+$("#province").val()+"::"+$("#town").val()+"::"+$("#address").val()+"::"+$("#aforo").val()+"::"+$("#parking").val()+"::"+$("#email").val()+
			"::"+$("#number").val();
			
			if(localStorage.length > 0){
		    	var valor = parseInt(parseInt(localStorage.key(localStorage.length - 1)) + 1);
		    }else{
		    	var valor = 1;
		    }
			
			clave = valor;
		    localStorage.setItem(clave, objeto);
		    // Muestra	
		    cargarDatos();
		    location.reload();
		    $.mobile.changePage("#locales");
		} else {
		    $("#result").html("Tu navegador no soporta almacenamiento de datos");
		}
	});
});


function cargarDatos() {
	$("#lista").html(" ");
	for(var i=0; i < localStorage.length; i++) {
	    clave = localStorage.key(i);
	    ciudad = localStorage.getItem(clave).split("::")[2];
	    provincia = localStorage.getItem(clave).split("::")[1];
	    direccion = localStorage.getItem(clave).split("::")[3];
	    $("#lista").append("<li id='"+clave+"' class='ui-corner-all ui-shadow'><h2>"+localStorage.getItem(clave).split("::")[0]+"</h2><br>"+
        ciudad+" ("+provincia+")"+"<br>Caben "+localStorage.getItem(clave).split("::")[4]+" personas<br>"+
        "Parking disponible: "+localStorage.getItem(clave).split("::")[5]+"<br>Contacto: "+localStorage.getItem(clave).split("::")[6]+"<br>"+
        "<input type='button' id='botonMapa' data-icon='location' onclick='verMapa("+clave+")' class='ui-corner-all ui-shadow' data-mini='true' value='Ver Mapa'>"+
        "<input type='button' id='botonBorrar' data-icon='delete' onclick='borrar("+clave+")' class='ui-corner-all ui-shadow' data-mini='true'  value='Eliminar'>"+
        "</li>");
	}
}

function borrar(clave){
	$("#"+clave).remove();
	localStorage.removeItem(clave);
}

