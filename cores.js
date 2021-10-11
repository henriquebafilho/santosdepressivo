function coresTimes(time, jogo){
	var dataCortada = jogo[5].split("-");
	var ano = parseInt(dataCortada[0]);

	switch (time) {
		case "Água Santa":
		return ["#153160", "white"];
		break;
		case "América-MG":
		return ["#048439", "white"];
		break;
		case "América-RN":
		return ["red", "white"];
		break;
		case "Athletico-PR":
		return ["#c8060f", "black"];
		break;
		case "Atlético-GO":
		return ["#ff0e00", "black"];
		break
		case "Atlético-MG":
		return ["black", "white"];
		break;
		case "Atlético-PR":
		return ["#ff0e00", "black"];
		break;
		case "Audax-SP":
		return ["red", "white"];
		break;
		case "Avaí":
		return ["#00679a", "white"];
		break;
		case "Bahia":
		return ["#0188d6", "white"];
		break;
		case "Benfica-POR":
		return ["red", "white"];
		break;
		case "Boca Juniors-ARG":
		return ["#00458a", "#fcb000"];
		break;
		case "Botafogo":
		return ["black", "white"];
		break;
		case "Botafogo-SP":
		return ["red", "white"];
		break;
		case "Ceará":
		return ["black", "white"];
		break;
		case "Cerro Porteño-PAR":
		return ["#c40215", "white"];
		break;
		case "Chapecoense":
		return ["#00913c", "white"];
		break;
		case "Corinthians":
		return ["black", "white"];
		break;
		case "Coritiba":
		return ["#00544d", "white"];
		break;
		case "Cruzeiro":
		return ["#003a94", "white"];
		break;
		case "CSA":
		return ["#075798", "white"];
		break;
		case "Defensa y Justicia-ARG":
		return ["#fde900", "#018036"];
		break;
		case "Deportivo Tachira-VEN":
		return ["#f2d902", "black"];
		break;
		case "Estudiantes-ARG":
		return ["red", "white"];
		break;
		case "Ferroviária":
		return ["#511a1d", "white"];
		break;
		case "Figueirense":
		return ["black", "white"];
		break;
		case "Flamengo":
		return ["#ff0e00", "black"];
		break;
		case "Floresta-CE":
		return ["#87c53f", "#036c3c"];
		break;
		case "Fluminense":
		return ["#9f022f", "white"];
		break;
		case "Fortaleza":
		return ["#11519b", "white"];
		break;
		case "Goiás":
		if(ano < 2019){
			return ["#048439", "white"];
			break;
		} else if (ano >= 2019){
			return ["#006959", "white"];
			break;
		}
		case "Grêmio":
		return ["#0d80bf", "white"];;
		break;
		case "Grêmio Barueri":
		return ["#f6e815", "#003c6e"];
		break;
		case "Guarani":
		return ["#048439", "white"];
		break;
		case "Independiente-ARG":
		return ["red", "white"];
		break;
		case "Independiente Santa Fé-COL":
		return ["red", "white"];
		break;
		case "Internacional":
		return ["#ff0e00", "white"];
		break;
		case "Ituano":
		return ["red", "black"];
		break;
		case "Juventus":
		return ["#6a023c", "white"];
		break;
		case "Kenitra-MAR":
		return ["#038b5d", "white"];
		break;
		case "Linense":
		return ["red", "white"];
		break;
		case "Luverdense":
		return ["#8bc23d", "#426d33"];
		break;
		case "Mirassol":
		return ["#ffec00", "#00722c"];
		break;
		case "Mogi Mirim":
		return ["#ff0e00", "white"];
		break;
		case "Nacional-URU":
		return ["#172b8c", "white"];
		break;
		case "Náutico":
		return ["#ff0e00", "white"];
		break;
		case "Novorizontino":
		return ["#fff500", "black"];
		break;
		case "Once Caldas-COL":
		return ["black", "white"];
		break;
		case "Oeste":
		return ["red", "black"];
		break;
		case "Palmeiras":
		return ["#048439", "white"];
		break;
		case "Paraná":
		return ["#2939b4", "white"];
		break;
		case "Paulista":
		return ["red", "black"];
		break;
		case "Ponte Preta":
		return ["black", "white"];
		break;
		case "Portuguesa":
		return ["red", "white"];
		break;
		case "Real Garcilaso-PER":
		return ["#0197ee", "#fdf21c"];
		break;
		case "Red Bull Bragantino":
		return ["#001c44", "white"];
		break;
		case "Red Bull Brasil":
		return ["red", "white"];
		break;
		case "River Plate-URU":
		return ["red", "white"];
		break;
		case "Santa Cruz":
		return ["red", "white"];
		break;
		case "Santos":
		return ["white", "black"];
		break;
		case "Santo André":
		return ["#2d3491", "white"];
		break;
		case "São Bernardo":
		return ["#ffdd00", "black"];
		break;
		case "São Bento":
		return ["#0067ab", "white"];
		break;
		case "São Caetano":
		return ["#212568", "white"];
		break;
		case "São Paulo":
		return ["#ff0e00", "white"];
		break;
		case "Sport":
		return ["#d30a11", "black"];
		break;
		case "Sporting Cristal-PER":
		return ["#54c6ed", "white"];
		break;
		case "The Strongest-BOL":
		return ["#ffcc00", "black"];
		break;
		case "Vasco":
		return ["black", "white"];
		break;
		case "Vitória":
		return ["#ff0e00", "black"];
		break;
	}
}
