$(document).ready(function(){

	$( ".btn" ).click(function(){
		
		var tipoEstado = parseInt($("input[name='tipo']:checked").val());
		var qtdEstados = parseInt($("option:selected").val());
		var qtdEntradas = parseInt("1");
		var qtdSaidas = parseInt("1");
		
		var tp = "Mealy";
		if(tipoEstado == 1) tp = "Moore";
		
		qtdEstados++;
		
		var tabela = $("textarea[name='tabelaVerdade']").val();
		var vetorTop = tabela.replace( /\n/g, " " ).split(" ");
		for(var i = 0; i < vetorTop.length; i++){
			vetorTop[i] = parseInt(vetorTop[i], 10);
		}
		
		 localStorage.setItem("tipoMaquina",tipoEstado);
		 localStorage.setItem("qtdEst",qtdEstados);
		 localStorage.setItem("vetTop",vetorTop);
		 
		 window.open("simulacao.html");
	});

});

