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
10 - vídeo do youtube (futuro)
*/

var jogos = [];

var jogo20021208 = ["Santos", "Corinthians", 2, 0, "Campeonato Brasileiro", "2002-12-08", "Morumbi", "Emerson Leão", ["Alberto","Renato"], [""]];
jogos.push(jogo20021208);
var jogo20021215 = ["Corinthians", "Santos", 2, 3, "Campeonato Brasileiro", "2002-12-15", "Morumbi", "Emerson Leão", ["Elano","Léo","Robinho"], ["Anderson","Deivid"]];
jogos.push(jogo20021215);
var jogo20030702 = ["Santos", "Boca Juniors-ARG", 1, 3, "Copa Libertadores", "2003-07-02", "Morumbi", "Emerson Leão", ["Alex"], ["Tévez","Delgado","Schiavi"]];
jogos.push(jogo20030702);
var jogo20040912 = ["Palmeiras", "Santos", 1, 2, "Campeonato Brasileiro", "2004-09-12", "Pacaembu", "Vanderlei Luxemburgo", ["Deivid","Elano"], ["Osmar"]];
jogos.push(jogo20040912);
var jogo20041024 = ["São Paulo", "Santos", 1, 0, "Campeonato Brasileiro", "2004-10-24", "Morumbi", "Vanderlei Luxemburgo", [""], ["Grafite"]];
jogos.push(jogo20041024);
var jogo20060325 = ["Juventus", "Santos", 1, 2, "Campeonato Paulista", "2006-03-25", "Pacaembu", "Vanderlei Luxemburgo", ["Cléber Santana","Reinaldo"], ["Manu"]];
jogos.push(jogo20060325);
var jogo20070506 = ["Santos", "São Caetano", 2, 0, "Campeonato Paulista", "2007-05-06", "Morumbi", "Vanderlei Luxemburgo", ["Adaílton","Morais"], [""]];
jogos.push(jogo20070506);
var jogo20090307 = ["Oeste", "Santos", 1, 2, "Campeonato Paulista", "2009-03-07", "Pacaembu", "Vagner Mancini", ["Roni","Madson"], ["Dezinho"]];
jogos.push(jogo20090307);
var jogo20091107 = ["Santos", "Náutico", 3, 1, "Campeonato Brasileiro", "2009-11-07", "Pacaembu", "Vanderlei Luxemburgo", ["Kléber Pereira","Neymar (2x)"], ["Aílton"]];
jogos.push(jogo20091107);
var jogo20100228 = ["Santos", "Corinthians", 2, 1, "Campeonato Paulista", "2010-02-28", "Vila Belmiro", "Dorival Júnior", ["Neymar","André"], ["Dentinho"]];
jogos.push(jogo20100228);
var jogo20100425 = ["Santo André", "Santos", 2, 3, "Campeonato Paulista", "2010-04-25", "Pacaembu", "Dorival Júnior", ["André","Wesley (2x)"], ["Bruno César","Rodriguinho"]];
jogos.push(jogo20100425);
var jogo20100502 = ["Santos", "Santo André", 2, 3, "Campeonato Paulista", "2010-05-02", "Pacaembu", "Dorival Júnior", ["Neymar (2x)"], ["Nunes","Alê","Branquinho"]];
jogos.push(jogo20100502);
var jogo20110420 = ["Santos", "Deportivo Tachira-VEN", 3, 1, "Copa Libertadores", "2011-04-20", "Pacaembu", "Muricy Ramalho", ["Neymar","Jonathan","Danilo"], ["Gerzon Chacón"]];
jogos.push(jogo20110420);
var jogo20110518 = ["Santos", "Once Caldas-COL", 1, 1, "Copa Libertadores", "2011-05-18", "Pacaembu", "Muricy Ramalho", ["Neymar"], ["Rentería"]];
jogos.push(jogo20110518);
var jogo20110525 = ["Santos", "Cerro Porteño-PAR", 1, 0, "Copa Libertadores", "2011-05-25", "Pacaembu", "Muricy Ramalho", ["Edu Dracena"], [""]];
jogos.push(jogo20110525);
var jogo20111029 = ["Santos", "Atlético-PR", 4, 1, "Campeonato Brasileiro", "2011-10-29", "Pacaembu", "Muricy Ramalho", ["Neymar (4x)"], ["Guerrón"]];
jogos.push(jogo20111029);
var jogo20120506 = ["Guarani", "Santos", 0, 3, "Campeonato Paulista", "2012-05-06", "Morumbi", "Muricy Ramalho", ["Paulo Henrique Ganso","Neymar (2x)"], [""]];
jogos.push(jogo20120506);
var jogo20120811 = ["Santos", "Atlético-GO", 2, 2, "Campeonato Brasileiro", "2012-08-11", "Pacaembu", "Muricy Ramalho", ["Patito Rodríguez","Miralles"], ["Patric","Wesley"]];
jogos.push(jogo20120811);
var jogo20120922 = ["Santos", "Portuguesa", 1, 3, "Campeonato Brasileiro", "2012-09-22", "Pacaembu", "Muricy Ramalho", ["André"], ["Bruno Mineiro (2x)","Léo Silva"]];
jogos.push(jogo20120922);
var jogo20130116 = ["Santos", "Grêmio Barueri", 4, 0, "Amistoso", "2013-01-16", "Pacaembu", "Muricy Ramalho", ["Neymar","Galhardo","Miralles","Bill"], [""]];
jogos.push(jogo20130116);
var jogo20130210 = ["Santos", "Paulista", 1, 3, "Campeonato Paulista", "2013-02-10", "Pacaembu", "Muricy Ramalho", ["Neymar"], ["Marcelo Macedo","Rodolfo Testoni","Cassiano Bodini"]];
jogos.push(jogo20130210);
var jogo20130713 = ["Santos", "Portuguesa", 4, 1, "Campeonato Brasileiro", "2013-07-13", "Vila Belmiro", "Claudinei Oliveira", ["Neílton (2x)","William José","Giva"], ["Bruno Moraes"]];
jogos.push(jogo20130713);
var jogo20131012 = ["Santos", "Ponte Preta", 2, 1, "Campeonato Brasileiro", "2013-10-12", "Pacaembu", "Claudinei Oliveira", ["Éverton Costa","Montillo"], ["Rafael Ratão"]];
jogos.push(jogo20131012);
var jogo20131114 = ["Santos", "Bahia", 3, 0, "Campeonato Brasileiro", "2013-11-14", "Pacaembu", "Claudinei Oliveira", ["Cícero (2x)","Montillo"], [""]];
jogos.push(jogo20131114);
var jogo20140201 = ["Santos", "Botafogo-SP", 5, 1, "Campeonato Paulista", "2014-02-01", "Vila Belmiro", "Oswaldo de Oliveira", ["Gabigol (2x)","Emerson","Guevânio","Cícero"], ["Hudson"]];
jogos.push(jogo20140201);
var jogo20140717 = ["Santos", "Palmeiras", 2, 0, "Campeonato Brasileiro", "2014-07-17", "Vila Belmiro", "Oswaldo de Oliveira", ["Bruno Uvini","Alisson"], [""]];
jogos.push(jogo20140717);
var jogo20140824 = ["São Paulo", "Santos", 2, 1, "Campeonato Brasileiro", "2014-08-24", "Morumbi", "Oswaldo de Oliveira", ["Gabigol"], ["Paulo Henrique Ganso","Alexandre Pato"]];
jogos.push(jogo20140824);
var jogo20140928 = ["Santos", "Goiás", 2, 0, "Campeonato Brasileiro", "2014-09-28", "Pacaembu", "Enderson Moreira", ["David Braz","Geuvânio"], [""]];
jogos.push(jogo20140928);
var jogo20141016 = ["Santos", "Botafogo", 5, 0, "Copa do Brasil", "2014-10-16", "Pacaembu", "Enderson Moreira", ["Gabigol","David Braz (2x)","Lucas Lima","Geuvânio"], [""]];
jogos.push(jogo20141016);
var jogo20150201 = ["Santos", "Ituano", 3, 0, "Campeonato Paulista", "2015-02-01", "Vila Belmiro", "Enderson Moreira", ["Chiquinho","Geuvânio (2x)"], [""]];
jogos.push(jogo20150201);
var jogo20150214 = ["São Bernardo", "Santos", 0, 1, "Campeonato Paulista", "2015-02-14", "Primeiro de Maio", "Enderson Moreira", ["David Braz"], [""]];
jogos.push(jogo20150214);
var jogo20150222 = ["Portuguesa", "Santos", 1, 3, "Campeonato Paulista", "2015-02-22", "Pacaembu", "Enderson Moreira", ["Robinho (2x)","Cicinho"], ["Jean Mota"]];
jogos.push(jogo20150222);
var jogo20150321 = ["Santos", "Audax-SP", 1, 0, "Campeonato Paulista", "2015-03-21", "Vila Belmiro", "Marcelo Fernandes", ["Ricardo Oliveira"], [""]];
jogos.push(jogo20150321);
var jogo20150517 = ["Santos", "Cruzeiro", 1, 0, "Campeonato Brasileiro", "2015-05-17", "Vila Belmiro", "Marcelo Fernandes", ["Geuvânio"], [""]];
jogos.push(jogo20150517);
var jogo20150531 = ["Santos", "Sport", 2, 2, "Campeonato Brasileiro", "2015-05-31", "Vila Belmiro", "Marcelo Fernandes", ["Werley","Robinho"], ["Joelinton","Samuel Xavier"]];
jogos.push(jogo20150531);
var jogo20150808 = ["Santos", "Coritiba", 3, 0, "Campeonato Brasileiro", "2015-08-08", "Vila Belmiro", "Dorival Júnior", ["Geuvânio","Ivan (GC)","Ricardo Oliveira"], [""]];
jogos.push(jogo20150808);
var jogo20150920 = ["Corinthians", "Santos", 2, 0, "Campeonato Brasileiro", "2015-09-20", "Arena Corinthians", "Dorival Júnior", [""], ["Jadson (2x)"]];
jogos.push(jogo20150920);
var jogo20151001 = ["Santos", "Figueirense", 3, 2, "Copa do Brasil", "2015-10-01", "Pacaembu", "Dorival Júnior", ["Neto Berola","Gabigol","Marquinhos Gabriel"], ["Carlos Alberto","Bruno Alves"]];
jogos.push(jogo20151001);
var jogo20151004 = ["Santos", "Fluminense", 3, 1, "Campeonato Brasileiro", "2015-10-04", "Vila Belmiro", "Dorival Júnior", ["Lucas Lima","Marquinhos Gabriel","Neto Berola"], ["Robert"]];
jogos.push(jogo20151004);
var jogo20160130 = ["Santos", "São Bernardo", 1, 1, "Campeonato Paulista", "2016-01-30", "Vila Belmiro", "Dorival Júnior", ["Gabigol"], ["Luciano Castán"]];
jogos.push(jogo20160130);
var jogo20160225 = ["Santos", "Mogi Mirim", 4, 1, "Campeonato Paulista", "2016-02-25", "Pacaembu", "Dorival Júnior", ["Bruno Costa (GC)","Lucas Lima","Joel (2x)"], ["Wendel"]];
jogos.push(jogo20160225);
var jogo20160306 = ["Santos", "Corinthians", 2, 0, "Campeonato Paulista", "2016-03-06", "Vila Belmiro", "Dorival Júnior", ["Ricardo Oliveira (2x)"], [""]];
jogos.push(jogo20160306);
var jogo20160312 = ["Santos", "Água Santa", 1, 0, "Campeonato Paulista", "2016-03-12", "Pacaembu", "Dorival Júnior", ["Eli Sabiá"], [""]];
jogos.push(jogo20160312);
var jogo20160416 = ["Santos", "São Bento", 2, 0, "Campeonato Paulista", "2016-04-16", "Vila Belmiro", "Dorival Júnior", ["Vitor Bueno (2x)"], [""]];
jogos.push(jogo20160416);
var jogo20160424 = ["Santos", "Palmeiras", 2, 2, "Campeonato Paulista", "2016-04-24", "Vila Belmiro", "Dorival Júnior", ["Gabigol (2x)","","Pênaltis: (3)","David Braz","Zeca","Victor Ferraz"], ["Rafael Marques (2x)","","Pênaltis: (2)","Cleiton Xavier","Jean"]];
jogos.push(jogo20160424);
var jogo20160508 = ["Santos", "Audax-SP", 1, 0, "Campeonato Paulista", "2016-05-08", "Vila Belmiro", "Dorival Júnior", ["Ricardo Oliveira"], [""]];
jogos.push(jogo20160508);
var jogo20160522 = ["Santos", "Coritiba", 2, 1, "Campeonato Brasileiro", "2016-05-22", "Vila Belmiro", "Dorival Júnior", ["Vitor Bueno","Renato"], ["Kléber"]];
jogos.push(jogo20160522);
var jogo20160529 = ["Santos", "Internacional", 0, 1, "Campeonato Brasileiro", "2016-05-29", "Vila Belmiro", "Dorival Júnior", [""], ["Aylon"]];
jogos.push(jogo20160529);
var jogo20160605 = ["Santos", "Botafogo", 3, 0, "Campeonato Brasileiro", "2016-06-05", "Pacaembu", "Dorival Júnior", ["Vitor Bueno","Paulinho","Bruno Silva (GC)"], [""]];
jogos.push(jogo20160605);
var jogo20160615 = ["Santos", "Sport", 2, 0, "Campeonato Brasileiro", "2016-06-15", "Vila Belmiro", "Oswaldo de Oliveira", ["Gabigol","Vitor Bueno"], [""]];
jogos.push(jogo20160615);
var jogo20160626 = ["Santos", "São Paulo", 3, 0, "Campeonato Brasileiro", "2016-06-26", "Pacaembu", "Dorival Júnior", ["Vitor Bueno","Rodrigão","Lucas Lima"], [""]];
jogos.push(jogo20160626);
var jogo20160703 = ["Santos", "Chapecoense", 3, 0, "Campeonato Brasileiro", "2016-07-03", "Vila Belmiro", "Dorival Júnior", ["Rodrigão","Copete","Yuri"], [""]];
jogos.push(jogo20160703);
var jogo20160716 = ["Santos", "Ponte Preta", 3, 1, "Campeonato Brasileiro", "2016-07-16", "Vila Belmiro", "Dorival Júnior", ["Victor Ferraz","Vitor Bueno","Gabigol"], ["Roger"]];
jogos.push(jogo20160716);
var jogo20160731 = ["Santos", "Cruzeiro", 2, 0, "Campeonato Brasileiro", "2016-07-31", "Vila Belmiro", "Dorival Júnior", ["Vitor Bueno","Lucas (GC)"], [""]];
jogos.push(jogo20160731);
var jogo20160821 = ["Coritiba", "Santos", 2, 1, "Campeonato Brasileiro", "2016-08-21", "Couto Pereira", "Dorival Júnior", ["Ricardo Oliveira"], ["Kléber","Iago Dias"]];
jogos.push(jogo20160821);
var jogo20160824 = ["Santos", "Vasco", 3, 1, "Copa do Brasil", "2016-08-24", "Vila Belmiro", "Dorival Júnior", ["Renato","Ricardo Oliveira","Lucas Lima"], ["Éder Luís"]];
jogos.push(jogo20160824);
var jogo20160911 = ["Santos", "Corinthians", 2, 1, "Campeonato Brasileiro", "2016-09-11", "Vila Belmiro", "Dorival Júnior", ["Vitor Bueno","Renato"], ["Marlone"]];
jogos.push(jogo20160911);
var jogo20160918 = ["Santos", "Santa Cruz", 3, 2, "Campeonato Brasileiro", "2016-09-18", "Pacaembu", "Dorival Júnior", ["Copete","Jean Mota","Vitor Bueno"], ["Keno (2x)"]];
jogos.push(jogo20160918);
var jogo20161008 = ["Santos", "Benfica-POR", 1, 1, "Amistoso", "2016-10-08", "Vila Belmiro", "Dorival Júnior", ["Fábian Noguera"], ["Salvio"]];
jogos.push(jogo20161008);
var jogo20161013 = ["São Paulo", "Santos", 0, 1, "Campeonato Brasileiro", "2016-10-13", "Pacaembu", "Dorival Júnior", ["Copete"], [""]];
jogos.push(jogo20161013);
var jogo20161016 = ["Santos", "Grêmio", 1, 1, "Campeonato Brasileiro", "2016-10-16", "Vila Belmiro", "Dorival Júnior", ["Fábian Noguera"], ["Éverton"]];
jogos.push(jogo20161016);
var jogo20161029 = ["Santos", "Palmeiras", 1, 0, "Campeonato Brasileiro", "2016-10-29", "Vila Belmiro", "Dorival Júnior", ["Copete"], [""]];
jogos.push(jogo20161029);
var jogo20161106 = ["Ponte Preta", "Santos", 1, 2, "Campeonato Brasileiro", "2016-11-06", "Moisés Lucarelli", "Dorival Júnior", ["Ricardo Oliveira","Copete"], ["William Pottker"]];
jogos.push(jogo20161106);
var jogo20170104 = ["Santos", "Floresta-CE", 1, 0, "Copinha", "2017-01-04", "Arena Barueri", "Marcos Soares", ["Giovane"], [""]];
jogos.push(jogo20170104);
var jogo20170108 = ["Audax-SP", "Santos", 1, 1, "Copinha", "2017-01-08", "Arena Barueri", "Marcos Soares", ["André Anderson"], ["Wesley"]];
jogos.push(jogo20170108);
var jogo20170128 = ["Santos", "Kenitra-MAR", 5, 1, "Amistoso", "2017-01-28", "Pacaembu", "Dorival Júnior", ["Rodrigão","Vitor Bueno (2x)","Vladimir Hernández","Thiago Ribeiro"], ["Hamza"]];
jogos.push(jogo20170128);
var jogo20170203 = ["Santos", "Linense", 6, 2, "Campeonato Paulista", "2017-02-03", "Vila Belmiro", "Dorival Júnior", ["Rodrigão (2x)","Lucas Lima","Arthur Gomes","Vitor Bueno","Thiago Ribeiro"], ["Thiago Santos","Gabrielzinho"]];
jogos.push(jogo20170203);
var jogo20170212 = ["Red Bull Brasil", "Santos", 2, 3, "Campeonato Paulista", "2017-02-12", "Pacaembu", "Dorival Júnior", ["Vitor Bueno","Rodrigão","Kayke"], ["Misael","Nixon"]];
jogos.push(jogo20170212);
var jogo20170218 = ["Santos", "Ferroviária", 0, 1, "Campeonato Paulista", "2017-02-18", "Vila Belmiro", "Dorival Júnior", [""], ["Leandro Amaro"]];
jogos.push(jogo20170218);
var jogo20170312 = ["São Bernardo", "Santos", 1, 4, "Campeonato Paulista", "2017-03-12", "Primeiro de Maio", "Dorival Júnior", ["Bruno Henrique (3x)","Rafael Longuine"], ["Geandro"]];
jogos.push(jogo20170312);
var jogo20170316 = ["Santos", "The Strongest-BOL", 2, 0, "Copa Libertadores", "2017-03-16", "Vila Belmiro", "Dorival Júnior", ["Ricardo Oliveira","Renato"], [""]];
jogos.push(jogo20170316);
var jogo20170325 = ["Santo André", "Santos", 0, 1, "Campeonato Paulista", "2017-03-25", "Bruno José Daniel", "Dorival Júnior", ["Copete"], [""]];
jogos.push(jogo20170325);
var jogo20170410 = ["Santos", "Ponte Preta", 1, 0, "Campeonato Paulista", "2017-04-10", "Pacaembu", "Dorival Júnior", ["David Braz","","Pênaltis: (4)","Kayke","Jean Mota","Copete","Lucas Lima"], ["","","Pênaltis: (5)","Ravanelli","Yago","Clayson","Jadson","William Pottker"]];
jogos.push(jogo20170410);
var jogo20170504 = ["Santos", "Independiente Santa Fé-COL", 3, 2, "Copa Libertadores", "2017-05-04", "Pacaembu", "Dorival Júnior", ["Ricardo Oliveira","Vitor Bueno","Lucas Veríssimo"], ["Arango","Perlaza"]];
jogos.push(jogo20170504);
var jogo20170514 = ["Fluminense", "Santos", 3, 2, "Campeonato Brasileiro", "2017-05-14", "Maracanã", "Dorival Júnior", ["Victor Ferraz","Vladimir Hernández"], ["Henrique Dourado (2x)","Sornoza"]];
jogos.push(jogo20170514);
var jogo20170520 = ["Santos", "Coritiba", 1, 0, "Campeonato Brasileiro", "2017-05-20", "Vila Belmiro", "Dorival Júnior", ["David Braz"], [""]];
jogos.push(jogo20170520);
var jogo20170523 = ["Santos", "Sporting Cristal-PER", 4, 0, "Copa Libertadores", "2017-05-23", "Vila Belmiro", "Dorival Júnior", ["David Braz (2x)","Ricardo Oliveira","Vitor Bueno"], [""]];
jogos.push(jogo20170523);
var jogo20170528 = ["Santos", "Cruzeiro", 0, 1, "Campeonato Brasileiro", "2017-05-28", "Vila Belmiro", "Dorival Júnior", [""], ["Thiago Neves"]];
jogos.push(jogo20170528);
var jogo20170607 = ["Santos", "Botafogo", 1, 0, "Campeonato Brasileiro", "2017-06-07", "Pacaembu", "Dorival Júnior", ["Victor Ferraz"], [""]];
jogos.push(jogo20170607);
var jogo20170611 = ["Atlético-PR", "Santos", 0, 2, "Campeonato Brasileiro", "2017-06-11", "Arena da Baixada", "Elano", ["Kayke (2x)"], [""]];
jogos.push(jogo20170611);
var jogo20170614 = ["Santos", "Palmeiras", 1, 0, "Campeonato Brasileiro", "2017-06-14", "Vila Belmiro", "Levir Culpi", ["Kayke"], [""]];
jogos.push(jogo20170614);
var jogo20170617 = ["Santos", "Ponte Preta", 0, 0, "Campeonato Brasileiro", "2017-06-17", "Pacaembu", "Levir Culpi", [""], [""]];
jogos.push(jogo20170617);
var jogo20170709 = ["Santos", "São Paulo", 3, 2, "Campeonato Brasileiro", "2017-07-09", "Vila Belmiro", "Levir Culpi", ["Copete (3x)"], ["Shaylon","Arboleda"]];
jogos.push(jogo20170709);
var jogo20170719 = ["Santos", "Chapecoense", 1, 0, "Campeonato Brasileiro", "2017-07-19", "Vila Belmiro", "Levir Culpi", ["Vecchio"], [""]];
jogos.push(jogo20170719);
var jogo20170723 = ["Santos", "Bahia", 3, 0, "Campeonato Brasileiro", "2017-07-23", "Pacaembu", "Levir Culpi", ["Bruno Henrique (3x)"], [""]];
jogos.push(jogo20170723);
var jogo20170726 = ["Santos", "Flamengo", 4, 2, "Copa do Brasil", "2017-07-26", "Vila Belmiro", "Levir Culpi", ["Bruno Henrique","Copete (2x)","Victor Ferraz"], ["Berrío","Guerrero"]];
jogos.push(jogo20170726);
var jogo20170802 = ["Santos", "Flamengo", 3, 2, "Campeonato Brasileiro", "2017-08-02", "Pacaembu", "Levir Culpi", ["Bruno Henrique","Alisson","Ricardo Oliveira"], ["Éverton Ribeiro","Felipe Vizeu"]];
jogos.push(jogo20170802);
var jogo20170806 = ["Avaí", "Santos", 0, 0, "Campeonato Brasileiro", "2017-08-06", "da Ressacada", "Levir Culpi", [""], [""]];
jogos.push(jogo20170806);
var jogo20170810 = ["Santos", "Atlético-PR", 1, 0, "Copa Libertadores", "2017-08-10", "Vila Belmiro", "Levir Culpi", ["Bruno Henrique"], [""]];
jogos.push(jogo20170810);
var jogo20170814 = ["Santos", "Fluminense", 0, 0, "Campeonato Brasileiro", "2017-08-14", "Pacaembu", "Levir Culpi", [""], [""]];
jogos.push(jogo20170814);
var jogo20170827 = ["Cruzeiro", "Santos", 1, 1, "Campeonato Brasileiro", "2017-08-27", "Mineirão", "Levir Culpi", ["Bruno Henrique"], ["Rafinha"]];
jogos.push(jogo20170827);
var jogo20170910 = ["Santos", "Corinthians", 2, 0, "Campeonato Brasileiro", "2017-09-10", "Vila Belmiro", "Levir Culpi", ["Lucas Lima","Ricardo Oliveira"], [""]];
jogos.push(jogo20170910);
var jogo20170916 = ["Botafogo", "Santos", 2, 0, "Campeonato Brasileiro", "2017-09-16", "Nilton Santos", "Levir Culpi", [""], ["Rodrigo Lindoso","Guilherme"]];
jogos.push(jogo20170916);
var jogo20170923 = ["Santos", "Atlético-PR", 1, 0, "Campeonato Brasileiro", "2017-09-23", "Vila Belmiro", "Levir Culpi", ["Bruno Henrique"], [""]];
jogos.push(jogo20170923);
var jogo20171016 = ["Santos", "Vitória", 2, 2, "Campeonato Brasileiro", "2017-10-16", "Pacaembu", "Levir Culpi", ["Jean Mota","Ramon"], ["David","Wallace Reis"]];
jogos.push(jogo20171016);
var jogo20171022 = ["Santos", "Atlético-GO", 1, 0, "Campeonato Brasileiro", "2017-10-22", "Vila Belmiro", "Levir Culpi", ["Ricardo Oliveira"], [""]];
jogos.push(jogo20171022);
var jogo20171104 = ["Santos", "Atlético-MG", 3, 1, "Campeonato Brasileiro", "2017-11-04", "Vila Belmiro", "Levir Culpi", ["Arthur Gomes","David Braz","Ricardo Oliveira"], ["Fred"]];
jogos.push(jogo20171104);
var jogo20171119 = ["Santos", "Grêmio", 1, 0, "Campeonato Brasileiro", "2017-11-19", "Vila Belmiro", "Elano", ["Copete"], [""]];
jogos.push(jogo20171119);
var jogo20171126 = ["Flamengo", "Santos", 1, 2, "Campeonato Brasileiro", "2017-11-26", "Ilha do Urubu", "Elano", ["Bruno Henrique","Arthur Gomes"], ["Lucas Paquetá"]];
jogos.push(jogo20171126);
var jogo20171203 = ["Santos", "Avaí", 1, 1, "Campeonato Brasileiro", "2017-12-03", "Vila Belmiro", "Elano", ["Copete"], ["Pedro Castro"]];
jogos.push(jogo20171203);
var jogo20171210 = ["Santos", "Internacional", 1, 1, "Brasileirão de Aspirantes", "2017-12-10", "Vila Belmiro", "Kleiton Lima", ["Diego Cardoso"], ["Joanderson"]];
jogos.push(jogo20171210);
var jogo20180214 = ["Santos", "São Caetano", 2, 0, "Campeonato Paulista", "2018-02-14", "Vila Belmiro", "Jair Ventura", ["Lucas Veríssimo","Gabigol"], [""]];
jogos.push(jogo20180214);
var jogo20180225 = ["Santos", "Santo André", 2, 0, "Campeonato Paulista", "2018-02-25", "Vila Belmiro", "Jair Ventura", ["Gabigol","Eduardo Sasha"], [""]];
jogos.push(jogo20180225);
var jogo20180304 = ["Santos", "Corinthians", 1, 1, "Campeonato Paulista", "2018-03-04", "Pacaembu", "Jair Ventura", ["Diogo Vitor"], ["Renê Junior"]];
jogos.push(jogo20180304);
var jogo20180311 = ["Santos", "São Bento", 1, 3, "Campeonato Paulista", "2018-03-11", "Vila Belmiro", "Jair Ventura", ["Arthur Gomes"], ["Marcelo Cordeiro","Lúcio Flávio","Fábio Bahia"]];
jogos.push(jogo20180311);
var jogo20180315 = ["Santos", "Nacional-URU", 3, 1, "Copa Libertadores", "2018-03-15", "Pacaembu", "Jair Ventura", ["Eduardo Sasha (2x)","Rodrygo"], ["Oliva"]];
jogos.push(jogo20180315);
var jogo20180321 = ["Santos", "Botafogo-SP", 0, 0, "Campeonato Paulista", "2018-03-21", "Vila Belmiro", "Jair Ventura", ["","Pênaltis: (3)","Gabigol","Diogo Vitor","Arthur Gomes"], ["","Pênaltis: (1)","Jheymy"]];
jogos.push(jogo20180321);
var jogo20180324 = ["Santos", "Palmeiras", 0, 1, "Campeonato Paulista", "2018-03-24", "Pacaembu", "Jair Ventura", [""], ["Willian"]];
jogos.push(jogo20180324);
var jogo20180414 = ["Santos", "Ceará", 2, 0, "Campeonato Brasileiro", "2018-04-14", "Pacaembu", "Jair Ventura", ["Pio (GC)","Rodrygo"], [""]];
jogos.push(jogo20180414);
var jogo20180424 = ["Santos", "Estudiantes-ARG", 2, 0, "Copa Libertadores", "2018-04-24", "Vila Belmiro", "Jair Ventura", ["Gabigol","Lucas Veríssimo"], [""]];
jogos.push(jogo20180424);
var jogo20180501 = ["Nacional-URU", "Santos", 1, 0, "Copa Libertadores", "2018-05-01", "Gran Parque Central", "Jair Ventura", [""], ["Barcia"]];
jogos.push(jogo20180501);
var jogo20180510 = ["Santos", "Luverdense", 5, 1, "Copa do Brasil", "2018-05-10", "Vila Belmiro", "Jair Ventura", ["Gustavo Henrique","Gabigol (3x)","Yuri Alberto"], ["Itaqui"]];
jogos.push(jogo20180510);
var jogo20180513 = ["Santos", "Paraná", 3, 1, "Campeonato Brasileiro", "2018-05-13", "Vila Belmiro", "Jair Ventura", ["Gabigol (2x)","Rodrygo"], ["Silvinho"]];
jogos.push(jogo20180513);
var jogo20180524 = ["Santos", "Real Garcilaso-PER", 0, 0, "Copa Libertadores", "2018-05-24", "Vila Belmiro", "Jair Ventura", [""], [""]];
jogos.push(jogo20180524);
var jogo20180527 = ["Santos", "Cruzeiro", 0, 1, "Campeonato Brasileiro", "2018-05-27", "Pacaembu", "Jair Ventura", [""], ["Bruno Silva"]];
jogos.push(jogo20180527);
var jogo20180603 = ["Santos", "Vitória", 5, 2, "Campeonato Brasileiro", "2018-06-03", "Vila Belmiro", "Jair Ventura", ["Renato","Gabigol","Rodrygo(3x)"], ["Neílton","Ramon"]];
jogos.push(jogo20180603);
var jogo20180610 = ["Santos", "Internacional", 1, 2, "Campeonato Brasileiro", "2018-06-10", "Vila Belmiro", "Jair Ventura", ["Gabigol"], ["Leandro Damião","Victor Cuesta"]];
jogos.push(jogo20180610);
var jogo20180719 = ["Santos", "Palmeiras", 1, 1, "Campeonato Brasileiro", "2018-07-19", "Pacaembu", "Jair Ventura", ["Gustavo Henrique"], ["Lucas Lima"]];
jogos.push(jogo20180719);
var jogo20180725 = ["Santos", "Flamengo", 1, 1, "Campeonato Brasileiro", "2018-07-25", "Vila Belmiro", "Serginho Chulapa", ["Rodrygo"], ["Éverton Ribeiro"]];
jogos.push(jogo20180725);
var jogo20180729 = ["Santos", "América-MG", 0, 1, "Campeonato Brasileiro", "2018-07-29", "Vila Belmiro", "Serginho Chulapa", [""], ["Ruy"]];
jogos.push(jogo20180729);
var jogo20180801 = ["Santos", "Cruzeiro", 0, 1, "Copa do Brasil", "2018-08-01", "Vila Belmiro", "Cuca", [""], ["Raniel"]];
jogos.push(jogo20180801);
var jogo20180804 = ["Botafogo", "Santos", 0, 0, "Campeonato Brasileiro", "2018-08-04", "Nilton Santos", "Cuca", [""], [""]];
jogos.push(jogo20180804);
var jogo20180818 = ["Santos", "Sport", 3, 0, "Campeonato Brasileiro", "2018-08-18", "Vila Belmiro", "Cuca", ["Eduardo Sasha","Rodrygo","Victor Ferraz"], [""]];
jogos.push(jogo20180818);
var jogo20180821 = ["Independiente-ARG", "Santos", 0, 0, "Copa Libertadores", "2018-08-21", "Libertadores de América", "Cuca", [""], [""]];
jogos.push(jogo20180821);
var jogo20180825 = ["Santos", "Bahia", 2, 0, "Campeonato Brasileiro", "2018-08-25", "Vila Belmiro", "Cuca", ["Derlis González","Gabigol"], [""]];
jogos.push(jogo20180825);
var jogo20180828 = ["Santos", "Independiente-ARG", 0, 0, "Copa Libertadores", "2018-08-28", "Pacaembu", "Cuca", [""], [""]];
jogos.push(jogo20180828);
var jogo20180901 = ["Vasco", "Santos", 0, 3, "Campeonato Brasileiro", "2018-09-01", "Maracanã", "Cuca", ["Gabigol (3x)"], [""]];
jogos.push(jogo20180901);
var jogo20180906 = ["Santos", "Grêmio", 0, 0, "Campeonato Brasileiro", "2018-09-06", "Pacaembu", "Cuca", [""], [""]];
jogos.push(jogo20180906);
var jogo20180916 = ["Santos", "São Paulo", 0, 0, "Campeonato Brasileiro", "2018-09-16", "Vila Belmiro", "Cuca", [""], [""]];
jogos.push(jogo20180916);
var jogo20180930 = ["Santos", "Atlético-PR", 1, 0, "Campeonato Brasileiro", "2018-09-30", "Vila Belmiro", "Cuca", ["Carlos Sánchez"], [""]];
jogos.push(jogo20180930);
var jogo20181013 = ["Santos", "Corinthians", 1, 0, "Campeonato Brasileiro", "2018-10-13", "Pacaembu", "Cuca", ["Gabigol"], [""]];
jogos.push(jogo20181013);
var jogo20181027 = ["Santos", "Fluminense", 3, 0, "Campeonato Brasileiro", "2018-10-27", "Vila Belmiro", "Cuca", ["Gabigol","Carlos Sánchez","Victor Ferraz"], [""]];
jogos.push(jogo20181027);
var jogo20181112 = ["Santos", "Chapecoense", 0, 1, "Campeonato Brasileiro", "2018-11-12", "Pacaembu", "Cuca", [""], ["Leandro Pereira"]];
jogos.push(jogo20181112);
var jogo20181115 = ["Flamengo", "Santos", 1, 0, "Campeonato Brasileiro", "2018-11-15", "Maracanã", "Cuca", [""], ["Henrique Dourado"]];
jogos.push(jogo20181115);
var jogo20181118 = ["América-MG", "Santos", 2, 1, "Campeonato Brasileiro", "2018-11-18", "Arena Independência", "Cuca", ["Gabigol"], ["Rafael Moura","Matheusinho"]];
jogos.push(jogo20181118);
var jogo20181121 = ["Santos", "Botafogo", 1, 1, "Campeonato Brasileiro", "2018-11-21", "Vila Belmiro", "Cuca", ["Rodrygo"], ["Brenner"]];
jogos.push(jogo20181121);
var jogo20181124 = ["Santos", "Atlético-MG", 3, 2, "Campeonato Brasileiro", "2018-11-24", "Vila Belmiro", "Cuca", ["Felippe Cardoso","Gabigol","Carlos Sánchez"], ["Ricardo Oliveira (2x)"]];
jogos.push(jogo20181124);
var jogo20181202 = ["Sport", "Santos", 2, 1, "Campeonato Brasileiro", "2018-12-02", "Ilha do Retiro", "Cuca", ["Rodrygo"], ["Rogério","Hernane"]];
jogos.push(jogo20181202);
var jogo20190119 = ["Santos", "Ferroviária", 1, 0, "Campeonato Paulista", "2019-01-19", "Vila Belmiro", "Jorge Sampaoli", ["Jean Mota"], [""]];
jogos.push(jogo20190119);
var jogo20190127 = ["Santos", "São Paulo", 2, 0, "Campeonato Paulista", "2019-01-27", "Pacaembu", "Jorge Sampaoli", ["Luiz Felipe","Derlis González"], [""]];
jogos.push(jogo20190127);
var jogo20190203 = ["Ituano", "Santos", 5, 1, "Campeonato Paulista", "2019-02-03", "Municipal Doutor Novelli Júnior", "Jorge Sampaoli", ["Jean Mota"], ["Marcos Serato","Morato (2x)","Léo Santos","Jonas"]];
jogos.push(jogo20190203);
var jogo20190209 = ["Santos", "Mirassol", 1, 0, "Campeonato Paulista", "2019-02-09", "Pacaembu", "Jorge Sampaoli", ["Jean Mota"], [""]];
jogos.push(jogo20190209);
var jogo20190212 = ["River Plate-URU", "Santos", 0, 0, "Copa Sul-Americana", "2019-02-12", "Luis Franzini", "Jorge Sampaoli", [""], [""]];
jogos.push(jogo20190212);
var jogo20190218 = ["Santos", "Guarani", 3, 0, "Campeonato Paulista", "2019-02-18", "Pacaembu", "Jorge Sampaoli", ["Rodrygo","Jean Mota (2x)"], [""]];
jogos.push(jogo20190218);
var jogo20190302 = ["Santos", "Oeste", 3, 2, "Campeonato Paulista", "2019-03-02", "Pacaembu", "Jorge Sampaoli", ["Betinho (GC)","Derlis González","Victor Ferraz"], ["Bruno Lopes","Matheus Jesus"]];
jogos.push(jogo20190302);
var jogo20190309 = ["Santos", "América-RN", 4, 0, "Copa do Brasil", "2019-03-09", "Pacaembu", "Jorge Sampaoli", ["Rodrygo","Aguilar","Jean Mota","Derlis González"], [""]];
jogos.push(jogo20190309);
var jogo20190315 = ["Santos", "Novorizontino", 0, 1, "Campeonato Paulista", "2019-03-15", "Pacaembu", "Jorge Sampaoli", [""], ["Murilo Henrique"]];
jogos.push(jogo20190315);
var jogo20190323 = ["Santos", "Red Bull Brasil", 2, 0, "Campeonato Paulista", "2019-03-23", "Pacaembu", "Jorge Sampaoli", ["Diego Pituca","Carlos Sánchez"], [""]];
jogos.push(jogo20190323);
var jogo20190408 = ["Santos", "Corinthians", 1, 0, "Campeonato Paulista", "2019-04-08", "Pacaembu", "Jorge Sampaoli", ["Gustavo Henrique","","Pênaltis: (6)","Rodrygo","Soteldo","Carlos Sánchez","Derlis González","Diego Pituca","Alison"], ["","","Pênaltis: (7)","Vagner Love","Ramiro","Júnior Urso","Fagner","Sornoza","Danilo Avelar","Henrique"]];
jogos.push(jogo20190408);
var jogo20190417 = ["Santos", "Vasco", 2, 0, "Copa do Brasil", "2019-04-17", "Vila Belmiro", "Jorge Sampaoli", ["Rodrygo","Jean Mota"], [""]];
jogos.push(jogo20190417);
var jogo20190428 = ["Grêmio", "Santos", 1, 2, "Campeonato Brasileiro", "2019-04-28", "Arena do Grêmio", "Jorge Sampaoli", ["Eduardo Sasha","Felipe Jonathan"], ["Éverton"]];
jogos.push(jogo20190428);
var jogo20190512 = ["Santos", "Vasco", 3, 0, "Campeonato Brasileiro", "2019-05-12", "Pacaembu", "Jorge Sampaoli", ["Diego Pituca","Rodrygo","Soteldo"], [""]];
jogos.push(jogo20190512);
var jogo20190526 = ["Santos", "Internacional", 0, 0, "Campeonato Brasileiro", "2019-05-26", "Vila Belmiro", "Jorge Sampaoli", [""], [""]];
jogos.push(jogo20190526);
var jogo20190602 = ["Ceará", "Santos", 0, 1, "Campeonato Brasileiro", "2019-06-02", "Castelão", "Jorge Sampaoli", ["Eduardo Sasha"], [""]];
jogos.push(jogo20190602);
var jogo20190608 = ["Juventus", "Santos", 1, 8, "Campeonato Paulista (Feminino)", "2019-06-08", "Conde Rodolfo Crespi (Rua Javari)", "Emily Lima", ["Maria Dias","Maria Alves","Sandrinha","Sochor","Glaucia","Katielle","Ketlen (2x)"], ["Dani"]];
jogos.push(jogo20190608);
var jogo20190609 = ["Santos", "Atlético-MG", 3, 1, "Campeonato Brasileiro", "2019-06-09", "Vila Belmiro", "Jorge Sampaoli", ["Eduardo Sasha","Jean Mota","Carlos Sánchez"], ["Alerrandro"]];
jogos.push(jogo20190609);
var jogo20190612 = ["Santos", "Corinthians", 1, 0, "Campeonato Brasileiro", "2019-06-12", "Vila Belmiro", "Jorge Sampaoli", ["Eduardo Sasha"], [""]];
jogos.push(jogo20190612);
var jogo20190713 = ["Bahia", "Santos", 0, 1, "Campeonato Brasileiro", "2019-07-13", "Pituaçu", "Jorge Sampaoli", ["Carlos Sánchez"], [""]];
jogos.push(jogo20190713);
var jogo20190721 = ["Botafogo", "Santos", 0, 1, "Campeonato Brasileiro", "2019-07-21", "Nilton Santos", "Jorge Sampaoli", ["Marinho"], [""]];
jogos.push(jogo20190721);
var jogo20190728 = ["Santos", "Avaí", 3, 1, "Campeonato Brasileiro", "2019-07-28", "Vila Belmiro", "Jorge Sampaoli", ["Felipe Jonathan","Carlos Sánchez","Derlis González"], ["João Paulo"]];
jogos.push(jogo20190728);
var jogo20190804 = ["Santos", "Goiás", 6, 1, "Campeonato Brasileiro", "2019-08-04", "Vila Belmiro", "Jorge Sampaoli", ["Lucas Veríssimo","Soteldo (2x)","Carlos Sánchez","Gustavo Henrique","Eduardo Sasha"], ["Kayke"]];
jogos.push(jogo20190804);
var jogo20190818 = ["Cruzeiro", "Santos", 2, 0, "Campeonato Brasileiro", "2019-08-18", "Mineirão", "Jorge Sampaoli", [""], ["Fred","Thiago Neves"]];
jogos.push(jogo20190818);
var jogo20190825 = ["Santos", "Fortaleza", 3, 3, "Campeonato Brasileiro", "2019-08-25", "Vila Belmiro", "Jorge Sampaoli", ["Jorge","Eduardo Sasha","Marinho"], ["Wellington Paulista (2x)","Tinga"]];
jogos.push(jogo20190825);
var jogo20190908 = ["Santos", "Athletico-PR", 1, 1, "Campeonato Brasileiro", "2019-09-08", "Vila Belmiro", "Jorge Sampaoli", ["Carlos Sánchez"], ["Braian Romero"]];
jogos.push(jogo20190908);
var jogo20190914 = ["Flamengo", "Santos", 1, 0, "Campeonato Brasileiro", "2019-09-14", "Maracanã", "Jorge Sampaoli", [""], ["Gabriel"]];
jogos.push(jogo20190914);
var jogo20190921 = ["Santos", "São Paulo", 2, 2, "Campeonato Paulista (Feminino)", "2019-09-21", "Pacaembu", "Guilherme Giudice", ["Sole Jaimes","Ketlen"], ["Thaís","Natane"]];
jogos.push(jogo20190921);
var jogo20190921 = ["Santos", "Grêmio", 0, 3, "Campeonato Brasileiro", "2019-09-21", "Vila Belmiro", "Jorge Sampaoli", [""], ["Luan","Pepê","Éverton"]];
jogos.push(jogo20190921);
var jogo20190929 = ["Santos", "CSA", 2, 0, "Campeonato Brasileiro", "2019-09-29", "Vila Belmiro", "Jorge Sampaoli", ["Carlos Sánchez","Eduardo Sasha"], [""]];
jogos.push(jogo20190929);
var jogo20191005 = ["Vasco", "Santos", 0, 1, "Campeonato Brasileiro", "2019-10-05", "São Januário", "Jorge Sampaoli", ["Tailson"], [""]];
jogos.push(jogo20191005);
var jogo20191009 = ["Santos", "Palmeiras", 2, 0, "Campeonato Brasileiro", "2019-10-09", "Vila Belmiro", "Jorge Sampaoli", ["Gustavo Henrique","Marinho"], [""]];
jogos.push(jogo20191009);
var jogo20191013 = ["Internacional", "Santos", 0, 0, "Campeonato Brasileiro", "2019-10-13", "Beira-Rio", "Jorge Sampaoli", [""], [""]];
jogos.push(jogo20191013);
var jogo20191020 = ["Atlético-MG", "Santos", 2, 0, "Campeonato Brasileiro", "2019-10-20", "Arena Independência", "Jorge Sampaoli", [""], ["Leonardo Silva","Luan"]];
jogos.push(jogo20191020);
var jogo20191103 = ["Santos", "Botafogo", 4, 1, "Campeonato Brasileiro", "2019-11-03", "Vila Belmiro", "Jorge Sampaoli", ["Eduardo Sasha","Marinho","Soteldo (2x)"], ["Igor Cássio"]];
jogos.push(jogo20191103);
var jogo20191109 = ["Goiás", "Santos", 0, 3, "Campeonato Brasileiro", "2019-11-09", "Serra Dourada", "Jorge Sampaoli", ["Soteldo (2x)","Marinho"], [""]];
jogos.push(jogo20191109);
var jogo20191116 = ["Santos", "São Paulo", 1, 1, "Campeonato Brasileiro", "2019-11-16", "Vila Belmiro", "Jorge Sampaoli", ["Carlos Sánchez"], ["Daniel Alves"]];
jogos.push(jogo20191116);
var jogo20191123 = ["Santos", "Cruzeiro", 4, 1, "Campeonato Brasileiro", "2019-11-23", "Vila Belmiro", "Jorge Sampaoli", ["Eduardo Sasha","Marinho","Soteldo","Diego Pituca"], ["Orejuela"]];
jogos.push(jogo20191123);
var jogo20191201 = ["Santos", "Chapecoense", 2, 0, "Campeonato Brasileiro", "2019-12-01", "Vila Belmiro", "Jorge Sampaoli", ["Lucas Veríssimo","Evandro"], [""]];
jogos.push(jogo20191201);
var jogo20191208 = ["Santos", "Flamengo", 4, 0, "Campeonato Brasileiro", "2019-12-08", "Vila Belmiro", "Jorge Sampaoli", ["Marinho","Carlos Sánchez (2x)","Eduardo Sasha"], [""]];
jogos.push(jogo20191208);
var jogo20200123 = ["Santos", "Red Bull Bragantino", 0, 0, "Campeonato Paulista", "2020-01-23", "Vila Belmiro", "Jesualdo Ferreira", [""], [""]];
jogos.push(jogo20200123);
var jogo20200210 = ["Santos", "Botafogo-SP", 2, 0, "Campeonato Paulista", "2020-02-10", "Vila Belmiro", "Jesualdo Ferreira", ["Carlos Sánchez","Eduardo Sasha"], [""]];
jogos.push(jogo20200210);
var jogo20200216 = ["Ferroviária", "Santos", 0, 0, "Campeonato Paulista", "2020-02-16", "Fonte Luminosa", "Jesualdo Ferreira", [""], [""]];
jogos.push(jogo20200216);
var jogo20200222 = ["Ituano", "Santos", 2, 0, "Campeonato Paulista", "2020-02-22", "Municipal Doutor Novelli Júnior", "Jesualdo Ferreira", [""], ["Yago","Corrêa"]];
jogos.push(jogo20200222);
var jogo20200229 = ["Santos", "Palmeiras", 0, 0, "Campeonato Paulista", "2020-02-29", "Pacaembu", "Jesualdo Ferreira", [""], [""]];
jogos.push(jogo20200229);
var jogo20200303 = ["Defensa y Justicia-ARG", "Santos", 1, 2, "Copa Libertadores", "2020-03-03", "Norberto 'Tito' Tomaghello", "Jesualdo Ferreira", ["Jobson","Kaio Jorge"], ["Juan Rodríguez"]];
jogos.push(jogo20200303);
var jogo20200307 = ["Santos", "Mirassol", 3, 1, "Campeonato Paulista", "2020-03-07", "Vila Belmiro", "Jesualdo Ferreira", ["Yuri Alberto","Diego Pituca","Eduardo Sasha"], ["Rafael Silva"]];
jogos.push(jogo20200307);
var jogo20210130 = ["Palmeiras", "Santos", 1, 0, "Copa Libertadores", "2021-01-30", "Maracanã", "Cuca", [""], ["Breno Lopes"]];
jogos.push(jogo20210130);
var jogo20210822 = ["Santos", "Internacional", 2, 2, "Campeonato Brasileiro", "2021-08-22", "Vila Belmiro", "Fernando Diniz", ["Gabriel Pirani","Madson"], ["Gabriel Mercado","Yuri Alberto"]];
jogos.push(jogo20210822);
var jogo20211010 = ["Santos", "Grêmio", 1, 0, "Campeonato Brasileiro", "2021-10-10", "Vila Belmiro", "Fábio Carille", ["Wagner Leonardo"], [""]];
jogos.push(jogo20211010);
var jogo20211023 = ["Santos", "América-MG", 0, 2, "Campeonato Brasileiro", "2021-10-23", "Vila Belmiro", "Fábio Carille", [""], ["Ademir","Alê"]];
jogos.push(jogo20211023);
var jogo20211107 = ["Santos", "Palmeiras", 0, 2, "Campeonato Brasileiro", "2021-11-07", "Vila Belmiro", "Fábio Carille", [""], ["Rony","Rafael Veiga"]];
jogos.push(jogo20211107);
var jogo20211110 = ["Santos", "Red Bull Bragantino", 2, 0, "Campeonato Brasileiro", "2021-11-10", "Vila Belmiro", "Fábio Carille", ["Marinho","Carlos Sánchez"], [""]];
jogos.push(jogo20211110);
var jogo20211117 = ["Santos", "Chapecoense", 2, 0, "Campeonato Brasileiro", "2021-11-17", "Vila Belmiro", "Fábio Carille", ["Marinho","Marcos Guilherme"], [""]];
jogos.push(jogo20211117);
var jogo20211125 = ["Santos", "Fortaleza", 2, 0, "Campeonato Brasileiro", "2021-11-25", "Vila Belmiro", "Fábio Carille", ["Marcos Guilherme (2x)"], [""]];
jogos.push(jogo20211125);
var jogo20211128 = ["Internacional", "Santos", 1, 1, "Campeonato Brasileiro", "2021-11-28", "Beira-Rio", "Fábio Carille", ["Marcos Leonardo"], ["Luiz Felipe (GC)"]];
jogos.push(jogo20211128);
var jogo20211209 = ["Santos", "Cuiabá", 1, 1, "Campeonato Brasileiro", "2021-12-09", "Vila Belmiro", "Fábio Carille", ["Lucas Braga"], ["Marlon"]];
jogos.push(jogo20211209);