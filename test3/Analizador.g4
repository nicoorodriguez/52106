grammar Analizador;
options { tokenVocab=AnalizadorLexer; }

//Parser

programa: instruccion+ ;

instruccion: seleccion ;

seleccion: SEGUN expresion HACER LLAVEA ( caso+ (caso_defecto)? ) LLAVEC FINSEGUN ;

caso: CASO constante DPTO sentencia* ;

caso_defecto: DEFECTO DPTO sentencia* ;

sentencia: salida+
           |terminar
           ;

salida : IMPRIMIR LPAREN CADENA RPAREN PTOCOMA ;

terminar : SALIR PTOCOMA ;

expresion : constante ;

constante: CADENA
           |numero
           ;

cadena:  '"' caracter* '"' ;

numero: DIGITO+ ;

caracter: LETRA 
        | DIGITO 
        | SIMBOLO
        ;

//Lexer

SEGUN: 'segun';
HACER: 'hacer' ;
CASO: 'caso';
DEFECTO: 'defecto' ;
IMPRIMIR: 'imprimir' ;
SALIR: 'salir' ;
FINSEGUN: 'finsegun' ;

LPAREN : '(' ;
RPAREN : ')' ;
LLAVEA : '{' ;
LLAVEC : '}' ;
PTOCOMA : ';' ;
DPTO : ':' ;
COMILLA : '"' ;

// Nota: CADENA captura el texto con espacios internos incluidos
CADENA: '"' (~["\r\n])* '"' ;

// Cambiamos DIGITO, LETRA y SIMBOLO a tokens correctos para que puedan formar CADENA

DIGITO : [0-9] ; 
LETRA: [a-zA-Z_] ;
SIMBOLO: '.' | ',' | '!' | '?' | ':' | ';' | ' ' ; // incluye espacio aquí para preservar espacios en CADENA

// Nuevo token para espacios fuera de cadenas, que NO se ignoran ni se usan en gramática
ESPACIO: [ \t\r\n]+ ;

// NO usamos -> skip, porque necesitamos conservar los espacios para reconstruir el input
