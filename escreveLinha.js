function cabecalho(){
	var tabela = document.getElementById("jogos");
	var qtdLinhas = tabela.rows.length;
	var thead = document.createElement("thead");
	//tabela.appendChild(thead);
	var linha = thead.insertRow(qtdLinhas);
	tabela.width = "100%";
	linha.width = "100%";
	//tabela.style.fontWeight = "bold";

	
	// Célula número
	var cellNumero = document.createElement("th");
	cellNumero.innerHTML = "Número";
	linha.appendChild(cellNumero);

	// Célula mandante
	var cellMandante = document.createElement("th");
	cellMandante.width = "40%";
	cellMandante.innerHTML = "Mandante";
	linha.appendChild(cellMandante);

	// Célula placar
	var cellPlacar = document.createElement("th");
	cellPlacar.width = "20%";
	cellPlacar.innerHTML = "Placar";
	linha.appendChild(cellPlacar);

	// Célula visitante
	var cellVisitante = document.createElement("th");
	cellVisitante.width = "40%";
	cellVisitante.innerHTML = "Visitante";
	linha.appendChild(cellVisitante);

	var tbody = document.createElement("tbody");
	tbody.id = "corpoDaTabela";
	//tabela.appendChild(tbody);
}

function escreveLinha(meuTime, jogo, numero){
	// setando o mandante e o visitante
	var mandante = jogo[0];
	var visitante = jogo[1];

	// Pegando a tabela
	var tabela = document.getElementById("jogos");
	tabela.width = "100%";
	
	// INTERFACE DO DETAILS

	var details = document.createElement("details");
	details.style.background = "linear-gradient(90deg, " + coresTimes(mandante, jogo)[0] + " 49%, " + coresTimes(visitante, jogo)[0] + " 52%)";
	details.style.cursor = "pointer";
	details.style.color = "white";
	details.style.border = "2px solid " + coresTimes(meuTime, jogo)[1];

	var summary = document.createElement("summary");
	summary.style.textAlign = "center";
	summary.style.fontWeight = "bold";
	summary.style.fontSize = '200%';
	summary.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";

	var pCabecalho = document.createElement("p");
	pCabecalho.style.fontWeight = "normal";
	pCabecalho.style.fontSize = '1em';
	pCabecalho.style.display = "nowrap";
	var textCabecalho = document.createTextNode(converteData(jogo[5]) + " | " + "Estádio " + jogo[6] + " | " + jogo[4]);
	pCabecalho.appendChild(textCabecalho);

	var divPlacar = document.createElement("div");
	divPlacar.className = "placar";
	divPlacar.style.display = "nowrap";
	divPlacar.style.whiteSpace = "nowrap";
	divPlacar.style.fontSize = '1em';
	var escudoMandante = document.createElement("img");
	escudoMandante.src = "index_files/" + getEscudoName(mandante, jogo) + ".png";
	escudoMandante.style.width = '3em';
	escudoMandante.style.height = '3em';
	var summaryText = document.createTextNode(" " + jogo[0].toUpperCase() + " " + jogo[2] + " X " + jogo[3] + " " + jogo[1].toUpperCase() + " ");
	var escudoVisitante = document.createElement("img");
	escudoVisitante.src = "index_files/" + getEscudoName(visitante, jogo) + ".png";
	escudoVisitante.style.width = '3em';
	escudoVisitante.style.height = '3em';

	divPlacar.appendChild(escudoMandante);
	divPlacar.appendChild(summaryText);
	divPlacar.appendChild(escudoVisitante);
	
	summary.appendChild(pCabecalho);
	summary.appendChild(divPlacar);

	// INFORMAÇÕES ADICIONAIS

	var pTecnico = document.createElement("p");
	pTecnico.id = 'pTecnico';
	var textTecnico = document.createTextNode("Técnico: " + jogo[7]);
	//pTecnico.style.fontSize = '1em';
	pTecnico.style.textAlign = "center";
	pTecnico.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	//pTecnico.style.webkitTextStrokeWidth = '1px';
	//pTecnico.style.webkitTextStrokeColor = 'black';
	pTecnico.appendChild(textTecnico);

	var divGols = document.createElement("div"); 
	divGols.style.display = "grid";
	divGols.style.gridTemplateColumns = 'auto auto';
	divGols.style.gridColumn = 1;
	divGols.style.fontSize = '1em';

	var divMandante = document.createElement("div"); 
	divMandante.className = "mandante";
	divMandante.style.gridRow = 1;
	divMandante.style.gridColumn = 0.5;
	divMandante.style.boxSizing = '200px';
	divMandante.style.color = coresTimes(jogo[0], jogo)[1];
	divMandante.style.fontWeight = 'bold';

	var listaGolsMandante = document.createElement("ul");
	var golsMandante = jogo[0] == meuTime ? jogo[8] : jogo[9];
	for(var i = 0; i < golsMandante.length; i++){
		if(golsMandante[i] != "" && golsMandante[i] != " " && golsMandante[i].indexOf("Pênaltis:")){
			var bolinhaGol = document.createElement("img");
			bolinhaGol.src = "index_files/bola.png";
			bolinhaGol.width = 15;
			bolinhaGol.height = 15;
			bolinhaGol.style.display = 'inline';
			bolinhaGol.style.paddingRight = '5px';
			listaGolsMandante.appendChild(bolinhaGol);
		}
		var autorGol = document.createElement("li");
		autorGol.style.display = 'inline';
		autorGol.appendChild(document.createTextNode(golsMandante[i]));
		autorGol.appendChild(document.createElement("br"));
		listaGolsMandante.appendChild(autorGol); 
	}

	var divVisitante = document.createElement("div"); 
	divVisitante.className = "visitante";
	divVisitante.style.gridColumn = 0.5;
	divVisitante.style.gridRow = 1;
	divVisitante.style.boxSizing = '50%';
	divVisitante.style.color = coresTimes(jogo[1], jogo)[1];
	divVisitante.style.fontWeight = 'bold';

	var listaGolsVisitante = document.createElement("ul");
	listaGolsVisitante.style.textAlign = golsMandante == "" ? 'center' : '';
	var golsVisitante = jogo[1] == meuTime ? jogo[8] : jogo[9];
	for(var i = 0; i < golsVisitante.length; i++){
		if(golsVisitante[i] != "" && golsVisitante[i] != " " && golsVisitante[i].indexOf("Pênaltis:")){
			var bolinhaGol = document.createElement("img");
			bolinhaGol.src = "index_files/bola.png";
			bolinhaGol.width = 15;
			bolinhaGol.height = 15;
			bolinhaGol.style.display = 'inline';
			bolinhaGol.style.paddingRight = '5px';
			listaGolsVisitante.appendChild(bolinhaGol);
		}
		var autorGol = document.createElement("li");
		autorGol.style.display = 'inline';
		autorGol.appendChild(document.createTextNode(golsVisitante[i]));
		autorGol.appendChild(document.createElement("br"));
		listaGolsVisitante.appendChild(autorGol); 
	}

	divMandante.append(listaGolsMandante);
	divVisitante.append(listaGolsVisitante);
	divGols.appendChild(divMandante);
	divGols.appendChild(divVisitante);
	details.appendChild(summary);
	details.appendChild(pTecnico);
	details.appendChild(divGols);
	tabela.appendChild(details);
}