const antlr4 = require('antlr4');
const fs = require('fs');

// Importaciones seguras de los módulos generados por ANTLR
const AnalizadorLexerModule = require('./generated/AnalizadorLexer');
const AnalizadorParserModule = require('./generated/AnalizadorParser');

const AnalizadorLexer = AnalizadorLexerModule.AnalizadorLexer || AnalizadorLexerModule.default || AnalizadorLexerModule;
const AnalizadorParser = AnalizadorParserModule.AnalizadorParser || AnalizadorParserModule.default || AnalizadorParserModule;

// Leer archivo de entrada
const input = fs.readFileSync('input.txt', 'utf-8');

// Crear input stream y lexer
const chars = new antlr4.InputStream(input);
const lexer = new AnalizadorLexer(chars);

// Obtener todos los tokens generados por el lexer
const allTokens = lexer.getAllTokens();

// Verificar errores léxicos (tokens inválidos)
const erroresLexicos = allTokens.some(token => token.type === antlr4.Token.INVALID_TYPE);

// Reiniciar el lexer para análisis sintáctico
lexer.reset();

// Crear token stream y parser
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new AnalizadorParser(tokens);

// Variable de estado para errores sintácticos
let erroresSintacticos = false;

// Listener de errores personalizado sin importar submódulos
parser.removeErrorListeners();
parser.addErrorListener({
  syntaxError(recognizer, offendingSymbol, line, column, msg) {
    erroresSintacticos = true;
    console.error(`Error sintáctico en línea ${line}, columna ${column}: ${msg}`);
  }
});

parser.buildParseTrees = true;
const tree = parser.programa();  // regla inicial

// Mostrar mensaje solo si no hubo errores
if (!erroresLexicos && !erroresSintacticos) {
  console.log("\n¡Análisis exitoso!");
  console.log("\nTabla de lexemas y tokens reconocidos:");
  console.log("==================================================");
  console.log("| LEXEMA               | TOKEN                |");
  console.log("==================================================");

  for (const token of allTokens) {
    const lexema = token.text;
    const tokenName = AnalizadorLexer.symbolicNames[token.type] || `TOKEN_${token.type}`;
    console.log(`| ${lexema.padEnd(20)} | ${tokenName.padEnd(20)} |`);
  }

  console.log("==================================================");

  // Mostrar árbol
  console.log("\nÁrbol de análisis sintáctico:");
  console.log(tree.toStringTree(parser.ruleNames));
  console.log("==================================================");
}

const { interpretar } = require('./interpreter');

console.log("\nSalida del programa:");
console.log("==================================================");
interpretar(tree, parser);
console.log("==================================================");

const { traducir } = require('./translator');

console.log("\nTraducción a JavaScript:");
console.log("==================================================");
console.log(traducir(tree, parser));
console.log("==================================================");
