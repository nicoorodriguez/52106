function traducir(tree, parser) {
  return traducirPrograma(tree, parser);
}


function traducirPrograma(ctx, parser) {
  let output = '';
  for (const instruccion of ctx.instruccion()) {
    output += traducirInstruccion(instruccion, parser) + '\n';
  }
  return output;
}


function traducirInstruccion(ctx, parser) {
  const seleccion = ctx.seleccion();
  return traducirSeleccion(seleccion, parser);
}


function traducirSeleccion(ctx, parser) {
  const valorExpr = evaluarExpresion(ctx.expresion(), parser);
  let resultado = `switch (${JSON.stringify(valorExpr)}) {\n`;


  for (const casoCtx of ctx.caso()) {
    const valorCaso = evaluarConstante(casoCtx.constante(), parser);
    resultado += `  case ${JSON.stringify(valorCaso)}:\n`;
    for (const sentencia of casoCtx.sentencia()) {
      resultado += '    ' + traducirSentencia(sentencia, parser) + '\n';
    }
    resultado += '    break;\n';
  }


  if (ctx.caso_defecto()) {
    resultado += `  default:\n`;
    for (const sentencia of ctx.caso_defecto().sentencia()) {
      resultado += '    ' + traducirSentencia(sentencia, parser) + '\n';
    }
    // No break en default por defecto
  }


  resultado += '}\n';
  return resultado;
}


function traducirSentencia(ctx, parser) {
  if (ctx.salida().length > 0) {
    return ctx.salida().map(traducirSalida).join('\n    ');
  } else if (ctx.terminar()) {
    return 'break;';
  }
}


function traducirSalida(ctx) {
  const texto = ctx.cadena().getText(); // Incluye comillas
  return `console.log(${texto});`;
}


function evaluarExpresion(ctx, parser) {
  return evaluarConstante(ctx.constante(), parser);
}


function evaluarConstante(ctx, parser) {
  if (ctx.cadena()) {
    return ctx.cadena().getText().slice(1, -1);
  } else if (ctx.numero()) {
    return ctx.numero().getText();
  }
}


module.exports = {
  traducir
};
