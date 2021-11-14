function coresTimes(time, jogo = null) {
	if (jogo != null) {
		var dataCortada = jogo[5].split("-");
		var ano = parseInt(dataCortada[0]);
	}

	switch (time) {
		case "Água Santa":
			return ["#153160", "white"];
		case "América-MG":
			return ["#048439", "white"];
		case "América-RN":
			return ["red", "white"];
		case "Athletico-PR":
			return ["#c8060f", "white"];
		case "Atlético-GO":
			return ["#ff0e00", "white"];
		case "Atlético-MG":
			return ["black", "white"];
		case "Atlético-PR":
			return ["#ff0e00", "white"];
		case "Audax-SP":
			return ["red", "white"];
		case "Avaí":
			return ["#00468e", "white"];
		case "Bahia":
			return ["#0188d6", "white"];
		case "Benfica-POR":
			return ["red", "white"];
		case "Boca Juniors-ARG":
			return ["#00458a", "#fcb000"];
		case "Botafogo":
			return ["black", "white"];
		case "Botafogo-SP":
			return ["red", "white"];
		case "Ceará":
			return ["black", "white"];
		case "Cerro Porteño-PAR":
			return ["#c40215", "white"];
		case "Chapecoense":
			return ["#00913c", "white"];
		case "Corinthians":
			return ["black", "white"];
		case "Coritiba":
			return ["#00544d", "white"];
		case "Cruzeiro":
			return ["#003a94", "white"];
		case "CSA":
			return ["#003a94", "white"];
		case "Defensa y Justicia-ARG":
			return ["#fde900", "#018036"];
		case "Deportivo Tachira-VEN":
			return ["#f2d902", "black"];
		case "Estudiantes-ARG":
			return ["red", "white"];
		case "Ferroviária":
			return ["#511a1d", "white"];
		case "Figueirense":
			return ["black", "white"];
		case "Flamengo":
			return ["#ff0e00", "white"];
		case "Floresta-CE":
			return ["#87c53f", "#036c3c"];
		case "Fluminense":
			return ["#9f022f", "white"];
		case "Fortaleza":
			return ["#11519b", "white"];
		case "Goiás":
			if (jogo != null) {
				if (ano < 2019) {
					return ["#048439", "white"];
				} else if (ano >= 2019) {
					return ["#006959", "white"];
				}
			} else {
				return ["#048439", "white"];
			}
		case "Grêmio":
			return ["#0d80bf", "white"];
		case "Grêmio Barueri":
			return ["#f6e815", "#003c6e"];
		case "Guarani":
			return ["#048439", "white"];
		case "Independiente-ARG":
			return ["red", "white"];
		case "Independiente Santa Fé-COL":
			return ["red", "white"];
		case "Internacional":
			return ["#ff0e00", "white"];
		case "Ituano":
			return ["red", "black"];
		case "Juventus":
			return ["#6a023c", "white"];
		case "Kenitra-MAR":
			return ["#038b5d", "white"];
		case "Linense":
			return ["red", "white"];
		case "Luverdense":
			return ["#8bc23d", "#426d33"];
		case "Mirassol":
			return ["#ffec00", "#00722c"];
		case "Mogi Mirim":
			return ["#ff0e00", "white"];
		case "Nacional-URU":
			return ["#172b8c", "white"];
		case "Náutico":
			return ["#ff0e00", "white"];
		case "Novorizontino":
			return ["#fff500", "black"];
		case "Once Caldas-COL":
			return ["black", "white"];
		case "Oeste":
			return ["red", "black"];
		case "Palmeiras":
			return ["#048439", "white"];
		case "Paraná":
			return ["#2939b4", "white"];
		case "Paulista":
			return ["red", "black"];
		case "Ponte Preta":
			return ["black", "white"];
		case "Portuguesa":
			return ["red", "white"];
		case "Real Garcilaso-PER":
			return ["#0197ee", "#fdf21c"];
		case "Red Bull Bragantino":
			return ["#001c44", "white"];
		case "Red Bull Brasil":
			return ["red", "white"];
		case "River Plate-URU":
			return ["red", "white"];
		case "Santa Cruz":
			return ["red", "white"];
		case "Santos":
			return ["white", "black"];
		case "Santo André":
			return ["#2d3491", "white"];
		case "São Bernardo":
			return ["#ffdd00", "black"];
		case "São Bento":
			return ["#0067ab", "white"];
		case "São Caetano":
			return ["#212568", "white"];
		case "São Paulo":
			return ["#ff0e00", "white"];
		case "Sport":
			return ["#d30a11", "black"];
		case "Sporting Cristal-PER":
			return ["#54c6ed", "white"];
		case "The Strongest-BOL":
			return ["#ffcc00", "black"];
		case "Vasco":
			return ["black", "white"];
		case "Vitória":
			return ["#ff0e00", "black"];
	}
}