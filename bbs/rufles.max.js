var controller, retina;
var terminal = document.getElementById("terminal");
var choice;

var mainmenu_ans = "mainmenu.ans";

var retina = window.devicePixelRatio > 1;
var config = {"font": "portuguese", "bits": "8", "2x": (retina ? 1 : 0)};

var prompt = document.getElementById("prompt");
prompt.focus();
prompt.onblur = function(){ prompt.focus(); };

var date_login, minutes_on;

var weekday = new Array("Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado")

var user;

var users = {
	1: {
		"name": "SYSOP",
		"register": "19/03/96 22:27:03",
		"sex": "M"
	},
	2: {
		"name": "CEBOLA",
		"register": "19/03/96 22:29:17",
		"sex": "M"
	},
	2: {
		"name": "CEBOLA",
		"register": "20/03/96 18:32:51",
		"sex": "M"
	},
	3: {
		"name": "Laranja",
		"register": "20/03/96 18:52:58",
		"sex": "M"
	},
	4: {
		"name": "Laranja",
		"register": "20/03/96 20:00:54",
		"sex": "M"
	},
	5: {
		"name": "TOLIPO",
		"register": "20/03/96 22:20:47",
		"sex": "M"
	},
	6: {
		"name": "Fabricio",
		"register": "23/03/97 19:17:45",
		"sex": "M"
	},
	7: {
		"name": "DANI",
		"register": "23/03/97 19:21:02",
		"sex": "F"
	},
	8: {
		"name": "COBRA",
		"register": "24/03/97 18:26:12",
		"sex": "M"
	},
	9: {
		"name": "FPC",
		"register": "24/03/97 19:43:05",
		"sex": "M"
	},
	9: {
		"name": "DEMOLITOR",
		"register": "25/03/97 21:18:23",
		"sex": "M"
	},
	10: {
		"name": "CEBOLLA",
		"register": "25/03/97 21:22:41",
		"sex": "M"
	},
	11: {
		"name": "Big User",
		"register": "26/03/97 19:46:30",
		"sex": "M"
	},
	11: {
		"name": "Big User",
		"register": "26/03/97 23:48:42",
		"sex": "M"
	},
	12: {
		"name": "LARANJA",
		"register": "27/03/97 11:54:47",
		"sex": "M"
	},
	13: {
		"name": "Fabiane",
		"register": "27/03/97 16:58:54",
		"sex": "F"
	},
	14: {
		"name": "DODO",
		"register": "16/03/97 21:42:18",
		"sex": "M"
	},
	15: {
		"name": "Montanha",
		"register": "16/03/97 23:15:23",
		"sex": "M"
	},
	15: {
		"name": "FM DANCE",
		"register": "17/03/97 01:54:02",
		"sex": "M"
	},
	16: {
		"name": "JULY",
		"register": "17/03/97 02:02:02",
		"sex": "F"
	},
	17: {
		"name": "Daniel",
		"register": "17/03/97 09:09:16",
		"sex": "M"
	},
	18: {
		"name": "Daniel",
		"register": "17/03/97 09:39:04",
		"sex": "M"
	},
	19: {
		"name": "Mad",
		"register": "17/03/97 12:21:25",
		"sex": "M"
	},
	20: {
		"name": "Montanha",
		"register": "17/03/97 17:08:12",
		"sex": "M"
	},
	21: {
		"name": "Daniel",
		"register": "29/03/97 21:08:24",
		"sex": "M"
	},
	22: {
		"name": "Tomas Turbando",
		"register": "31/03/97 19:34:36",
		"sex": "M"
	},
	23: {
		"name": "cebolinha",
		"register": "01/04/97 06:05:22",
		"sex": "F"
	},
	4: {
		"name": "MOSQUETEIRO",
		"register": "01/04/97 07:16:45",
		"sex": "M"
	},
	24: {
		"name": "ARJONA",
		"register": "06/04/97 17:10:37",
		"sex": "M"
	},
	26: {
		"name": "DONHO",
		"register": "12/04/97 19:15:15",
		"sex": "M"
	},
	27: {
		"name": "cobra",
		"register": "12/04/97 21:22:30",
		"sex": "M"
	},
	28: {
		"name": "PIPI",
		"register": "12/04/97 22:55:51",
		"sex": "M"
	},
	29: {
		"name": "TestUser",
		"register": "19/04/97 15:38:54",
		"sex": "M"
	},
	30: {
		"name": "Monica Basso",
		"register": "19/04/97 17:33:39",
		"sex": "F"
	},
	31: {
		"name": "Goi",
		"register": "20/04/97 14:45:21",
		"sex": "M"
	},
	32: {
		"name": "Paragua",
		"register": "20/04/97 16:05:44",
		"sex": "M"
	},
	33: {
		"name": "Predator",
		"register": "25/04/97 19:31:04",
		"sex": "M"
	},
	34: {
		"name": "Unknow",
		"register": "26/04/97 20:21:12",
		"sex": "M"
	},
	35: {
		"name": "sonic",
		"register": "27/04/97 19:01:51",
		"sex": "M"
	},
	36: {
		"name": "Carol",
		"register": "27/04/97 19:23:29",
		"sex": "F"
	},
	37: {
		"name": "navarro",
		"register": "28/04/97 20:18:51",
		"sex": "M"
	},
	21: {
		"name": "Predator",
		"register": "29/04/97 20:20:28",
		"sex": "M"
	},
	23: {
		"name": "Fabio",
		"register": "03/05/97 19:56:07",
		"sex": "M"
	},
	25: {
		"name": "CaRnIvOrO",
		"register": "05/05/97 19:19:24",
		"sex": "M"
	},
	27: {
		"name": "Ane",
		"register": "06/05/97 20:07:13",
		"sex": "M"
	},
	38: {
		"name": "Orzabal",
		"register": "06/05/97 21:18:32",
		"sex": "M"
	},
	39: {
		"name": "Cebollito",
		"register": "07/05/97 17:25:45",
		"sex": "M"
	},
	40: {
		"name": "CABECA",
		"register": "08/05/97 19:54:36",
		"sex": "M"
	},
	42: {
		"name": "LARA",
		"register": "09/05/97 20:16:46",
		"sex": "F"
	},
	43: {
		"name": "mano",
		"register": "09/05/97 21:21:05",
		"sex": "M"
	},
	44: {
		"name": "GRAZI",
		"register": "10/05/97 13:06:42",
		"sex": "F"
	},
	45: {
		"name": "Badanha",
		"register": "10/05/97 14:32:28",
		"sex": "M"
	},
	39: {
		"name": "Selvagem",
		"register": "10/05/97 20:29:53",
		"sex": "M"
	},
	41: {
		"name": "cebolinha",
		"register": "11/05/97 19:25:55",
		"sex": "F"
	},
	46: {
		"name": "lobo",
		"register": "11/05/97 20:16:03",
		"sex": "M"
	},
	5: {
		"name": "tolipo",
		"register": "12/05/97 18:25:25",
		"sex": "M"
	},
	46: {
		"name": "LARA",
		"register": "12/05/97 18:58:43",
		"sex": "F"
	},
	9: {
		"name": "DONHO",
		"register": "15/05/97 17:48:32",
		"sex": "M"
	},
	42: {
		"name": "piupiu",
		"register": "15/05/97 18:12:09",
		"sex": "M"
	},
	47: {
		"name": "rorororo",
		"register": "17/05/97 17:38:13",
		"sex": "M"
	},
	42: {
		"name": "XAXIM",
		"register": "18/05/97 19:52:05",
		"sex": "M"
	},
	47: {
		"name": "Javali",
		"register": "21/05/97 19:13:48",
		"sex": "M"
	},
	48: {
		"name": "DukeNukem",
		"register": "21/05/97 19:24:03",
		"sex": "M"
	},
	49: {
		"name": "PULGA",
		"register": "21/05/97 20:49:31",
		"sex": "M"
	},
	50: {
		"name": "DANIEL",
		"register": "22/05/97 21:06:54",
		"sex": "M"
	},
	7: {
		"name": "DANIEL",
		"register": "22/05/97 21:13:29",
		"sex": "M"
	},
	50: {
		"name": "CABECA",
		"register": "23/05/97 19:20:37",
		"sex": "M"
	},
	52: {
		"name": "Paulo",
		"register": "23/05/97 21:07:18",
		"sex": "M"
	},
	10: {
		"name": "Cuervo",
		"register": "24/05/97 13:19:43",
		"sex": "M"
	},
	15: {
		"name": "CAROL LINE",
		"register": "24/05/97 18:07:55",
		"sex": "F"
	},
	17: {
		"name": "Ana",
		"register": "24/05/97 19:06:40",
		"sex": "F"
	},
	18: {
		"name": "Taurus",
		"register": "25/05/97 15:38:21",
		"sex": "M"
	},
	19: {
		"name": "Taurus",
		"register": "25/05/97 15:42:20",
		"sex": "M"
	},
	26: {
		"name": "Hacker",
		"register": "27/05/97 18:41:28",
		"sex": "M"
	},
	29: {
		"name": "CABECA",
		"register": "30/05/97 20:34:04",
		"sex": "M"
	},
	50: {
		"name": "BETA",
		"register": "31/05/97 18:02:20",
		"sex": "F"
	},
	18: {
		"name": "Wolf",
		"register": "31/05/97 18:59:26",
		"sex": "M"
	},
	51: {
		"name": "Beatriz",
		"register": "31/05/97 21:45:12",
		"sex": "F"
	},
	53: {
		"name": "Bessa",
		"register": "01/06/97 11:45:28",
		"sex": "M"
	},
	11: {
		"name": "Cebola & Lara",
		"register": "03/06/97 11:43:13",
		"sex": "M"
	},
	54: {
		"name": "Ghost",
		"register": "03/06/97 19:57:27",
		"sex": "M"
	},
	55: {
		"name": "Paragua",
		"register": "03/06/97 21:09:36",
		"sex": "M"
	},
	56: {
		"name": "ARJONA",
		"register": "04/06/97 14:45:39",
		"sex": "M"
	},
	57: {
		"name": "ZACK",
		"register": "05/06/97 22:02:47",
		"sex": "M"
	},
	58: {
		"name": "CaRnIvOrO II",
		"register": "06/06/97 00:23:50",
		"sex": "M"
	},
	59: {
		"name": "Alencar",
		"register": "06/06/97 17:13:25",
		"sex": "M"
	},
	60: {
		"name": "Felipe",
		"register": "06/06/97 20:50:33",
		"sex": "M"
	},
	61: {
		"name": "ZACK",
		"register": "06/06/97 20:58:33",
		"sex": "M"
	},
	64: {
		"name": "Mauricio",
		"register": "07/06/97 14:03:13",
		"sex": "M"
	},
	65: {
		"name": "Gafa",
		"register": "07/06/97 15:31:42",
		"sex": "M"
	},
	15: {
		"name": "tetulipo",
		"register": "07/06/97 19:46:35",
		"sex": "M"
	},
	62: {
		"name": "Lenon",
		"register": "07/06/97 20:52:29",
		"sex": "M"
	},
	66: {
		"name": "RATO DE REDE",
		"register": "08/06/97 14:02:52",
		"sex": "M"
	},
	67: {
		"name": "CABECA",
		"register": "08/06/97 19:15:18",
		"sex": "M"
	},
	68: {
		"name": "Luciana",
		"register": "09/06/97 22:57:57",
		"sex": "F"
	},
	69: {
		"name": "Linda",
		"register": "10/06/97 01:25:02",
		"sex": "F"
	},
	70: {
		"name": "Ana Lucia",
		"register": "10/06/97 18:55:29",
		"sex": "F"
	},
	71: {
		"name": "Wolf",
		"register": "12/06/97 13:55:53",
		"sex": "M"
	},
	72: {
		"name": "Giuliano",
		"register": "13/06/97 17:37:11",
		"sex": "M"
	},
	73: {
		"name": "Mano Lima",
		"register": "13/06/97 18:57:11",
		"sex": "M"
	},
	74: {
		"name": "Mano Lima",
		"register": "14/06/97 22:39:50",
		"sex": "M"
	},
	75: {
		"name": "Fabricio",
		"register": "15/06/97 13:32:03",
		"sex": "M"
	},
	76: {
		"name": "Fernando",
		"register": "15/06/97 20:27:56",
		"sex": "M"
	},
	77: {
		"name": "LUIZA",
		"register": "16/06/97 18:09:14",
		"sex": "F"
	},
	78: {
		"name": "Xuper",
		"register": "16/06/97 21:19:38",
		"sex": "F"
	},
	79: {
		"name": "Julio",
		"register": "18/06/97 17:58:04",
		"sex": "M"
	},
	80: {
		"name": "Lorde Desespero",
		"register": "18/06/97 23:48:44",
		"sex": "M"
	},
	81: {
		"name": "lErOy",
		"register": "19/06/97 15:20:49",
		"sex": "M"
	},
	82: {
		"name": "Maia",
		"register": "20/06/97 12:35:48",
		"sex": "F"
	},
	83: {
		"name": "FOX",
		"register": "21/06/97 13:35:43",
		"sex": "M"
	},
	84: {
		"name": "loc",
		"register": "24/06/97 18:52:45",
		"sex": "M"
	},
	85: {
		"name": "Pulga",
		"register": "24/06/97 21:44:39",
		"sex": "M"
	},
	86: {
		"name": "Daniel",
		"register": "25/06/97 23:26:20",
		"sex": "M"
	},
	87: {
		"name": "Fernando",
		"register": "26/06/97 14:12:20",
		"sex": "M"
	},
	88: {
		"name": "Nerd",
		"register": "26/06/97 16:38:49",
		"sex": "M"
	},
	89: {
		"name": "CANDY",
		"register": "26/06/97 22:11:07",
		"sex": "F"
	},
	90: {
		"name": "Alexa",
		"register": "26/06/97 23:20:45",
		"sex": "F"
	},
	92: {
		"name": "Kika",
		"register": "27/06/97 15:42:32",
		"sex": "F"
	},
	93: {
		"name": "APACHE",
		"register": "28/06/97 20:20:37",
		"sex": "M"
	},
	94: {
		"name": "RAFA",
		"register": "28/06/97 21:18:23",
		"sex": "M"
	},
	94: {
		"name": "SHANTYLLI",
		"register": "29/06/97 17:09:12",
		"sex": "F"
	},
	95: {
		"name": "Nicole",
		"register": "01/07/97 19:41:20",
		"sex": "F"
	},
	96: {
		"name": "Adao",
		"register": "02/07/97 19:03:43",
		"sex": "M"
	},
	97: {
		"name": "Usuario do ANO",
		"register": "02/07/97 20:31:23",
		"sex": "M"
	},
	99: {
		"name": "ALMEIDA",
		"register": "04/07/97 18:07:44",
		"sex": "M"
	},
	100: {
		"name": "OBEDE",
		"register": "04/07/97 20:16:57",
		"sex": "M"
	},
	101: {
		"name": "SIL",
		"register": "05/07/97 21:30:49",
		"sex": "F"
	},
	102: {
		"name": "rafa",
		"register": "05/07/97 23:43:07",
		"sex": "M"
	},
	103: {
		"name": "LARI",
		"register": "07/07/97 00:09:57",
		"sex": "F"
	},
	104: {
		"name": "CIBA",
		"register": "07/07/97 19:22:39",
		"sex": "F"
	},
	105: {
		"name": "Mony",
		"register": "08/07/97 19:11:21",
		"sex": "F"
	},
	106: {
		"name": "Adao",
		"register": "08/07/97 20:14:19",
		"sex": "M"
	},
	107: {
		"name": "Jambao",
		"register": "09/07/97 12:43:07",
		"sex": "M"
	},
	108: {
		"name": "MEGA MEN",
		"register": "09/07/97 13:19:13",
		"sex": "M"
	},
	109: {
		"name": "Tita",
		"register": "09/07/97 19:21:01",
		"sex": "F"
	},
	110: {
		"name": "Itautec",
		"register": "10/07/97 13:56:49",
		"sex": "M"
	},
	111: {
		"name": "Taty",
		"register": "11/07/97 20:22:23",
		"sex": "F"
	},
	112: {
		"name": "shaggy",
		"register": "13/07/97 15:13:28",
		"sex": "M"
	},
	115: {
		"name": "Nike",
		"register": "14/07/97 19:27:07",
		"sex": "F"
	},
	116: {
		"name": "Nicole",
		"register": "15/07/97 20:36:17",
		"sex": "F"
	},
	117: {
		"name": "Lorde  Desespero",
		"register": "15/07/97 23:10:20",
		"sex": "M"
	},
	119: {
		"name": "TUIO",
		"register": "16/07/97 16:12:41",
		"sex": "M"
	},
	120: {
		"name": "DMC",
		"register": "17/07/97 14:29:48",
		"sex": "M"
	},
	121: {
		"name": "ANA",
		"register": "17/07/97 18:17:32",
		"sex": "F"
	},
	122: {
		"name": "Marcolino",
		"register": "19/07/97 20:53:34",
		"sex": "M"
	},
	123: {
		"name": "SHAKIRA",
		"register": "20/07/97 18:50:55",
		"sex": "F"
	},
	125: {
		"name": "Edgar",
		"register": "22/07/97 12:34:29",
		"sex": "M"
	},
	126: {
		"name": "perez",
		"register": "22/07/97 14:09:31",
		"sex": "M"
	},
	127: {
		"name": "MOLECA",
		"register": "22/07/97 14:36:45",
		"sex": "F"
	},
	128: {
		"name": "MASCARA",
		"register": "22/07/97 20:00:01",
		"sex": "M"
	},
	129: {
		"name": "gringa",
		"register": "23/07/97 14:11:32",
		"sex": "F"
	},
	130: {
		"name": "VaMpIrE",
		"register": "23/07/97 19:31:17",
		"sex": "M"
	},
	131: {
		"name": "General",
		"register": "24/07/97 23:06:25",
		"sex": "M"
	},
	132: {
		"name": "Fortunato Pausini",
		"register": "25/07/97 21:19:51",
		"sex": "M"
	},
	133: {
		"name": "WAIT",
		"register": "26/07/97 22:23:35",
		"sex": "M"
	},
	134: {
		"name": "topa-tudo-por-dinhei",
		"register": "29/07/97 03:11:18",
		"sex": "M"
	},
	135: {
		"name": "Mark",
		"register": "29/07/97 17:47:07",
		"sex": "M"
	},
	136: {
		"name": "Bumba",
		"register": "29/07/97 20:14:17",
		"sex": "M"
	},
	137: {
		"name": "Don Juan",
		"register": "30/07/97 18:04:59",
		"sex": "M"
	},
	138: {
		"name": "rapozinho",
		"register": "31/07/97 11:25:46",
		"sex": "M"
	},
	139: {
		"name": "BABALINHA",
		"register": "31/07/97 19:17:02",
		"sex": "F"
	},
	140: {
		"name": "Cuervo",
		"register": "31/07/97 22:16:36",
		"sex": "M"
	},
	142: {
		"name": "Pepo",
		"register": "01/08/97 10:36:11",
		"sex": "M"
	},
	143: {
		"name": "todd",
		"register": "01/08/97 21:52:24",
		"sex": "M"
	},
	144: {
		"name": "DuDa",
		"register": "02/08/97 12:10:53",
		"sex": "M"
	},
	145: {
		"name": "BABALINHA",
		"register": "02/08/97 21:10:15",
		"sex": "F"
	},
	146: {
		"name": "Brondani",
		"register": "04/08/97 18:57:05",
		"sex": "M"
	},
	147: {
		"name": "Chico",
		"register": "05/08/97 15:14:59",
		"sex": "M"
	},
	148: {
		"name": "Bart",
		"register": "05/08/97 15:57:40",
		"sex": "M"
	},
	149: {
		"name": "Renata",
		"register": "06/08/97 18:46:10",
		"sex": "F"
	},
	150: {
		"name": "MEGA MEN",
		"register": "07/08/97 15:12:34",
		"sex": "M"
	},
	151: {
		"name": "FEFA",
		"register": "07/08/97 21:42:33",
		"sex": "F"
	},
	152: {
		"name": "Sorry",
		"register": "08/08/97 12:30:38",
		"sex": "M"
	},
	153: {
		"name": "godsarijgoihg",
		"register": "08/08/97 21:48:16",
		"sex": "F"
	},
	154: {
		"name": "MANCHA",
		"register": "11/08/97 19:23:59",
		"sex": "M"
	},
	156: {
		"name": "Guisado",
		"register": "12/08/97 20:57:51",
		"sex": "M"
	},
	157: {
		"name": "Pedro",
		"register": "13/08/97 11:32:05",
		"sex": "M"
	},
	158: {
		"name": "Pulguento",
		"register": "13/08/97 15:18:06",
		"sex": "M"
	},
	159: {
		"name": "haiper",
		"register": "13/08/97 16:29:07",
		"sex": "M"
	},
	160: {
		"name": "Hipnotica",
		"register": "13/08/97 18:16:17",
		"sex": "F"
	},
	161: {
		"name": "samure",
		"register": "13/08/97 19:27:45",
		"sex": "M"
	},
	161: {
		"name": "samiuri",
		"register": "13/08/97 19:40:32",
		"sex": "M"
	},
	162: {
		"name": "Ze Gugu",
		"register": "14/08/97 19:33:18",
		"sex": "M"
	},
	163: {
		"name": "MAGO",
		"register": "15/08/97 15:03:46",
		"sex": "M"
	},
	164: {
		"name": "Geyser",
		"register": "15/08/97 18:03:43",
		"sex": "M"
	},
	165: {
		"name": "Ani",
		"register": "15/08/97 20:15:13",
		"sex": "F"
	},
	166: {
		"name": "Jeffa (Barriga)",
		"register": "17/08/97 15:21:12",
		"sex": "M"
	},
	167: {
		"name": "Fantasma",
		"register": "18/08/97 14:26:22",
		"sex": "M"
	},
	169: {
		"name": "DMC",
		"register": "21/08/97 20:20:10",
		"sex": "M"
	},
	170: {
		"name": "GOTOZA",
		"register": "24/08/97 19:47:48",
		"sex": "F"
	},
	171: {
		"name": "Tati",
		"register": "26/08/97 18:46:53",
		"sex": "F"
	},
	172: {
		"name": "Daiana 72",
		"register": "28/08/97 16:49:50",
		"sex": "F"
	},
	174: {
		"name": "Horacio",
		"register": "30/08/97 19:54:37",
		"sex": "M"
	},
	175: {
		"name": "Dani",
		"register": "01/09/97 18:55:13",
		"sex": "F"
	},
	176: {
		"name": "Spider Man",
		"register": "01/09/97 23:54:24",
		"sex": "M"
	},
	177: {
		"name": "Diablo",
		"register": "02/09/97 22:53:52",
		"sex": "M"
	},
	178: {
		"name": "Nao sei",
		"register": "03/09/97 17:54:27",
		"sex": "M"
	},
	180: {
		"name": "TcHeLoCo",
		"register": "04/09/97 10:22:07",
		"sex": "M"
	},
	181: {
		"name": "Throttle",
		"register": "04/09/97 11:00:56",
		"sex": "M"
	},
	182: {
		"name": "JEDAH",
		"register": "05/09/97 16:53:17",
		"sex": "M"
	},
	183: {
		"name": "gostosa",
		"register": "05/09/97 18:22:38",
		"sex": "F"
	},
	185: {
		"name": "CDF",
		"register": "08/09/97 13:24:49",
		"sex": "M"
	},
	187: {
		"name": "DANI",
		"register": "10/09/97 22:17:27",
		"sex": "F"
	},
	190: {
		"name": "DISK",
		"register": "14/09/97 17:59:53",
		"sex": "M"
	},
	191: {
		"name": "Roger",
		"register": "16/09/97 20:18:06",
		"sex": "M"
	},
	193: {
		"name": "Cebola IV",
		"register": "18/09/97 22:30:29",
		"sex": "M"
	},
	194: {
		"name": "Cebola",
		"register": "19/09/97 12:43:45",
		"sex": "M"
	},
	196: {
		"name": "Dede",
		"register": "20/09/97 11:48:58",
		"sex": "M"
	},
	197: {
		"name": "CEBOLA VI",
		"register": "20/09/97 17:19:22",
		"sex": "M"
	},
	198: {
		"name": "ANGINHO",
		"register": "25/09/97 22:02:54",
		"sex": "F"
	},
	199: {
		"name": "Cebola",
		"register": "27/09/97 19:15:27",
		"sex": "M"
	},
	200: {
		"name": "LARA",
		"register": "28/09/97 18:55:31",
		"sex": "F"
	},
	201: {
		"name": "Samuca",
		"register": "29/09/97 21:42:42",
		"sex": "M"
	},
	202: {
		"name": "mumu",
		"register": "30/09/97 12:19:11",
		"sex": "M"
	},
	204: {
		"name": "Alencar",
		"register": "30/09/97 19:10:16",
		"sex": "M"
	},
	205: {
		"name": "FOCA",
		"register": "30/09/97 22:21:42",
		"sex": "M"
	},
	206: {
		"name": "Nando",
		"register": "30/09/97 22:38:36",
		"sex": "M"
	},
	207: {
		"name": "addsa",
		"register": "30/09/97 23:09:14",
		"sex": "M"
	},
	208: {
		"name": "Cota",
		"register": "02/10/97 19:37:38",
		"sex": "M"
	},
	209: {
		"name": "Putz",
		"register": "03/10/97 23:33:35",
		"sex": "M"
	},
	210: {
		"name": "Mauricio",
		"register": "04/10/97 21:17:31",
		"sex": "M"
	},
	211: {
		"name": "Cota",
		"register": "07/10/97 18:45:45",
		"sex": "M"
	},
	212: {
		"name": "Marchemelon Men",
		"register": "08/10/97 00:43:02",
		"sex": "M"
	},
	213: {
		"name": "LOBO MAU",
		"register": "08/10/97 11:46:22",
		"sex": "M"
	},
	214: {
		"name": "dudu",
		"register": "08/10/97 12:43:07",
		"sex": "M"
	},
	215: {
		"name": "Tetulipo",
		"register": "08/10/97 17:52:52",
		"sex": "M"
	},
	216: {
		"name": "GUSTAVO",
		"register": "08/10/97 19:58:47",
		"sex": "M"
	},
	217: {
		"name": "HAHAHA",
		"register": "08/10/97 23:55:41",
		"sex": "M"
	},
	218: {
		"name": "SysOp",
		"register": "09/10/97 16:21:04",
		"sex": "F"
	},
	219: {
		"name": "Carnicefera",
		"register": "10/10/97 21:04:39",
		"sex": "M"
	},
	220: {
		"name": "Paulo",
		"register": "11/10/97 11:18:42",
		"sex": "M"
	},
	221: {
		"name": "caverna",
		"register": "12/10/97 16:02:39",
		"sex": "M"
	},
	222: {
		"name": "Magrao",
		"register": "12/10/97 23:31:37",
		"sex": "M"
	},
	223: {
		"name": "Thais",
		"register": "13/10/97 14:15:28",
		"sex": "F"
	},
	224: {
		"name": "shali",
		"register": "13/10/97 14:38:06",
		"sex": "F"
	},
	225: {
		"name": "Juca",
		"register": "13/10/97 18:58:14",
		"sex": "M"
	},
	226: {
		"name": "Val",
		"register": "14/10/97 13:15:07",
		"sex": "F"
	},
	227: {
		"name": "Mana",
		"register": "14/10/97 18:15:04",
		"sex": "F"
	},
	228: {
		"name": "Diablo",
		"register": "15/10/97 11:47:42",
		"sex": "M"
	},
	229: {
		"name": "Diablo",
		"register": "15/10/97 15:21:02",
		"sex": "M"
	},
	230: {
		"name": "Alvaro",
		"register": "15/10/97 16:06:02",
		"sex": "M"
	},
	231: {
		"name": "Sra X",
		"register": "15/10/97 20:43:13",
		"sex": "F"
	},
	232: {
		"name": "Acustic",
		"register": "15/10/97 21:31:07",
		"sex": "M"
	},
	233: {
		"name": "BATORE",
		"register": "16/10/97 13:41:13",
		"sex": "M"
	},
	234: {
		"name": "Sultan",
		"register": "16/10/97 23:32:52",
		"sex": "M"
	},
	235: {
		"name": "Javali",
		"register": "19/10/97 00:17:14",
		"sex": "M"
	},
	236: {
		"name": "Ken",
		"register": "20/10/97 16:37:52",
		"sex": "M"
	},
	239: {
		"name": "Rappa",
		"register": "25/10/97 23:12:38",
		"sex": "M"
	},
	240: {
		"name": "sade",
		"register": "26/10/97 00:02:51",
		"sex": "M"
	},
	241: {
		"name": "Daniel",
		"register": "26/10/97 13:02:03",
		"sex": "M"
	},
	242: {
		"name": "Rafa",
		"register": "28/10/97 00:25:49",
		"sex": "M"
	},
	243: {
		"name": "Lord",
		"register": "28/10/97 11:16:28",
		"sex": "M"
	},
	244: {
		"name": "Badanha",
		"register": "29/10/97 20:51:53",
		"sex": "M"
	},
	245: {
		"name": "Dark User",
		"register": "30/10/97 20:17:34",
		"sex": "F"
	},
	246: {
		"name": "ARJONA",
		"register": "31/10/97 10:57:52",
		"sex": "M"
	},
	247: {
		"name": "GOGA",
		"register": "31/10/97 22:05:05",
		"sex": "M"
	},
	248: {
		"name": "Nanda",
		"register": "03/11/97 01:00:53",
		"sex": "F"
	},
	249: {
		"name": "Canibal",
		"register": "06/11/97 12:31:26",
		"sex": "M"
	},
	250: {
		"name": "Allan, O Retorno",
		"register": "07/11/97 13:58:14",
		"sex": "M"
	},
	251: {
		"name": "The best",
		"register": "07/11/97 22:13:37",
		"sex": "M"
	},
	252: {
		"name": "RAQUEL",
		"register": "09/11/97 18:40:07",
		"sex": "F"
	},
	253: {
		"name": "ANDREW",
		"register": "09/11/97 19:06:51",
		"sex": "M"
	},
	254: {
		"name": "nanda",
		"register": "10/11/97 01:12:50",
		"sex": "F"
	},
	255: {
		"name": "PEPSI",
		"register": "12/11/97 18:21:55",
		"sex": "M"
	},
	256: {
		"name": "INHO",
		"register": "12/11/97 22:15:36",
		"sex": "M"
	},
	257: {
		"name": "Lobo da Madrugada.",
		"register": "15/11/97 17:36:47",
		"sex": "M"
	},
	258: {
		"name": "SysTest",
		"register": "16/11/97 01:49:06",
		"sex": "M"
	},
	259: {
		"name": "|TATU|",
		"register": "16/11/97 19:07:02",
		"sex": "M"
	},
	260: {
		"name": "Pivete",
		"register": "17/11/97 18:57:13",
		"sex": "F"
	},
	261: {
		"name": "Fabio",
		"register": "22/11/97 11:49:14",
		"sex": "M"
	},
	262: {
		"name": "Tche",
		"register": "23/11/97 16:13:56",
		"sex": "M"
	},
	263: {
		"name": "Nicole",
		"register": "27/11/97 21:12:23",
		"sex": "F"
	},
	264: {
		"name": "RIP",
		"register": "29/11/97 00:30:10",
		"sex": "M"
	},
	265: {
		"name": "Ze Gugu",
		"register": "01/12/97 12:40:27",
		"sex": "M"
	},
	266: {
		"name": "Ze Gugu",
		"register": "01/12/97 13:47:59",
		"sex": "M"
	},
	267: {
		"name": "Mizzi",
		"register": "06/12/97 15:48:00",
		"sex": "M"
	},
	268: {
		"name": "LOKA",
		"register": "06/12/97 22:22:32",
		"sex": "F"
	},
	269: {
		"name": "Gustavo",
		"register": "12/12/97 15:44:19",
		"sex": "M"
	},
	270: {
		"name": "Fai",
		"register": "14/12/97 19:58:34",
		"sex": "F"
	},
	271: {
		"name": "Clarilton",
		"register": "14/12/97 21:17:43",
		"sex": "M"
	},
	272: {
		"name": "Bizu",
		"register": "15/12/97 16:27:37",
		"sex": "M"
	},
	273: {
		"name": "Power guido",
		"register": "15/12/97 20:47:34",
		"sex": "M"
	},
	274: {
		"name": "Zero Cool",
		"register": "16/12/97 14:12:10",
		"sex": "M"
	},
	275: {
		"name": "Andrei Pozzobon",
		"register": "16/12/97 14:42:00",
		"sex": "M"
	},
	276: {
		"name": "YOXES",
		"register": "17/12/97 19:59:34",
		"sex": "M"
	},
	277: {
		"name": "Joana",
		"register": "21/12/97 19:39:40",
		"sex": "F"
	},
	278: {
		"name": "VULCANO",
		"register": "24/12/97 14:35:09",
		"sex": "M"
	},
	279: {
		"name": "Heny-Heny",
		"register": "30/12/97 02:03:13",
		"sex": "M"
	},
	280: {
		"name": "ALE",
		"register": "30/12/97 02:54:14",
		"sex": "M"
	},
	281: {
		"name": "Glob's-Glob's",
		"register": "30/12/97 20:09:03",
		"sex": "F"
	},
	282: {
		"name": "BUFFY",
		"register": "30/12/97 23:33:25",
		"sex": "F"
	},
	283: {
		"name": "Lara Croft",
		"register": "01/01/98 12:47:42",
		"sex": "F"
	},
	286: {
		"name": "MEGA MAN",
		"register": "02/01/98 13:02:46",
		"sex": "M"
	},
	287: {
		"name": "MONSTRO",
		"register": "02/01/98 16:20:08",
		"sex": "M"
	},
	288: {
		"name": "Virginia",
		"register": "02/01/98 18:15:49",
		"sex": "F"
	},
	290: {
		"name": "SMHK",
		"register": "05/01/98 01:08:55",
		"sex": "M"
	},
	98: {
		"name": "The Best of",
		"register": "05/01/98 23:54:42",
		"sex": "M"
	},
	292: {
		"name": "crazy",
		"register": "08/01/98 18:55:54",
		"sex": "M"
	},
	293: {
		"name": "Cassio",
		"register": "08/01/98 19:11:24",
		"sex": "M"
	},
	294: {
		"name": "Tchesco",
		"register": "09/01/98 19:43:26",
		"sex": "M"
	},
	295: {
		"name": "Ei rapa",
		"register": "10/01/98 16:49:35",
		"sex": "M"
	},
	296: {
		"name": "FoFa",
		"register": "11/01/98 00:47:59",
		"sex": "F"
	},
	297: {
		"name": "sonia",
		"register": "11/01/98 23:58:32",
		"sex": "F"
	},
	298: {
		"name": "Badanha",
		"register": "13/01/98 15:37:13",
		"sex": "M"
	},
	299: {
		"name": "Call",
		"register": "14/01/98 11:45:38",
		"sex": "M"
	},
	300: {
		"name": "Main User",
		"register": "14/01/98 11:48:02",
		"sex": "M"
	},
	301: {
		"name": "TARTARUGA",
		"register": "18/01/98 01:11:22",
		"sex": "M"
	},
	302: {
		"name": "Matchio",
		"register": "18/01/98 12:05:29",
		"sex": "M"
	},
	303: {
		"name": "Kid Koice",
		"register": "19/01/98 22:33:48",
		"sex": "M"
	},
	304: {
		"name": "THEPOWER",
		"register": "20/01/98 18:49:40",
		"sex": "M"
	},
	305: {
		"name": "Fonazo",
		"register": "21/01/98 11:48:43",
		"sex": "M"
	},
	306: {
		"name": "Bagual",
		"register": "22/01/98 00:14:29",
		"sex": "M"
	},
	307: {
		"name": "Pen Taylor",
		"register": "22/01/98 00:21:28",
		"sex": "M"
	},
	309: {
		"name": "Osmar Manjo",
		"register": "22/01/98 00:27:08",
		"sex": "M"
	},
	316: {
		"name": "MB",
		"register": "22/01/98 11:46:59",
		"sex": "F"
	},
	317: {
		"name": "Maninho",
		"register": "22/01/98 14:58:27",
		"sex": "M"
	},
	318: {
		"name": "Crazy",
		"register": "23/01/98 17:19:33",
		"sex": "M"
	},
	319: {
		"name": "Batata",
		"register": "23/01/98 23:16:12",
		"sex": "M"
	},
	320: {
		"name": "Batatinha",
		"register": "23/01/98 23:19:33",
		"sex": "F"
	},
	321: {
		"name": "GTN",
		"register": "24/01/98 16:24:47",
		"sex": "F"
	},
	322: {
		"name": "Ribamar",
		"register": "30/01/98 17:02:25",
		"sex": "M"
	},
	323: {
		"name": "Connect",
		"register": "31/01/98 00:34:08",
		"sex": "M"
	},
	324: {
		"name": "Borocoxoviski",
		"register": "31/01/98 00:38:51",
		"sex": "M"
	},
	325: {
		"name": "Port 2",
		"register": "31/01/98 12:38:13",
		"sex": "M"
	},
	326: {
		"name": "Mestre",
		"register": "31/01/98 17:37:29",
		"sex": "M"
	},
	327: {
		"name": "Bem lagal",
		"register": "01/02/98 18:12:22",
		"sex": "M"
	},
	328: {
		"name": "Menteer",
		"register": "01/02/98 22:18:24",
		"sex": "M"
	},
	329: {
		"name": "A RAZAO",
		"register": "06/02/98 11:39:30",
		"sex": "M"
	},
	330: {
		"name": "LUCIANO DJ",
		"register": "06/02/98 20:31:53",
		"sex": "M"
	},
	334: {
		"name": "Kinder Ovo",
		"register": "16/02/98 14:10:54",
		"sex": "M"
	},
	335: {
		"name": "Mayara",
		"register": "16/02/98 14:20:25",
		"sex": "F"
	},
	336: {
		"name": "Felipe",
		"register": "16/02/98 21:30:45",
		"sex": "M"
	},
	337: {
		"name": "Afterburn",
		"register": "16/02/98 23:02:02",
		"sex": "M"
	},
	338: {
		"name": "Afterburn",
		"register": "17/02/98 00:23:44",
		"sex": "M"
	},
	339: {
		"name": "lalp",
		"register": "17/02/98 01:40:02",
		"sex": "M"
	},
	340: {
		"name": "FOSCO",
		"register": "17/02/98 04:41:57",
		"sex": "M"
	},
	341: {
		"name": "CPL",
		"register": "17/02/98 12:23:04",
		"sex": "M"
	},
	342: {
		"name": "Felipe",
		"register": "17/02/98 13:45:43",
		"sex": "M"
	},
	343: {
		"name": "Offroad",
		"register": "17/02/98 15:54:43",
		"sex": "M"
	},
	345: {
		"name": "SANTOS",
		"register": "17/02/98 19:56:02",
		"sex": "M"
	},
	346: {
		"name": "Paschoal",
		"register": "17/02/98 20:52:55",
		"sex": "M"
	},
	347: {
		"name": "Executor",
		"register": "18/02/98 17:41:57",
		"sex": "M"
	},
	349: {
		"name": "Milton",
		"register": "18/02/98 21:28:31",
		"sex": "F"
	},
	350: {
		"name": "CyberMaster",
		"register": "18/02/98 21:41:02",
		"sex": "M"
	},
	351: {
		"name": "Pack Man",
		"register": "19/02/98 02:53:36",
		"sex": "M"
	},
	352: {
		"name": "Alex Kid",
		"register": "19/02/98 02:54:58",
		"sex": "M"
	},
	353: {
		"name": "Suggar Ray",
		"register": "19/02/98 02:55:32",
		"sex": "M"
	},
	354: {
		"name": "Religioso",
		"register": "19/02/98 15:45:00",
		"sex": "M"
	},
	355: {
		"name": "Berger",
		"register": "19/02/98 20:21:33",
		"sex": "M"
	},
	357: {
		"name": "Morena",
		"register": "20/02/98 00:51:22",
		"sex": "F"
	},
	358: {
		"name": "Caca",
		"register": "20/02/98 14:58:12",
		"sex": "F"
	},
	359: {
		"name": "Cybertwister",
		"register": "21/02/98 21:19:12",
		"sex": "M"
	},
	360: {
		"name": "TECNEC",
		"register": "22/02/98 19:29:37",
		"sex": "M"
	},
	361: {
		"name": "Punisher",
		"register": "23/02/98 02:08:08",
		"sex": "M"
	},
	362: {
		"name": "K. Samba",
		"register": "24/02/98 20:44:55",
		"sex": "M"
	},
	363: {
		"name": "B. BI-D+",
		"register": "24/02/98 22:45:09",
		"sex": "M"
	},
	364: {
		"name": "Lia",
		"register": "25/02/98 14:20:18",
		"sex": "F"
	},
	365: {
		"name": "Coronel Cruel",
		"register": "26/02/98 21:05:59",
		"sex": "M"
	},
	366: {
		"name": "ALHO 2",
		"register": "26/02/98 21:26:11",
		"sex": "M"
	},
	367: {
		"name": "Jonny Boy",
		"register": "26/02/98 21:57:03",
		"sex": "M"
	},
	368: {
		"name": "Tche Guri",
		"register": "27/02/98 18:57:25",
		"sex": "M"
	},
	371: {
		"name": "BigBarney",
		"register": "28/02/98 14:02:14",
		"sex": "M"
	},
	372: {
		"name": "Logan",
		"register": "28/02/98 14:55:06",
		"sex": "M"
	},
	373: {
		"name": "micro",
		"register": "01/03/98 19:33:10",
		"sex": "M"
	},
	374: {
		"name": "DELPHI 3",
		"register": "01/03/98 19:49:39",
		"sex": "M"
	},
	375: {
		"name": "crash",
		"register": "03/03/98 21:04:39",
		"sex": "M"
	},
	376: {
		"name": "overhigh",
		"register": "03/03/98 21:16:48",
		"sex": "M"
	},
	377: {
		"name": "override",
		"register": "08/03/98 21:38:17",
		"sex": "M"
	},
	378: {
		"name": "HeLp",
		"register": "08/03/98 22:55:50",
		"sex": "M"
	},
	379: {
		"name": "Mr.Boogie",
		"register": "08/03/98 22:57:10",
		"sex": "M"
	},
	380: {
		"name": "Myllena",
		"register": "08/03/98 22:58:01",
		"sex": "F"
	},
	381: {
		"name": "NO CARRIER",
		"register": "08/03/98 22:58:58",
		"sex": "M"
	},
	384: {
		"name": "cobol",
		"register": "13/03/98 21:01:44",
		"sex": "M"
	},
	385: {
		"name": "crash",
		"register": "13/03/98 21:21:39",
		"sex": "M"
	},
	387: {
		"name": "Sapiens",
		"register": "14/03/98 21:05:57",
		"sex": "M"
	},
	388: {
		"name": "Guru",
		"register": "15/03/98 11:16:18",
		"sex": "M"
	},
	389: {
		"name": "Offroad",
		"register": "15/03/98 18:44:14",
		"sex": "M"
	},
	391: {
		"name": "Pulga",
		"register": "19/03/98 00:02:33",
		"sex": "M"
	},
	393: {
		"name": "SoundBlaster",
		"register": "20/03/98 01:13:10",
		"sex": "M"
	},
	394: {
		"name": "Track",
		"register": "21/03/98 01:40:43",
		"sex": "M"
	},
	395: {
		"name": "Lycaeum",
		"register": "21/03/98 01:48:35",
		"sex": "F"
	},
	396: {
		"name": "Zack",
		"register": "21/03/98 13:08:39",
		"sex": "M"
	},
	397: {
		"name": "MOCOCA",
		"register": "21/03/98 20:21:59",
		"sex": "F"
	},
	398: {
		"name": "Macros",
		"register": "21/03/98 23:52:50",
		"sex": "M"
	},
	399: {
		"name": "COMit",
		"register": "21/03/98 23:54:28",
		"sex": "M"
	},
	400: {
		"name": "RING",
		"register": "21/03/98 23:59:19",
		"sex": "M"
	},
	401: {
		"name": "Alberi Pozzebon",
		"register": "22/03/98 09:28:18",
		"sex": "M"
	},
	402: {
		"name": "Batata",
		"register": "22/03/98 17:09:42",
		"sex": "M"
	},
	403: {
		"name": "O Canibau",
		"register": "22/03/98 19:43:31",
		"sex": "M"
	},
	405: {
		"name": "Phanton",
		"register": "28/03/98 17:45:46",
		"sex": "M"
	},
	406: {
		"name": "Info",
		"register": "28/03/98 22:03:40",
		"sex": "M"
	},
	407: {
		"name": "Brazuca",
		"register": "28/03/98 23:19:10",
		"sex": "M"
	},
	408: {
		"name": "Shumbawamba",
		"register": "28/03/98 23:56:55",
		"sex": "M"
	},
	409: {
		"name": "Master",
		"register": "29/03/98 08:59:53",
		"sex": "M"
	},
	410: {
		"name": "Laurinha",
		"register": "29/03/98 21:59:52",
		"sex": "F"
	},
	411: {
		"name": "LUCAS",
		"register": "30/03/98 19:58:28",
		"sex": "M"
	},
	412: {
		"name": "BaDaNhA",
		"register": "02/04/98 22:34:59",
		"sex": "M"
	},
	413: {
		"name": "Fossil",
		"register": "03/04/98 20:40:25",
		"sex": "M"
	},
	414: {
		"name": "HardDisk",
		"register": "04/04/98 18:36:13",
		"sex": "M"
	},
	415: {
		"name": "40",
		"register": "06/04/98 21:09:05",
		"sex": "M"
	},
	416: {
		"name": "CAPSLOCK",
		"register": "08/04/98 21:06:08",
		"sex": "M"
	},
	417: {
		"name": "Drive",
		"register": "10/04/98 14:17:58",
		"sex": "M"
	},
	418: {
		"name": "Papaentulho",
		"register": "11/04/98 19:58:00",
		"sex": "M"
	},
	419: {
		"name": "Mony",
		"register": "12/04/98 11:34:15",
		"sex": "F"
	},
	420: {
		"name": "Cabeca de Jaca",
		"register": "12/04/98 13:33:24",
		"sex": "M"
	},
	422: {
		"name": "Pablo",
		"register": "12/04/98 13:52:37",
		"sex": "M"
	},
	423: {
		"name": "MONITOR",
		"register": "12/04/98 14:48:23",
		"sex": "M"
	},
	424: {
		"name": "FAM",
		"register": "12/04/98 15:31:36",
		"sex": "M"
	},
	425: {
		"name": "My name is Bond",
		"register": "14/04/98 14:20:17",
		"sex": "M"
	},
	426: {
		"name": "Megahard",
		"register": "14/04/98 14:35:57",
		"sex": "M"
	},
	427: {
		"name": "Executor",
		"register": "15/04/98 17:20:36",
		"sex": "M"
	},
	428: {
		"name": "GHOST",
		"register": "16/04/98 13:21:56",
		"sex": "M"
	},
	429: {
		"name": "HomemMp3",
		"register": "19/04/98 00:30:50",
		"sex": "M"
	},
	430: {
		"name": "Comunicator Esperto",
		"register": "19/04/98 21:44:52",
		"sex": "M"
	},
	431: {
		"name": "Comunicator",
		"register": "21/04/98 15:06:56",
		"sex": "M"
	},
	432: {
		"name": "YUYUKE",
		"register": "23/04/98 10:25:35",
		"sex": "M"
	},
	433: {
		"name": "tedi",
		"register": "27/04/98 18:35:32",
		"sex": "F"
	},
	434: {
		"name": "ZIP-ARJ-RAR",
		"register": "29/04/98 00:55:30",
		"sex": "M"
	},
	436: {
		"name": "Violador",
		"register": "29/04/98 13:49:03",
		"sex": "M"
	},
	437: {
		"name": "Arcanjo",
		"register": "30/04/98 11:11:06",
		"sex": "M"
	},
	438: {
		"name": "Ane 98",
		"register": "30/04/98 17:58:36",
		"sex": "F"
	},
	439: {
		"name": "APLUB",
		"register": "01/05/98 19:23:23",
		"sex": "M"
	},
	440: {
		"name": "ON-LINE",
		"register": "01/05/98 19:32:10",
		"sex": "M"
	},
	441: {
		"name": "Sonho",
		"register": "02/05/98 14:53:01",
		"sex": "F"
	},
	442: {
		"name": "Creative",
		"register": "06/05/98 21:38:00",
		"sex": "M"
	},
	443: {
		"name": "<C><R><T>",
		"register": "07/05/98 00:08:19",
		"sex": "F"
	},
	444: {
		"name": "J‚ssica",
		"register": "07/05/98 00:25:14",
		"sex": "F"
	},
	445: {
		"name": "Sulfuric Acid",
		"register": "07/05/98 02:30:11",
		"sex": "M"
	},
	446: {
		"name": "Microsoft",
		"register": "09/05/98 22:41:41",
		"sex": "M"
	},
	447: {
		"name": "Vampire",
		"register": "12/05/98 12:50:52",
		"sex": "M"
	},
	448: {
		"name": "Gringo",
		"register": "12/05/98 17:36:32",
		"sex": "M"
	},
	449: {
		"name": "Casper",
		"register": "13/05/98 00:55:25",
		"sex": "M"
	},
	450: {
		"name": "franz",
		"register": "13/05/98 15:38:04",
		"sex": "M"
	},
	451: {
		"name": "Fonazo",
		"register": "13/05/98 18:05:32",
		"sex": "M"
	},
	452: {
		"name": "FOX3",
		"register": "14/05/98 15:31:20",
		"sex": "M"
	},
	453: {
		"name": "FOX1",
		"register": "16/05/98 20:41:57",
		"sex": "M"
	},
	454: {
		"name": "Ed",
		"register": "17/05/98 11:23:19",
		"sex": "F"
	},
	456: {
		"name": "MimoSaun",
		"register": "18/05/98 21:53:46",
		"sex": "M"
	},
	457: {
		"name": "Conquistador",
		"register": "22/05/98 15:29:55",
		"sex": "M"
	},
	459: {
		"name": "Microsoft",
		"register": "22/05/98 20:15:21",
		"sex": "M"
	},
	460: {
		"name": "Gremmilin",
		"register": "23/05/98 18:35:39",
		"sex": "M"
	},
	461: {
		"name": "Pernalonga",
		"register": "23/05/98 19:00:40",
		"sex": "M"
	},
	462: {
		"name": "ELMEL",
		"register": "23/05/98 19:16:36",
		"sex": "M"
	},
	463: {
		"name": "Ze",
		"register": "30/05/98 11:43:33",
		"sex": "M"
	},
	467: {
		"name": "Phone",
		"register": "05/06/98 22:24:31",
		"sex": "M"
	},
	468: {
		"name": "Adriana II",
		"register": "07/06/98 00:49:22",
		"sex": "F"
	},
	469: {
		"name": "tedi",
		"register": "09/06/98 17:41:16",
		"sex": "F"
	},
	470: {
		"name": "campos",
		"register": "09/06/98 22:39:40",
		"sex": "M"
	},
	471: {
		"name": "dukenukem",
		"register": "10/06/98 16:37:22",
		"sex": "M"
	},
	472: {
		"name": "Honest",
		"register": "13/06/98 18:40:40",
		"sex": "M"
	}
};

var EventUtil = {
	addHandler: function(element, type, handler) {
		if (element.addEventListener) {
			element.addEventListener(type, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent("on" + type, handler);
		} else {
			element["on" + type] = handler;
		}
	},
	removeHandler: function(element, type, handler) {
		if (element.removeEventListener) {
			element.removeEventListener(type, handler, false);
		} else if (element.detachEvent) {
			element.detachEvent("on" + type, handler);
		} else {
			element["on" + type] = null;
		}
	}
};

var alivetimeout, okd;
function keepalive(){
	clearTimeout(alivetimeout);
	alivetimeout = setTimeout(function(){ 
		ansi_animate("keepalive.ans", -1, mainmenu, function() {
			alivetimeout = setTimeout(logout, 30 * 1000);
		});
	}, 2 * 60 * 1000);
}

EventUtil.addHandler(document, "keydown", keepalive);
EventUtil.addHandler(document, "click", keepalive);

function getDate(d, t){
	d = typeof d !== 'undefined' ? d : false;
	t = typeof t !== 'undefined' ? t : false;

	var dt = new Date();
	var day = ("0" + dt.getDate()).slice(-2);
	var month = ("0" + (dt.getMonth() + 1)).slice(-2);
	var hour = ("0" + dt.getHours()).slice(-2);
	var minute = ("0" + dt.getMinutes()).slice(-2);

	var ret = d  ? dt.getFullYear() + '-' + month + '-' + day : "";
	ret += d && t ? " " : "";
	ret += t ? hour + ':' + minute : "";
	return ret;
}

function setCookie(name,value,expires) {
	if (expires) {
		var date = new Date();
		date.setTime(date.getTime()+(expires*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return false;
}

function unsetCookie(name) {
	setCookie(name,"",-1);
}

function ansi_animate(ans, pause, callback, onfinish) {
	input(-400, -400);
	callback = typeof callback !== 'undefined' ? callback : function() {};
	onfinish = typeof onfinish !== 'undefined' ? onfinish : function() {};
	pause = typeof pause !== 'undefined' ? pause : 0;
	terminal.innerHTML = '';

	EventUtil.removeHandler(document, "keydown", okd);
	EventUtil.removeHandler(document, "click", okd);

	controller = AnsiLove.animate(ans, function (canvas, sauce) {
			// canvas.style.zIndex = "100000";
			terminal.appendChild(canvas);

			canvas.addEventListener('click', function(e) {
				var x = e.pageX - (this.offsetLeft + this.parentElement.offsetLeft);
				var y = e.pageY - (this.offsetTop + this.parentElement.offsetTop);
				console.log(x, y) 
			}, false);

			controller.play(9600, function () {
				onfinish();

				if (pause < 0) {
					okd = callback;
					EventUtil.addHandler(document, "keydown", okd);
					EventUtil.addHandler(document, "click", okd);
				} else {
					setTimeout(callback, pause);
				}
			});
		}, config);
}

function ansi_render(ans, pause, callback) {
// function ansi_animate(ans, pause, callback, onfinish) {
	input(-400, -400);
	callback = typeof callback !== 'undefined' ? callback : function() {};
	onfinish = typeof onfinish !== 'undefined' ? onfinish : function() {};
	pause = typeof pause !== 'undefined' ? pause : 0;
	terminal.innerHTML = '';

	EventUtil.removeHandler(document, "keydown", okd);
	EventUtil.removeHandler(document, "click", okd);

	controller = AnsiLove.animate(ans, function (canvas, sauce) {
			// canvas.style.zIndex = "100000";
			terminal.appendChild(canvas);

			canvas.addEventListener('click', function(e) {
				var x = e.pageX - (this.offsetLeft + this.parentElement.offsetLeft);
				var y = e.pageY - (this.offsetTop + this.parentElement.offsetTop);
				console.log(x, y) 
			}, false);

			controller.play(960000, function () {
				onfinish();

				if (pause < 0) {
					okd = callback;
					EventUtil.addHandler(document, "keydown", okd);
					EventUtil.addHandler(document, "click", okd);
				} else {
					setTimeout(callback, pause);
				}
			});
		}, config);
}

function ansi_render_static(ans, pause, callback) {
	input(-400, -400);
	terminal.innerHTML = '';
	controller = AnsiLove.render(ans, function (canvas, sauce) {
		terminal.appendChild(canvas);
		canvas.addEventListener('click', function(e) { console.log(e) }, false);
		setTimeout(callback, pause);
	}, config);
}

comit = function() {
	ansi_render("comit.ans", 5000, comit_connect);
}
comit_connect = function() {
	var audio = document.getElementById('connect');
	ansi_render("comit_connect.ans", 16500, welcome);
	audio.play();
}
welcome = function() {
	ansi_animate("welcome.ans", 3000, connect);
}

connect = function() {
	ansi_animate("connect.ans", 3000, planet, function() {
		var d = new Date()
		label(getDate(0,1), 504, 114, "#ffffff");
		label(getDate(1,0), 504, 129, "#ffffff");
		label(weekday[d.getDay()], 504, 145, "#ffffff");
	});
}

planet = function() {
	ansi_animate("planet.ans", 200, rufles);
}

login = function(input) {
	var uid = parseInt(input);
	user = users[uid];
	if (typeof user !== 'undefined') {
		user.uid = uid;
		console.log(user);
		if (! getCookie("date_login"+user.uid) ) {
			setCookie("date_login"+user.uid, new Date(), 16*60);
		}
		eletronicasm();
	} else {
		ansi_animate("usuarioinvalido.ans", -1, rufles);
	};
}

rufles = function() {
	ansi_animate("rufles.ans", 0, function () {
		choice = {
			"off": logout,
			"n": cadastro,
			"callback": login,
		}

		input(245, 305, "#ffff55");
	});
}
cadastro = function() {
	ansi_animate("cadastro.ans", 0, function() {
		choice = {
			"n": rufles,
			"s": function() { ansi_animate("cadastroindisponivel.ans", -1, rufles); },
		}
		input(10, 395, "#ffff55");
	});
}
eletronicasm = function() {
	ansi_animate("eletronicasm.ans", 0, function () {
		choice = {
			"s": function() { ansi_animate("eletronicasm2.ans", -1, usuariosonline) },
			"n": usuariosonline,
		}
		input(135, 160, "#ffff55");
	});
}

eletronicasm2 = function() {
	ansi_animate("eletronicasm2.ans", -1, mainmenu);
}

pulsostelefonicos = function() {
	ansi_animate("pulsostelefonicos.ans", -1, function() {ansi_animate("pulsostelefonicos2.ans", -1, mainmenu);});
}
bancodedados = function() {
	ansi_animate("bancodedados.ans", -1, mainmenu);
}
logout = function() {
	ansi_animate("logout1.ans", 1000, function() {
		ansi_animate("logout2.ans", 0, function() {
			ansi_animate("logout3.ans");
		});
	});
}
chat = function() {
	ansi_animate("chat.ans", 2000, function() {ansi_animate("chat-fim.ans", -1, mainmenu);});
}
sobrevoce2 = function() {
	ansi_animate("sobrevoce.ans", -1, mainmenu, function() {
		label(city.substring(0,22), 120, 81, "#ffffff");
		label(region, 120, 97, "#ffffff");
		label(user.name.substring(0,22), 120, 50, "#ffffff");
		label(user.uid, 120, 65, "#ffffff");

		label(user.sex, 120, 112, "#ffffff");
		label(user.register, 120, 145, "#ffffff");

		date_login = getCookie("date_login"+user.uid);
		date_login = new Date(date_login);

		minutes_on = Math.floor((new Date() - date_login) / (60*1000));
		var rst = (15 - minutes_on);
		label(minutes_on * 3, 545, 178, "#ffffff");
		label(minutes_on, 545, 193, "#ffffff");
		label(rst, 545, 208, "#ffffff");

		var d = new Date()
		label(getDate(1,0), 163, 275, "#ffffff");
		label(weekday[d.getDay()], 163, 290, "#ffffff");
		label(getDate(0,1), 163, 306, "#ffffff");
	});
}

sobrevoce = function() {
	ansi_animate("aviao.ans", -1, sobrevoce2);
}

publicas = function() {
	ansi_animate("oculos.ans", 2000, function() {ansi_animate("publicas.ans", -1, mainmenu);});
}
biblioteca = function() {
	ansi_animate("biblioteca-raios.ans", 2000, function() {ansi_animate("biblioteca.ans", -1, mainmenu);});
}
mailbox = function() {
	ansi_animate("mailbox.ans", 0, function () {
		choice = {
			"1": mensagemdodmc,
			"q": mainmenu,
		}
		input(185, 289, "#ffffff");
	});
}

mensagemdodmc = function() {
	ansi_animate("mensagemdodmc.ans", -1, mailbox);
}

var chamarsysop_counter = 0;
chamarsysop = function() {
	chamarsysop_counter++;
	if (chamarsysop_counter <= 3) ansi_animate("chamarsysop.ans", -1, mainmenu);
	else {
		chamarsysop_counter = 0;
		logout();
	}
}
// ajuda = function() {
// 	mainmenu_ans = mainmenu_ans == "mainmenu.ans" ? "mainmenu_old.ans" : "mainmenu.ans";
// 	mainmenu();
// }
ajuda = function() {
	ansi_animate("ajuda.ans", -1, mainmenu);
}

xtc2 = function() {
	ansi_animate("XTC2.ANS", -1, mainmenu);
}
inn = function() {
	ansi_animate("INN.ANS", -1, mainmenu);
}
nivelinsuficiente = function() {
	ansi_animate("nivelinsuficiente.ans", -1, function() {ansi_animate("aumenteseunivel.ans", 3000, mainmenu);});
}
calendario = function() {
	ansi_animate("calendario1998-1.ans", -1, function() {ansi_animate("calendario1998-2.ans", -1, mainmenu);});
}
ensaio = function() {
	ansi_animate("astronauta.ans", -1, mainmenu);
}

mainmenu = function() {
	ansi_animate(mainmenu_ans, 0, function () {
		choice = {
			"a": nivelinsuficiente,
			"i": calendario,
			"b": biblioteca,
			"c": chat,
			"k": xtc2,
			"m": inn,
			"d": bancodedados,
			"o": eletronicasm2,
			"s": nivelinsuficiente,
			"j": nivelinsuficiente,
			"n": ensaio,
			"t": chamarsysop,
			"w": usuariosonline,
			"l": pulsostelefonicos,
			"p": publicas,
			"f": sobrevoce,
			"?": ajuda,
			"r": mailbox,
			"!": rufles,
			"g": logout,
			"off": logout,
			"*.*": function() { ansi_animate("comandoinvalido.ans", -1, mainmenu) }
		}
		input(175, 320, "#ffff55");
		if (date_login && mainmenu_ans == "mainmenu.ans") {

			label(getDate(1,1), 409, 17, "#ffff55");

			var d = new Date()

			label(weekday[d.getDay()], 408, 32, "#ffff55");

			date_login = getCookie("date_login"+user.uid);

			date_login = new Date(date_login);

			minutes_on = Math.floor((new Date() - date_login) / (60*1000));
			var rst = (15 - minutes_on);

			label("Usd: " + minutes_on + "min  Rst: "+ rst + "min", 408, 48, "#ffff55");

			if (rst < 0) return tempoesgotado();
		}
	});
}

usuariosonline = function() {
	ansi_animate("usuariosonline.ans", -1, mainmenu, function() {
		var lab = "Esperando..."; 
		if (user.uid != 120 && user.uid != 2) {
			lab = user.name + " " + user.uid;
			label((city + "          ").substring(0,11).replace(" ", "&nbsp;") + ", " + region + "&nbsp;&nbsp;CONNECT&nbsp;&nbsp;33600 bps  ", 272, 193, "#ffffff");
		}
		label(lab, 72, 193, "#ffffff");
	});
}

tempoesgotado = function() {
	ansi_animate("tempoesgotado.ans", -1, logout, function() {
		label(minutes_on + " minutos", 325, 146, "#ff5555");
	});
}

function input(x, y, color) {
	x = typeof x !== 'undefined' ? x : 0;
	y = typeof y !== 'undefined' ? y : 0;
	color = typeof color !== 'undefined' ? color : "#fff";

	prompt.value = "";
	prompt.style.left = x+'px';
	prompt.style.top = y+'px';
	prompt.style.color = color;
}

function label(text, x, y, color) {
	x = typeof x !== 'undefined' ? x : 0;
	y = typeof y !== 'undefined' ? y : 0;
	color = typeof color !== 'undefined' ? color : "#fff";

	var label = document.createElement('span');
	label.innerHTML = text;
	label.style.left = x+'px';
	label.style.top = y+'px';
	label.style.color = color;
	terminal.appendChild(label);
}

function bbsinput() {
	if (! prompt.value.length > 0) return;

	var i = prompt.value.toLowerCase();
	if (i != "callback" && i in choice) {
		choice[i]();
	} else if ("callback" in choice) {
		choice["callback"](prompt.value);
	} else if ("*.*" in choice) {
		choice["*.*"]();
	}
	prompt.value = "";
	return false;
}
comit();
