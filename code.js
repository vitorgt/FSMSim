 $(document).ready(function(){

	$( ".btn" ).click(function() {
		
		var tipoEstado = parseInt($("input[name='tipo']:checked").val());
		var qtdEstados = parseInt($("option:selected").val());
		var qtdEntradas = parseInt("1");
		var qtdSaidas = parseInt("1");
		
		var tp = "Mealy";
		if(tipoEstado == 1) tp = "Moore";
		
		qtdEstados++;
		
		var tabela = $("textarea[name='tabelaVerdade']").val();
		var vetorTop = tabela.replace( /\n/g, " " ).split(" ");
		
		/*
		
		alert(tabela + " " + vetorTop.length);
		var i;
		for(i=0;i<vetorTop.length;i++){
				if(i%4 == 0) {
					alert("COM");
				}
				alert(vetorTop[i]);
		}
		* 
		*/
		
		 localStorage.setItem("tipoMaquina",tipoEstado);
		 localStorage.setItem("qtdEst",qtdEstados);
		 localStorage.setItem("vetTop",vetorTop);
		 
		 window.open("teste.html");
	});

});

