// Generated from Analizador.g4 by ANTLR 4.13.0
// jshint ignore: start
import antlr4 from 'antlr4';
import AnalizadorListener from './AnalizadorListener.js';
const serializedATN = [4,1,19,105,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
1,0,4,0,28,8,0,11,0,12,0,29,1,1,1,1,1,2,1,2,1,2,1,2,1,2,4,2,39,8,2,11,2,
12,2,40,1,2,3,2,44,8,2,1,2,1,2,1,2,1,3,1,3,1,3,1,3,5,3,53,8,3,10,3,12,3,
56,9,3,1,4,1,4,1,4,5,4,61,8,4,10,4,12,4,64,9,4,1,5,4,5,67,8,5,11,5,12,5,
68,1,5,3,5,72,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,8,1,8,1,9,1,9,3,
9,87,8,9,1,10,1,10,5,10,91,8,10,10,10,12,10,94,9,10,1,10,1,10,1,11,4,11,
99,8,11,11,11,12,11,100,1,12,1,12,1,12,0,0,13,0,2,4,6,8,10,12,14,16,18,20,
22,24,0,1,1,0,16,18,101,0,27,1,0,0,0,2,31,1,0,0,0,4,33,1,0,0,0,6,48,1,0,
0,0,8,57,1,0,0,0,10,71,1,0,0,0,12,73,1,0,0,0,14,79,1,0,0,0,16,82,1,0,0,0,
18,86,1,0,0,0,20,88,1,0,0,0,22,98,1,0,0,0,24,102,1,0,0,0,26,28,3,2,1,0,27,
26,1,0,0,0,28,29,1,0,0,0,29,27,1,0,0,0,29,30,1,0,0,0,30,1,1,0,0,0,31,32,
3,4,2,0,32,3,1,0,0,0,33,34,5,1,0,0,34,35,3,16,8,0,35,36,5,2,0,0,36,38,5,
10,0,0,37,39,3,6,3,0,38,37,1,0,0,0,39,40,1,0,0,0,40,38,1,0,0,0,40,41,1,0,
0,0,41,43,1,0,0,0,42,44,3,8,4,0,43,42,1,0,0,0,43,44,1,0,0,0,44,45,1,0,0,
0,45,46,5,11,0,0,46,47,5,7,0,0,47,5,1,0,0,0,48,49,5,3,0,0,49,50,3,18,9,0,
50,54,5,13,0,0,51,53,3,10,5,0,52,51,1,0,0,0,53,56,1,0,0,0,54,52,1,0,0,0,
54,55,1,0,0,0,55,7,1,0,0,0,56,54,1,0,0,0,57,58,5,4,0,0,58,62,5,13,0,0,59,
61,3,10,5,0,60,59,1,0,0,0,61,64,1,0,0,0,62,60,1,0,0,0,62,63,1,0,0,0,63,9,
1,0,0,0,64,62,1,0,0,0,65,67,3,12,6,0,66,65,1,0,0,0,67,68,1,0,0,0,68,66,1,
0,0,0,68,69,1,0,0,0,69,72,1,0,0,0,70,72,3,14,7,0,71,66,1,0,0,0,71,70,1,0,
0,0,72,11,1,0,0,0,73,74,5,5,0,0,74,75,5,8,0,0,75,76,5,15,0,0,76,77,5,9,0,
0,77,78,5,12,0,0,78,13,1,0,0,0,79,80,5,6,0,0,80,81,5,12,0,0,81,15,1,0,0,
0,82,83,3,18,9,0,83,17,1,0,0,0,84,87,5,15,0,0,85,87,3,22,11,0,86,84,1,0,
0,0,86,85,1,0,0,0,87,19,1,0,0,0,88,92,5,14,0,0,89,91,3,24,12,0,90,89,1,0,
0,0,91,94,1,0,0,0,92,90,1,0,0,0,92,93,1,0,0,0,93,95,1,0,0,0,94,92,1,0,0,
0,95,96,5,14,0,0,96,21,1,0,0,0,97,99,5,16,0,0,98,97,1,0,0,0,99,100,1,0,0,
0,100,98,1,0,0,0,100,101,1,0,0,0,101,23,1,0,0,0,102,103,7,0,0,0,103,25,1,
0,0,0,10,29,40,43,54,62,68,71,86,92,100];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class AnalizadorParser extends antlr4.Parser {

    static grammarFileName = "Analizador.g4";
    static literalNames = [ null, "'segun'", "'hacer'", "'caso'", "'defecto'", 
                            "'imprimir'", "'salir'", "'finsegun'", "'('", 
                            "')'", "'{'", "'}'", "';'", "':'", "'\"'" ];
    static symbolicNames = [ null, "SEGUN", "HACER", "CASO", "DEFECTO", 
                             "IMPRIMIR", "SALIR", "FINSEGUN", "LPAREN", 
                             "RPAREN", "LLAVEA", "LLAVEC", "PTOCOMA", "DPTO", 
                             "COMILLA", "CADENA", "DIGITO", "LETRA", "SIMBOLO", 
                             "WS" ];
    static ruleNames = [ "programa", "instruccion", "seleccion", "caso", 
                         "caso_defecto", "sentencia", "salida", "terminar", 
                         "expresion", "constante", "cadena", "numero", "caracter" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = AnalizadorParser.ruleNames;
        this.literalNames = AnalizadorParser.literalNames;
        this.symbolicNames = AnalizadorParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, AnalizadorParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 27; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 26;
	            this.instruccion();
	            this.state = 29; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, AnalizadorParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this.seleccion();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	seleccion() {
	    let localctx = new SeleccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, AnalizadorParser.RULE_seleccion);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(AnalizadorParser.SEGUN);
	        this.state = 34;
	        this.expresion();
	        this.state = 35;
	        this.match(AnalizadorParser.HACER);
	        this.state = 36;
	        this.match(AnalizadorParser.LLAVEA);

	        this.state = 38; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 37;
	            this.caso();
	            this.state = 40; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===3);
	        this.state = 43;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===4) {
	            this.state = 42;
	            this.caso_defecto();
	        }

	        this.state = 45;
	        this.match(AnalizadorParser.LLAVEC);
	        this.state = 46;
	        this.match(AnalizadorParser.FINSEGUN);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso() {
	    let localctx = new CasoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, AnalizadorParser.RULE_caso);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 48;
	        this.match(AnalizadorParser.CASO);
	        this.state = 49;
	        this.constante();
	        this.state = 50;
	        this.match(AnalizadorParser.DPTO);
	        this.state = 54;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===6) {
	            this.state = 51;
	            this.sentencia();
	            this.state = 56;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caso_defecto() {
	    let localctx = new Caso_defectoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, AnalizadorParser.RULE_caso_defecto);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 57;
	        this.match(AnalizadorParser.DEFECTO);
	        this.state = 58;
	        this.match(AnalizadorParser.DPTO);
	        this.state = 62;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===5 || _la===6) {
	            this.state = 59;
	            this.sentencia();
	            this.state = 64;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, AnalizadorParser.RULE_sentencia);
	    try {
	        this.state = 71;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 66; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 65;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 68; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,5, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 70;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, AnalizadorParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 73;
	        this.match(AnalizadorParser.IMPRIMIR);
	        this.state = 74;
	        this.match(AnalizadorParser.LPAREN);
	        this.state = 75;
	        this.match(AnalizadorParser.CADENA);
	        this.state = 76;
	        this.match(AnalizadorParser.RPAREN);
	        this.state = 77;
	        this.match(AnalizadorParser.PTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, AnalizadorParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 79;
	        this.match(AnalizadorParser.SALIR);
	        this.state = 80;
	        this.match(AnalizadorParser.PTOCOMA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expresion() {
	    let localctx = new ExpresionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, AnalizadorParser.RULE_expresion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 82;
	        this.constante();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constante() {
	    let localctx = new ConstanteContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, AnalizadorParser.RULE_constante);
	    try {
	        this.state = 86;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.match(AnalizadorParser.CADENA);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.numero();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	cadena() {
	    let localctx = new CadenaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, AnalizadorParser.RULE_cadena);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 88;
	        this.match(AnalizadorParser.COMILLA);
	        this.state = 92;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0)) {
	            this.state = 89;
	            this.caracter();
	            this.state = 94;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this.match(AnalizadorParser.COMILLA);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numero() {
	    let localctx = new NumeroContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, AnalizadorParser.RULE_numero);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 98; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 97;
	            this.match(AnalizadorParser.DIGITO);
	            this.state = 100; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===16);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	caracter() {
	    let localctx = new CaracterContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, AnalizadorParser.RULE_caracter);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 102;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

AnalizadorParser.EOF = antlr4.Token.EOF;
AnalizadorParser.SEGUN = 1;
AnalizadorParser.HACER = 2;
AnalizadorParser.CASO = 3;
AnalizadorParser.DEFECTO = 4;
AnalizadorParser.IMPRIMIR = 5;
AnalizadorParser.SALIR = 6;
AnalizadorParser.FINSEGUN = 7;
AnalizadorParser.LPAREN = 8;
AnalizadorParser.RPAREN = 9;
AnalizadorParser.LLAVEA = 10;
AnalizadorParser.LLAVEC = 11;
AnalizadorParser.PTOCOMA = 12;
AnalizadorParser.DPTO = 13;
AnalizadorParser.COMILLA = 14;
AnalizadorParser.CADENA = 15;
AnalizadorParser.DIGITO = 16;
AnalizadorParser.LETRA = 17;
AnalizadorParser.SIMBOLO = 18;
AnalizadorParser.WS = 19;

AnalizadorParser.RULE_programa = 0;
AnalizadorParser.RULE_instruccion = 1;
AnalizadorParser.RULE_seleccion = 2;
AnalizadorParser.RULE_caso = 3;
AnalizadorParser.RULE_caso_defecto = 4;
AnalizadorParser.RULE_sentencia = 5;
AnalizadorParser.RULE_salida = 6;
AnalizadorParser.RULE_terminar = 7;
AnalizadorParser.RULE_expresion = 8;
AnalizadorParser.RULE_constante = 9;
AnalizadorParser.RULE_cadena = 10;
AnalizadorParser.RULE_numero = 11;
AnalizadorParser.RULE_caracter = 12;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_programa;
    }

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitPrograma(this);
		}
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_instruccion;
    }

	seleccion() {
	    return this.getTypedRuleContext(SeleccionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitInstruccion(this);
		}
	}


}



class SeleccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_seleccion;
    }

	SEGUN() {
	    return this.getToken(AnalizadorParser.SEGUN, 0);
	};

	expresion() {
	    return this.getTypedRuleContext(ExpresionContext,0);
	};

	HACER() {
	    return this.getToken(AnalizadorParser.HACER, 0);
	};

	LLAVEA() {
	    return this.getToken(AnalizadorParser.LLAVEA, 0);
	};

	LLAVEC() {
	    return this.getToken(AnalizadorParser.LLAVEC, 0);
	};

	FINSEGUN() {
	    return this.getToken(AnalizadorParser.FINSEGUN, 0);
	};

	caso = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CasoContext);
	    } else {
	        return this.getTypedRuleContext(CasoContext,i);
	    }
	};

	caso_defecto() {
	    return this.getTypedRuleContext(Caso_defectoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSeleccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSeleccion(this);
		}
	}


}



class CasoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_caso;
    }

	CASO() {
	    return this.getToken(AnalizadorParser.CASO, 0);
	};

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	DPTO() {
	    return this.getToken(AnalizadorParser.DPTO, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCaso(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCaso(this);
		}
	}


}



class Caso_defectoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_caso_defecto;
    }

	DEFECTO() {
	    return this.getToken(AnalizadorParser.DEFECTO, 0);
	};

	DPTO() {
	    return this.getToken(AnalizadorParser.DPTO, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCaso_defecto(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCaso_defecto(this);
		}
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSentencia(this);
		}
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(AnalizadorParser.IMPRIMIR, 0);
	};

	LPAREN() {
	    return this.getToken(AnalizadorParser.LPAREN, 0);
	};

	CADENA() {
	    return this.getToken(AnalizadorParser.CADENA, 0);
	};

	RPAREN() {
	    return this.getToken(AnalizadorParser.RPAREN, 0);
	};

	PTOCOMA() {
	    return this.getToken(AnalizadorParser.PTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitSalida(this);
		}
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(AnalizadorParser.SALIR, 0);
	};

	PTOCOMA() {
	    return this.getToken(AnalizadorParser.PTOCOMA, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitTerminar(this);
		}
	}


}



class ExpresionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_expresion;
    }

	constante() {
	    return this.getTypedRuleContext(ConstanteContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterExpresion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitExpresion(this);
		}
	}


}



class ConstanteContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_constante;
    }

	CADENA() {
	    return this.getToken(AnalizadorParser.CADENA, 0);
	};

	numero() {
	    return this.getTypedRuleContext(NumeroContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterConstante(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitConstante(this);
		}
	}


}



class CadenaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_cadena;
    }

	COMILLA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.COMILLA);
	    } else {
	        return this.getToken(AnalizadorParser.COMILLA, i);
	    }
	};


	caracter = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CaracterContext);
	    } else {
	        return this.getTypedRuleContext(CaracterContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCadena(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCadena(this);
		}
	}


}



class NumeroContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_numero;
    }

	DIGITO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(AnalizadorParser.DIGITO);
	    } else {
	        return this.getToken(AnalizadorParser.DIGITO, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterNumero(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitNumero(this);
		}
	}


}



class CaracterContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = AnalizadorParser.RULE_caracter;
    }

	LETRA() {
	    return this.getToken(AnalizadorParser.LETRA, 0);
	};

	DIGITO() {
	    return this.getToken(AnalizadorParser.DIGITO, 0);
	};

	SIMBOLO() {
	    return this.getToken(AnalizadorParser.SIMBOLO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.enterCaracter(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof AnalizadorListener ) {
	        listener.exitCaracter(this);
		}
	}


}




AnalizadorParser.ProgramaContext = ProgramaContext; 
AnalizadorParser.InstruccionContext = InstruccionContext; 
AnalizadorParser.SeleccionContext = SeleccionContext; 
AnalizadorParser.CasoContext = CasoContext; 
AnalizadorParser.Caso_defectoContext = Caso_defectoContext; 
AnalizadorParser.SentenciaContext = SentenciaContext; 
AnalizadorParser.SalidaContext = SalidaContext; 
AnalizadorParser.TerminarContext = TerminarContext; 
AnalizadorParser.ExpresionContext = ExpresionContext; 
AnalizadorParser.ConstanteContext = ConstanteContext; 
AnalizadorParser.CadenaContext = CadenaContext; 
AnalizadorParser.NumeroContext = NumeroContext; 
AnalizadorParser.CaracterContext = CaracterContext; 
