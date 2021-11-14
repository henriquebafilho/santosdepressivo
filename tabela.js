window.onload = function(){
	time = "Santos";
	var nomeUsuario = "Guilherme Giannini";
	nomeUsuario = nomeUsuario.toUpperCase();

	// Title da página
	document.title = "Jogos do " + time + " que fui";

	// Ícone da página
	var linkIcon = document.createElement("link"); 
	linkIcon.rel = "shortcut icon";
	linkIcon.href = "index_files/" + time.replace(/ /g,'') + ".png";
	linkIcon.type = "image/x-icon";
	document.head.appendChild(linkIcon);

	// Cabeçalho com nome
	var h1Cabecalho = document.createElement("h1"); 
	h1Cabecalho.style.whiteSpace = "nowrap";
	h1Cabecalho.style.width = "100%";
	h1Cabecalho.style.color = coresTimes(time)[1];
	var escudoTime1 = document.createElement("img");
	escudoTime1.src = "index_files/" + time.replace(/ /g,'') + ".png";
	escudoTime1.width = 60;
	escudoTime1.height = 60;
	escudoTime1.alt = "Escudo do Time";
	var nomeUsuarioP = document.createTextNode(" " + nomeUsuario + " ");
	var escudoTime2 = document.createElement("img");
	escudoTime2.src = "index_files/" + time.replace(/ /g,'') + ".png";
	escudoTime2.width = 60;
	escudoTime2.height = 60;
	escudoTime2.alt = "Escudo do Time";
	h1Cabecalho.appendChild(escudoTime1);
	h1Cabecalho.appendChild(nomeUsuarioP);
	h1Cabecalho.appendChild(escudoTime2);
	document.getElementById("idTitulo").appendChild(h1Cabecalho);

	// Trocando cores do fundo e das letras
	document.body.style.backgroundColor = coresTimes(time)[0];
	document.body.style.color = coresTimes(time)[1];
	document.getElementById("jogos").style.backgroundColor = coresTimes(time)[0];
	
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
		escreveLinha(time, jogos[i], i + 1);
		// Contabiliza vitória, empate ou derrota
		if(jogos[i][2] == jogos[i][3]){
			empates += 1;
		} else if (jogos[i][0] == time){
			if(jogos[i][2] > jogos[i][3]){
				vitorias += 1;
			} else {
				derrotas += 1;
			}
		} else if (jogos[i][0] != time){
			if(jogos[i][2] > jogos[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
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
		escreveLinha(time, jogos[i], i + 1);
		// Contabiliza vitória, empate ou derrota
		if(jogos[i][2] == jogos[i][3]){
			empates += 1;
		} else if (jogos[i][0] == time){
			if(jogos[i][2] > jogos[i][3]){
				vitorias += 1;
			} else {
				derrotas += 1;
			}
		} else if (jogos[i][0] != time){
			if(jogos[i][2] > jogos[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
		}
	}
	estatisticas(contador, vitorias, empates, derrotas);
}

function mandante(){
	limpaTabela();
	cabecalho();

	var contador = jogos.length;
	var quantidade = 0;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;
	var selecionados = [];

	for(var i = 0; i < contador; i++){
		if(jogos[i][0] == time){
			quantidade += 1;
			selecionados.push(jogos[i]);
		}
	}

	for(var i = quantidade - 1; i >= 0; i--){
		escreveLinha(time, selecionados[i], i + 1);
			// Contabiliza vitória, empate ou derrota
			if(selecionados[i][2] == selecionados[i][3]){
				empates += 1;
			} else if (selecionados[i][0] == time){
				if(selecionados[i][2] > selecionados[i][3]){
					vitorias += 1;
				} else {
					derrotas += 1;
			}
		} else if (selecionados[i][0] != time){
			if(selecionados[i][2] > selecionados[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
		}
	}
	estatisticas(quantidade, vitorias, empates, derrotas);
}

function visitante(){
	limpaTabela();
	cabecalho();

	var contador = jogos.length;
	var quantidade = 0;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;
	var selecionados = [];

	for(var i = 0; i < contador; i++){
		if(jogos[i][0] != time){
			quantidade += 1;
			selecionados.push(jogos[i]);
		}
	}

	for(var i = quantidade - 1; i >= 0; i--){
		escreveLinha(time, selecionados[i], i + 1);
			// Contabiliza vitória, empate ou derrota
			if(selecionados[i][2] == selecionados[i][3]){
				empates += 1;
		} else if (selecionados[i][0] == time){
			if(selecionados[i][2] > selecionados[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
		} else if (selecionados[i][0] != time){
			if(selecionados[i][2] > selecionados[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
		}
	}
	estatisticas(quantidade, vitorias, empates, derrotas);
}

function adversario(){
	var adversario = document.getElementById("selectAdversario").value;
	
	if(adversario != ""){
		limpaTabela();
		cabecalho();

		var contador = jogos.length;
		var quantidade = 0;
		var vitorias = 0;
		var empates = 0;
		var derrotas = 0;
		var selecionados = [];

		for(var i = 0; i < contador; i++){
			if(adversario == "Atlético-PR" || adversario == "Athletico-PR"){
				if(jogos[i][1] == "Atlético-PR" || jogos[i][1] == "Athletico-PR"){
					quantidade += 1;
					selecionados.push(jogos[i]);
				}
			}else if(adversario == jogos[i][0] || adversario == jogos[i][1]){
				quantidade += 1;
				selecionados.push(jogos[i]);
			}
		}

		for(var i = quantidade - 1; i >= 0; i--){
			escreveLinha(time, selecionados[i], i + 1);
			// Contabiliza vitória, empate ou derrota
			if(selecionados[i][2] == selecionados[i][3]){
				empates += 1;
			} else if (selecionados[i][0] == time){
				if(selecionados[i][2] > selecionados[i][3]){
					vitorias += 1;
				} else {
					derrotas += 1;
				}
			} else if (selecionados[i][0] != time){
				if(selecionados[i][2] > selecionados[i][3]){
					derrotas += 1;
				} else {
					vitorias += 1;
				}
			}
		}
		estatisticas(quantidade, vitorias, empates, derrotas);
	}
}

function campeonato(){
	var campeonato = document.getElementById("selectCampeonato").value;

	if(campeonato != ""){
		limpaTabela();
		cabecalho();

		var contador = jogos.length;
		var quantidade = 0;
		var vitorias = 0;
		var empates = 0;
		var derrotas = 0;
		var selecionados = [];

		for(var i = 0; i < contador; i++){
			if(campeonato == jogos[i][4]){
				quantidade += 1;
				selecionados.push(jogos[i]);
			}
		}
		for(var i = quantidade - 1; i >= 0; i--){
			escreveLinha(time, selecionados[i], i + 1);
			// Contabiliza vitória, empate ou derrota
			if(selecionados[i][2] == selecionados[i][3]){
				empates += 1;
			} else if (selecionados[i][0] == time){
				if(selecionados[i][2] > selecionados[i][3]){
					vitorias += 1;
				} else {
					derrotas += 1;
				}
			} else if (selecionados[i][0] != time){
				if(selecionados[i][2] > selecionados[i][3]){
					derrotas += 1;
				} else {
					vitorias += 1;
				}
			}	
		}
		estatisticas(quantidade, vitorias, empates, derrotas);
	}
}


function estadio(){
	var estadio = document.getElementById("selectEstadio").value;

	if(estadio != ""){
		limpaTabela();
		cabecalho();

		var contador = jogos.length;
		var quantidade = 0;
		var vitorias = 0;
		var empates = 0;
		var derrotas = 0;
		var selecionados = [];

		for(var i = 0; i < jogos.length; i++){
			if(estadio == jogos[i][6]){
				quantidade += 1;
				selecionados.push(jogos[i]);
			}
		}

		for(var i = quantidade - 1; i >= 0; i--){
			escreveLinha(time, selecionados[i], i + 1);
			// Contabiliza vitória, empate ou derrota
			if(selecionados[i][2] == selecionados[i][3]){
				empates += 1;
			} else if (selecionados[i][0] == time){
				if(selecionados[i][2] > selecionados[i][3]){
					vitorias += 1;
				} else {
					derrotas += 1;
				}
			} else if (selecionados[i][0] != time){
				if(selecionados[i][2] > selecionados[i][3]){
					derrotas += 1;
				} else {
					vitorias += 1;
				}
			}
		}
		estatisticas(quantidade, vitorias, empates, derrotas);
	}
}

function tecnico(){
	var tecnico = document.getElementById("selectTecnico").value;

	if(tecnico != ""){
		limpaTabela();
		cabecalho();

		var contador = jogos.length;
		var quantidade = 0;
		var vitorias = 0;
		var empates = 0;
		var derrotas = 0;
		var selecionados = [];

		for(var i = 0; i < jogos.length; i++){
			if(tecnico == jogos[i][7]){
				quantidade += 1;
				selecionados.push(jogos[i]);
			}
		}
		for(var i = quantidade - 1; i >= 0; i--){
			escreveLinha(time, selecionados[i], i + 1);
			// Contabiliza vitória, empate ou derrota
			if(selecionados[i][2] == selecionados[i][3]){
				empates += 1;
			} else if (selecionados[i][0] == time){
				if(selecionados[i][2] > selecionados[i][3]){
					vitorias += 1;
				} else {
					derrotas += 1;
				}
			} else if (selecionados[i][0] != time){
				if(selecionados[i][2] > selecionados[i][3]){
					derrotas += 1;
				} else {
					vitorias += 1;
				}
			}
		}
		estatisticas(quantidade, vitorias, empates, derrotas);	
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
			escreveLinha(time, jogos[i], contador);
			// Contabiliza vitória, empate ou derrota
			if(jogos[i][2] == jogos[i][3]){
				empates += 1;
			} else if (jogos[i][0] == time){
				if(jogos[i][2] > jogos[i][3]){
					vitorias += 1;
				} else {
					derrotas += 1;
				}
			} else if (jogos[i][0] != time){
				if(jogos[i][2] > jogos[i][3]){
					derrotas += 1;
				} else {
					vitorias += 1;
				}
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
	var quantidade = 0;
	var vitorias = 0;
	var empates = 0;
	var derrotas = 0;
	var selecionados = [];

	for(var i = 0; i < jogos.length; i++){
		var dataCortada = jogos[i][5].split("-");

		if(dataCortada[0] == ano.toString()){
			quantidade += 1;
			selecionados.push(jogos[i]);
		}
	}
	for(var i = quantidade - 1; i >= 0; i--){
		escreveLinha(time, selecionados[i], i + 1);
		// Contabiliza vitória, empate ou derrota
		if(selecionados[i][2] == selecionados[i][3]){
			empates += 1;
		} else if (selecionados[i][0] == time){
			if(selecionados[i][2] > selecionados[i][3]){
				vitorias += 1;
			} else {
				derrotas += 1;
			}
		} else if (selecionados[i][0] != time){
			if(selecionados[i][2] > selecionados[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
		}
	}
	estatisticas(quantidade, vitorias, empates, derrotas);	
}

function vitorias(){
	limpaTabela();
	cabecalho();
	var quantidade = 0;
	var selecionados = [];

	for(var i = 0; i < jogos.length; i++){
		if(((jogos[i][0] == time) && (jogos[i][2] > jogos[i][3])) || 
			((jogos[i][1] == time) && (jogos[i][2] < jogos[i][3]))){
			quantidade += 1;
		selecionados.push(jogos[i]);
		}
	}
	for(var i = quantidade - 1; i >= 0; i--){
		escreveLinha(time, selecionados[i], i + 1);
		// Contabiliza vitória, empate ou derrota
		if(selecionados[i][2] == selecionados[i][3]){
			empates += 1;
		} else if (selecionados[i][0] == time){
			if(selecionados[i][2] > selecionados[i][3]){
				vitorias += 1;
			} else {
				derrotas += 1;
			}
		} else if (selecionados[i][0] != time){
			if(selecionados[i][2] > selecionados[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
		}
	}
	getVitorias(quantidade);
}

function empates(){
	limpaTabela();
	cabecalho();

	var quantidade = 0;
	var selecionados = [];

	for(var i = 0; i < jogos.length; i++){
		if(jogos[i][2] == jogos[i][3]){
			quantidade += 1;
			selecionados.push(jogos[i]);
		}
	}

	for(var i = quantidade - 1; i >= 0; i--){
		escreveLinha(time, selecionados[i], i + 1);
		// Contabiliza vitória, empate ou derrota
		if(selecionados[i][2] == selecionados[i][3]){
			empates += 1;
		} else if (selecionados[i][0] == time){
			if(selecionados[i][2] > selecionados[i][3]){
				vitorias += 1;
			} else {
				derrotas += 1;
			}
		} else if (selecionados[i][0] != time){
			if(selecionados[i][2] > selecionados[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
		}
	}
	getEmpates(quantidade);
}

function derrotas(){
	limpaTabela();
	cabecalho();

	var quantidade = 0;
	var selecionados = [];

	for(var i = 0; i < jogos.length; i++){
		if(((jogos[i][0] == time) && (jogos[i][2] < jogos[i][3])) || 
			((jogos[i][1] == time) && (jogos[i][2] > jogos[i][3]))){
			quantidade += 1;
			selecionados.push(jogos[i]);
		}
	}

	for(var i = quantidade - 1; i >= 0; i--){
		escreveLinha(time, selecionados[i], i + 1);
		// Contabiliza vitória, empate ou derrota
		if(selecionados[i][2] == selecionados[i][3]){
			empates += 1;
		} else if (selecionados[i][0] == time){
			if(selecionados[i][2] > selecionados[i][3]){
				vitorias += 1;
			} else {
				derrotas += 1;
			}
		} else if (selecionados[i][0] != time){
			if(selecionados[i][2] > selecionados[i][3]){
				derrotas += 1;
			} else {
				vitorias += 1;
			}
		}
	}
	getDerrotas(quantidade);
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
	$("details").remove(); 
	$("#fail").remove();
	$("#pEstatisticas").remove();
}

function estatisticas(numero, vitorias, empates, derrotas){
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement('p');
	titulo.id = "pEstatisticas";
	var texto  = document.createTextNode(numero + " jogos: " + vitorias + " vitórias/ " + empates + " empates/ " + derrotas + " derrotas");

	div.appendChild(titulo);
	titulo.append(texto);
}

function getVitorias(numero){
	var div = document.getElementById("estatisticas");
	var titulo = document.createElement('p');
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
	var titulo = document.createElement('p');
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
	var titulo = document.createElement('p');
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
	var titulo = document.createElement('p');
	titulo.id = "fail";
	var texto  = document.createTextNode("Nenhum jogo encontrado");

	titulo.appendChild(texto);
	corpo.append(titulo);
}
