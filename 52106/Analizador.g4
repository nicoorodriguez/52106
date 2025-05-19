grammar Analizador;
//Parser


programa: instruccion+ ;

instruccion: seleccion ;
             
seleccion: SEGUN expresion HACER '{' ( caso+ (caso_defecto)? ) '}' FINSEGUN ;

caso: CASO constante':' sentencia* ;

caso_defecto: DEFECTO ':' sentencia* ;

sentencia: salida+
           |terminar
           ;

salida : IMPRIMIR '(' cadena ')' ';' ;

terminar : SALIR ';' ;

expresion : constante ;

constante: cadena
           |numero
           ;

cadena: '"' caracter* '"' ;

numero: DIGITO+ ;

caracter: LETRA
          | DIGITO
          | SIMBOLO
          ;
         
//Lexer
 SEGUN: 'segun';
 HACER: 'hacer' ;
 FINSEGUN: 'finsegun' ;
 CASO: 'caso';
 DEFECTO: 'defecto' ;
 IMPRIMIR: 'imprimir' ;
 SALIR: 'salir' ;
 
 EQ : '=' ;
 LPAREN : '(' ;
 RPAREN : ')' ;
 LLAVEA : '{' ;
 LLAVEC : '}' ;


 DIGITO : [0-9]+ ;
 LETRA: [a-zA-Z_][a-zA-Z_0-9]* ;
 SIMBOLO: '.' | ',' | '!' | '?' | ':' | ';' ;
 WS: [ \t\r\n]+ -> skip ;