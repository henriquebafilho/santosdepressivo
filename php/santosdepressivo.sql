-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 01-Ago-2020 às 02:40
-- Versão do servidor: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jogos`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `santosdepressivo`
--

CREATE TABLE `santosdepressivo` (
  `id` int(11) NOT NULL,
  `mandante` int(1) NOT NULL,
  `adversario` varchar(50) NOT NULL,
  `golsSantos` int(2) NOT NULL,
  `golsAdversario` int(2) NOT NULL,
  `campeonato` varchar(100) NOT NULL,
  `dataJogo` date NOT NULL,
  `estadio` varchar(50) NOT NULL,
  `tecnico` varchar(50) NOT NULL,
  `autorSantos` text NOT NULL,
  `autorAdversario` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Extraindo dados da tabela `santosdepressivo`
--

INSERT INTO `santosdepressivo` (`id`, `mandante`, `adversario`, `golsSantos`, `golsAdversario`, `campeonato`, `dataJogo`, `estadio`, `tecnico`, `autorSantos`, `autorAdversario`) VALUES
(204, 1, 'Corinthians', 2, 0, 'Campeonato Brasileiro', '2002-12-08', 'Morumbi', 'Leão', '-Alberto<br>-Renato', ''),
(205, 1, 'Boca Juniors-ARG', 1, 3, 'Copa Libertadores', '2003-07-02', 'Morumbi', 'Leão', '-Alex', '-Tévez<br>-Delgado<br>-Schiavi'),
(206, 1, 'Botafogo', 4, 1, 'Campeonato Brasileiro', '2019-11-03', 'Vila Belmiro', 'Jorge Sampaoli', '-Eduardo Sasha<br>-Marinho<br>-Soteldo(2x)', '-Igor Cássio'),
(207, 1, 'Atlético-PR', 4, 1, 'Campeonato Brasileiro', '2011-10-29', 'Pacaembu', 'Muricy Ramalho', '-Neymar(4x)', '-Guerrón'),
(208, 1, 'Figueirense', 3, 2, 'Copa do Brasil', '2015-10-01', 'Pacaembu', 'Dorival Júnior', '-Neto Berola<br>-Gabigol<br>-Marquinhos Gabriel', '-Carlos Alberto<br>-Bruno Alves'),
(209, 1, 'Náutico', 3, 1, 'Campeonato Brasileiro', '2009-11-07', 'Pacaembu', 'Vanderlei Luxemburgo', '-Kléber Pereira<br>-Neymar(2x)', '-Aílton'),
(210, 1, 'Ponte Preta', 2, 1, 'Campeonato Brasileiro', '2013-10-12', 'Pacaembu', 'Claudinei Oliveira', '-Éverton Costa<br>-Montillo', '-Rafael Ratão'),
(211, 1, 'Bahia', 3, 0, 'Campeonato Brasileiro', '2013-11-14', 'Pacaembu', 'Claudinei Oliveira', '-Cícero(2x)<br>-Montillo', ''),
(212, 1, 'Botafogo-SP', 5, 1, 'Campeonato Paulista', '2014-02-01', 'Vila Belmiro', 'Oswaldo de Oliveira', '-Gabigol(2x)<br>-Emerson<br>-Guevânio<br>-Cícero', '-Hudson'),
(213, 1, 'Palmeiras', 2, 0, 'Campeonato Brasileiro', '2014-07-17', 'Vila Belmiro', 'Oswaldo de Oliveira', '-Bruno Uvini<br>-Alisson', ''),
(214, 1, 'Goiás', 2, 0, 'Campeonato Brasileiro', '2014-09-28', 'Pacaembu', 'Enderson Moreira', '-David Braz<br>-Geuvânio', ''),
(215, 1, 'Ituano', 3, 0, 'Campeonato Paulista', '2015-02-01', 'Vila Belmiro', 'Enderson Moreira', '-Chiquinho<br>-Geuvânio(2x)', ''),
(216, 0, 'Portuguesa', 3, 1, 'Campeonato Paulista', '2015-02-22', 'Pacaembu', 'Enderson Moreira', '-Robinho(2x)<br>-Cicinho', '-Jean Mota'),
(217, 1, 'Audax-SP', 1, 0, 'Campeonato Paulista', '2015-03-21', 'Vila Belmiro', 'Marcelo Fernandes', '-Ricardo Oliveira', ''),
(218, 1, 'Cruzeiro', 1, 0, 'Campeonato Brasileiro', '2015-05-17', 'Vila Belmiro', 'Marcelo Fernandes', '-Geuvânio', ''),
(219, 1, 'Sport', 2, 2, 'Campeonato Brasileiro', '2015-05-31', 'Vila Belmiro', 'Marcelo Fernandes', '-Werley<br>-Robinho', '-Joelinton<br>-Samuel Xavier'),
(220, 1, 'Coritiba', 3, 0, 'Campeonato Brasileiro', '2015-08-08', 'Vila Belmiro', 'Dorival Júnior', '-Geuvânio<br>-Ivan(Gol Contra)<br>-Ricardo Oliveira', ''),
(221, 1, 'Fluminense', 3, 1, 'Campeonato Brasileiro', '2015-10-04', 'Vila Belmiro', 'Dorival Júnior', '-Lucas Lima<br>-Marquinhos Gabriel<br>-Neto Berola', '-Robert'),
(222, 1, 'São Bernardo', 1, 1, 'Campeonato Paulista', '2016-01-30', 'Vila Belmiro', 'Dorival Júnior', '-Gabigol', '-Luciano Castán'),
(223, 1, 'Mogi Mirim', 4, 1, 'Campeonato Paulista', '2016-02-25', 'Pacaembu', 'Dorival Júnior', '-Bruno Costa(Gol Contra)<br>-Lucas Lima<br>-Joel(2x)', 'Wendel'),
(224, 1, 'Corinthians', 2, 0, 'Campeonato Paulista', '2016-03-06', 'Vila Belmiro', 'Dorival Júnior', '-Ricardo Oliveira(2x)', ''),
(225, 1, 'Flamengo', 4, 0, 'Campeonato Brasileiro', '2019-12-08', 'Vila Belmiro', 'Jorge Sampaoli', '-Marinho<br>-Carlos Sánchez(2x)<br>-Eduardo Sasha', ''),
(226, 1, 'Água Santa', 1, 0, 'Campeonato Paulista', '2016-03-12', 'Pacaembu', 'Dorival Júnior', '-Eli Sabiá', ''),
(227, 1, 'São Bento', 2, 0, 'Campeonato Paulista', '2016-04-16', 'Vila Belmiro', 'Dorival Júnior', '-Vitor Bueno(2x)', ''),
(228, 1, 'Palmeiras', 2, 2, 'Campeonato Paulista', '2016-04-24', 'Vila Belmiro', 'Dorival Júnior', '-Gabigol(2x)\r\n<br>\r\n<br>\r\nPênaltis (3):<br>\r\n-David Braz<br>-Zeca<br>-Victor Ferraz', '-Rafael Marques(2x)\r\n<br>\r\n<br>\r\nPênaltis (2):<br>\r\n-Cleiton Xavier<br>-Jean'),
(229, 1, 'Audax-SP', 1, 0, 'Campeonato Paulista', '2016-05-08', 'Vila Belmiro', 'Dorival Júnior', '-Ricardo Oliveira', ''),
(230, 1, 'Coritiba', 2, 1, 'Campeonato Brasileiro', '2016-05-22', 'Vila Belmiro', 'Dorival Júnior', '-Vitor Bueno<br>-Renato', '-Kléber'),
(231, 1, 'Internacional', 0, 1, 'Campeonato Brasileiro', '2016-05-29', 'Vila Belmiro', 'Dorival Júnior', '', '-Aylon'),
(232, 1, 'Botafogo', 3, 0, 'Campeonato Brasileiro', '2016-06-05', 'Pacaembu', 'Dorival Júnior', '-Vitor Bueno<br>-Paulinho<br>-Bruno Silva(Gol Contra)', ''),
(233, 1, 'Sport', 2, 0, 'Campeonato Brasileiro', '2016-06-15', 'Vila Belmiro', 'Oswaldo de Oliveira', '-Gabigol<br>-Vitor Bueno', ''),
(234, 1, 'São Paulo', 3, 0, 'Campeonato Brasileiro', '2016-06-26', 'Pacaembu', 'Dorival Júnior', '-Vitor Bueno<br>-Rodrigão<br>-Lucas Lima', ''),
(235, 1, 'Kenitra-MAR', 5, 1, 'Amistoso', '2017-01-28', 'Pacaembu', 'Dorival Júnior', '-Rodrigão<br>-Vitor Bueno(2x)<br>-Vladimir Hernández<br>-Thiago Ribeiro', '-Hamza'),
(236, 1, 'Floresta-CE', 1, 0, 'Copinha', '2017-01-04', 'Arena Barueri', 'Marcos Soares', '-Giovane', ''),
(237, 0, 'Audax-SP', 1, 1, 'Copinha', '2017-01-08', 'Arena Barueri', 'Marcos Soares', '-André Anderson', '-Wesley'),
(238, 1, 'Linense', 6, 2, 'Campeonato Paulista', '2017-02-03', 'Vila Belmiro', 'Dorival Júnior', '-Rodrigão(2x)<br>-Lucas Lima<br>-Arthur Gomes<br>-Vitor Bueno<br>-Thiago Ribeiro', '-Thiago Santos<br>-Gabrielzinho'),
(239, 0, 'Botafogo', 1, 0, 'Campeonato Brasileiro', '2019-07-21', 'Nilton Santos', 'Jorge Sampaoli', '-Marinho', ''),
(240, 0, 'Botafogo', 0, 2, 'Campeonato Brasileiro', '2017-09-16', 'Nilton Santos', 'Levir Culpi', '', '-Rodrigo Lindoso<br>-Guilherme'),
(241, 0, 'Botafogo', 0, 0, 'Campeonato Brasileiro', '2018-08-04', 'Nilton Santos', 'Cuca', '', ''),
(242, 1, 'Chapecoense', 3, 0, 'Campeonato Brasileiro', '2016-07-03', 'Vila Belmiro', 'Dorival Júnior', '-Rodrigão<br>-Copete<br>-Yuri', ''),
(243, 1, 'Ponte Preta', 3, 1, 'Campeonato Brasileiro', '2016-07-16', 'Vila Belmiro', 'Dorival Júnior', '-Victor Ferraz<br>-Vitor Bueno<br>-Gabigol', '-Roger'),
(244, 1, 'Cruzeiro', 2, 0, 'Campeonato Brasileiro', '2016-07-31', 'Vila Belmiro', 'Dorival Júnior', '-Vitor Bueno<br>-Lucas(Gol Contra)', ''),
(245, 0, 'Coritiba', 1, 2, 'Campeonato Brasileiro', '2016-08-21', 'Couto Pereira', 'Dorival Júnior', '-Ricardo Oliveira', '-Kléber<br>-Iago Dias'),
(246, 1, 'Vasco', 3, 1, 'Copa do Brasil', '2016-08-24', 'Vila Belmiro', 'Dorival Júnior', '-Renato<br>-Ricardo Oliveira<br>-Lucas Lima', '-Éder Luís'),
(247, 1, 'Benfica-POR', 1, 1, 'Amistoso (100 anos da Vila Belmiro)', '2016-10-08', 'Vila Belmiro', 'Dorival Júnior', '-Fábian Noguera', '-Salvio'),
(248, 1, 'Grêmio', 1, 1, 'Campeonato Brasileiro', '2016-10-16', 'Vila Belmiro', 'Dorival Júnior', '-Fábian Noguera', '-Éverton'),
(249, 1, 'Corinthians', 2, 1, 'Campeonato Brasileiro', '2016-09-11', 'Vila Belmiro', 'Dorival Júnior', '-Vitor Bueno<br>-Renato', '-Marlone'),
(250, 1, 'Santa Cruz', 3, 2, 'Campeonato Brasileiro', '2016-09-18', 'Pacaembu', 'Dorival Júnior', '-Copete<br>-Jean Mota<br>-Vitor Bueno', '-Keno(2x)'),
(251, 0, 'São Paulo', 1, 0, 'Campeonato Brasileiro', '2016-10-13', 'Pacaembu', 'Dorival Júnior', '-Copete', ''),
(252, 1, 'Palmeiras', 1, 0, 'Campeonato Brasileiro', '2016-10-29', 'Vila Belmiro', 'Dorival Júnior', '-Copete', ''),
(253, 0, 'Ponte Preta', 2, 1, 'Campeonato Brasileiro', '2016-11-06', 'Moisés Lucarelli', 'Dorival Júnior', '-Ricardo Oliveira<br>-Copete', '-William Pottker'),
(254, 0, 'Red Bull Brasil', 3, 2, 'Campeonato Paulista', '2017-02-12', 'Pacaembu', 'Dorival Júnior', '-Vitor Bueno<br>-Rodrigão<br>-Kayke', '-Misael<br>-Nixon'),
(255, 0, 'São Bernardo', 4, 1, 'Campeonato Paulista', '2017-03-12', 'Primeiro de Maio', 'Dorival Júnior', '-Bruno Henrique(3x)<br>-Rafael Longuine', '-Geandro'),
(256, 1, 'The Strongest-BOL', 2, 0, 'Copa Libertadores', '2017-03-16', 'Vila Belmiro', 'Dorival Júnior', '-Ricardo Oliveira<br>-Renato', ''),
(257, 1, 'Santo André', 2, 3, 'Campeonato Paulista', '2010-05-02', 'Pacaembu', 'Dorival Júnior', '-Neymar(2x)', '-Nunes<br>-Alê<br>-Branquinho'),
(258, 0, 'Santo André', 1, 0, 'Campeonato Paulista', '2017-03-25', 'Bruno José Daniel', 'Dorival Júnior', '-Copete', ''),
(259, 1, 'Independiente Santa Fé-COL', 3, 2, 'Copa Libertadores', '2017-05-04', 'Pacaembu', 'Dorival Júnior', '-Ricardo Oliveira<br>-Vitor Bueno<br>-Lucas Veríssimo', '-Arango<br>-Perlaza'),
(260, 0, 'Fluminense', 2, 3, 'Campeonato Brasileiro', '2017-05-14', 'Maracanã', 'Dorival Júnior', '-Victor Ferraz<br>-Vladimir Hernández', '-Henrique Dourado(2x)<br>-Sornoza'),
(261, 1, 'Coritiba', 1, 0, 'Campeonato Brasileiro', '2017-05-20', 'Vila Belmiro', 'Dorival Júnior', '-David Braz', ''),
(262, 1, 'Sporting Cristal-PER', 4, 0, 'Copa Libertadores', '2017-05-23', 'Vila Belmiro', 'Dorival Júnior', '-David Braz(2x)<br>-Ricardo Oliveira<br>-Vitor Bueno', ''),
(263, 1, 'Cruzeiro', 0, 1, 'Campeonato Brasileiro', '2017-05-28', 'Vila Belmiro', 'Dorival Júnior', '', '-Thiago Neves'),
(264, 1, 'Botafogo', 1, 0, 'Campeonato Brasileiro', '2017-06-07', 'Pacaembu', 'Dorival Júnior', '-Victor Ferraz', ''),
(265, 0, 'Atlético-PR', 2, 0, 'Campeonato Brasileiro', '2017-06-11', 'Arena da Baixada', 'Elano', '-Kayke(2x)', ''),
(266, 1, 'Palmeiras', 1, 0, 'Campeonato Brasileiro', '2017-06-14', 'Vila Belmiro', 'Levir Culpi', '-Kayke', ''),
(267, 1, 'Ponte Preta', 0, 0, 'Campeonato Brasileiro', '2017-06-17', 'Pacaembu', 'Levir Culpi', '', ''),
(268, 1, 'São Paulo', 3, 2, 'Campeonato Brasileiro', '2017-07-09', 'Vila Belmiro', 'Levir Culpi', '-Copete(3x)', '-Shaylon<br>-Arboleda'),
(269, 1, 'Chapecoense', 1, 0, 'Campeonato Brasileiro', '2017-07-19', 'Vila Belmiro', 'Levir Culpi', '-Vecchio', ''),
(270, 1, 'Bahia', 3, 0, 'Campeonato Brasileiro', '2017-07-23', 'Pacaembu', 'Levir Culpi', '-Bruno Henrique(3x)', ''),
(271, 1, 'Flamengo', 4, 2, 'Copa do Brasil', '2017-07-26', 'Vila Belmiro', 'Levir Culpi', '-Bruno Henrique<br>-Copete(2x)<br>-Victor Ferraz', '-Berrío<br>-Guerrero'),
(272, 1, 'Flamengo', 3, 2, 'Campeonato Brasileiro', '2017-08-02', 'Pacaembu', 'Levir Culpi', '-Bruno Henrique<br>-Alisson<br>-Ricardo Oliveira', '-Éverton Ribeiro<br>-Felipe Vizeu'),
(273, 0, 'Avaí', 0, 0, 'Campeonato Brasileiro', '2017-08-06', 'da Ressacada', 'Levir Culpi', '', ''),
(274, 1, 'Atlético-PR', 1, 0, 'Copa Libertadores', '2017-08-10', 'Vila Belmiro', 'Levir Culpi', '-Bruno Henrique', ''),
(275, 1, 'Fluminense', 0, 0, 'Campeonato Brasileiro', '2017-08-14', 'Pacaembu', 'Levir Culpi', '', ''),
(276, 0, 'Cruzeiro', 1, 1, 'Campeonato Brasileiro', '2017-08-27', 'Mineirão', 'Levir Culpi', '-Bruno Henrique', '-Rafinha'),
(277, 1, 'Corinthians', 2, 0, 'Campeonato Brasileiro', '2017-09-10', 'Vila Belmiro', 'Levir Culpi', '-Lucas Lima<br>-Ricardo Oliveira', ''),
(278, 1, 'Atlético-PR', 1, 0, 'Campeonato Brasileiro', '2017-09-23', 'Vila Belmiro', 'Levir Culpi', '-Bruno Henrique', ''),
(279, 1, 'Vitória', 2, 2, 'Campeonato Brasileiro', '2017-10-16', 'Pacaembu', 'Levir Culpi', '-Jean Mota<br>-Ramon', '-David<br>-Wallace Reis'),
(280, 1, 'Atlético-GO', 1, 0, 'Campeonato Brasileiro', '2017-10-22', 'Vila Belmiro', 'Levir Culpi', '-Ricardo Oliveira', ''),
(281, 1, 'Atlético-MG', 3, 1, 'Campeonato Brasileiro', '2017-11-04', 'Vila Belmiro', 'Levir Culpi', '-Arthur Gomes<br>-David Braz<br>-Ricardo Oliveira', '-Fred'),
(282, 1, 'Grêmio', 1, 0, 'Campeonato Brasileiro', '2017-11-19', 'Vila Belmiro', 'Elano', '-Copete', ''),
(283, 0, 'Flamengo', 2, 1, 'Campeonato Brasileiro', '2017-11-26', 'Ilha do Urubu', 'Elano', '-Bruno Henrique<br>-Arthur Gomes', '-Lucas Paquetá'),
(284, 1, 'Avaí', 1, 1, 'Campeonato Brasileiro', '2017-12-03', 'Vila Belmiro', 'Elano', '-Copete', '-Pedro Castro'),
(285, 1, 'São Caetano', 2, 0, 'Campeonato Paulista', '2018-02-14', 'Vila Belmiro', 'Jair Ventura', '-Lucas Veríssimo<br>-Gabigol', ''),
(286, 1, 'Santo André', 2, 0, 'Campeonato Paulista', '2018-02-25', 'Vila Belmiro', 'Jair Ventura', '-Gabigol<br>-Eduardo Sasha', ''),
(287, 1, 'Corinthians', 1, 1, 'Campeonato Paulista', '2018-03-04', 'Pacaembu', 'Jair Ventura', '-Diogo Vitor', '-Renê Junior'),
(288, 1, 'São Bento', 1, 3, 'Campeonato Paulista', '2018-03-11', 'Vila Belmiro', 'Jair Ventura', '-Arthur Gomes', '-Marcelo Cordeiro<br>-Lúcio Flávio<br>-Fábio Bahia'),
(289, 1, 'Nacional-URU', 3, 1, 'Copa Libertadores', '2018-03-15', 'Pacaembu', 'Jair Ventura', '-Eduardo Sasha(2x)<br>-Rodrygo', '-Oliva'),
(290, 1, 'Botafogo-SP', 0, 0, 'Campeonato Paulista', '2018-03-21', 'Vila Belmiro', 'Jair Ventura', '<br><br>\r\nPênaltis (3):<br>-Gabigol<br>-Diogo Vitor<br>-Arthur Gomes', '<br>\r\nPênaltis (1):<br>-Jheymy'),
(291, 1, 'Palmeiras', 0, 1, 'Campeonato Paulista', '2018-03-24', 'Pacaembu', 'Jair Ventura', '', '-Willian'),
(292, 1, 'Ceará', 2, 0, 'Campeonato Brasileiro', '2018-04-14', 'Pacaembu', 'Jair Ventura', '-Pio(Gol Contra)<br>-Rodrygo', ''),
(293, 1, 'Estudiantes-ARG', 2, 0, 'Copa Libertadores', '2018-04-24', 'Vila Belmiro', 'Jair Ventura', '-Gabigol<br>-Lucas Veríssimo', ''),
(294, 1, 'Luverdense', 5, 1, 'Copa do Brasil', '2018-05-10', 'Vila Belmiro', 'Jair Ventura', '-Gustavo Henrique<br>-Gabigol(3x)<br>-Yuri Alberto', '-Itaqui'),
(295, 1, 'Paraná', 3, 1, 'Campeonato Brasileiro', '2018-05-13', 'Vila Belmiro', 'Jair Ventura', '-Gabigol(2x)<br>-Rodrygo', '-Silvinho'),
(296, 1, 'Real Garcilaso-PER', 0, 0, 'Copa Libertadores', '2018-05-24', 'Vila Belmiro', 'Jair Ventura', '', ''),
(297, 1, 'Cruzeiro', 0, 1, 'Copa do Brasil', '2018-08-01', 'Vila Belmiro', 'Cuca', '', '-Raniel'),
(298, 1, 'Vitória', 5, 2, 'Campeonato Brasileiro', '2018-06-03', 'Vila Belmiro', 'Jair Ventura', '-Renato<br>-Gabigol<br>Rodrygo(3x)', '-Neílton<br>-Ramon'),
(300, 1, 'Internacional', 1, 2, 'Campeonato Brasileiro', '2018-06-10', 'Vila Belmiro', 'Jair Ventura', '-Gabigol', '-Leandro Damião<br>-Victor Cuesta'),
(299, 1, 'Cruzeiro', 0, 1, 'Campeonato Brasileiro', '2018-05-27', 'Pacaembu', 'Jair Ventura', '', '-Bruno Silva'),
(301, 1, 'Palmeiras', 1, 1, 'Campeonato Brasileiro', '2018-07-19', 'Pacaembu', 'Jair Ventura', '-Gustavo Henrique', '-Lucas Lima'),
(302, 1, 'Flamengo', 1, 1, 'Campeonato Brasileiro', '2018-07-25', 'Vila Belmiro', 'Serginho Chulapa', '-Rodrygo', '-Éverton Ribeiro'),
(303, 1, 'América-MG', 0, 1, 'Campeonato Brasileiro', '2018-07-29', 'Vila Belmiro', 'Serginho Chulapa', '', '-Ruy'),
(304, 1, 'Sport', 3, 0, 'Campeonato Brasileiro', '2018-08-18', 'Vila Belmiro', 'Cuca', '-Eduardo Sasha<br>-Rodrygo<br>-Victor Ferraz', ''),
(305, 0, 'Independiente-ARG', 0, 0, 'Copa Libertadores', '2018-08-21', 'Libertadores de América', 'Cuca', '', ''),
(306, 1, 'Bahia', 2, 0, 'Campeonato Brasileiro', '2018-08-25', 'Vila Belmiro', 'Cuca', '-Derlis González<br>-Gabigol', ''),
(307, 1, 'Independiente-ARG', 0, 0, 'Copa Libertadores', '2018-08-28', 'Pacaembu', 'Cuca', '', ''),
(308, 0, 'Vasco', 3, 0, 'Campeonato Brasileiro', '2018-09-01', 'Maracanã', 'Cuca', '-Gabigol(3x)', ''),
(309, 1, 'Grêmio', 0, 0, 'Campeonato Brasileiro', '2018-09-06', 'Pacaembu', 'Cuca', '', ''),
(310, 1, 'São Paulo', 0, 0, 'Campeonato Brasileiro', '2018-09-16', 'Vila Belmiro', 'Cuca', '', ''),
(311, 1, 'Atlético-PR', 1, 0, 'Campeonato Brasileiro', '2018-09-30', 'Vila Belmiro', 'Cuca', '-Carlos Sánchez', ''),
(312, 1, 'Corinthians', 1, 0, 'Campeonato Brasileiro', '2018-10-13', 'Pacaembu', 'Cuca', '-Gabigol', ''),
(313, 1, 'Fluminense', 3, 0, 'Campeonato Brasileiro', '2018-10-27', 'Vila Belmiro', 'Cuca', '-Gabigol<br>-Carlos Sánchez<br>-Victor Ferraz', ''),
(314, 1, 'Chapecoense', 0, 1, 'Campeonato Brasileiro', '2018-11-12', 'Pacaembu', 'Cuca', '', '-Leandro Pereira'),
(315, 0, 'Flamengo', 0, 1, 'Campeonato Brasileiro', '2018-11-15', 'Maracanã', 'Cuca', '', '-Henrique Dourado'),
(316, 0, 'América-MG', 1, 2, 'Campeonato Brasileiro', '2018-11-18', 'Arena Independência', 'Cuca', '-Gabigol', '-Rafael Moura<br>-Matheusinho'),
(317, 1, 'Botafogo', 1, 1, 'Campeonato Brasileiro', '2018-11-21', 'Vila Belmiro', 'Cuca', '-Rodrygo', '-Brenner'),
(318, 1, 'Atlético-MG', 3, 2, 'Campeonato Brasileiro', '2018-11-24', 'Vila Belmiro', 'Cuca', '-Felippe Cardoso<br>-Gabigol<br>-Carlos Sánchez', '-Ricardo Oliveira(2x)'),
(319, 0, 'Sport', 1, 2, 'Campeonato Brasileiro', '2018-12-02', 'Ilha do Retiro', 'Cuca', '-Rodrygo', '-Rogério<br>-Hernane'),
(320, 1, 'Ferroviária', 1, 0, 'Campeonato Paulista', '2019-01-19', 'Vila Belmiro', 'Jorge Sampaoli', '-Jean Mota', ''),
(321, 1, 'São Paulo', 2, 0, 'Campeonato Paulista', '2019-01-27', 'Pacaembu', 'Jorge Sampaoli', '-Luiz Felipe<br>-Derlis González', ''),
(322, 0, 'Ituano', 1, 5, 'Campeonato Brasil', '2019-02-03', 'Municipal Doutor Novelli Júnior', 'Jorge Sampaoli', '-Jean Mota', '-Marcos Serato<br>-Morato(2x)<br>-Léo Santos<br>-Jonas'),
(323, 0, 'Vasco', 1, 0, 'Campeonato Brasileiro', '2019-10-05', 'São Januário', 'Jorge Sampaoli', '-Tailson', ''),
(324, 0, 'Defensa y Justicia-ARG', 2, 1, 'Copa Libertadores', '2020-03-03', 'Norberto "Tito" Tomaghello', 'Jesualdo Ferreira', '-Jobson<br>-Kaio Jorge', '-Juan Rodríguez'),
(325, 0, 'Grêmio', 2, 1, 'Campeonato Brasileiro', '2019-04-28', 'Arena do Grêmio', 'Jorge Sampaoli', '-Eduardo Sasha<br>-Felipe Jonathan', '-Éverton'),
(326, 0, 'Flamengo', 0, 1, 'Campeonato Brasileiro', '2019-09-14', 'Maracanã', 'Jorge Sampaoli', '', '-Gabriel'),
(327, 0, 'Ceará', 1, 0, 'Campeonato Brasileiro', '2019-06-02', 'Castelão', 'Jorge Sampaoli', '-Eduardo Sasha', ''),
(328, 0, 'Internacional', 0, 0, 'Campeonato Brasileiro', '2019-10-13', 'Beira-Rio', 'Jorge Sampaoli', '', ''),
(329, 0, 'Atlético-MG', 0, 2, 'Campeonato Brasileiro', '2019-10-20', 'Arena Independência', 'Jorge Sampaoli', '', '-Leonardo Silva<br>-Luan'),
(330, 1, 'Mirassol', 1, 0, 'Campeonato Paulista', '2019-02-09', 'Pacaembu', 'Jorge Sampaoli', '-Jean Mota', ''),
(331, 0, 'River Plate-URU', 0, 0, 'Copa Sul-Americana', '2019-02-12', 'Luis Franzini', 'Jorge Sampaoli', '', ''),
(332, 1, 'Guarani', 3, 0, 'Campeonato Paulista', '2019-02-18', 'Pacaembu', 'Jorge Sampaoli', '-Rodrygo<br>-Jean Mota(2x)', ''),
(333, 1, 'Oeste', 3, 2, 'Campeonato Paulista', '2019-03-02', 'Pacaembu', 'Jorge Sampaoli', '-Betinho(Gol Contra)<br>-Derlis González<br>-Victor Ferraz', '-Bruno Lopes<br>-Matheus Jesus'),
(334, 1, 'América-RN', 4, 0, 'Copa do Brasil', '2019-03-09', 'Pacaembu', 'Jorge Sampaoli', '-Rodrygo<br>-Aguilar<br>-Jean Mota<br>Derlis González', ''),
(335, 1, 'Novorizontino', 0, 1, 'Campeonato Paulista', '2019-03-15', 'Pacaembu', 'Jorge Sampaoli', '', '-Murilo Henrique'),
(336, 1, 'Red Bull Brasil', 2, 0, 'Campeonato Paulista', '2019-03-23', 'Pacaembu', 'Jorge Sampaoli', '-Diego Pituca<br>-Carlos Sánchez', ''),
(337, 1, 'Corinthians', 1, 0, 'Campeonato Paulista', '2019-04-08', 'Pacaembu', 'Jorge Sampaoli', '-Gustavo Henrique\r\n<br><br>\r\nPênaltis (6):<br>\r\n-Rodrygo<br>\r\n-Soteldo<br>\r\n-Carlos Sánchez<br>\r\n-Derlis González<br>\r\n-Diego Pituca<br>\r\n-Alison', '<br><br>\r\nPênaltis (7):<br>\r\n-Vagner Love<br>\r\n-Ramiro<br>\r\n-Júnior Urso<br>\r\n-Fagner<br>\r\n-Sornoza<br>\r\n-Danilo Avelar<br>\r\n-Henrique'),
(339, 1, 'Vasco', 2, 0, 'Copa do Brasil', '2019-04-17', 'Vila Belmiro', 'Jorge Sampaoli', '-Rodrygo<br>-Jean Mota', ''),
(340, 1, 'Vasco', 3, 0, 'Campeonato Brasileiro', '2019-05-12', 'Pacaembu', 'Jorge Sampaoli', '-Diego Pituca<br>-Rodrygo<br>-Soteldo', ''),
(341, 1, 'Internacional', 0, 0, 'Campeonato Brasileiro', '2019-05-26', 'Vila Belmiro', 'Jorge Sampaoli', '', ''),
(342, 1, 'Atlético-MG', 3, 1, 'Campeonato Brasileiro', '2019-06-09', 'Vila Belmiro', 'Jorge Sampaoli', '-Eduardo Sasha<br>-Jean Mota<br>-Carlos Sánchez', '-Alerrandro'),
(343, 1, 'Mirassol', 3, 1, 'Campeonato Paulista', '2020-03-07', 'Vila Belmiro', 'Jesualdo Ferreira', '-Yuri Alberto<br>-Diego Pituca<br>-Eduardo Sasha', '-Rafael Silva'),
(344, 1, 'Corinthians', 1, 0, 'Campeonato Brasileiro', '2019-06-12', 'Vila Belmiro', 'Jorge Sampaoli', '-Eduardo Sasha', ''),
(345, 0, 'Bahia', 1, 0, 'Campeonato Brasileiro', '2019-07-13', 'Pituaçu', 'Jorge Sampaoli', '-Carlos Sánchez', ''),
(346, 1, 'Avaí', 3, 1, 'Campeonato Brasileiro', '2019-07-28', 'Vila Belmiro', 'Jorge Sampaoli', '-Felipe Jonathan<br>-Carlos Sánchez<br>-Derlis González', '-João Paulo'),
(347, 1, 'Goiás', 6, 1, 'Campeonato Brasileiro', '2019-08-04', 'Vila Belmiro', 'Jorge Sampaoli', '-Lucas Veríssimo<br>-Soteldo(2x)<br>-Carlos Sánchez<br>-Gustavo Henrique<br>-Eduardo Sasha', '-Kayke'),
(348, 0, 'Cruzeiro', 0, 2, 'Campeonato Brasileiro', '2019-08-18', 'Mineirão', 'Jorge Sampaoli', '', '-Fred<br>-Thiago Neves'),
(349, 1, 'Fortaleza', 3, 3, 'Campeonato Brasileiro', '2019-08-25', 'Vila Belmiro', 'Jorge Sampaoli', '-Jorge<br>-Eduardo Sasha<br>-Marinho', '-Wellington Paulista(2x)<br>-Tinga'),
(350, 1, 'Athletico-PR', 1, 1, 'Campeonato Brasileiro', '2019-09-08', 'Vila Belmiro', 'Jorge Sampaoli', '-Carlos Sánchez', '-Braian Romero'),
(351, 1, 'Grêmio', 0, 3, 'Campeonato Brasileiro', '2019-09-21', 'Vila Belmiro', 'Jorge Sampaoli', '', '-Luan<br>-Pepê<br>-Éverton'),
(352, 1, 'CSA', 2, 0, 'Campeonato Brasileiro', '2019-09-29', 'Vila Belmiro', 'Jorge Sampaoli', '-Carlos Sánchez<br>-Eduardo Sasha', ''),
(353, 1, 'Palmeiras', 2, 0, 'Campeonato Brasileiro', '2019-10-09', 'Vila Belmiro', 'Jorge Sampaoli', '-Gustavo Henrique<br>-Marinho', ''),
(354, 0, 'Goiás', 3, 0, 'Campeonato Brasileiro', '2019-11-09', 'Serra Dourada', 'Jorge Sampaoli', '-Soteldo(2x)<br>-Marinho', ''),
(355, 1, 'São Paulo', 1, 1, 'Campeonato Brasileiro', '2019-11-16', 'Vila Belmiro', 'Jorge Sampaoli', '-Carlos Sánchez', '-Daniel Alves'),
(356, 1, 'Cruzeiro', 4, 1, 'Campeonato Brasileiro', '2019-11-23', 'Vila Belmiro', 'Jorge Sampaoli', '-Eduardo Sasha<br>-Marinho<br>-Soteldo<br>-Diego Pituca', '-Orejuela'),
(357, 1, 'Chapecoense', 2, 0, 'Campeonato Brasileiro', '2019-12-01', 'Vila Belmiro', 'Jorge Sampaoli', '-Lucas Veríssimo<br>-Evandro', ''),
(358, 1, 'Red Bull Bragantino', 0, 0, 'Campeonato Paulista', '2020-01-23', 'Vila Belmiro', 'Jesualdo Ferreira', '', ''),
(359, 1, 'Botafogo-SP', 2, 0, 'Campeonato Paulista', '2020-02-10', 'Vila Belmiro', 'Jesualdo Ferreira', '-Carlos Sánchez<br>-Eduardo Sasha', ''),
(360, 0, 'Ferroviária', 0, 0, 'Campeonato Paulista', '2020-02-16', 'Fonte Luminosa', 'Jesualdo Ferreira', '', ''),
(361, 0, 'Ituano', 0, 2, 'Campeonato Paulista', '2020-02-22', 'Municipal Doutor Novelli Júnior', 'Jesualdo Ferreira', '', '-Yago<br>-Corrêa'),
(362, 1, 'Palmeiras', 0, 0, 'Campeonato Paulista', '2020-02-29', 'Pacaembu', 'Jesualdo Ferreira', '', ''),
(377, 0, 'Juventus', 2, 1, 'Campeonato Paulista', '2006-03-25', 'Pacaembu', 'Vanderlei Luxemburgo', '-Cléber Santana<br>-Reinaldo', '-Manu'),
(375, 0, 'São Paulo', 0, 1, 'Campeonato Brasileiro', '2004-10-24', 'Morumbi', 'Vanderlei Luxemburgo', '', '-Grafite'),
(376, 0, 'Palmeiras', 2, 1, 'Campeonato Brasileiro', '2004-09-12', 'Pacaembu', 'Vanderlei Luxemburgo', '-Deivid<br>-Elano', '-Osmar'),
(365, 1, 'Deportivo Tachira-VEN', 3, 1, 'Copa Libertadores', '2011-04-20', 'Pacaembu', 'Muricy Ramalho', '-Neymar<br>-Jonathan<br>-Danilo', '-Gerzon Chacón'),
(374, 0, 'Oeste', 2, 1, 'Campeonato Paulista', '2009-03-07', 'Pacaembu', 'Vagner Mancini', '-Roni<br>-Madson', '-Dezinho'),
(367, 1, 'Once Caldas-COL', 1, 1, 'Copa Libertadores', '2011-05-18', 'Pacaembu', 'Muricy Ramalho', '-Neymar', '-Rentería'),
(368, 1, 'Cerro Porteño-PAR', 1, 0, 'Copa Libertadores', '2011-05-25', 'Pacaembu', 'Muricy Ramalho', '-Edu Dracena', ''),
(369, 1, 'São Caetano', 2, 0, 'Campeonato Paulista', '2007-05-06', 'Morumbi', 'Vanderlei Luxemburgo', '-Adaílton<br>-Morais', ''),
(370, 1, 'Ferroviária', 0, 1, 'Campeonato Paulista', '2017-02-18', 'Vila Belmiro', 'Dorival Júnior', '', '-Leandro Amaro'),
(371, 1, 'Ponte Preta', 1, 0, 'Campeonato Paulista', '2017-04-10', 'Pacaembu', 'Dorival Júnior', '-David Braz\r\n<br><br>\r\nPênaltis (4):<br>\r\n-Kayke<br>\r\n-Jean Mota<br>\r\n-Copete<br>\r\n-Lucas Lima', '<br><br>\r\nPênaltis (5):<br>\r\n-Ravanelli<br>\r\n-Yago<br>\r\n-Clayson<br>\r\n-Jadson<br>\r\n-William Pottker'),
(372, 0, 'Santo André', 3, 2, 'Campeonato Paulista', '2010-04-25', 'Pacaembu', 'Dorival Júnior', '-André<br>-Wesley(2x)', '-Bruno César<br>-Rodriguinho'),
(373, 1, 'Corinthians', 2, 1, 'Campeonato Paulista', '2010-02-28', 'Vila Belmiro', 'Dorival Júnior', '-Neymar<br>-André', '-Dentinho'),
(378, 0, 'Corinthians', 3, 2, 'Campeonato Brasileiro', '2002-12-15', 'Morumbi', 'Emerson Leão', '-Elano<br>-Léo<br>-Robinho', '-Anderson<br>-Deivid'),
(379, 0, 'Juventus', 8, 1, 'Campeonato Paulista (Feminino)', '2019-06-08', 'Conde Rodolfo Crespi (Rua Javari)', 'Emily Lima', '-Maria Dias<br>-Maria Alves<br>-Sandrinha<br>-Sochor<br>-Glaucia<br>-Katielle<br>-Ketlen(2x)', '-Dani'),
(380, 1, 'São Paulo', 2, 2, 'Campeonato Paulista (Feminino)', '2019-09-21', 'Pacaembu', 'Guilherme Giudice', '-Sole Jaimes<br>-Ketlen', '-Thaís<br>-Natane'),
(381, 2, 'Corinthians Steamrollers', 9, 26, 'Amistoso de Futebol Americano', '2016-12-12', 'Vila Belmiro', '-', '', ''),
(382, 1, 'Internacional', 1, 1, 'Brasileirão de Aspirantes', '2017-12-10', 'Vila Belmiro', 'Kleiton Lima', '-Diego Cardoso', '-Joanderson'),
(383, 0, 'Corinthians', 0, 2, 'Campeonato Brasileiro', '2015-09-20', 'Arena Corinthians', 'Dorival Júnior', '', '-Jadson(2x)'),
(384, 0, 'São Bernardo', 1, 0, 'Campeonato Paulista', '2015-02-14', 'Primeiro de Maio', 'Enderson Moreira', '-David Braz', ''),
(385, 1, 'Botafogo', 5, 0, 'Copa do Brasil', '2014-10-16', 'Pacaembu', 'Enderson Moreira', '-Gabigol<br>-David Braz(2x)<br>-Lucas Lima<br>-Geuvânio', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `santosdepressivo`
--
ALTER TABLE `santosdepressivo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `santosdepressivo`
--
ALTER TABLE `santosdepressivo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=386;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
