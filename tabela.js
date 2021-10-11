window.onload = function(){
	decrescente();
};

function decrescente(){
	limpaTabela();
	cabecalho();

	var contador = jogos.length;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;

	for(var i = jogos.length - 1; i >= 0; i--){
		escreveLinha(jogos[i], i + 1);
		// Contabiliza vitória, empate ou derrota
		if(jogos[i][2] > jogos[i][3]){
			vitorias += 1;
		} else if (jogos[i][2] == jogos[i][3]){
			empates += 1;
		} else{
			derrotas += 1;
		}
	}
	estatisticas(contador, vitorias, empates, derrotas);
}

function crescente(){
	limpaTabela();
	cabecalho();

	var contador = jogos.length;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;

	for(var i = 0; i < jogos.length; i++){
		escreveLinha(jogos[i], i + 1);
		// Contabiliza vitória, empate ou derrota
		if(jogos[i][2] > jogos[i][3]){
			vitorias += 1;
		} else if (jogos[i][2] == jogos[i][3]){
			empates += 1;
		} else{
			derrotas += 1;
		}
	}
	estatisticas(contador, vitorias, empates, derrotas);
}

function mandante(){
	limpaTabela();
	cabecalho();

	var contador = 0;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;

	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][0] == true){
			contador += 1;
			escreveLinha(jogos[i], contador);
			// Contabiliza vitória, empate ou derrota
			if(jogos[i][2] > jogos[i][3]){
				vitorias += 1;
			} else if (jogos[i][2] == jogos[i][3]){
				empates += 1;
			} else{
				derrotas += 1;
			}
		}
	}
	estatisticas(contador, vitorias, empates, derrotas);
}

function visitante(){
	limpaTabela();
	cabecalho();

	var contador = 0;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;

	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][0] == false){
			contador += 1;
			escreveLinha(jogos[i], contador);
			// Contabiliza vitória, empate ou derrota
			if(jogos[i][2] > jogos[i][3]){
				vitorias += 1;
			} else if (jogos[i][2] == jogos[i][3]){
				empates += 1;
			} else{
				derrotas += 1;
			}
		}
	}
	estatisticas(contador, vitorias, empates, derrotas);
}

function adversario(){
	var adversario = document.getElementById("selectAdversario").value;
	
	if(adversario != ""){
		limpaTabela();
		cabecalho();

		var contador = 0;
		var vitorias = 0;
		var empates = 0;
		var derrotas = 0;

		for(var i = 0; i < jogos.length; i++){
			if(adversario == "Atlético-PR" || adversario == "Athletico-PR"){
				if(jogos[i][1] == "Atlético-PR" || jogos[i][1] == "Athletico-PR"){
					contador += 1;
					escreveLinha(jogos[i], contador);
					// Contabiliza vitória, empate ou derrota
					if(jogos[i][2] > jogos[i][3]){
						vitorias += 1;
					} else if (jogos[i][2] == jogos[i][3]){
						empates += 1;
					} else{
						derrotas += 1;
					}
				}
			}
			else if(adversario == jogos[i][1]){
				contador += 1;
				escreveLinha(jogos[i], contador);
				// Contabiliza vitória, empate ou derrota
				if(jogos[i][2] > jogos[i][3]){
					vitorias += 1;
				} else if (jogos[i][2] == jogos[i][3]){
					empates += 1;
				} else{
					derrotas += 1;
				}
			}
		}
		estatisticas(contador, vitorias, empates, derrotas);
	}
}

function campeonato(){
	var campeonato = document.getElementById("selectCampeonato").value;

	if(campeonato != ""){
		limpaTabela();
		cabecalho();

		var contador = 0;
		var vitorias = 0;
		var empates = 0;
		var derrotas = 0;

		for(var i = 0; i < jogos.length; i++){
			if(campeonato == jogos[i][4]){
				contador += 1;
				escreveLinha(jogos[i], contador);
				// Contabiliza vitória, empate ou derrota
				if(jogos[i][2] > jogos[i][3]){
					vitorias += 1;
				} else if (jogos[i][2] == jogos[i][3]){
					empates += 1;
				} else{
					derrotas += 1;
				}
			}
		}
		estatisticas(contador, vitorias, empates, derrotas);
	}
}

function estadio(){
	var estadio = document.getElementById("selectEstadio").value;

	if(estadio != ""){
		limpaTabela();
		cabecalho();

		var contador = 0;
		var vitorias = 0;
		var empates = 0;
		var derrotas = 0;

		for(var i = 0; i < jogos.length; i++){
			if(estadio == jogos[i][6]){
				contador += 1;
				escreveLinha(jogos[i], contador);
				// Contabiliza vitória, empate ou derrota
				if(jogos[i][2] > jogos[i][3]){
					vitorias += 1;
				} else if (jogos[i][2] == jogos[i][3]){
					empates += 1;
				} else{
					derrotas += 1;
				}
			}
		}
		estatisticas(contador, vitorias, empates, derrotas);
	}
}

function tecnico(){
	var tecnico = document.getElementById("selectTecnico").value;

	if(tecnico != ""){
		limpaTabela();
		cabecalho();

		var contador = 0;
		var vitorias = 0;
		var empates = 0;
		var derrotas = 0;

		for(var i = 0; i < jogos.length; i++){
			if(tecnico == jogos[i][7]){
				contador += 1;
				escreveLinha(jogos[i], contador);
				// Contabiliza vitória, empate ou derrota
				if(jogos[i][2] > jogos[i][3]){
					vitorias += 1;
				} else if (jogos[i][2] == jogos[i][3]){
					empates += 1;
				} else{
					derrotas += 1;
				}
			}
		}
		estatisticas(contador, vitorias, empates, derrotas);
	}
}

function escolheData(){
	limpaTabela();
	cabecalho();

	var data = document.getElementById("dataJogo").value;
	var contador = 0;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;
	var achou = false;

	for(var i = 0; i < jogos.length; i++){
		if(data == jogos[i][5]){
			achou = true;
			contador += 1;
			escreveLinha(jogos[i], contador);
			// Contabiliza vitória, empate ou derrota
			if(jogos[i][2] > jogos[i][3]){
				vitorias += 1;
			} else if (jogos[i][2] == jogos[i][3]){
				empates += 1;
			} else{
				derrotas += 1;
			}
		}
	}
	//se não achou nenhum jogo
	if(achou == false){
		fail();
	} else{
		if(vitorias > 0){
			getVitorias(contador);
		} else if (empates > 0){
			getEmpates(contador);
		} else {
			getDerrotas(contador);
		}
	}
}

function ano(){
	limpaTabela();
	cabecalho();

	var ano = document.getElementById("anoJogo").value;
	var contador = 0;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;

	for(var i = 0; i < jogos.length; i++){
		var dataCortada = jogos[i][5].split("-")

		if(dataCortada[0] == ano.toString()){
			contador += 1;
			escreveLinha(jogos[i], contador);
			// Contabiliza vitória, empate ou derrota
			if(jogos[i][2] > jogos[i][3]){
				vitorias += 1;
			} else if (jogos[i][2] == jogos[i][3]){
				empates += 1;
			} else{
				derrotas += 1;
			}
		}
	}
	estatisticas(contador, vitorias, empates, derrotas);
}

function vitorias(){
	limpaTabela();
	cabecalho();

	var contador = 0;
	
	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] > jogos[i][3]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
	getVitorias(contador);
}

function empates(){
	limpaTabela();
	cabecalho();

	var contador = 0;
	
	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] == jogos[i][3]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
	getEmpates(contador);
}

function derrotas(){
	limpaTabela();
	cabecalho();

	var contador = 0;

	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] < jogos[i][3]){
			contador += 1;
			escreveLinha(jogos[i], contador);
		}
	}
	getDerrotas(contador);
}

function converteData(data){
	var array = data.split("-");
	var novaData = array[2] + "/" + array[1] + "/" + array[0];

	return novaData;
}

function getEscudoName(time, jogo){
	var dataCortada = jogo[5].split("-");
	var ano = parseInt(dataCortada[0]);

	if(time == "Goiás" && ano >= 2019){
		return "Goiás2019";
	} else if (time == "Flamengo" && ano >= 2018){
		return "Flamengo2018";
	}

	var cortaNome = time.split(" ");
	var juntaNome = "";

	for(var i = 0; i < cortaNome.length; i++){
		juntaNome += cortaNome[i];
	}
	return juntaNome;
}

function getFuncaoSelect(valor){

	if(valor == "decrescente"){
		decrescente();
	}
	else if(valor == "crescente"){
		crescente();
	}
	else if(valor == "mandante"){
		mandante();
	}
	else if(valor == "visitante"){
		visitante();
	}
	else if(valor == "vitorias"){
		vitorias();
	}
	else if(valor == "empates"){
		empates();
	}
	else if(valor == "derrotas"){
		derrotas();
	}
}

// Limpa a tabela e reescreve o cabeçalho
function limpaTabela(){
	$("tr").remove(); 
	$("#fail").remove();
	$("#pEstatisticas").remove();
}

function estatisticas(numero, vitorias, empates, derrotas){
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement("p");
	titulo.id = "pEstatisticas";
	var texto  = document.createTextNode(numero + " jogos: " + vitorias + " vitórias/ " + empates + " empates/ " + derrotas + " derrotas");

	div.appendChild(titulo);
	titulo.append(texto);
}

function getVitorias(numero){
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement("p");
	titulo.id = "pEstatisticas";
	if(numero > 1){
		var texto  = document.createTextNode(numero + " vitórias");
	} else {
		var texto  = document.createTextNode("1 vitória");
	}

	div.appendChild(titulo);
	titulo.append(texto);
}

function getEmpates(numero){
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement("p");
	titulo.id = "pEstatisticas";
	if(numero > 1){
		var texto  = document.createTextNode(numero + " empates");
	} else {
		var texto  = document.createTextNode("1 empate");
	}

	div.appendChild(titulo);
	titulo.append(texto);
}

function getDerrotas(numero){
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement("p");
	titulo.id = "pEstatisticas";
	if(numero > 1){
		var texto  = document.createTextNode(numero + " derrotas");
	} else {
		var texto  = document.createTextNode("1 derrota");
	}

	div.appendChild(titulo);
	titulo.append(texto);
}

function fail(){
	limpaTabela();
	var corpo = document.body;
	var titulo = document.createElement("p");
	titulo.id = "fail";
	var texto  = document.createTextNode("Nenhum jogo encontrado");

	titulo.appendChild(texto);
	corpo.append(titulo);
}

