var jogos = [];

var jogo1 = [true, "Corinthians", 2, 0, "Campeonato Brasileiro", "2002-12-08", "Morumbi", "Emerson Leão", "-Alberto<br>-Renato", ""];
var jogo2 = [false, "Corinthians", 3, 2, "Campeonato Brasileiro", "2002-12-15", "Morumbi", "Emerson Leão", "-Elano<br>-Léo<br>-Robinho", "-Anderson<br>-Deivid"];
var jogo3 = [true, "Boca Juniors-ARG", 1, 3, "Copa Libertadores", "2003-07-02", "Morumbi", "Emerson Leão", "-Alex", "-Tévez<br>-Delgado<br>-Schiavi"];
var jogo4 = [false, "Palmeiras", 2, 1, "Campeonato Brasileiro", "2004-09-12", "Pacaembu", "Vanderlei Luxemburgo", "-Deivid<br>-Elano", "-Osmar"];
var jogo5 = [false, "São Paulo", 0, 1, "Campeonato Brasileiro", "2004-10-24", "Morumbi", "Vanderlei Luxemburgo", "", "-Grafite"];
var jogo6 = [false, "Juventus", 2, 1, "Campeonato Paulista", "2006-03-25", "Pacaembu", "Vanderlei Luxemburgo", "-Cléber Santana<br>-Reinaldo", "-Manu"];
var jogo7 = [true, "São Caetano", 2, 0, "Campeonato Paulista", "2007-05-06", "Morumbi", "Vanderlei Luxemburgo", "-Adaílton<br>-Morais", ""];
var jogo8 = [false, "Oeste", 2, 1, "Campeonato Paulista", "2009-03-07", "Pacaembu", "Vagner Mancini", "-Roni<br>-Madson", "-Dezinho"];
var jogo9 = [true, "Náutico", 3, 1, "Campeonato Brasileiro", "2009-11-07", "Pacaembu", "Vanderlei Luxemburgo", "-Kléber Pereira<br>-Neymar(2x)", "-Aílton"];
var jogo10 = [true, "Corinthians", 2, 1, "Campeonato Paulista", "2010-02-28", "Vila Belmiro", "Dorival Júnior", "-Neymar<br>-André", "-Dentinho"];
var jogo11 = [false, "Santo André", 3, 2, "Campeonato Paulista", "2010-04-25", "Pacaembu", "Dorival Júnior", "-André<br>-Wesley(2x)", "-Bruno César<br>-Rodriguinho"];
var jogo12 = [true, "Santo André", 2, 3, "Campeonato Paulista", "2010-05-02", "Pacaembu", "Dorival Júnior", "-Neymar(2x)", "-Nunes<br>-Alê<br>-Branquinho"];
var jogo13 = [true, "Deportivo Tachira-VEN", 3, 1, "Copa Libertadores", "2011-04-20", "Pacaembu", "Muricy Ramalho", "-Neymar<br>-Jonathan<br>-Danilo", "-Gerzon Chacón"];
var jogo14 = [true, "Once Caldas-COL", 1, 1, "Copa Libertadores", "2011-05-18", "Pacaembu", "Muricy Ramalho", "-Neymar", "-Rentería"];
var jogo15 = [true, "Cerro Porteño-PAR", 1, 0, "Copa Libertadores", "2011-05-25", "Pacaembu", "Muricy Ramalho", "-Edu Dracena", ""];
var jogo16 = [true, "Atlético-PR", 4, 1, "Campeonato Brasileiro", "2011-10-29", "Pacaembu", "Muricy Ramalho", "-Neymar(4x)", "-Guerrón"];
var jogo17 = [true, "Ponte Preta", 2, 1, "Campeonato Brasileiro", "2013-10-12", "Pacaembu", "Claudinei Oliveira", "-Éverton Costa<br>-Montillo", "-Rafael Ratão"];
var jogo18 = [true, "Bahia", 3, 0, "Campeonato Brasileiro", "2013-11-14", "Pacaembu", "Claudinei Oliveira", "-Cícero(2x)<br>-Montillo", ""];
var jogo19 = [true, "Botafogo-SP", 5, 1, "Campeonato Paulista", "2014-02-01", "Vila Belmiro", "Oswaldo de Oliveira", "-Gabigol(2x)<br>-Emerson<br>-Guevânio<br>-Cícero", "-Hudson"];
var jogo20 = [true, "Palmeiras", 2, 0, "Campeonato Brasileiro", "2014-07-17", "Vila Belmiro", "Oswaldo de Oliveira", "-Bruno Uvini<br>-Alisson", ""];
var jogo21 = [true, "Goiás", 2, 0, "Campeonato Brasileiro", "2014-09-28", "Pacaembu", "Enderson Moreira", "-David Braz<br>-Geuvânio", ""];
var jogo22 = [true, "Botafogo", 5, 0, "Copa do Brasil", "2014-10-16", "Pacaembu", "Enderson Moreira", "-Gabigol<br>-David Braz(2x)<br>-Lucas Lima<br>-Geuvânio", ""];
var jogo23 = [true, "Ituano", 3, 0, "Campeonato Paulista", "2015-02-01", "Vila Belmiro", "Enderson Moreira", "-Chiquinho<br>-Geuvânio(2x)", ""];
var jogo24 = [false, "São Bernardo", 1, 0, "Campeonato Paulista", "2015-02-14", "Primeiro de Maio", "Enderson Moreira", "-David Braz", ""];
var jogo25 = [false, "Portuguesa", 3, 1, "Campeonato Paulista", "2015-02-22", "Pacaembu", "Enderson Moreira", "-Robinho(2x)<br>-Cicinho", "-Jean Mota"];
var jogo26 = [true, "Audax-SP", 1, 0, "Campeonato Paulista", "2015-03-21", "Vila Belmiro", "Marcelo Fernandes", "-Ricardo Oliveira", ""];
var jogo27 = [true, "Cruzeiro", 1, 0, "Campeonato Brasileiro", "2015-05-17", "Vila Belmiro", "Marcelo Fernandes", "-Geuvânio", ""];
var jogo28 = [true, "Sport", 2, 2, "Campeonato Brasileiro", "2015-05-31", "Vila Belmiro", "Marcelo Fernandes", "-Werley<br>-Robinho", "-Joelinton<br>-Samuel Xavier"];
var jogo29 = [true, "Coritiba", 3, 0, "Campeonato Brasileiro", "2015-08-08", "Vila Belmiro", "Dorival Júnior", "-Geuvânio<br>-Ivan(Gol Contra)<br>-Ricardo Oliveira", ""];
var jogo30 = [false, "Corinthians", 0, 2, "Campeonato Brasileiro", "2015-09-20", "Arena Corinthians", "Dorival Júnior", "", "-Jadson(2x)"];
var jogo31 = [true, "Figueirense", 3, 2, "Copa do Brasil", "2015-10-01", "Pacaembu", "Dorival Júnior", "-Neto Berola<br>-Gabigol<br>-Marquinhos Gabriel", "-Carlos Alberto<br>-Bruno Alves"];
var jogo32 = [true, "Fluminense", 3, 1, "Campeonato Brasileiro", "2015-10-04", "Vila Belmiro", "Dorival Júnior", "-Lucas Lima<br>-Marquinhos Gabriel<br>-Neto Berola", "-Robert"];
var jogo33 = [true, "São Bernardo", 1, 1, "Campeonato Paulista", "2016-01-30", "Vila Belmiro", "Dorival Júnior", "-Gabigol", "-Luciano Castán"];
var jogo34 = [true, "Mogi Mirim", 4, 1, "Campeonato Paulista", "2016-02-25", "Pacaembu", "Dorival Júnior", "-Bruno Costa(Gol Contra)<br>-Lucas Lima<br>-Joel(2x)", "Wendel"];
var jogo35 = [true, "Corinthians", 2, 0, "Campeonato Paulista", "2016-03-06", "Vila Belmiro", "Dorival Júnior", "-Ricardo Oliveira(2x)", ""];
var jogo36 = [true, "Água Santa", 1, 0, "Campeonato Paulista", "2016-03-12", "Pacaembu", "Dorival Júnior", "-Eli Sabiá", ""];
var jogo37 = [true, "São Bento", 2, 0, "Campeonato Paulista", "2016-04-16", "Vila Belmiro", "Dorival Júnior", "-Vitor Bueno(2x)", ""];
var jogo38 = [true, "Palmeiras", 2, 2, "Campeonato Paulista", "2016-04-24", "Vila Belmiro", "Dorival Júnior", "-Gabigol(2x)\r\n<br>\r\n<br>\r\nPênaltis (3):<br>\r\n-David Braz<br>-Zeca<br>-Victor Ferraz", "-Rafael Marques(2x)\r\n<br>\r\n<br>\r\nPênaltis (2):<br>\r\n-Cleiton Xavier<br>-Jean"];
var jogo39 = [true, "Audax-SP", 1, 0, "Campeonato Paulista", "2016-05-08", "Vila Belmiro", "Dorival Júnior", "-Ricardo Oliveira", ""];
var jogo40 = [true, "Coritiba", 2, 1, "Campeonato Brasileiro", "2016-05-22", "Vila Belmiro", "Dorival Júnior", "-Vitor Bueno<br>-Renato", "-Kléber"];
var jogo41 = [true, "Internacional", 0, 1, "Campeonato Brasileiro", "2016-05-29", "Vila Belmiro", "Dorival Júnior", "", "-Aylon"];
var jogo42 = [true, "Botafogo", 3, 0, "Campeonato Brasileiro", "2016-06-05", "Pacaembu", "Dorival Júnior", "-Vitor Bueno<br>-Paulinho<br>-Bruno Silva(Gol Contra)", ""];
var jogo43 = [true, "Sport", 2, 0, "Campeonato Brasileiro", "2016-06-15", "Vila Belmiro", "Oswaldo de Oliveira", "-Gabigol<br>-Vitor Bueno", ""];
var jogo44 = [true, "São Paulo", 3, 0, "Campeonato Brasileiro", "2016-06-26", "Pacaembu", "Dorival Júnior", "-Vitor Bueno<br>-Rodrigão<br>-Lucas Lima", ""];
var jogo45 = [true, "Chapecoense", 3, 0, "Campeonato Brasileiro", "2016-07-03", "Vila Belmiro", "Dorival Júnior", "-Rodrigão<br>-Copete<br>-Yuri", ""];
var jogo46 = [true, "Ponte Preta", 3, 1, "Campeonato Brasileiro", "2016-07-16", "Vila Belmiro", "Dorival Júnior", "-Victor Ferraz<br>-Vitor Bueno<br>-Gabigol", "-Roger"];
var jogo47 = [true, "Cruzeiro", 2, 0, "Campeonato Brasileiro", "2016-07-31", "Vila Belmiro", "Dorival Júnior", "-Vitor Bueno<br>-Lucas(Gol Contra)", ""];
var jogo48 = [false, "Coritiba", 1, 2, "Campeonato Brasileiro", "2016-08-21", "Couto Pereira", "Dorival Júnior", "-Ricardo Oliveira", "-Kléber<br>-Iago Dias"];
var jogo49 = [true, "Vasco", 3, 1, "Copa do Brasil", "2016-08-24", "Vila Belmiro", "Dorival Júnior", "-Renato<br>-Ricardo Oliveira<br>-Lucas Lima", "-Éder Luís"];
var jogo50 = [true, "Corinthians", 2, 1, "Campeonato Brasileiro", "2016-09-11", "Vila Belmiro", "Dorival Júnior", "-Vitor Bueno<br>-Renato", "-Marlone"];
var jogo51 = [true, "Santa Cruz", 3, 2, "Campeonato Brasileiro", "2016-09-18", "Pacaembu", "Dorival Júnior", "-Copete<br>-Jean Mota<br>-Vitor Bueno", "-Keno(2x)"];
var jogo52 = [true, "Benfica-POR", 1, 1, "Amistoso", "2016-10-08", "Vila Belmiro", "Dorival Júnior", "-Fábian Noguera", "-Salvio"];
var jogo53 = [false, "São Paulo", 1, 0, "Campeonato Brasileiro", "2016-10-13", "Pacaembu", "Dorival Júnior", "-Copete", ""];
var jogo54 = [true, "Grêmio", 1, 1, "Campeonato Brasileiro", "2016-10-16", "Vila Belmiro", "Dorival Júnior", "-Fábian Noguera", "-Éverton"];
var jogo55 = [true, "Palmeiras", 1, 0, "Campeonato Brasileiro", "2016-10-29", "Vila Belmiro", "Dorival Júnior", "-Copete", ""];
var jogo56 = [false, "Ponte Preta", 2, 1, "Campeonato Brasileiro", "2016-11-06", "Moisés Lucarelli", "Dorival Júnior", "-Ricardo Oliveira<br>-Copete", "-William Pottker"];
var jogo57 = [true, "Floresta-CE", 1, 0, "Copinha", "2017-01-04", "Arena Barueri", "Marcos Soares", "-Giovane", ""];
var jogo58 = [false, "Audax-SP", 1, 1, "Copinha", "2017-01-08", "Arena Barueri", "Marcos Soares", "-André Anderson", "-Wesley"];
var jogo59 = [true, "Kenitra-MAR", 5, 1, "Amistoso", "2017-01-28", "Pacaembu", "Dorival Júnior", "-Rodrigão<br>-Vitor Bueno(2x)<br>-Vladimir Hernández<br>-Thiago Ribeiro", "-Hamza"];
var jogo60 = [true, "Linense", 6, 2, "Campeonato Paulista", "2017-02-03", "Vila Belmiro", "Dorival Júnior", "-Rodrigão(2x)<br>-Lucas Lima<br>-Arthur Gomes<br>-Vitor Bueno<br>-Thiago Ribeiro", "-Thiago Santos<br>-Gabrielzinho"];
var jogo61 = [false, "Red Bull Brasil", 3, 2, "Campeonato Paulista", "2017-02-12", "Pacaembu", "Dorival Júnior", "-Vitor Bueno<br>-Rodrigão<br>-Kayke", "-Misael<br>-Nixon"];
var jogo62 = [true, "Ferroviária", 0, 1, "Campeonato Paulista", "2017-02-18", "Vila Belmiro", "Dorival Júnior", "", "-Leandro Amaro"];
var jogo63 = [false, "São Bernardo", 4, 1, "Campeonato Paulista", "2017-03-12", "Primeiro de Maio", "Dorival Júnior", "-Bruno Henrique(3x)<br>-Rafael Longuine", "-Geandro"];
var jogo64 = [true, "The Strongest-BOL", 2, 0, "Copa Libertadores", "2017-03-16", "Vila Belmiro", "Dorival Júnior", "-Ricardo Oliveira<br>-Renato", ""];
var jogo65 = [false, "Santo André", 1, 0, "Campeonato Paulista", "2017-03-25", "Bruno José Daniel", "Dorival Júnior", "-Copete", ""];
var jogo66 = [true, "Ponte Preta", 1, 0, "Campeonato Paulista", "2017-04-10", "Pacaembu", "Dorival Júnior", "-David Braz\r\n<br><br>\r\nPênaltis (4):<br>\r\n-Kayke<br>\r\n-Jean Mota<br>\r\n-Copete<br>\r\n-Lucas Lima", "<br><br>\r\nPênaltis (5):<br>\r\n-Ravanelli<br>\r\n-Yago<br>\r\n-Clayson<br>\r\n-Jadson<br>\r\n-William Pottker"];
var jogo67 = [true, "Independiente Santa Fé-COL", 3, 2, "Copa Libertadores", "2017-05-04", "Pacaembu", "Dorival Júnior", "-Ricardo Oliveira<br>-Vitor Bueno<br>-Lucas Veríssimo", "-Arango<br>-Perlaza"];
var jogo68 = [false, "Fluminense", 2, 3, "Campeonato Brasileiro", "2017-05-14", "Maracanã", "Dorival Júnior", "-Victor Ferraz<br>-Vladimir Hernández", "-Henrique Dourado(2x)<br>-Sornoza"];
var jogo69 = [true, "Coritiba", 1, 0, "Campeonato Brasileiro", "2017-05-20", "Vila Belmiro", "Dorival Júnior", "-David Braz", ""];
var jogo70 = [true, "Sporting Cristal-PER", 4, 0, "Copa Libertadores", "2017-05-23", "Vila Belmiro", "Dorival Júnior", "-David Braz(2x)<br>-Ricardo Oliveira<br>-Vitor Bueno", ""];
var jogo71 = [true, "Cruzeiro", 0, 1, "Campeonato Brasileiro", "2017-05-28", "Vila Belmiro", "Dorival Júnior", "", "-Thiago Neves"];
var jogo72 = [true, "Botafogo", 1, 0, "Campeonato Brasileiro", "2017-06-07", "Pacaembu", "Dorival Júnior", "-Victor Ferraz", ""];
var jogo73 = [false, "Atlético-PR", 2, 0, "Campeonato Brasileiro", "2017-06-11", "Arena da Baixada", "Elano", "-Kayke(2x)", ""];
var jogo74 = [true, "Palmeiras", 1, 0, "Campeonato Brasileiro", "2017-06-14", "Vila Belmiro", "Levir Culpi", "-Kayke", ""];
var jogo75 = [true, "Ponte Preta", 0, 0, "Campeonato Brasileiro", "2017-06-17", "Pacaembu", "Levir Culpi", "", ""];
var jogo76 = [true, "São Paulo", 3, 2, "Campeonato Brasileiro", "2017-07-09", "Vila Belmiro", "Levir Culpi", "-Copete(3x)", "-Shaylon<br>-Arboleda"];
var jogo77 = [true, "Chapecoense", 1, 0, "Campeonato Brasileiro", "2017-07-19", "Vila Belmiro", "Levir Culpi", "-Vecchio", ""];
var jogo78 = [true, "Bahia", 3, 0, "Campeonato Brasileiro", "2017-07-23", "Pacaembu", "Levir Culpi", "-Bruno Henrique(3x)", ""];
var jogo79 = [true, "Flamengo", 4, 2, "Copa do Brasil", "2017-07-26", "Vila Belmiro", "Levir Culpi", "-Bruno Henrique<br>-Copete(2x)<br>-Victor Ferraz", "-Berrío<br>-Guerrero"];
var jogo80 = [true, "Flamengo", 3, 2, "Campeonato Brasileiro", "2017-08-02", "Pacaembu", "Levir Culpi", "-Bruno Henrique<br>-Alisson<br>-Ricardo Oliveira", "-Éverton Ribeiro<br>-Felipe Vizeu"];
var jogo81 = [false, "Avaí", 0, 0, "Campeonato Brasileiro", "2017-08-06", "da Ressacada", "Levir Culpi", "", ""];
var jogo82 = [true, "Atlético-PR", 1, 0, "Copa Libertadores", "2017-08-10", "Vila Belmiro", "Levir Culpi", "-Bruno Henrique", ""];
var jogo83 = [true, "Fluminense", 0, 0, "Campeonato Brasileiro", "2017-08-14", "Pacaembu", "Levir Culpi", "", ""];
var jogo84 = [false, "Cruzeiro", 1, 1, "Campeonato Brasileiro", "2017-08-27", "Mineirão", "Levir Culpi", "-Bruno Henrique", "-Rafinha"];
var jogo85 = [true, "Corinthians", 2, 0, "Campeonato Brasileiro", "2017-09-10", "Vila Belmiro", "Levir Culpi", "-Lucas Lima<br>-Ricardo Oliveira", ""];
var jogo86 = [false, "Botafogo", 0, 2, "Campeonato Brasileiro", "2017-09-16", "Nilton Santos", "Levir Culpi", "", "-Rodrigo Lindoso<br>-Guilherme"];
var jogo87 = [true, "Atlético-PR", 1, 0, "Campeonato Brasileiro", "2017-09-23", "Vila Belmiro", "Levir Culpi", "-Bruno Henrique", ""];
var jogo88 = [true, "Vitória", 2, 2, "Campeonato Brasileiro", "2017-10-16", "Pacaembu", "Levir Culpi", "-Jean Mota<br>-Ramon", "-David<br>-Wallace Reis"];
var jogo89 = [true, "Atlético-GO", 1, 0, "Campeonato Brasileiro", "2017-10-22", "Vila Belmiro", "Levir Culpi", "-Ricardo Oliveira", ""];
var jogo90 = [true, "Atlético-MG", 3, 1, "Campeonato Brasileiro", "2017-11-04", "Vila Belmiro", "Levir Culpi", "-Arthur Gomes<br>-David Braz<br>-Ricardo Oliveira", "-Fred"];
var jogo91 = [true, "Grêmio", 1, 0, "Campeonato Brasileiro", "2017-11-19", "Vila Belmiro", "Elano", "-Copete", ""];
var jogo92 = [false, "Flamengo", 2, 1, "Campeonato Brasileiro", "2017-11-26", "Ilha do Urubu", "Elano", "-Bruno Henrique<br>-Arthur Gomes", "-Lucas Paquetá"];
var jogo93 = [true, "Avaí", 1, 1, "Campeonato Brasileiro", "2017-12-03", "Vila Belmiro", "Elano", "-Copete", "-Pedro Castro"];
var jogo94 = [true, "Internacional", 1, 1, "Brasileirão de Aspirantes", "2017-12-10", "Vila Belmiro", "Kleiton Lima", "-Diego Cardoso", "-Joanderson"];
var jogo95 = [true, "São Caetano", 2, 0, "Campeonato Paulista", "2018-02-14", "Vila Belmiro", "Jair Ventura", "-Lucas Veríssimo<br>-Gabigol", ""];
var jogo96 = [true, "Santo André", 2, 0, "Campeonato Paulista", "2018-02-25", "Vila Belmiro", "Jair Ventura", "-Gabigol<br>-Eduardo Sasha", ""];
var jogo97 = [true, "Corinthians", 1, 1, "Campeonato Paulista", "2018-03-04", "Pacaembu", "Jair Ventura", "-Diogo Vitor", "-Renê Junior"];
var jogo98 = [true, "São Bento", 1, 3, "Campeonato Paulista", "2018-03-11", "Vila Belmiro", "Jair Ventura", "-Arthur Gomes", "-Marcelo Cordeiro<br>-Lúcio Flávio<br>-Fábio Bahia"];
var jogo99 = [true, "Nacional-URU", 3, 1, "Copa Libertadores", "2018-03-15", "Pacaembu", "Jair Ventura", "-Eduardo Sasha(2x)<br>-Rodrygo", "-Oliva"];
var jogo100 = [true, "Botafogo-SP", 0, 0, "Campeonato Paulista", "2018-03-21", "Vila Belmiro", "Jair Ventura", "<br><br>\r\nPênaltis (3):<br>-Gabigol<br>-Diogo Vitor<br>-Arthur Gomes", "<br>\r\nPênaltis (1):<br>-Jheymy"];
var jogo101 = [true, "Palmeiras", 0, 1, "Campeonato Paulista", "2018-03-24", "Pacaembu", "Jair Ventura", "", "-Willian"];
var jogo102 = [true, "Ceará", 2, 0, "Campeonato Brasileiro", "2018-04-14", "Pacaembu", "Jair Ventura", "-Pio(Gol Contra)<br>-Rodrygo", ""];
var jogo103 = [true, "Estudiantes-ARG", 2, 0, "Copa Libertadores", "2018-04-24", "Vila Belmiro", "Jair Ventura", "-Gabigol<br>-Lucas Veríssimo", ""];
var jogo104 = [true, "Luverdense", 5, 1, "Copa do Brasil", "2018-05-10", "Vila Belmiro", "Jair Ventura", "-Gustavo Henrique<br>-Gabigol(3x)<br>-Yuri Alberto", "-Itaqui"];
var jogo105 = [true, "Paraná", 3, 1, "Campeonato Brasileiro", "2018-05-13", "Vila Belmiro", "Jair Ventura", "-Gabigol(2x)<br>-Rodrygo", "-Silvinho"];
var jogo106 = [true, "Real Garcilaso-PER", 0, 0, "Copa Libertadores", "2018-05-24", "Vila Belmiro", "Jair Ventura", "", ""];
var jogo107 = [true, "Cruzeiro", 0, 1, "Campeonato Brasileiro", "2018-05-27", "Pacaembu", "Jair Ventura", "", "-Bruno Silva"];
var jogo108 = [true, "Vitória", 5, 2, "Campeonato Brasileiro", "2018-06-03", "Vila Belmiro", "Jair Ventura", "-Renato<br>-Gabigol<br>Rodrygo(3x)", "-Neílton<br>-Ramon"];
var jogo109 = [true, "Internacional", 1, 2, "Campeonato Brasileiro", "2018-06-10", "Vila Belmiro", "Jair Ventura", "-Gabigol", "-Leandro Damião<br>-Victor Cuesta"];
var jogo110 = [true, "Palmeiras", 1, 1, "Campeonato Brasileiro", "2018-07-19", "Pacaembu", "Jair Ventura", "-Gustavo Henrique", "-Lucas Lima"];
var jogo111 = [true, "Flamengo", 1, 1, "Campeonato Brasileiro", "2018-07-25", "Vila Belmiro", "Serginho Chulapa", "-Rodrygo", "-Éverton Ribeiro"];
var jogo112 = [true, "América-MG", 0, 1, "Campeonato Brasileiro", "2018-07-29", "Vila Belmiro", "Serginho Chulapa", "", "-Ruy"];
var jogo113 = [true, "Cruzeiro", 0, 1, "Copa do Brasil", "2018-08-01", "Vila Belmiro", "Cuca", "", "-Raniel"];
var jogo114 = [false, "Botafogo", 0, 0, "Campeonato Brasileiro", "2018-08-04", "Nilton Santos", "Cuca", "", ""];
var jogo115 = [true, "Sport", 3, 0, "Campeonato Brasileiro", "2018-08-18", "Vila Belmiro", "Cuca", "-Eduardo Sasha<br>-Rodrygo<br>-Victor Ferraz", ""];
var jogo116 = [false, "Independiente-ARG", 0, 0, "Copa Libertadores", "2018-08-21", "Libertadores de América", "Cuca", "", ""];
var jogo117 = [true, "Bahia", 2, 0, "Campeonato Brasileiro", "2018-08-25", "Vila Belmiro", "Cuca", "-Derlis González<br>-Gabigol", ""];
var jogo118 = [true, "Independiente-ARG", 0, 0, "Copa Libertadores", "2018-08-28", "Pacaembu", "Cuca", "", ""];
var jogo119 = [false, "Vasco", 3, 0, "Campeonato Brasileiro", "2018-09-01", "Maracanã", "Cuca", "-Gabigol(3x)", ""];
var jogo120 = [true, "Grêmio", 0, 0, "Campeonato Brasileiro", "2018-09-06", "Pacaembu", "Cuca", "", ""];
var jogo121 = [true, "São Paulo", 0, 0, "Campeonato Brasileiro", "2018-09-16", "Vila Belmiro", "Cuca", "", ""];
var jogo122 = [true, "Atlético-PR", 1, 0, "Campeonato Brasileiro", "2018-09-30", "Vila Belmiro", "Cuca", "-Carlos Sánchez", ""];
var jogo123 = [true, "Corinthians", 1, 0, "Campeonato Brasileiro", "2018-10-13", "Pacaembu", "Cuca", "-Gabigol", ""];
var jogo124 = [true, "Fluminense", 3, 0, "Campeonato Brasileiro", "2018-10-27", "Vila Belmiro", "Cuca", "-Gabigol<br>-Carlos Sánchez<br>-Victor Ferraz", ""];
var jogo125 = [true, "Chapecoense", 0, 1, "Campeonato Brasileiro", "2018-11-12", "Pacaembu", "Cuca", "", "-Leandro Pereira"];
var jogo126 = [false, "Flamengo", 0, 1, "Campeonato Brasileiro", "2018-11-15", "Maracanã", "Cuca", "", "-Henrique Dourado"];
var jogo127 = [false, "América-MG", 1, 2, "Campeonato Brasileiro", "2018-11-18", "Arena Independência", "Cuca", "-Gabigol", "-Rafael Moura<br>-Matheusinho"];
var jogo128 = [true, "Botafogo", 1, 1, "Campeonato Brasileiro", "2018-11-21", "Vila Belmiro", "Cuca", "-Rodrygo", "-Brenner"];
var jogo129 = [true, "Atlético-MG", 3, 2, "Campeonato Brasileiro", "2018-11-24", "Vila Belmiro", "Cuca", "-Felippe Cardoso<br>-Gabigol<br>-Carlos Sánchez", "-Ricardo Oliveira(2x)"];
var jogo130 = [false, "Sport", 1, 2, "Campeonato Brasileiro", "2018-12-02", "Ilha do Retiro", "Cuca", "-Rodrygo", "-Rogério<br>-Hernane"];
var jogo131 = [true, "Ferroviária", 1, 0, "Campeonato Paulista", "2019-01-19", "Vila Belmiro", "Jorge Sampaoli", "-Jean Mota", ""];
var jogo132 = [true, "São Paulo", 2, 0, "Campeonato Paulista", "2019-01-27", "Pacaembu", "Jorge Sampaoli", "-Luiz Felipe<br>-Derlis González", ""];
var jogo133 = [false, "Ituano", 1, 5, "Campeonato Paulista", "2019-02-03", "Municipal Doutor Novelli Júnior", "Jorge Sampaoli", "-Jean Mota", "-Marcos Serato<br>-Morato(2x)<br>-Léo Santos<br>-Jonas"];
var jogo134 = [true, "Mirassol", 1, 0, "Campeonato Paulista", "2019-02-09", "Pacaembu", "Jorge Sampaoli", "-Jean Mota", ""];
var jogo135 = [false, "River Plate-URU", 0, 0, "Copa Sul-Americana", "2019-02-12", "Luis Franzini", "Jorge Sampaoli", "", ""];
var jogo136 = [true, "Guarani", 3, 0, "Campeonato Paulista", "2019-02-18", "Pacaembu", "Jorge Sampaoli", "-Rodrygo<br>-Jean Mota(2x)", ""];
var jogo137 = [true, "Oeste", 3, 2, "Campeonato Paulista", "2019-03-02", "Pacaembu", "Jorge Sampaoli", "-Betinho(Gol Contra)<br>-Derlis González<br>-Victor Ferraz", "-Bruno Lopes<br>-Matheus Jesus"];
var jogo138 = [true, "América-RN", 4, 0, "Copa do Brasil", "2019-03-09", "Pacaembu", "Jorge Sampaoli", "-Rodrygo<br>-Aguilar<br>-Jean Mota<br>Derlis González", ""];
var jogo139 = [true, "Novorizontino", 0, 1, "Campeonato Paulista", "2019-03-15", "Pacaembu", "Jorge Sampaoli", "", "-Murilo Henrique"];
var jogo140 = [true, "Red Bull Brasil", 2, 0, "Campeonato Paulista", "2019-03-23", "Pacaembu", "Jorge Sampaoli", "-Diego Pituca<br>-Carlos Sánchez", ""];
var jogo141 = [true, "Corinthians", 1, 0, "Campeonato Paulista", "2019-04-08", "Pacaembu", "Jorge Sampaoli", "-Gustavo Henrique\r\n<br><br>\r\nPênaltis (6):<br>\r\n-Rodrygo<br>\r\n-Soteldo<br>\r\n-Carlos Sánchez<br>\r\n-Derlis González<br>\r\n-Diego Pituca<br>\r\n-Alison", "<br><br>\r\nPênaltis (7):<br>\r\n-Vagner Love<br>\r\n-Ramiro<br>\r\n-Júnior Urso<br>\r\n-Fagner<br>\r\n-Sornoza<br>\r\n-Danilo Avelar<br>\r\n-Henrique"];
var jogo142 = [true, "Vasco", 2, 0, "Copa do Brasil", "2019-04-17", "Vila Belmiro", "Jorge Sampaoli", "-Rodrygo<br>-Jean Mota", ""];
var jogo143 = [false, "Grêmio", 2, 1, "Campeonato Brasileiro", "2019-04-28", "Arena do Grêmio", "Jorge Sampaoli", "-Eduardo Sasha<br>-Felipe Jonathan", "-Éverton"];
var jogo144 = [true, "Vasco", 3, 0, "Campeonato Brasileiro", "2019-05-12", "Pacaembu", "Jorge Sampaoli", "-Diego Pituca<br>-Rodrygo<br>-Soteldo", ""];
var jogo145 = [true, "Internacional", 0, 0, "Campeonato Brasileiro", "2019-05-26", "Vila Belmiro", "Jorge Sampaoli", "", ""];
var jogo146 = [false, "Ceará", 1, 0, "Campeonato Brasileiro", "2019-06-02", "Castelão", "Jorge Sampaoli", "-Eduardo Sasha", ""];
var jogo147 = [false, "Juventus", 8, 1, "Campeonato Paulista (Feminino)", "2019-06-08", "Conde Rodolfo Crespi (Rua Javari)", "Emily Lima", "-Maria Dias<br>-Maria Alves<br>-Sandrinha<br>-Sochor<br>-Glaucia<br>-Katielle<br>-Ketlen(2x)", "-Dani"];
var jogo148 = [true, "Atlético-MG", 3, 1, "Campeonato Brasileiro", "2019-06-09", "Vila Belmiro", "Jorge Sampaoli", "-Eduardo Sasha<br>-Jean Mota<br>-Carlos Sánchez", "-Alerrandro"];
var jogo149 = [true, "Corinthians", 1, 0, "Campeonato Brasileiro", "2019-06-12", "Vila Belmiro", "Jorge Sampaoli", "-Eduardo Sasha", ""];
var jogo150 = [false, "Bahia", 1, 0, "Campeonato Brasileiro", "2019-07-13", "Pituaçu", "Jorge Sampaoli", "-Carlos Sánchez", ""];
var jogo151 = [false, "Botafogo", 1, 0, "Campeonato Brasileiro", "2019-07-21", "Nilton Santos", "Jorge Sampaoli", "-Marinho", ""];
var jogo152 = [true, "Avaí", 3, 1, "Campeonato Brasileiro", "2019-07-28", "Vila Belmiro", "Jorge Sampaoli", "-Felipe Jonathan<br>-Carlos Sánchez<br>-Derlis González", "-João Paulo"];
var jogo153 = [true, "Goiás", 6, 1, "Campeonato Brasileiro", "2019-08-04", "Vila Belmiro", "Jorge Sampaoli", "-Lucas Veríssimo<br>-Soteldo(2x)<br>-Carlos Sánchez<br>-Gustavo Henrique<br>-Eduardo Sasha", "-Kayke"];
var jogo154 = [false, "Cruzeiro", 0, 2, "Campeonato Brasileiro", "2019-08-18", "Mineirão", "Jorge Sampaoli", "", "-Fred<br>-Thiago Neves"];
var jogo155 = [true, "Fortaleza", 3, 3, "Campeonato Brasileiro", "2019-08-25", "Vila Belmiro", "Jorge Sampaoli", "-Jorge<br>-Eduardo Sasha<br>-Marinho", "-Wellington Paulista(2x)<br>-Tinga"];
var jogo156 = [true, "Athletico-PR", 1, 1, "Campeonato Brasileiro", "2019-09-08", "Vila Belmiro", "Jorge Sampaoli", "-Carlos Sánchez", "-Braian Romero"];
var jogo157 = [false, "Flamengo", 0, 1, "Campeonato Brasileiro", "2019-09-14", "Maracanã", "Jorge Sampaoli", "", "-Gabriel"];
var jogo158 = [true, "São Paulo", 2, 2, "Campeonato Paulista (Feminino)", "2019-09-21", "Pacaembu", "Guilherme Giudice", "-Sole Jaimes<br>-Ketlen", "-Thaís<br>-Natane"];
var jogo159 = [true, "Grêmio", 0, 3, "Campeonato Brasileiro", "2019-09-21", "Vila Belmiro", "Jorge Sampaoli", "", "-Luan<br>-Pepê<br>-Éverton"];
var jogo160 = [true, "CSA", 2, 0, "Campeonato Brasileiro", "2019-09-29", "Vila Belmiro", "Jorge Sampaoli", "-Carlos Sánchez<br>-Eduardo Sasha", ""];
var jogo161 = [false, "Vasco", 1, 0, "Campeonato Brasileiro", "2019-10-05", "São Januário", "Jorge Sampaoli", "-Tailson", ""];
var jogo162 = [true, "Palmeiras", 2, 0, "Campeonato Brasileiro", "2019-10-09", "Vila Belmiro", "Jorge Sampaoli", "-Gustavo Henrique<br>-Marinho", ""];
var jogo163 = [false, "Internacional", 0, 0, "Campeonato Brasileiro", "2019-10-13", "Beira-Rio", "Jorge Sampaoli", "", ""];
var jogo164 = [false, "Atlético-MG", 0, 2, "Campeonato Brasileiro", "2019-10-20", "Arena Independência", "Jorge Sampaoli", "", "-Leonardo Silva<br>-Luan"];
var jogo165 = [true, "Botafogo", 4, 1, "Campeonato Brasileiro", "2019-11-03", "Vila Belmiro", "Jorge Sampaoli", "-Eduardo Sasha<br>-Marinho<br>-Soteldo(2x)", "-Igor Cássio"];
var jogo166 = [false, "Goiás", 3, 0, "Campeonato Brasileiro", "2019-11-09", "Serra Dourada", "Jorge Sampaoli", "-Soteldo(2x)<br>-Marinho", ""];
var jogo167 = [true, "São Paulo", 1, 1, "Campeonato Brasileiro", "2019-11-16", "Vila Belmiro", "Jorge Sampaoli", "-Carlos Sánchez", "-Daniel Alves"];
var jogo168 = [true, "Cruzeiro", 4, 1, "Campeonato Brasileiro", "2019-11-23", "Vila Belmiro", "Jorge Sampaoli", "-Eduardo Sasha<br>-Marinho<br>-Soteldo<br>-Diego Pituca", "-Orejuela"];
var jogo169 = [true, "Chapecoense", 2, 0, "Campeonato Brasileiro", "2019-12-01", "Vila Belmiro", "Jorge Sampaoli", "-Lucas Veríssimo<br>-Evandro", ""];
var jogo170 = [true, "Flamengo", 4, 0, "Campeonato Brasileiro", "2019-12-08", "Vila Belmiro", "Jorge Sampaoli", "-Marinho<br>-Carlos Sánchez(2x)<br>-Eduardo Sasha", ""];
var jogo171 = [true, "Red Bull Bragantino", 0, 0, "Campeonato Paulista", "2020-01-23", "Vila Belmiro", "Jesualdo Ferreira", "", ""];
var jogo172 = [true, "Botafogo-SP", 2, 0, "Campeonato Paulista", "2020-02-10", "Vila Belmiro", "Jesualdo Ferreira", "-Carlos Sánchez<br>-Eduardo Sasha", ""];
var jogo173 = [false, "Ferroviária", 0, 0, "Campeonato Paulista", "2020-02-16", "Fonte Luminosa", "Jesualdo Ferreira", "", ""];
var jogo174 = [false, "Ituano", 0, 2, "Campeonato Paulista", "2020-02-22", "Municipal Doutor Novelli Júnior", "Jesualdo Ferreira", "", "-Yago<br>-Corrêa"];
var jogo175 = [true, "Palmeiras", 0, 0, "Campeonato Paulista", "2020-02-29", "Pacaembu", "Jesualdo Ferreira", "", ""];
var jogo176 = [false, "Defensa y Justicia-ARG", 2, 1, "Copa Libertadores", "2020-03-03", "Norberto 'Tito' Tomaghello", "Jesualdo Ferreira", "-Jobson<br>-Kaio Jorge", "-Juan Rodríguez"];
var jogo177 = [true, "Mirassol", 3, 1, "Campeonato Paulista", "2020-03-07", "Vila Belmiro", "Jesualdo Ferreira", "-Yuri Alberto<br>-Diego Pituca<br>-Eduardo Sasha", "-Rafael Silva"];

jogos.push(jogo1);
jogos.push(jogo2);
jogos.push(jogo3);
jogos.push(jogo4);
jogos.push(jogo5);
jogos.push(jogo6);
jogos.push(jogo7);
jogos.push(jogo8);
jogos.push(jogo9);
jogos.push(jogo10);
jogos.push(jogo11);
jogos.push(jogo12);
jogos.push(jogo13);
jogos.push(jogo14);
jogos.push(jogo15);
jogos.push(jogo16);
jogos.push(jogo17);
jogos.push(jogo18);
jogos.push(jogo19);
jogos.push(jogo20);
jogos.push(jogo21);
jogos.push(jogo22);
jogos.push(jogo23);
jogos.push(jogo24);
jogos.push(jogo25);
jogos.push(jogo26);
jogos.push(jogo27);
jogos.push(jogo28);
jogos.push(jogo29);
jogos.push(jogo30);
jogos.push(jogo31);
jogos.push(jogo32);
jogos.push(jogo33);
jogos.push(jogo34);
jogos.push(jogo35);
jogos.push(jogo36);
jogos.push(jogo37);
jogos.push(jogo38);
jogos.push(jogo39);
jogos.push(jogo40);
jogos.push(jogo41);
jogos.push(jogo42);
jogos.push(jogo43);
jogos.push(jogo44);
jogos.push(jogo45);
jogos.push(jogo46);
jogos.push(jogo47);
jogos.push(jogo48);
jogos.push(jogo49);
jogos.push(jogo50);
jogos.push(jogo51);
jogos.push(jogo52);
jogos.push(jogo53);
jogos.push(jogo54);
jogos.push(jogo55);
jogos.push(jogo56);
jogos.push(jogo57);
jogos.push(jogo58);
jogos.push(jogo59);
jogos.push(jogo60);
jogos.push(jogo61);
jogos.push(jogo62);
jogos.push(jogo63);
jogos.push(jogo64);
jogos.push(jogo65);
jogos.push(jogo66);
jogos.push(jogo67);
jogos.push(jogo68);
jogos.push(jogo69);
jogos.push(jogo70);
jogos.push(jogo71);
jogos.push(jogo72);
jogos.push(jogo73);
jogos.push(jogo74);
jogos.push(jogo75);
jogos.push(jogo76);
jogos.push(jogo77);
jogos.push(jogo78);
jogos.push(jogo79);
jogos.push(jogo80);
jogos.push(jogo81);
jogos.push(jogo82);
jogos.push(jogo83);
jogos.push(jogo84);
jogos.push(jogo85);
jogos.push(jogo86);
jogos.push(jogo87);
jogos.push(jogo88);
jogos.push(jogo89);
jogos.push(jogo90);
jogos.push(jogo91);
jogos.push(jogo92);
jogos.push(jogo93);
jogos.push(jogo94);
jogos.push(jogo95);
jogos.push(jogo96);
jogos.push(jogo97);
jogos.push(jogo98);
jogos.push(jogo99);
jogos.push(jogo100);
jogos.push(jogo101);
jogos.push(jogo102);
jogos.push(jogo103);
jogos.push(jogo104);
jogos.push(jogo105);
jogos.push(jogo106);
jogos.push(jogo107);
jogos.push(jogo108);
jogos.push(jogo109);
jogos.push(jogo110);
jogos.push(jogo111);
jogos.push(jogo112);
jogos.push(jogo113);
jogos.push(jogo114);
jogos.push(jogo115);
jogos.push(jogo116);
jogos.push(jogo117);
jogos.push(jogo118);
jogos.push(jogo119);
jogos.push(jogo120);
jogos.push(jogo121);
jogos.push(jogo122);
jogos.push(jogo123);
jogos.push(jogo124);
jogos.push(jogo125);
jogos.push(jogo126);
jogos.push(jogo127);
jogos.push(jogo128);
jogos.push(jogo129);
jogos.push(jogo130);
jogos.push(jogo131);
jogos.push(jogo132);
jogos.push(jogo133);
jogos.push(jogo134);
jogos.push(jogo135);
jogos.push(jogo136);
jogos.push(jogo137);
jogos.push(jogo138);
jogos.push(jogo139);
jogos.push(jogo140);
jogos.push(jogo141);
jogos.push(jogo142);
jogos.push(jogo143);
jogos.push(jogo144);
jogos.push(jogo145);
jogos.push(jogo146);
jogos.push(jogo147);
jogos.push(jogo148);
jogos.push(jogo149);
jogos.push(jogo150);
jogos.push(jogo151);
jogos.push(jogo152);
jogos.push(jogo153);
jogos.push(jogo154);
jogos.push(jogo155);
jogos.push(jogo156);
jogos.push(jogo157);
jogos.push(jogo158);
jogos.push(jogo159);
jogos.push(jogo160);
jogos.push(jogo161);
jogos.push(jogo162);
jogos.push(jogo163);
jogos.push(jogo164);
jogos.push(jogo165);
jogos.push(jogo166);
jogos.push(jogo167);
jogos.push(jogo168);
jogos.push(jogo169);
jogos.push(jogo170);
jogos.push(jogo171);
jogos.push(jogo172);
jogos.push(jogo173);
jogos.push(jogo174);
jogos.push(jogo175);
jogos.push(jogo176);
jogos.push(jogo177);

/*
0 - mandante
1 - adversario
2 - golsBotafogo
3 - golsAdversario
4 - campeonato
5 - data
6 - estádio
7 - técnico
8 - autorBotafogo
9 - autorAdversario
10 - escudo novo (se tiver)
*/

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

function escreveLinha(jogo, numero){
	// setando o mandante e o visitante
	var mandante;
	var visitante;

	if(jogo[0] == true){
		mandante = "Santos";
		visitante = jogo[1];
	} else {
		mandante = jogo[1];
		visitante = "Santos";
	}

	// Pegando a tabela
	var tabela = document.getElementById("jogos");
	var qtdLinhas = tabela.rows.length;

	// Célula com autores dos gols e técnico no meio 
	var linha3 = tabela.insertRow(qtdLinhas);
	linha3.id = "linha3";

	var cellAutorMandante = linha3.insertCell(0);
	cellAutorMandante.style.fontFamily = "Arial";
	cellAutorMandante.style.fontWeight = "bold";
	cellAutorMandante.style.backgroundColor = getColorFundo(mandante, jogo);
	cellAutorMandante.style.color = getColorLetra(mandante);
	cellAutorMandante.style.border = "1px solid black";
	if(jogo[0] == true){
		cellAutorMandante.innerHTML = jogo[8];
	} else {
		cellAutorMandante.innerHTML = jogo[9];
	}

	var cellTecnico = linha3.insertCell(1);
	cellTecnico.style.fontFamily = "Arial";
	cellTecnico.style.fontWeight = "bold";
	cellTecnico.style.background = "linear-gradient(90deg, " + getColorFundo(mandante, jogo) + " 49%, " + getColorFundo(visitante, jogo) + " 52%)";
	cellTecnico.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellTecnico.style.border = "1px solid black";
	cellTecnico.innerHTML = "Técnico: " + jogo[7];

	var cellAutorVisitante = linha3.insertCell(2);
	cellAutorVisitante.style.fontFamily = "Arial";
	cellAutorVisitante.style.fontWeight = "bold";
	cellAutorVisitante.style.backgroundColor = getColorFundo(visitante, jogo);
	cellAutorVisitante.style.color = getColorLetra(visitante);
	cellAutorVisitante.style.border = "1px solid black";
	if(jogo[0] == true){
		cellAutorVisitante.innerHTML = jogo[9];
	} else {
		cellAutorVisitante.innerHTML = jogo[8];
	}

	// Célula com times, escudos e placar
	var linha2 = tabela.insertRow(qtdLinhas);
	linha2.id = "linha2";

	var cellMandante = linha2.insertCell(0);
	cellMandante.id = "mandante" + numero;
	cellMandante.style.fontFamily = "Arial";
	cellMandante.style.fontWeight = "bold";
	cellMandante.style.backgroundColor = getColorFundo(mandante, jogo);
	cellMandante.style.color = getColorLetra(mandante);
	cellMandante.style.border = "1px solid black";
	cellMandante.innerHTML = "<img src=index_files/" + getEscudoName(mandante, jogo) + ".png width=70 height=70 alt=Imagem><br>" + mandante;

	var cellPlacar = linha2.insertCell(1);
	cellPlacar.id = "placar";
	cellPlacar.style.fontFamily = "Arial";
	cellPlacar.style.fontWeight = "bold";
	cellPlacar.style.fontSize = "250%";
	cellPlacar.style.whiteSpace = "nowrap";
	cellPlacar.style.background = "linear-gradient(90deg, " + getColorFundo(mandante, jogo) + " 49%, " + getColorFundo(visitante, jogo) + " 52%)";
	cellPlacar.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellPlacar.style.border = "1px solid black";
	if(jogo[0] == true){
		cellPlacar.innerHTML = jogo[2] + " x " + jogo[3];
	} else {
		cellPlacar.innerHTML = jogo[3] + " x " + jogo[2];
	}

	var cellVisitante = linha2.insertCell(2);
	cellVisitante.id = "visitante" + numero;
	cellVisitante.style.fontFamily = "Arial";
	cellVisitante.style.fontWeight = "bold";
	cellVisitante.style.backgroundColor = getColorFundo(visitante, jogo);
	cellVisitante.style.color = getColorLetra(visitante);
	cellVisitante.style.border = "1px solid black";
	cellVisitante.innerHTML = "<img src=index_files/" + getEscudoName(visitante, jogo) + ".png width=70 height=70 alt=Imagem><br>" + visitante;

	// Célula com o número e informações
	var linha1 = tabela.insertRow(qtdLinhas);
	linha1.id = "linha1";

	var cellNumero = linha1.insertCell(0);
	cellNumero.rowSpan = 3;
	cellNumero.style.fontFamily = "Arial";
	cellNumero.style.fontWeight = "bold";
	cellNumero.style.backgroundColor = getColorFundo(mandante, jogo);
	cellNumero.style.color = getColorLetra(mandante);
	cellNumero.style.border = "1px solid black";
	cellNumero.innerHTML = numero; // Número do jogo

	var cellCabecalho = linha1.insertCell(1);
	cellCabecalho.colSpan = 3;
	cellCabecalho.style.fontFamily = "Arial";
	cellCabecalho.style.fontWeight = "bold";
	cellCabecalho.style.background = "linear-gradient(90deg, " + getColorFundo(mandante, jogo) + " 49%, " + getColorFundo(visitante, jogo) + " 50%)";
	cellCabecalho.style.textShadow = "0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000, 0 0 3px #000000";
	cellCabecalho.style.border = "1px solid black";
	cellCabecalho.innerHTML = converteData(jogo[5]) + " | " + "Estádio " + jogo[6] + " | " + jogo[4]; // Cabeçalho
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

function cabecalho(){
	var tabela = document.getElementById("jogos");
	var qtdLinhas = tabela.rows.length;
	var linha = tabela.insertRow(qtdLinhas);
	tabela.width = "100%";
	linha.width = "100%";
	tabela.style.fontWeight = "bold";

	// Célula número
	var cellNumero = linha.insertCell(0);
	cellNumero.innerHTML = "Número";
	cellNumero.style.color = "black";
	cellNumero.style.border = "1px solid black";

	// Célula mandante
	var cellMandante = linha.insertCell(1);
	cellMandante.width = "40%";
	cellMandante.innerHTML = "Mandante";
	cellMandante.style.color = "black";
	cellMandante.style.border = "1px solid black";

	// Célula placar
	var cellPlacar = linha.insertCell(2);
	cellPlacar.width = "20%";
	cellPlacar.innerHTML = "Placar";
	cellPlacar.style.color = "black";
	cellPlacar.style.border = "1px solid black";

	// Célula visitante
	var cellVisitante = linha.insertCell(3);
	cellVisitante.width = "40%";
	cellVisitante.innerHTML = "Visitante";
	cellVisitante.style.color = "black";
	cellVisitante.style.border = "1px solid black";
}


function getColorFundo(time, jogo){
	var dataCortada = jogo[5].split("-");
	var ano = parseInt(dataCortada[0]);

	switch (time) {
		case "Água Santa":
		return "#153160";
		break;
		case "América-MEX":
		return "#fef000";
		break;
		case "América-MG":
		return "#048439";
		break;
		case "Americano":
		return "white";
		break;
		case "América-RN":
		return "red";
		break;
		case "Athletico-PR":
		return "#c8060f";
		break;
		case "Atlético Nacional-COL":
		return "#048439";
		break;
		case "Atlético-GO":
		return "#ff0e00";
		break;
		case "Atlético-MG":
		return "black";
		break;
		case "Atlético-PR":
		return "#ff0e00";
		break;
		case "Audax Italiano-CHI":
		return "green";
		break;
		case "Audax-SP":
		return "red";
		break;
		case "Avaí":
		return "#00679a";
		break;
		case "Bahia":
		return "#0188d6";
		break;
		case "Bangu":
		return "#ff0e00";
		break;
		case "Barcelona de Guayaquil-EQU":
		return "#fde900";
		break;
		case "Benfica-POR":
		return "red";
		break;
		case "Boa Esporte":
		return "#ff0e00";
		break;
		case "Boavista":
		return "#00913c";
		break;
		case "Boca Juniors-ARG":
		return "#00458a";
		break;
		case "Bonsucesso":
		return "#1c4196";
		break;
		case "Botafogo":
		return "black";
		break;
		case "Botafogo-SP":
		return "red";
		break;
		case "Bragantino":
		return "white";
		break;
		case "Cabofriense":
		return "#0b9c54";
		break;
		case "Ceará":
		return "black";
		break;
		case "Cerro Porteño-PAR":
		return "#c40215";
		break;
		case "Chapecoense":
		return "#00913c";
		break;
		case "Colo-Colo-CHI":
		return "white";
		break;
		case "Corinthians":
		return "black";
		break;
		case "Corinthians Steamrollers":
		return "black";
		break;
		case "Coritiba":
		return "#00544d";
		break;
		case "CRB":
		return "#ff0e00";
		break;
		case "Criciúma":
		return "#fdd116";
		break;
		case "Cruzeiro":
		return "#075798";
		break;
		case "CSA":
		return "#075798";
		break;
		case "Cuiabá":
		return "#fde900";
		break;
		case "Defensa y Justicia-ARG":
		return "#fde900";
		break;
		case "Deportivo Quito-EQU":
		return "#073756";
		break;
		case "Deportivo Tachira-VEN":
		return "#f2d902";
		break;
		case "Estudiantes-ARG":
		return "red";
		break;
		case "Ferroviária":
		return "#511a1d";
		break;
		case "Figueirense":
		return "black";
		break;
		case "Flamengo":
		return "#ff0e00";
		break;
		case "Floresta-CE":
		return "#87c53f";
		break;
		case "Fluminense":
		return "#9f022f";
		break;
		case "Fortaleza":
		return "#11519b";
		break;
		case "Goiás":
		if(ano < 2019){
			return "#048439";
			break;
		} else if (ano >= 2019){
			return "#006959";
			break;
		}
		case "Grêmio":
		return "#0d80bf";
		break;
		case "Guarani":
		return "#048439";
		break;
		case "Independiente-ARG":
		return "red";
		break;
		case "Independiente Del Valle-EQU":
		return "#fb37b9";
		break;
		case "Independiente Santa Fé-COL":
		return "red";
		break;
		case "Internacional":
		return "#ff0e00";
		break;
		case "Ituano":
		return "red";
		break;
		case "Juventude":
		return "#048439";
		break;
		case "Juventus":
		return "#6a023c";
		break;
		case "Kenitra-MAR":
		return "#038b5d";
		break;
		case "Linense":
		return "red";
		break;
		case "Luverdense":
		return "#8bc23d";
		break;
		case "Macaé":
		return "#41afeb";
		break;
		case "Madureira":
		return "#fde900";
		break;
		case "Mirassol":
		return "#ffec00";
		break;
		case "Mogi Mirim":
		return "#ff0e00";
		break;
		case "Nacional-PAR":
		return "#163fb3";
		break;
		case "Nacional-URU":
		return "#172b8c";
		break;
		case "Náutico":
		return "#ff0e00";
		break;
		case "Nova Iguaçu":
		return "#ea8415";
		break;
		case "Novorizontino":
		return "#fff500";
		break;
		case "Once Caldas-COL":
		return "black";
		break;
		case "Oeste":
		return "red";
		break;
		case "Olimpia-PAR":
		return "white";
		break;
		case "Palmeiras":
		return "#048439";
		break;
		case "Paraná":
		return "#2939b4";
		break;
		case "Paysandu":
		return "#0091cf";
		break;
		case "Ponte Preta":
		return "black";
		break;
		case "Portuguesa":
		return "red";
		break;
		case "Portuguesa-RJ":
		return "#048439";
		break;
		case "Real Garcilaso-PER":
		return "#0197ee";
		break;
		case "Red Bull Bragantino":
		return "#001c44";
		break;
		case "Red Bull Brasil":
		return "red";
		break;
		case "Resende":
		return "white";
		break;
		case "River Plate":
		return "white";
		break;
		case "River Plate-URU":
		return "red";
		break;
		case "Santa Cruz":
		return "red";
		break;
		case "Santos":
		return "white";
		break;
		case "Santo André":
		return "#2d3491";
		break;
		case "São Bernardo":
		return "#ffdd00";
		break;
		case "São Bento":
		return "#0067ab";
		break;
		case "São Caetano":
		return "#212568";
		break;
		case "São Paulo":
		return "#ff0e00";
		break;
		case "Sol de America-PAR":
		return "#075798";
		break;
		case "Sport":
		return "#d30a11";
		break;
		case "Sporting Cristal-PER":
		return "#54c6ed";
		break;
		case "The Strongest-BOL":
		return "#ffcc00";
		break;
		case "Vasco":
		return "black";
		break;
		case "Vitória":
		return "#ff0e00";
		break;
	}
}

function getColorLetra(time){
	switch(time){
		case "Água Santa":
		return "white";
		break;
		case "América-MG":
		return "white";
		break;
		case "Americano":
		return "black";
		break;
		case "América-RN":
		return "white";
		break;
		case "Athletico-PR":
		return "black";
		break;
		case "Atlético Nacional-COL":
		return "white";
		break;
		case "Atlético-GO":
		return "black";
		break;
		case "Atlético-MG":
		return "white";
		break;
		case "Atlético-PR":
		return "black";
		break;
		case "Audax Italiano-CHI":
		return "white";
		break;
		case "Audax-SP":
		return "white";
		break;
		case "Avaí":
		return "white";
		break;
		case "Bahia":
		return "white";
		break;
		case "Bangu":
		return "white";
		break;
		case "Barcelona de Guayaquil-EQU":
		return "#055daa";
		break;
		case "Boa Esporte":
		return "white";
		break;
		case "Benfica-POR":
		return "white";
		break;
		case "Boavista":
		return "white";
		break;
		case "Boca Juniors-ARG":
		return "#fcb000";
		break;
		case "Bonsucesso":
		return "white";
		break;
		case "Botafogo":
		return "white";
		break;
		case "Botafogo-SP":
		return "white";
		break;
		case "Bragantino":
		return "black";
		break;
		case "Cabofriense":
		return "white";
		break;
		case "Ceará":
		return "white";
		break;
		case "Cerro Porteño-PAR":
		return "#073756";
		break;
		case "Chapecoense":
		return "white";
		break;
		case "Colo-Colo-CHI":
		return "black";
		break;
		case "Corinthians":
		return "white";
		break;
		case "Corinthians Steamrollers":
		return "white";
		break;
		case "Coritiba":
		return "white";
		break;
		case "CRB":
		return "#white";
		break;
		case "Criciúma":
		return "black";
		break;
		case "Cruzeiro":
		return "white";
		break;
		case "CSA":
		return "white";
		break;
		case "Cuiabá":
		return "#018036";
		break;
		case "Defensa y Justicia-ARG":
		return "#018036";
		break;
		case "Deportivo Quito-EQU":
		return "white";
		break;
		case "Deportivo Tachira-VEN":
		return "black";
		break;
		case "Estudiantes-ARG":
		return "white";
		break;
		case "Ferroviária":
		return "white";
		break;
		case "Figueirense":
		return "white";
		break;
		case "Flamengo":
		return "black";
		break;
		case "Floresta-CE":
		return "#036c3c";
		break;
		case "Fluminense":
		return "white";
		break;
		case "Fortaleza":
		return "white";
		break;
		case "Goiás":
		return "white";
		break;
		case "Grêmio":
		return "white";
		break;
		case "Guarani":
		return "white";
		break;
		case "Independiente-ARG":
		return "white";
		break;
		case "Independiente Del Valle-EQU":
		return "white";
		break;
		case "Independiente Santa Fé-COL":
		return "white";
		break;
		case "Internacional":
		return "white";
		break;
		case "Ituano":
		return "black";
		break;
		case "Juventude":
		return "white";
		break;
		case "Juventus":
		return "white";
		break;
		case "Kenitra-MAR":
		return "white";
		break;
		case "Linense":
		return "white";
		break;
		case "Luverdense":
		return "#426d33";
		break;
		case "Macaé":
		return "white";
		break;
		case "Madureira":
		return "#13007c";
		break;
		case "Mirassol":
		return "#00722c";
		break;
		case "Mogi Mirim":
		return "white";
		break;
		case "Nacional-PAR":
		return "white";
		break;
		case "Nacional-URU":
		return "white";
		break;
		case "Náutico":
		return "white";
		break;
		case "Nova Iguaçu":
		return "black";
		break;
		case "Novorizontino":
		return "black";
		break;
		case "Once Caldas-COL":
		return "white";
		break;
		case "Oeste":
		return "black";
		break;
		case "Olimpia-PAR":
		return "black";
		break;
		case "Palmeiras":
		return "white";
		break;
		case "Paraná":
		return "white";
		break;       
		case "Paysandu":
		return "white";
		break;
		case "Ponte Preta":
		return "white";
		break;
		case "Portuguesa":
		return "#105d11";
		break;
		case "Portuguesa-RJ":
		return "white";
		break;
		case "Real Garcilaso-PER":
		return "#fdf21c";
		break;
		case "Red Bull Bragantino":
		return "white";
		break;
		case "Red Bull Brasil":
		return "white";
		break;
		case "Resende":
		return "black";
		break;
		case "River Plate":
		return "red";
		break;
		case "River Plate-URU":
		return "white";
		break;
		case "Santa Cruz":
		return "white";
		break;
		case "Santos":
		return "black";
		break;
		case "Santo André":
		return "white";
		break;
		case "São Bernardo":
		return "black";
		break;
		case "São Bento":
		return "white";
		break;
		case "São Caetano":
		return "white";
		break;
		case "São Paulo":
		return "white";
		break;
		case "Sol de America-PAR":
		return "white";
		break;
		case "Sport":
		return "black";
		break;
		case "Sporting Cristal-PER":
		return "white";
		break;
		case "The Strongest-BOL":
		return "black";
		break;
		case "Vasco":
		return "red";
		break;
		case "Vitória":
		return "black";
		break;
		case "Volta Redonda":
		return "black";
		break;
	}
}